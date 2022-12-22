import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://restapi.frteam.xyz/husbu?&apikey=Arifzyn19'
	conn.sendButton(m.chat, 'Done', author, json.url, [['Husbu', `${usedPrefix}husbu`]], m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.premium = false
handler.limit = true

export default handler
