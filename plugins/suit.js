let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan Yang Tersedia\n\nGunting, Kertas, Batu\n\n${usedPrefix}suit gunting\n\nKasih Spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu' 
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting' 
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nHolo Bot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 500
            m.reply(`Kamu Menang!\n+500 Money\nKamu: ${text}\nHolo Bot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nHolo Bot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 500
            m.reply(`Kamu Menang!\n+500 Money\nKamu: ${text}\nHolo Bot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nHolo Bot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 500
            m.reply(`Kamu Menang! \n+500 Money\nKamu: ${text}\nHolo Bot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nHolo Bot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.group = false
handler.register = true
handler.private = true
handler.limit = true

export default handler 
