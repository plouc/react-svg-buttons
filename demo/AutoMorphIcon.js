/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component, PropTypes } from 'react'


class AutoMorphIcon extends Component {
    constructor(props) {
        super(props)

        this.state = { step: 0 }
    }

    componentWillMount() {
        const { types, interval } = this.props

        setInterval(() => {
            const { step } = this.state

            this.setState({ step: step < (types.length - 1) ? step + 1 : 0 })
        }, interval)
    }

    render() {
        const { children, types } = this.props
        const { step }            = this.state

        return React.cloneElement(children, { type: types[step] })
    }
}

AutoMorphIcon.propTypes = {
    types:    PropTypes.array.isRequired,
    interval: PropTypes.number.isRequired,
}

AutoMorphIcon.defaultProps = {
    interval: 1000,
}


export default AutoMorphIcon
