/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export function pathCommand(instruction) {
    return `${ instruction.command } ${ instruction.x } ${ instruction.y }`;
}


export function pathCommands(instructions) {
    return instructions.map(pathCommand).join(' ');
}