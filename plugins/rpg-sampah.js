const rewards = {
    exp: 500,
    money: 3000,
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `Kamu sudah nyampah hair ini, tunggu *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*––––––『 NYAMPAH 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Back to Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['nyampah']
handler.tags = ['rpg']
handler.command = /^(nyampah)$/i

handler.cooldown = cooldown

export default handler