/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const webpack          = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config           = require('./webpack.config')


new WebpackDevServer(webpack(config), {
    publicPath:         config.output.publicPath,
    hot:                true,
    historyApiFallback: true,
}).listen(8081, 'localhost', err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Dev server Listening at http://localhost:8081/')
    }
})