import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `乂 Playing Music\n\nContoh Penggunaan ${usedPrefix}${command} Dj Gama Naufal`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

❓ Judul:* ${title}
📐 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Penonton:* ${viewH}

🔗 *Url:* ${url}
📔 *Deskripsi:* ${description}
  `.trim(), wm, thumbnail, url, 'Pergi Ke YouTube', null, null, [
    ['Via Audio', `${usedPrefix}yta ${url} yes`],
    ['Via Video', `${usedPrefix}ytv ${url} yes`],
    ['Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler
