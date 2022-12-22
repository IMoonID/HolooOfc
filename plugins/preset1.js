import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 1 」*
https://alight.link/d1Q2Qm87dD2dabAk9

Xml:
https://drive.google.com/file/d/1xtGdxysSOC8mf71qJvZMsGJCAQy9lueH/view?usp=drivesdk

Source:
https://vt.tiktok.com/ZS826cgD1/
`.trim()
  m.reply(caption)
}
handler.help = ['PresetAm']
handler.tags = ['tools']
handler.command = /^(p1)$/i
handler.limit = true

export default handler
