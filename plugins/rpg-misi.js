let handler = async (m, {conn, command, args, usedPrefix}) => {

const sections = [
   {
	title: `Mission`,
	rows: [
	    {title: "๐ Taxy", rowId: '.grab', description: 'Rpg Taxy' },
	    {title: "โ ๏ธ Membunuh", rowId: '.bunuh', description: 'Rpg Membunuh' },
	{title: "๐ต Ojek", rowId: '.ojek', description: 'Rpg Ojek' },
	{title: "๐คจ Nganu", rowId: '.anu', description: 'Rpg Open anu' },
	{title: "๐ค  Koboy", rowId: '.koboy', description: 'Rpg Koboy' },
	{title: "๐ฎ Polisi", rowId: '.polisi', description: 'Rpg Polisi' },
	]
    }, 
]
const listMessage = {
  text: `Silakan pilih Misi di bawah...`,
  footer: global.wm,
  title: `โโโโใ ${command} ใโโโโ`,
  buttonText: `Klik disini ๏ธ`,
  sections
}

await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['misi', 'misirpg']
handler.tags = ['info']
handler.command = /^(misi(rpg)?|misirpg)$/i
handler.private = false

export default handler
