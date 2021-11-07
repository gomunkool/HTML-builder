const fs = require('fs')
const path = require('path')
const readline = require('readline')

fs.readdir(__dirname + '/secret-folder', (err, data) => {
  data.forEach((el) => {
    let pathFile = __dirname + '/secret-folder/' + el
    let pathParse = path.parse(pathFile)
    fs.stat(pathFile, (err, dataStats) => {
      if (dataStats.size > 0) {
        let extension = pathParse.ext.split('.').join('')
        console.log(`${pathParse.name} - ${extension} - ${dataStats.size}b`)
      }
    })
  })
})
