const rewards = {
    exp: 100,
    money: 4000,
    potion: 10,
    mythic: 3,
    legendary: 1
}

const cooldown = 2592000000
let handler = async (m, {usedPrefix}) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`Kamu sudah claim monthly, mohon tunggu cooldown selesai

🕰️️ ${((user.lastmonthly + cooldown) - new Date()).toTimeString()}`.trim(), 'https://telegra.ph/file/f57b63009fbe9fa333747.jpg', [[`Back to menu`, `${usedPrefix}valor`]], m, {asLocation: false})
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `⮕ ${rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
    }
    conn.sendButton(m.chat,
`*––––––『 Monthly 』––––––*`,
`🪴 Monthly Reward :
${text}`.trim(), 'https://telegra.ph/file/961fe62d65209c227f0d9.jpg', [
[`My Inventory`, `${usedPrefix}inventory`],
[`Back To Menu`, `${usedPrefix}menu`]
], m, {asLocation: false})
    user.lastmonthly = new Date * 1
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i

handler.cooldown = cooldown

export default handler

