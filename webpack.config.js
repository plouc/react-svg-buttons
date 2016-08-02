/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const webpack            = require('webpack')
const path               = require('path')
const autoprefixer       = require('autoprefixer')
const postcssImport      = require('postcss-import')
const postcssVars        = require('postcss-custom-properties')
const postcssCustomMedia = require('postcss-custom-media')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const CleanPlugin        = require('clean-webpack-plugin')


const SRC_DIR            = path.resolve(__dirname, 'src')
const DEMO_DIR           = path.resolve(__dirname, 'demo')
const BUILD_DIR          = path.resolve(__dirname, 'demo-build')


const config = {
    output: {
        path:     BUILD_DIR,
        filename: '[name]-[hash:8].js',
    },
    module: {
        loaders: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                include: [SRC_DIR, DEMO_DIR],
            },
            {
                test:    /\.css$/,
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(DEMO_DIR, 'index.html'),
            title:    'react-svg-buttons',
        }),
        new CleanPlugin(BUILD_DIR),
    ],
    postcss: webpack => [
        autoprefixer,
        postcssImport({
            addDependencyTo: webpack
        }),
        postcssVars(),
        postcssCustomMedia(),
    ],
}

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'cheap-module-source-map'
    config.entry = path.join(DEMO_DIR, 'app')
    config.module.loaders[0].loaders = ['babel']
    config.module.loaders[1].loader  = ExtractTextPlugin.extract('style', 'css!postcss')
    config.plugins.push(new ExtractTextPlugin('[name]-[id]-[contenthash:8].css', { allChunks: true }))
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production'),
        },
    }))
} else {
    config.devtool = 'eval'
    config.entry = [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        path.join(DEMO_DIR, 'app'),
    ]
    config.module.loaders[0].loaders = ['react-hot', 'babel?cacheDirectory']
    config.module.loaders[1].loaders = ['style', 'css', 'postcss']
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
