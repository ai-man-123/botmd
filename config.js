global.owner = ['60102810046'] // Put your number here

global.mods = [] // Want some help?

global.prems = [] // Premium user has unlimited limit

global.APIs = { // API Prefix

  // name: 'https://website'

  amel: 'https://melcanz.com',

    bx: 'https://bx-hunter.herokuapp.com',

  dhnjing: 'https://dhnjing.xyz',

  hardianto: 'https://hardianto-chan.herokuapp.com',

  jonaz: 'https://jonaz-api-v2.herokuapp.com',

  neoxr: 'https://neoxr-api.herokuapp.com',

  nrtm: 'https://nurutomo.herokuapp.com',

  xteam: 'https://api.xteam.xyz',

  nzcha: 'http://nzcha-apii.herokuapp.com',

  bg: 'http://bochil.ddns.net',

  fdci: 'https://api.fdci.se',

  dzx: 'https://api.dhamzxploit.my.id',

  bsbt: 'https://bsbt-api-rest.herokuapp.com',

  zahir: 'https://zahirr-web.herokuapp.com',

  zeks: 'https://api.zeks.xyz',

  zekais: 'http://zekais-api.herokuapp.com',

  hardianto: 'https://hardianto-chan.herokuapp.com',

  pencarikode: 'https://pencarikode.xyz', 

  erdwepe: 'https://erdwpe-api.herokuapp.com',

  lolhuman: 'https://api.lolhuman.xyz',

  LeysCoder: 'https://leyscoders-api.herokuapp.com'

}

global.APIKeys = { // APIKey Here

  // 'https://website': 'apikey'

  'https://melcanz.com': 'dUtJxxvp',

  'https://api.xteam.xyz': '9287183216dd1eb3',

  'https://zahirr-web.herokuapp.com': 'zahirgans',

  'https://bsbt-api-rest.herokuapp.com': 'benniismael',

  'https://api.zeks.xyz': 'apivinz',

  'https://hardianto-chan.herokuapp.com': 'hardianto',

  'https://pencarikode.xyz': 'pais', 

  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',

  'https://zekais-api.herokuapp.com': 'f4nczIeU',

  'https://api.lolhuman.xyz': 'ba45c79d85fbd1c42101c6df',

}

// Sticker WM

global.packname = 'AZBot'

global.author = 'by Aiman'

global.wm = 'AZbotx2'

global.media = 'https://telegra.ph/file/4475cfb321abebedc758d.jpg'

global.instagram = 'https://instagram.com/aiman1_23'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

global.wait = '_*processing...*_'

global.eror = '_*Server Error*_'

global.benar = ' ✅\n'

global.salah = ' ❌\n'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {

  emoticon(string) {

    string = string.toLowerCase()

    let emot = {

      exp: '✉️',

      money: '💵',

      potion: '🥤',

      diamond: '💎',

      common: '📦',

      uncommon: '🎁',

      mythic: '🗳️',

      legendary: '🗃️',

      pet: '🎁',

      sampah: '🗑',

      armor: '🥼',

      sword: '⚔️',

      kayu: '🪵',

      batu: '🪨',

      string: '🕸️',

      kuda: '🐎',

      kucing: '🐈' ,

      anjing: '🐕',

      petFood: '🍖',

      gold: '👑',

      emerald: '💚'

    }

    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))

    if (!results.length) return ''

    else return emot[results[0][0]]

  }

}

let fs = require('fs')

let chalk = require('chalk')

let file = require.resolve(__filename)

fs.watchFile(file, () => {

  fs.unwatchFile(file)

  console.log(chalk.redBright("Update 'config.js'"))

  delete require.cache[file]

  require(file)

})
