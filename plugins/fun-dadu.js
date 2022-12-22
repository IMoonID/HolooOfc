/* CREDITS TO https://github.com/FG98F */
const dir = [
  'https://saipulanuar.ga/api/maker/dadu',
];
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = ['dadu'] 
export default handler
