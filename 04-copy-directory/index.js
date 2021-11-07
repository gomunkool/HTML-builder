const fs = require('fs')
const path = require('path')
fs.readdir(__dirname + '/files-copy', (err, data) => {
  if (!(data === undefined)) {
    data.forEach((el) => {
      fs.unlink(__dirname + '/files-copy/' + el, () => {})
    })
  }
})
fs.rmdir(__dirname + '/files-copy', (err) => {})
fs.mkdir(__dirname + '/files-copy', (err) => {})

fs.readdir(__dirname + '/files', (err, data) => {
  data.forEach((el) => {
    fs.copyFile(
      __dirname + '/files/' + el,
      __dirname + '/files-copy/' + el,
      (err) => {}
    )
  })
})
