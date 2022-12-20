let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendHydrated(m.chat,
`*––––––––【 Afk 】––––––––*`,
`   • Afk Mode Aktif •
    •  Afk アクティブ モード •

[🇮🇩 IDN]
${conn.getName(m.sender)} sekarang AFK

[🇯🇵 JPN]
${conn.getName(m.sender)} 今AFK

Reason: ${text ? '' + text : 'undefined'}`, null, null, null, null, null, [
[`Oke Kak`, `Ok`]
], m)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler