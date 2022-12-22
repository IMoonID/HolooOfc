import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://restapi.frteam.xyz/husbu?&apikey=Arifzyn19'
	conn.sendButton(m.chat, 'Nih husbu nya', wm, await(await fetch(url)).buffer(), [['Next Husbu',`.${command}`]],m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.premium = false
handler.limit = true

export default handler
