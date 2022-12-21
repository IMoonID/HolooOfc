import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Juli 11 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `⻝ "ʜᴏʟᴏ ʙᴏᴛ"\n\n\nʀ  ᴜ  ʟ  ᴇ  s   ༆\n\n◉ ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ\n◉ ᴊᴀɴɢᴀɴ ᴋɪʀɪᴍ ʙᴜɢ/ᴠɪʀᴛᴇx/ᴠɪʀᴋᴏɴ ᴅʟʟ\n\n◉ ウイルスをボットに送信しない\n◉ ボットにスパムを送信しないでください\n\n\n`,wm + '\n\n' + botdate, thumbdoc, [['List Menu','.holoo'],['Semua Menu','.? All']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: '(⁠≧⁠▽⁠≦⁠)',
                        title: `スパムしないでください`,
                        body: `やあ`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/4367073da0bba8a8d901b.jpg`)).buffer(),
                        sourceUrl: 'https://youtube.com/@MoonaHoshinova'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co|test|holooo)$/i
handler.register = false

export default handler
