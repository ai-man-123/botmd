let fetch = require('node-fetch')

let handler = async (m, { text }) => {

  if (!text) throw 'Judul lagu'

  let res = await fetch(`http://hadi-api.herokuapp.com/api/chord?q=${text}`)

  let json = await res.json()

  if (json.status) m.reply(json.result)

  else throw 'Tidak dapat ditemukan'

}

handler.help = ['kuncigitar'].map(v => v + ' <judul lagu>')

handler.tags = ['internet']

handler.command = /^chord$/i

module.exports = handler
