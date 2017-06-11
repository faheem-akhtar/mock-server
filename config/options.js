var argv = require('argv')
var path = require('path')

const defaultOptions = require('../blueprint.conf.js');

const argvOptions = [
  {
    name: 'config',
    short: 'c',
    type: 'path',
    description: 'Path to find an object configuration file'
  },
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

const args = argv.option(argvOptions).run().options;

let options = Object.assign({}, defaultOptions);

if (args.config) {
  try {
    const config = require(args.config);
    options = Object.assign(options, config);
  } catch (e) {
    console.warn("Could not find local config file. Switching to default");
  }
}

options = Object.assign(options, args)

module.exports = options
