const rewards = {
  exp: 10,
  money: 5000,
  potion: 2,
}
const cooldown = 79200000
let handler = async (m, {usedPrefix}) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`Kamu sudah claim hari ini*, Tunggu coldown sesai

🕰️ ${((user.lastclaim + cooldown) - new Date()).toTimeString()}`.trim(), 'https://telegra.ph/file/f57b63009fbe9fa333747.jpg', [
[`Inventory`, `${usedPrefix}inventory`]
], m, {asLocation: false})
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `⮕ ${global.rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
  }
  conn.sendButton(m.chat,
`*––––『 Daily』––––*`,
`🪴 ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :
${text}`.trim(), 'https://telegra.ph/file/ddcd46b6985df7e5fa8fb.jpg', [
[`ɪɴᴠᴇɴᴛᴏʀʏ 🎒`, `${usedPrefix}inventory`],
[`ᴍᴏɴᴛʜʟʏ 🌿`, `${usedPrefix}monthly`]
], m, {asLocation: false})
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler
