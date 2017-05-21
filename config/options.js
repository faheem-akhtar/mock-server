var argv = require('argv')
var path = require('path')

const defaultOptions = {
    watch: true,
    path: path.resolve(__dirname, '../md'),
    delay: 500,
    port: 3000
}
const argvOptions = [
  {
    name: 'watch',
    short: 'w',
    type: 'boolean',
    description: 'Enable/Disable watch mode'
  },
  {
    name: 'path',
    short: 'p',
    type: 'path',
    description: 'Path where to look for Markdown (.md) files'
  },
  {
    name: 'delay',
    short: 'd',
    type: 'number',
    description: 'The network delay in ms'
  },
  {
    name: 'port',
    short: 'port',
    type: 'string',
    description: 'The port where you want the app to listen'
  }
]

const options = Object.assign(defaultOptions, argv.option(argvOptions).run().options)

module.exports = options
