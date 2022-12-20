let handler = async (m, { conn }) => {
let info = `
Pilih di bawah yaaa
`
const sections = [
   {
	title: `✃ CHEAT MENU`,
	rows: [
	    {title: "Cheat All", rowId: '.curang', description: 'Unlimited Money' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Hacking 🫐",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.owner = true

export default handler
