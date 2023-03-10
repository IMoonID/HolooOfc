import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `Hai, ${ucapan()}

${user.banned ? '[๐ฎ๐ฉ IDN]\nMaaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi\n\n[๐ฏ๐ต JPN] ็ณใ่จณใใใพใใใใใใชใใฏ็ฆๆญขใใใฆใใใใใฎใใใใไฝฟ็จใงใใชใใชใใพใใ' : `[๐ฎ๐ฉ IDN]\nHai saya adalah holo bot, bot whatsapp yang mungkin bisa membantu kamu\n\n\n[๐ฏ๐ต JPN]\nใใใซใกใฏใ็งใฏใใญใโโใใใงใใใใชใใๅฉใใใใจใใงใใๅฏ่ฝๆงใฎใใwhatsappใใใใงใ`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'Jangan spam ya\n\nในใใ ใใชใใงใใ ใใ', [user.banned ? 'Menu' : 'Menu', user.banned ? '.menu' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari ๐"
    if (time >= 4) {
        res = "Selamat pagi ๐"
    }
    if (time > 10) {
        res = "Selamat siang โ๏ธ"
    }
    if (time >= 15) {
        res = "Selamat sore ๐"
    }
    if (time >= 18) {
        res = "Selamat malam ๐"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)