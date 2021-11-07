const fs = require('fs')
const path = require('path')
const readline = require('readline')
//проверка index html и удоление лишнего
fs.readdir(__dirname + '/project-dist', (err, data) => {
  data.forEach((el) => {
    let checkForExtension = path.parse(__dirname + '/project-dist/' + el).ext
    if (checkForExtension !== '.html') {
      fs.unlink(__dirname + '/project-dist/' + el, () => {})
    }
  })
})
// // создание bundle.css
// fs.writeFile(__dirname + '/project-dist/bundle.css', '', (err) => {})
// // собирающий массив пока
// let arr = []
//чтение папки с стилями
fs.readdir(__dirname + '/styles', (err, data) => {
  data.forEach((el) => {
    let checkForExtension = path.parse(__dirname + '/styles/' + el).ext
    if (checkForExtension === '.css') {
      fs.readFile(__dirname + '/styles/' + el, 'utf-8', (err, data) => {
        fs.writeFile(__dirname + '/project-dist/bundle.css', ``, (err) => {})
        fs.appendFile(
          __dirname + '/project-dist/bundle.css',
          data,
          (err, data) => {}
        )
      })
      // fs.unlink(__dirname + '/project-dist/' + el, () => {})
      // fs.watchFile()
    }
  })
})
// fs.rmdir(__dirname + '/files-copy', (err) => {})
// fs.mkdir(__dirname + '/files-copy', (err) => {})
