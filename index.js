var nodemon = require('nodemon')
var path = require('path')

const options = require('./config/options')

function mock() {
  var nodemonConfig = {
    script: path.resolve(__dirname, 'app.js'),
    args: process.argv.slice(2),
    restartable: "rs",
    ignoreRoot: [".git"],
    ignore: [
      ".git",
      "node_modules/**/node_modules"
    ],
    verbose: true,
    events: {
      "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
    },
    watch: [
      options.path
    ],
    ext: "md"
  }

  if(options.watch) {
    nodemon(nodemonConfig)
      .on('start', () => {
        console.log('nodemon started')
        console.log(`Waching files (${nodemonConfig.ext}) at ${nodemonConfig.watch}`)
      })
      .on('quit', () => {
        console.log('App has quit')
        process.exit()
      })
      .on('restart', files => {
        console.log('App restarted due to: ', files || 'rs')
      })

    process.once('SIGTERM', () => {
      process.exit(0)
    })
  } else {
    require('./app')
  }
}

module.exports = mock
