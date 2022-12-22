import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 3 」*
Xml:
https://drive.google.com/file/d/1QN-mBmdgFzALnMIymtiGABpCSz9zo3X3/view?usp=drivesdk

5 MB:
https://alight.link/FcN3ME55YowSDtZFA

Source link:
https://vt.tiktok.com/ZS826TPN1/
`.trim()
  m.reply(caption)
}
handler.help = ['PresetAm']
handler.tags = ['tools']
handler.command = /^(p3)$/i
handler.limit = true

export default handler
