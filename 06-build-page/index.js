const fs = require('fs')
const path = require('path')
fs.readdir(__dirname + '/project-dist/assets', (err, data) => {
  if (!(data === undefined)) {
    data.forEach((el) => {
      fs.readdir(__dirname + '/project-dist/assets/' + el, (err, data) => {
        data.forEach((element) => {
          fs.unlink(
            __dirname + '/project-dist/assets/' + el + '/' + element,
            () => {}
          )
        })
      })
      fs.rmdir(__dirname + '/project-dist/assets/' + el, (err) => {})
    })
    data.forEach((el) => {
      fs.unlink(__dirname + '/project-dist/assets/' + el, () => {})
    })
  }
  fs.rmdir(__dirname + '/project-dist/assets', (err) => {
    fs.mkdir(__dirname + '/project-dist/assets', (err) => {
      fs.mkdir(__dirname + '/project-dist/assets/fonts', (err) => {
        fs.readdir(__dirname + '/assets/fonts', (err, data) => {
          data.forEach((el) => {
            fs.copyFile(
              __dirname + '/assets/fonts/' + el,
              __dirname + '/project-dist//assets/fonts/' + el,
              (err) => {}
            )
          })
        })
      })
      fs.mkdir(__dirname + '/project-dist/assets/img', (err) => {
        fs.readdir(__dirname + '/assets/img', (err, data) => {
          data.forEach((el) => {
            fs.copyFile(
              __dirname + '/assets/img/' + el,
              __dirname + '/project-dist//assets/img/' + el,
              (err) => {}
            )
          })
        })
      })
      fs.mkdir(__dirname + '/project-dist/assets/svg', (err) => {
        fs.readdir(__dirname + '/assets/svg', (err, data) => {
          data.forEach((el) => {
            fs.copyFile(
              __dirname + '/assets/svg/' + el,
              __dirname + '/project-dist//assets/svg/' + el,
              (err) => {}
            )
          })
        })
      })
    })
  })
})

fs.readdir(__dirname + '/project-dist', (err, data) => {
  if (!(data === undefined)) {
    data.forEach((el) => {
      fs.unlink(__dirname + '/project-dist/' + el, () => {})
    })
  }
})
fs.rmdir(__dirname + '/project-dist', (err) => {})

fs.mkdir(__dirname + '/project-dist', (err) => {
  fs.writeFile(__dirname + '/project-dist/index.html', '', (err) => {
    fs.copyFile(
      __dirname + '/template.html',
      __dirname + '/project-dist/index.html',
      (err) => {
        fs.readFile(
          __dirname + '/project-dist/index.html',
          'utf-8',
          (err, element) => {
            const headerWay = path.join(__dirname + '/components/header.html')
            const articlesWay = path.join(
              __dirname + '/components/articles.html'
            )
            const footerWay = path.join(__dirname + '/components/footer.html')
            const aboutWay = path.join(__dirname + '/components/about.html')
            fs.readFile(headerWay, 'utf-8', (err, data) => {
              let index = element
              let header = data
              index = index.split('{{header}}').join(header)
              fs.readFile(articlesWay, 'utf-8', (err, data) => {
                let articles = data
                index = index.split('{{articles}}').join(articles)
                fs.readFile(footerWay, 'utf-8', (err, data) => {
                  let footer = data
                  index = index.split('{{footer}}').join(footer)
                  fs.readFile(aboutWay, 'utf-8', (err, data) => {
                    let about = data
                    index = index.split('{{about}}').join(about)
                    fs.writeFile(
                      __dirname + '/project-dist/index.html',
                      index,
                      () => {}
                    )
                  })
                })
              })
            })
          }
        )
      }
    )
  })
})

fs.readdir(__dirname + '/styles', (err, data) => {
  data.forEach((el) => {
    let checkForExtension = path.parse(__dirname + '/styles/' + el).ext
    if (checkForExtension === '.css') {
      fs.readFile(__dirname + '/styles/' + el, 'utf-8', (err, data) => {
        fs.writeFile(__dirname + '/project-dist/style.css', ``, (err) => {})
        fs.appendFile(
          __dirname + '/project-dist/style.css',
          data,
          (err, data) => {}
        )
      })
    }
  })
})
