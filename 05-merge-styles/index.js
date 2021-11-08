const fs = require('fs')
const path = require('path')
fs.readdir(__dirname + '/project-dist', (err, data) => {
  data.forEach((el) => {
    let checkForExtension = path.parse(__dirname + '/project-dist/' + el).ext
    if (checkForExtension !== '.html') {
      fs.unlink(__dirname + '/project-dist/' + el, () => {})
    }
  })
})

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
    }
  })
})
