import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/emilia?apikey=ApiRevita'
	conn.sendButton(m.chat, 'Nih Kak', wm, await(await fetch(url)).buffer(), [['N E X T',`.${command}`]],m)
}
handler.command = /^(emilia)$/i
handler.tags = ['anime']
handler.help = ['emilia']
handler.limit = true

export default handler