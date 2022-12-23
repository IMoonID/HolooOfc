import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
乂 Anonymous Chat

Ketik #start untuk memulai
Note: Tunggu Partner anonymous cukup lama jadi sabar

Ketik #leave untuk keluar

Ketik #skip untuk skip

Ketik #sendkontak untuk mengirimkan kontak kita ke
Partner anon chat

 ⚠️ Laporkan Jika ada orang yang mengirimkan aneh²
`.trim()
  m.reply(caption)
}
handler.help = ['anonchat']
handler.tags = ['anonymous']
handler.command = /^(anonchat|anonymouschat)$/i
handler.private = true

export default handler
