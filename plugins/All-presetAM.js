let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ @${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

๐ฎ *Note:*
โข Owner tidak menerima save contact
โข Owner berhak blockir tanpa alasan
โข Berbicaralah yang sopan & tidak spam
โข Owner Hanya merespon yang berkaitan dengan BOT
โข No Telp`

  let teks = `_Pilih Preset nya dibawah_`
const sections = [
   {
	title: `${htjava} PRESET MENU โโโโโโโโโยทโข`,
	rows: [
	{title: "ร Preset 1", rowId: ".p1"},
    {title: "ร Preset 2", rowId: ".p2"},
	{title: "ร Preset 3", rowId: ".p3"},
	{title: "ร Preset 4", rowId: ".p4"},
	{title: "ร Preset 5", rowId: ".p5"},
	{title: "ร Preset 6", rowId: ".p6"},
	{title: "ร Preset 7", rowId: ".p7"},
	{title: "ร Preset 8", rowId: ".p8"},
	{title: "ร Preset 9", rowId: ".p9"},
	{title: "ร Preset 10", rowId: ".p10"},
]
    },{
	title: `Lainnya`,
	rows: [
	{title: "Back To Menu", rowId: ".menu"},
        {title: "Owner Bot", rowId: ".owner"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `Holo Bot Preset Menu`,
  buttonText: "Klik ๐",
  sections
}

  try {
    if (/(presetmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['presetmenu']
handler.tags = ['fun']
handler.command = /^(presetmenu|presetam)/i


export default handler
