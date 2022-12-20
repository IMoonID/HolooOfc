import { join } from 'path'
import { promises } from 'fs'

let handler = async (m, { args, usedPrefix, __dirname }) => {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Darah Kamu Telah Full
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT POTION 』–*`, 
`Kamu butih ${count - user.potion} Untuk heal
Kamu hanya punya ${user.potion} Potion di inventory
–––––––––––––––––––––––––
Tips :
'Beli Potion' | 'Inventory'
`.trim(), './media/lowpotion.jpg', [
[`Beli Potion`, `${usedPrefix}buy potion ${count - user.potion}`],
[`Inventory`, `#inventory`]
], m, {asLocation: true})
    user.potion -= count * 1
    user.health += heal * count
    conn.sendButton(m.chat, `*––––『 Darahmu Penuh 』––––*`, `Sukses menggunakan ${count} Potion 🍵`, './media/fullhealth.jpg',
[
[`Berpetualang`, `${usedPrefix}adventure`]
], m, { asLocation: true })
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|healing|use)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}