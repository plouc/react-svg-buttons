/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { PropTypes }                       from 'react';
import tweenState, { easingTypes, stackBehavior } from 'react-tween-state';
import { pathCommands }                           from './pathHelper';


function computeValues(completion, props) {
    let { size, thickness } = props;

    let radius        = size / 2 - thickness;
    let circumference = 2 * radius * Math.PI;

    return {
        circleDashOffset:  circumference * completion,
        circleRotation:    -90 + 180 * completion,
        crossRotation:     90 * completion
    };
}


export default React.createClass({
    displayName: 'PlusButton',

    propTypes: {
        size:               PropTypes.number.isRequired,
        thickness:          PropTypes.number.isRequired,
        color:              PropTypes.string.isRequired,
        transitionDuration: PropTypes.number.isRequired
    },

    mixins: [tweenState.Mixin],

    getDefaultProps() {
        return {
            size:               52,
            thickness:          2,
            color:              '#000',
            transitionDuration: 1600
        };
    },

    getInitialState() {
        return {
            completion: 0
        };
    },

    onMouseEnter() {
        let { transitionDuration } = this.props;

        this.tweenState('completion', {
            easing:        easingTypes.easeOutElastic,
            stackBehavior: stackBehavior.ADDITIVE,
            duration:      transitionDuration,
            endValue:      1
        });
    },

    onMouseLeave() {
        let { transitionDuration } = this.props;

        this.tweenState('completion', {
            easing:        easingTypes.easeInQuad,
            stackBehavior: stackBehavior.ADDITIVE,
            duration:      transitionDuration / 8,
            endValue:      0
        });
    },

    render() {
        let { size, thickness, color } = this.props;

        let originX       = size / 2;
        let originY       = size / 2;
        let radius        = size / 2 - thickness;
        let circumference = 2 * radius * Math.PI;

        let completion = this.getTweeningValue('completion');
        let values     = computeValues(completion, this.props);

        let {
            circleDashOffset, circleRotation,
            crossRotation
        } = values;

        let leftPathLine = pathCommands([
            { command: 'M', x: radius * -0.7, y: 0 },
            { command: 'L', x: radius *  0.7, y: 0 }
        ]);

        let rightPathLine = pathCommands([
            { command: 'M', x: 0, y: radius * -0.7 },
            { command: 'L', x: 0, y: radius *  0.7 }
        ]);

        let sparks = [0, 1, 2, 3].map(index => {
            return (
                <g
                    key={`spark_${index}`}
                    transform={`translate(${ originX }, ${ originY }) rotate(${ index * 90 + 45 }, 0, 0)`}
                >
                    <line
                        fill="none" stroke={color} strokeWidth={thickness}
                        x1="0" y1={radius * -0.6 * completion}
                        x2="0" y2={radius * -0.9 * completion}
                    />
                </g>
            );
        });

        return (
            <span className="plus_button">
                <svg
                    width={size} height={size} xmlns="http://www.w3.org/svg/2000"
                    onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                >
                    <g transform={`translate(${ originX }, ${ originY }) rotate(${ circleRotation }, 0, 0)`}>
                        <circle
                            fill="none" stroke={color} strokeWidth={thickness} r={radius}
                            style={{ strokeDasharray: circumference, strokeDashoffset: `${ circleDashOffset }`}}
                        />
                    </g>
                    <g transform={`translate(${ originX }, ${ originY }) rotate(${ crossRotation }, 0, 0)`}>
                        <path fill="none" stroke={color} strokeWidth={thickness} d={leftPathLine} />
                        <path fill="none" stroke={color} strokeWidth={thickness} d={rightPathLine} />
                    </g>
                    {sparks}
                </svg>
            </span>
        );
    }
});