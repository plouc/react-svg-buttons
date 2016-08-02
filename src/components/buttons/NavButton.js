/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component, PropTypes } from 'react'
import MorphIcon                       from '../MorphIcon'
import omit                            from '../../lib/omit'


class NavButton extends Component {
    constructor(props) {
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = { hover: false }
    }

    handleMouseEnter() {
        this.setState({ hover: true })
    }

    handleMouseLeave() {
        this.setState({ hover: false })
    }

    render() {
        const { direction, opened } = this.props
        const { hover }             = this.state

        let type
        if (hover) {
            switch (direction) {
                case 'up':
                    type = opened ? 'arrowDown' : 'arrowUp'
                    break

                case 'right':
                    type = opened ? 'arrowLeft' : 'arrowRight'
                    break

                case 'down':
                    type = opened ? 'arrowUp' : 'arrowDown'
                    break

                case 'left':
                    type = opened ? 'arrowRight' : 'arrowLeft'
                    break
            }
        } else {
            type = opened ? 'cross' : 'bars'
        }

        return (
            <MorphIcon
                {...omit(this.props, ['direction', 'opened'])}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                type={type}
            />
        )
    }
}

NavButton.propTypes = {
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    opened:    PropTypes.bool.isRequired,
}

NavButton.defaultProps = {
    direction: 'down',
    opened:    false,
}


export default NavButton
