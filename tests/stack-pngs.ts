import sharp from "sharp"

export const PANEL_WIDTH = 1200
export const PANEL_HEIGHT = 776
const HEADER_HEIGHT = 52
const GAP = 20
const BACKGROUND = "#f8fafc"

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

const headerSvg = (label: string) =>
  Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${PANEL_WIDTH}" height="${HEADER_HEIGHT}">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="24" y="34" fill="#f8fafc" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600">${escapeXml(label)}</text>
    </svg>
  `)

const normalizePanel = async (input: Buffer | Uint8Array, label: string) => {
  const body = await sharp(input)
    .flatten({ background: "#ffffff" })
    .resize(PANEL_WIDTH, PANEL_HEIGHT, {
      fit: "contain",
      background: "#ffffff",
    })
    .png()
    .toBuffer()

  return sharp({
    create: {
      width: PANEL_WIDTH,
      height: HEADER_HEIGHT + PANEL_HEIGHT,
      channels: 4,
      background: BACKGROUND,
    },
  })
    .composite([
      { input: headerSvg(label), left: 0, top: 0 },
      { input: body, left: 0, top: HEADER_HEIGHT },
    ])
    .png()
    .toBuffer()
}
export async function stackPngsHorizontally(
  left: Buffer | Uint8Array,
  right: Buffer | Uint8Array,
  labels: { left: string; right: string },
) {
  const [leftPanel, rightPanel] = await Promise.all([
    normalizePanel(left, labels.left),
    normalizePanel(right, labels.right),
  ])

  return sharp({
    create: {
      width: PANEL_WIDTH * 2 + GAP,
      height: HEADER_HEIGHT + PANEL_HEIGHT,
      channels: 4,
      background: BACKGROUND,
    },
  })
    .composite([
      { input: leftPanel, left: 0, top: 0 },
      { input: rightPanel, left: PANEL_WIDTH + GAP, top: 0 },
    ])
    .png()
    .toBuffer()
}
