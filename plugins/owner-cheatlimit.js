let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].money = 10000000000000
        global.db.data.users[m.sender].limit = 100000000000
        global.db.data.users[m.sender].level = 10000
        global.db.data.users[m.sender].exp = 1000000000
        global.db.data.users[m.sender].diamond = 1000000000
        global.db.data.users[m.sender].gold = 1000000000
        global.db.data.users[m.sender].legendary = 1000000000
        global.db.data.users[m.sender].potion = 1000000000000
        global.db.data.users[m.sender].joinlimit = 1000000000
}
handler.command = /^(curang|cit)$/i
handler.mods = true

export default handler
