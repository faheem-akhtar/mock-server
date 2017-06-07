const config = require('./index')
const options = require('./options')

module.exports = {
    sourceFiles: options.path + '/**.md',
    serverPort: config.port,
    staticPaths: config.staticPaths,
    stealthmode: true,
    disableCORS: false,
    // sslKeyFile: '/path/to/ssl/key.key',
    // sslCrtFile: '/path/to/ssl/cert.crt',
    delay: options.delay,
    method: ['DELETE','OPTIONS'],
    watch: false,
    public: true,
    autoOptions: true
}
