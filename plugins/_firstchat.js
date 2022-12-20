import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `Hai, ${ucapan()}

${user.banned ? '[🇮🇩 IDN]\nMaaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi\n\n[🇯🇵 JPN] 申し訳ありませんが、あなたは禁止されており、このボットを使用できなくなりました' : `[🇮🇩 IDN]\nHai saya adalah holo bot, bot whatsapp yang mungkin bisa membantu kamu\n\n\n[🇯🇵 JPN]\nこんにちは、私はホロボ​​ットです。あなたを助けることができる可能性のあるwhatsappボットです`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'Jangan spam ya\n\nスパムしないでください', [user.banned ? 'Menu' : 'Menu', user.banned ? '.menu' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)