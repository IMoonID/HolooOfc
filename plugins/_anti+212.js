let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Byeee')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Byeee')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   } 
    
    if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Byeee')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   } 
    
    if (m.sender.startsWith('93' || '93')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Byeee')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   if (m.sender.startsWith('92' || '96')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Byeee')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   {
   
   if (m.sender.startsWith('94' || '91')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Byeee')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   } 
    }

export default handler
