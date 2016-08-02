/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export default function omit(object, properties) {
    const filteredObject = {}
    Object.keys(object).filter(p => !properties.includes(p)).forEach(p => {
        filteredObject[p] = object[p]
    })

    return filteredObject
}
