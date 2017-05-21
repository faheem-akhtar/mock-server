var express = require('express')

const config = require('./config')
var options = require('./config/options')
const drakovConfig = require('./config/drakov')

var runServer = () => {
    var drakovMiddleware = require('drakov').middleware
    var app = express()
    drakovMiddleware.init(app, drakovConfig, function(err, middlewareFunction) {
        if (err) {
            throw err;
        }
        app.use(middlewareFunction)
        var server = app.listen(options.port, () => {
            console.log(`Listening at port ${options.port}`)
        })
    })
}

runServer()
