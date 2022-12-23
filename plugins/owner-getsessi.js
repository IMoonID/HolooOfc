import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('prosses')
    let sesi = await fs.readFileSync('./session.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'KingOfBear.data.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i
handler.rowner = true

export default handler
