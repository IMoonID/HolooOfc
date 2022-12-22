import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 2 」*
Xml:
https://drive.google.com/file/d/1GzHNdvYHXIPjcD0KgorYODyLVQwZ-PfC/view?usp=drivesdk

Via alight motion link:
https://alight.link/g9rRtnFtEw5gvvPb9

Source Link:
https://vt.tiktok.com/ZS826pasL/
`.trim()
  m.reply(caption)
}
handler.help = ['PresetAm']
handler.tags = ['tools']
handler.command = /^(p2)$/i
handler.limit = true

export default handler
