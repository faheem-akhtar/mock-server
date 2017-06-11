# API Blueprint Mock server
A Mock Server for API Blueprint. It will implements the [API Blueprint](http://apiblueprint.org/). It is recommended to use in development.

## Why you need api-blueprint?
If you are looking for a local Mock Server that provides endpoint to your application then this is your best choice.

## Features
- **Multiple Unlimited Blueprints:** You can write as many Blueprints as you want. Just create markdown files in API Blueprint language.
- **Its all Yours:** The Blueprints are written in the project you are working on. No plans, No packages, No hosting, No subscription and even it worked work offline as it is running on your local machine.
- **Live Reload:** Whenever you change the Blueprints or add new Blueprints the server auto detect the change and do a live reload. This will give you a seamless dev environment.
- **Cloud Sharing:** You can use cloud file sharing applications like Dropbox or Google Drive to share your Blueprints with your team.

## Usage

### Install
  `npm install --save-dev api-blueprint`

### Configure
The recommended way to use api-blueprint is to add it in `package.json` file:

    "scripts": {
      "mock": "mock"
    }

And then simply run: `npm run mock`

By default it will run, compile and watch for the files in md/ directory. It will be listen to url http://localhost:3000. We place a basic blueprint file as an example with one route. http://localhost:3000/todos will give you a list of todos in JSON format.

### Watching specific directory

    "scripts": {
      "mock": "mock --path=/Users/<username>/Dropbox/blueprints"
    }

Optionally you can share the above Dropbox directory with your team. Each local instance of server will reload if anyone change/add a blueprint file.

### Manual restart
Just type 'rs' and Enter while in watching mode in order to restart the server manually.

## All Options
    > mock -h

    --help, -h
    Displays help information about this script
    'mock.js -h' or 'mock.js --help'

    --config, -c
    Add the path of an optional configuration file which allows you to set all configurable options in a Node.js module

    --watch, -w
    Enable/Disable watch mode

    --path, -p
    Path where to look for Markdown (.md) files

    --delay, -d
    The network delay in ms

    --port, -port
    The port where you want the app to listen

## Useful links

- [API Blueprint documentation](https://apiblueprint.org/documentation/)
- [Issue Reporting](https://github.com/faheem-akhtar/mock-server/issues)

## Maintainers
Faheem Akhtar <faheem@gigtal.com>

Matt Jennings <matt@mattjenningsdigital.com>
