import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 4 」*
Dibawah 5mb
https://alight.link/k6nW5HqXeKaiKPR59

Xml
https://karyawan.co.id/tjyltMp

Source video:
https://vt.tiktok.com/ZS826bC8K/
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p4)$/i
handler.limit = true

export default handler
