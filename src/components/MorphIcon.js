/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import { pathCommands } from '../lib/pathHelper'
import clamp from '../lib/clamp'
import omit from '../lib/omit'
import iconTypes from '../icon-types'

const MorphIcon = props => {
    const { size, thickness, color, stiffness, damping, type } = props

    const origin = size / 2
    const radius = origin - thickness
    const circumference = 2 * radius * Math.PI

    const pathCommonStyle = {
        fill: 'none',
        stroke: color,
        strokeWidth: thickness,
    }

    const defaultStyle = iconTypes[type](origin, radius, circumference)

    const style = {}
    Object.keys(defaultStyle).forEach(property => {
        style[property] = spring(defaultStyle[property], { stiffness, damping })
    })

    return (
        <span
            {...omit(props, [
                'size',
                'thickness',
                'color',
                'stiffness',
                'damping',
                'type',
                'baseType',
                'hoverType',
            ])}
        >
            <Motion defaultStyle={defaultStyle} style={style}>
                {({
                    circleDashOffset,
                    circleRotation,
                    circleOpacity,
                    barsRotation,
                    bar0X1,
                    bar0X2,
                    bar0X3,
                    bar0Y1,
                    bar0Y2,
                    bar0Y3,
                    bar0Opacity,
                    bar0Rotation,
                    bar1X1,
                    bar1X2,
                    bar1X3,
                    bar1Y1,
                    bar1Y2,
                    bar1Y3,
                    bar1Opacity,
                    bar1Rotation,
                    bar2X1,
                    bar2X2,
                    bar2X3,
                    bar2Y1,
                    bar2Y2,
                    bar2Y3,
                    bar2Opacity,
                    bar2Rotation,
                    sparksRotation,
                    spark0X1,
                    spark0X2,
                    spark0Y1,
                    spark0Y2,
                    spark0Opacity,
                    spark0Rotation,
                    spark1X1,
                    spark1X2,
                    spark1Y1,
                    spark1Y2,
                    spark1Opacity,
                    spark1Rotation,
                    spark2X1,
                    spark2X2,
                    spark2Y1,
                    spark2Y2,
                    spark2Opacity,
                    spark2Rotation,
                    spark3X1,
                    spark3X2,
                    spark3Y1,
                    spark3Y2,
                    spark3Opacity,
                    spark3Rotation,
                }) => {
                    return (
                        <svg width={size} height={size}>
                            <g
                                transform={`translate(${origin},${origin}) rotate(${-90 +
                                    circleRotation},0,0)`}
                            >
                                <circle
                                    {...pathCommonStyle}
                                    r={radius}
                                    style={{
                                        opacity: circleOpacity,
                                        strokeDasharray: circumference,
                                        strokeDashoffset: clamp(
                                            0,
                                            circumference,
                                            circleDashOffset
                                        ),
                                    }}
                                />
                            </g>
                            <g
                                transform={`rotate(${barsRotation},${origin},${origin})`}
                            >
                                <g
                                    transform={`rotate(${bar0Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: bar0Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: bar0X1,
                                                y: bar0Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: bar0X2,
                                                y: bar0Y2,
                                            },
                                            {
                                                command: 'L',
                                                x: bar0X3,
                                                y: bar0Y3,
                                            },
                                        ])}
                                    />
                                </g>
                                <g
                                    transform={`rotate(${bar1Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: bar1Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: bar1X1,
                                                y: bar1Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: bar1X2,
                                                y: bar1Y2,
                                            },
                                            {
                                                command: 'L',
                                                x: bar1X3,
                                                y: bar1Y3,
                                            },
                                        ])}
                                    />
                                </g>
                                <g
                                    transform={`rotate(${bar2Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: bar2Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: bar2X1,
                                                y: bar2Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: bar2X2,
                                                y: bar2Y2,
                                            },
                                            {
                                                command: 'L',
                                                x: bar2X3,
                                                y: bar2Y3,
                                            },
                                        ])}
                                    />
                                </g>
                            </g>
                            <g
                                transform={`rotate(${sparksRotation},${origin},${origin})`}
                            >
                                <g
                                    transform={`rotate(${spark0Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: spark0Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: spark0X1,
                                                y: spark0Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: spark0X2,
                                                y: spark0Y2,
                                            },
                                        ])}
                                    />
                                </g>
                                <g
                                    transform={`rotate(${spark1Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: spark1Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: spark1X1,
                                                y: spark1Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: spark1X2,
                                                y: spark1Y2,
                                            },
                                        ])}
                                    />
                                </g>
                                <g
                                    transform={`rotate(${spark2Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: spark2Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: spark2X1,
                                                y: spark2Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: spark2X2,
                                                y: spark2Y2,
                                            },
                                        ])}
                                    />
                                </g>
                                <g
                                    transform={`rotate(${spark3Rotation},${origin},${origin})`}
                                >
                                    <path
                                        {...pathCommonStyle}
                                        style={{
                                            opacity: spark3Opacity,
                                        }}
                                        d={pathCommands([
                                            {
                                                command: 'M',
                                                x: spark3X1,
                                                y: spark3Y1,
                                            },
                                            {
                                                command: 'L',
                                                x: spark3X2,
                                                y: spark3Y2,
                                            },
                                        ])}
                                    />
                                </g>
                            </g>
                        </svg>
                    )
                }}
            </Motion>
        </span>
    )
}

MorphIcon.propTypes = {
    size: PropTypes.number.isRequired,
    thickness: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    stiffness: PropTypes.number.isRequired,
    damping: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.keys(iconTypes)),
}

MorphIcon.defaultProps = {
    size: 52,
    thickness: 1,
    color: '#000',
    stiffness: 150,
    damping: 15,
}

export default MorphIcon
