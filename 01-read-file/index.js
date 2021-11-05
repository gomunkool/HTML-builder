const fs = require('fs')

const stream = new fs.createReadStream(__dirname + '/text.txt', 'utf8')
stream.on('data', (clunk) => {
  console.log(clunk)
})
