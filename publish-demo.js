/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const ghpages = require('gh-pages')
const path    = require('path')


ghpages.publish(path.join(__dirname, 'demo'), err => {
    if (err) {
        console.error(err)
    } else {
        console.log('done')
    }
})