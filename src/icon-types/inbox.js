/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export default (origin, radius) => ({
    circleDashOffset: 0,
    circleRotation: 0,
    circleOpacity: 1,

    barsRotation: 90,

    bar0X1: origin - radius * 0.1,
    bar0X2: origin - radius * 0.1,
    bar0X3: origin + radius * 0.3,
    bar0Y1: origin - radius * 0.3,
    bar0Y2: origin - radius * 0.5,
    bar0Y3: origin - radius * 0.5,
    bar0Opacity: 1,
    bar0Rotation: 0,

    bar1X1: origin - radius * 0.6,
    bar1X2: origin - radius * 0.35,
    bar1X3: origin - radius * 0.1,
    bar1Y1: origin,
    bar1Y2: origin,
    bar1Y3: origin,
    bar1Opacity: 1,
    bar1Rotation: 0,

    bar2X1: origin - radius * 0.1,
    bar2X2: origin - radius * 0.1,
    bar2X3: origin + radius * 0.3,
    bar2Y1: origin + radius * 0.3,
    bar2Y2: origin + radius * 0.5,
    bar2Y3: origin + radius * 0.5,
    bar2Opacity: 1,
    bar2Rotation: 0,

    sparksRotation: 0,

    spark0X1: origin + radius * 0.1,
    spark0X2: origin + radius * 0.1,
    spark0Y1: origin - radius * 0.3,
    spark0Y2: origin + radius * 0.3,
    spark0Opacity: 1,
    spark0Rotation: 90,

    spark1X1: origin + radius * 0.2,
    spark1X2: origin,
    spark1Y1: origin - radius * 0.3,
    spark1Y2: origin - radius * 0.1,
    spark1Opacity: 1,
    spark1Rotation: 0,

    spark2X1: origin - radius * 0.3,
    spark2X2: origin - radius * 0.3,
    spark2Y1: origin - radius * 0.5,
    spark2Y2: origin + radius * 0.5,
    spark2Opacity: 1,
    spark2Rotation: -90,

    spark3X1: origin - radius * 0.2,
    spark3X2: origin,
    spark3Y1: origin - radius * 0.3,
    spark3Y2: origin - radius * 0.1,
    spark3Opacity: 1,
    spark3Rotation: 0,
})
