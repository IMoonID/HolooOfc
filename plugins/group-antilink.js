let handler = async (m, { conn }) => {
let info = `
Pilih di bawah yaaa
`
const sections = [
   {
	title: `Antilink Mode`,
	rows: [
	    {title: "Aktifkan Antilink Grub", rowId: '.on antilink', description: '' },
	    {title: "No aktifkan Antilink Grub", rowId: '.off antilink', description: '' },
	    {title: "Aktifkan Antilink Youtube", rowId: '.on antilinkyt', description: '' },
	    {title: "Non aktifkan Antilink Youtube", rowId: '.off antilinkyt', description: '' },
	    {title: "Mode Antilink Lainnya", rowId: '.on', description: 'Ketik #on (mode) untuk menyalakan mode dan ketik #off (mode) untuk mematikan mode' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['antilink']
handler.tags = ['main']
handler.command = /^(antilink)$/i
handler.group = true
handler.admin = true

export default handler
