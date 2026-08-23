import { mkdir } from "node:fs/promises"
import { join } from "node:path"

const sourceUrl = "https://www.ti.com/lit/df/tidm615/tidm615.pdf"
const workDir = join(process.cwd(), "work")
const pdfPath = join(workDir, "tidm615.pdf")
const outputDir = join(process.cwd(), "tests", "fixtures", "ti-pages")

await mkdir(workDir, { recursive: true })
await mkdir(outputDir, { recursive: true })

const response = await fetch(sourceUrl)
if (!response.ok) {
  throw new Error(`Failed to download ${sourceUrl}: ${response.status}`)
}
await Bun.write(pdfPath, await response.arrayBuffer())

const processHandle = Bun.spawn(
  [
    "pdftoppm",
    "-png",
    "-scale-to-x",
    "1200",
    "-scale-to-y",
    "-1",
    pdfPath,
    join(outputDir, "page"),
  ],
  {
    stdout: "inherit",
    stderr: "inherit",
    env: {
      ...process.env,
      XDG_CACHE_HOME: join(workDir, "xdg-cache"),
    },
  },
)

const exitCode = await processHandle.exited
if (exitCode !== 0) {
  throw new Error(`pdftoppm exited with ${exitCode}`)
}

console.log(`Rendered TI reference pages to ${outputDir}`)
