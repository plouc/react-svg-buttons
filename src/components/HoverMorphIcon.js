/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MorphIcon from './MorphIcon'

class HoverMorphIcon extends Component {
    constructor(props) {
        super(props)

        this.state = { type: props.baseType }
    }

    render() {
        const { baseType, hoverType } = this.props
        const { type } = this.state

        return (
            <MorphIcon
                {...this.props}
                type={type}
                onMouseEnter={() => {
                    this.setState({ type: hoverType })
                }}
                onMouseLeave={() => {
                    this.setState({ type: baseType })
                }}
            />
        )
    }
}

HoverMorphIcon.propTypes = {
    baseType: PropTypes.string.isRequired,
    hoverType: PropTypes.string.isRequired,
}

export default HoverMorphIcon
