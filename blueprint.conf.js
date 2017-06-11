/**
 * This is the default api-blueprint
 * configuration file. to override these
 * settings create a config.js file in
 * your project and supply its path in
 * the --config flag
 */

module.exports = {
    /**
     * Whether or not to watch the path directory for changes
     * and reload the server
     * @type {Boolean}
     */
    watch: true,

    /**
     * Directory to find API Blueprint files
     * @type {String}
     */
    path: path.resolve(__dirname, '../md'),

    /**
     * Simulate network speed by delaying time between request and response
     * @type {Number}
     */
    delay: 500,

    /**
     * The port the mock server will run from
     * @type {Number}
     */
    port: 3000
}
