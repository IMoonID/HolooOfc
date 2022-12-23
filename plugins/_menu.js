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
 await conn.sendButton(m.chat, `ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʜᴏʟᴏ ʙᴏᴛ\nꜱɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ᴍᴇɴᴜ ʙᴏᴛ ᴅɪ ʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ʙᴏᴛ`,wm + '\n\n' + botdate, thumbdoc, [['𝘓𝘪𝘴𝘵 𝘔𝘦𝘯𝘶','.holoo'],['𝘚𝘦𝘮𝘶𝘢 𝘔𝘦𝘯𝘶','.? All']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: '(⁠≧⁠▽⁠≦⁠)',
                        title: `スパムしないでください`,
                        body: `やあ`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/d475057d25d3a792f0614.jpg`)).buffer(),
                        sourceUrl: 'https://youtube.com/@MoonaHoshinova'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co|test|holooo|halobot|haiholo)$/i
handler.register = false

export default handler
