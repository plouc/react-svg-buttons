/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import _ from 'lodash'
import AutoMorphIcon from './AutoMorphIcon'
import {
    iconTypes,
    MorphIcon,
    CloseButton,
    PlusButton,
    NavButton,
    PlayButton,
} from './lib'

const types = Object.keys(iconTypes)

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: 'thunderbolt',
            size: 120,
            thickness: 2,
            color: '#dd6e78',
            navButtonOpened: false,
        }
    }

    render() {
        const { type, size, thickness, color, navButtonOpened } = this.state

        const morphIconProps = {
            size: Number(size),
            thickness: Number(thickness),
            color: color,
            type,
        }

        const code = `<MorphingIcon
    type="${type}"
    size={${size}}
    thickness={${thickness}}
    color="${color}"
/>`

        return (
            <div>
                <div className="strata header">
                    <div className="strata_content">
                        <h1>React SVG buttons</h1>
                        <div className="header_icons">
                            <AutoMorphIcon types={_.shuffle(types)}>
                                <MorphIcon color="#dd6e78" />
                            </AutoMorphIcon>
                            <AutoMorphIcon types={_.shuffle(types)}>
                                <MorphIcon color="#dd6e78" />
                            </AutoMorphIcon>
                            <AutoMorphIcon types={_.shuffle(types)}>
                                <MorphIcon color="#dd6e78" />
                            </AutoMorphIcon>
                        </div>
                    </div>
                </div>
                <div className="strata sub-header">
                    <div className="strata_content">
                        <div className="sub-header_install">
                            npm install --save react-svg-buttons
                        </div>
                        <a
                            className="sub-header_github"
                            href="https://github.com/plouc/react-svg-buttons"
                        >
                            view project on github
                        </a>
                    </div>
                </div>
                <div className="strata">
                    <div className="strata_content">
                        <h2 className="title">&lt;MorphIcon /&gt;</h2>
                        <p>
                            <code>&lt;MorphIcon /&gt;</code> is the base
                            component used to compose available buttons, it's
                            able to morph from whatever icon type to another
                            one. It provides {types.length} icon types.
                        </p>
                        <div className="examples">
                            {types.map(type =>
                                <div key={type} className="examples_item">
                                    <MorphIcon
                                        color="#dd6e78"
                                        size={40}
                                        type={type}
                                    />
                                    <pre className="examples_item__code">{`<MorphIcon type="${type}" />`}</pre>
                                </div>
                            )}
                        </div>
                        <h2 className="title">Buttons</h2>
                        <p>
                            Pre configured buttons built on top of{' '}
                            <code>&lt;MorphIcon /&gt;</code>.
                        </p>
                        <div className="examples">
                            <div className="examples_item">
                                <CloseButton color="#dd6e78" />
                                <pre>{`<CloseButton />`}</pre>
                            </div>
                            <div className="examples_item">
                                <PlusButton color="#dd6e78" />
                                <pre>{`<PlusButton />`}</pre>
                            </div>
                            <div className="examples_item">
                                <NavButton
                                    color="#dd6e78"
                                    opened={navButtonOpened}
                                    onClick={() => {
                                        this.setState({
                                            navButtonOpened: !navButtonOpened,
                                        })
                                    }}
                                />
                                <pre
                                >{`<NavButton direction="down" opened={${navButtonOpened
                                    ? 'true'
                                    : 'false'}} />`}</pre>
                            </div>
                            <div className="examples_item">
                                <PlayButton
                                    color="#dd6e78"
                                    isPlaying={navButtonOpened}
                                    onClick={() => {
                                        this.setState({
                                            navButtonOpened: !navButtonOpened,
                                        })
                                    }}
                                />
                                <pre>{`<PlayButton isPlaying={${navButtonOpened
                                    ? 'true'
                                    : 'false'}} circle={false} />`}</pre>
                            </div>
                            <div className="examples_item">
                                <PlayButton
                                    color="#dd6e78"
                                    isPlaying={navButtonOpened}
                                    circle={true}
                                    onClick={() => {
                                        this.setState({
                                            navButtonOpened: !navButtonOpened,
                                        })
                                    }}
                                />
                                <pre>{`<PlayButton isPlaying={${navButtonOpened
                                    ? 'true'
                                    : 'false'}} circle={true} />`}</pre>
                            </div>
                        </div>
                        <div className="playground">
                            <div className="playground_settings">
                                <h2 className="title">SETTINGS</h2>
                                <div className="form_row">
                                    <label htmlFor="type">type</label>
                                    <span className="select-box">
                                        <select
                                            id="type"
                                            value={type}
                                            onChange={e =>
                                                this.setState({
                                                    type: e.target.value,
                                                })}
                                        >
                                            {types.map(type =>
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            )}
                                        </select>
                                    </span>
                                </div>
                                <div className="form_row">
                                    <label htmlFor="size">size</label>
                                    <input
                                        id="size"
                                        type="number"
                                        value={size}
                                        onChange={e =>
                                            this.setState({
                                                size: e.target.value,
                                            })}
                                    />
                                </div>
                                <div className="form_row">
                                    <label htmlFor="thickness">thickness</label>
                                    <input
                                        id="thickness"
                                        type="number"
                                        value={thickness}
                                        onChange={e =>
                                            this.setState({
                                                thickness: e.target.value,
                                            })}
                                    />
                                </div>
                                <div className="form_row">
                                    <label htmlFor="color">color</label>
                                    <input
                                        id="color"
                                        type="color"
                                        value={color}
                                        onChange={e =>
                                            this.setState({
                                                color: e.target.value,
                                            })}
                                    />
                                </div>
                            </div>
                            <div className="playground_preview">
                                <h2 className="title">PREVIEW</h2>
                                <div className="preview_grid">
                                    <MorphIcon
                                        {...morphIconProps}
                                        stiffness={150}
                                        damping={5}
                                    />
                                    <MorphIcon
                                        {...morphIconProps}
                                        stiffness={60}
                                        damping={5}
                                    />
                                    <MorphIcon
                                        {...morphIconProps}
                                        stiffness={150}
                                        damping={12}
                                    />
                                    <MorphIcon
                                        {...morphIconProps}
                                        stiffness={60}
                                        damping={12}
                                    />
                                </div>
                            </div>
                            <div className="playground_code">
                                <h2 className="title">CODE</h2>
                                <pre>
                                    <code>
                                        {code}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer strata">
                    <div className="strata_content">
                        Copyright &copy; Raphaël Benitte 2016. MIT Licensed.
                    </div>
                </div>
            </div>
        )
    }
}
