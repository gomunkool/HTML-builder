const fs = require('fs')
const path = require('path')
const readline = require('readline')
const filePath = path.join(__dirname, 'text.txt')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('ENTER TEXT')
fs.writeFile(filePath, '', (err) => {})

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    rl.close()
  } else {
    fs.appendFile(filePath, input, (err, data) => {})
  }
})

process.on('exit', (code) => {
  console.log('COOD BY')
})
