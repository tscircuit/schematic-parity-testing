import { expect, type MatcherResult } from "bun:test"
import looksSame from "looks-same"
import * as fs from "node:fs"
import * as path from "node:path"

async function toMatchPngSnapshot(
  this: unknown,
  receivedMaybePromise:
    | Buffer
    | Uint8Array
    | Promise<Buffer | Uint8Array>,
  testPathOriginal: string,
  pngName?: string,
): Promise<MatcherResult> {
  const received = Buffer.from(await receivedMaybePromise)
  const testPath = testPathOriginal.replace(/\.test\.[cm]?[jt]sx?$/, "")
  const snapshotDir = path.join(path.dirname(testPath), "__snapshots__")
  const snapshotName = pngName
    ? `${path.basename(testPath)}-${pngName}.snap.png`
    : `${path.basename(testPath)}.snap.png`
  const snapshotPath = path.join(snapshotDir, snapshotName)

  fs.mkdirSync(snapshotDir, { recursive: true })

  const updateSnapshots =
    process.argv.includes("--update-snapshots") ||
    process.argv.includes("-u") ||
    Boolean(process.env.BUN_UPDATE_SNAPSHOTS)
  const forceUpdate = Boolean(process.env.FORCE_BUN_UPDATE_SNAPSHOTS)

  if (!fs.existsSync(snapshotPath)) {
    console.log(`Writing PNG snapshot to ${snapshotPath}`)
    fs.writeFileSync(snapshotPath, received)
    return {
      pass: true,
      message: () => `PNG snapshot created at ${snapshotPath}`,
    }
  }

  const existing = fs.readFileSync(snapshotPath)
  const result = await looksSame(received, existing, {
    strict: false,
    tolerance: 2,
    antialiasingTolerance: 10,
    createDiffImage: true,
  })
  const differentPixelRatio = result.differentPixels / result.totalPixels
  const maxDifferentPixelRatio = Number(
    process.env.PNG_SNAPSHOT_MAX_DIFFERENT_PIXEL_RATIO ?? "0.01",
  )
  const sufficientlySimilar =
    result.equal || differentPixelRatio <= maxDifferentPixelRatio

  if (updateSnapshots) {
    if (!forceUpdate && sufficientlySimilar) {
      return { pass: true, message: () => "PNG snapshot matches" }
    }
    console.log(`Updating PNG snapshot at ${snapshotPath}`)
    fs.writeFileSync(snapshotPath, received)
    return {
      pass: true,
      message: () => `PNG snapshot updated at ${snapshotPath}`,
    }
  }

  if (sufficientlySimilar) {
    return {
      pass: true,
      message: () =>
        `PNG snapshot matches (${(differentPixelRatio * 100).toFixed(3)}% perceptual pixel difference)`,
    }
  }

  const diffPath = snapshotPath.replace(/\.snap\.png$/, ".diff.png")
  await looksSame.createDiff({
    reference: existing,
    current: received,
    diff: diffPath,
    highlightColor: "#ff00ff",
  })

  return {
    pass: false,
    message: () =>
      `PNG snapshot does not match: ${(differentPixelRatio * 100).toFixed(3)}% of pixels differ (limit ${(maxDifferentPixelRatio * 100).toFixed(3)}%). Diff saved at ${diffPath}`,
  }
}

expect.extend({ toMatchPngSnapshot: toMatchPngSnapshot as any })

declare module "bun:test" {
  interface Matchers<T = unknown> {
    toMatchPngSnapshot(
      testPath: string,
      pngName?: string,
    ): Promise<MatcherResult>
  }
}
