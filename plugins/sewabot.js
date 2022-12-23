let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/6ab4daac226292a112540.jpg'
let text = `
乂 Sewa Bot

Harga:
1 Bulan 15K
(Hanya 1 gc)

Pembayaran:
Dana
Gopay
Rank/item game, misalnya rank Minecraft atau role gtps
Atau bisa juga item growtopia seperti dl/wl yang seharga sewa bot
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6285607831412`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk|sewabot|nyewabot|sewa)$/i

export default handler
