/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export default (origin, radius, circumference) => ({
    circleDashOffset: circumference,
    circleRotation: 180,
    circleOpacity: 0,

    barsRotation: 180,

    bar0X1: origin - radius * 0.65,
    bar0X2: origin,
    bar0X3: origin + radius * 0.65,
    bar0Y1: origin,
    bar0Y2: origin,
    bar0Y3: origin,
    bar0Opacity: 1,
    bar0Rotation: 45,

    bar1X1: origin,
    bar1X2: origin,
    bar1X3: origin,
    bar1Y1: origin,
    bar1Y2: origin,
    bar1Y3: origin,
    bar1Opacity: 0,
    bar1Rotation: 0,

    bar2X1: origin - radius * 0.65,
    bar2X2: origin,
    bar2X3: origin + radius * 0.65,
    bar2Y1: origin,
    bar2Y2: origin,
    bar2Y3: origin,
    bar2Opacity: 1,
    bar2Rotation: -45,

    sparksRotation: 45,

    spark0X1: origin,
    spark0X2: origin,
    spark0Y1: origin - radius,
    spark0Y2: origin - radius * 0.85,
    spark0Opacity: 1,
    spark0Rotation: 0,

    spark1X1: origin + radius * 0.85,
    spark1X2: origin + radius,
    spark1Y1: origin,
    spark1Y2: origin,
    spark1Opacity: 1,
    spark1Rotation: 0,

    spark2X1: origin,
    spark2X2: origin,
    spark2Y1: origin + radius * 0.85,
    spark2Y2: origin + radius,
    spark2Opacity: 1,
    spark2Rotation: 0,

    spark3X1: origin - radius,
    spark3X2: origin - radius * 0.85,
    spark3Y1: origin,
    spark3Y2: origin,
    spark3Opacity: 1,
    spark3Rotation: 0,
})
