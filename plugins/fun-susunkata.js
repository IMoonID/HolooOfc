import fetch from 'node-fetch'

let timeout = 180000
let money = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, ' *❓ ᴍᴀꜱɪʜ ᴀᴅᴀ ꜱᴏᴀʟ ʙᴇʟᴜᴍ ᴛᴇʀᴊᴀᴡᴀʙ ᴅɪ ᴄʜᴀᴛ ɪɴɪ!!* ', conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/IMoonID/GameApi/main/susunkata.js')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Soal:
${json.soal}

Tipe : ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*

Ketik ${usedPrefix}suska untuk bantuan

Hadiah: ${money} Money
`.trim()
    conn.susunkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, money,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `WaktuTelah habis!\nJawabannya adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata|sskata/i
handler.group = true
handler.limit = 2

export default handler