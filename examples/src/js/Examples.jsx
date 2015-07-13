/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React                                 from 'react/addons';
import { BackButton, PlusButton, NavButton } from './../../../src';

const buttonsByType = {
    back: { label: 'BackButton', component: BackButton },
    plus: { label: 'PlusButton', component: PlusButton },
    nav:  { label: 'NavButton',  component: NavButton  }
};

const App = React.createClass({
    displayName: 'App',

    mixins: [React.addons.LinkedStateMixin],

    getInitialState() {
        return {
            type:               'back',
            size:               160,
            thickness:          3,
            outline:            true,
            color:              '#dd6e78',
            transitionDuration: 1200
        };
    },

    render() {
        let { type, size, thickness, outline, color, transitionDuration } = this.state;

        let buttonProps = {
            size:               parseInt(size),
            thickness:          parseInt(thickness),
            outline:            outline,
            color:              color,
            transitionDuration: parseInt(transitionDuration)
        };

        let code = `<${ buttonsByType[type].label }
    size={${ size }}
    thickness={${ thickness }}
    outline={${ outline }}
    color="${ color }"
    transitionDuration={${ transitionDuration }}
/>`;

        return (
            <div>
                <div className="strata header">
                    <div className="strata_content">
                        <h1>React SVG buttons</h1>
                        <div className="header_icons">
                            <BackButton color="#dd6e78" transitionDuration={1000}/>
                            <PlusButton color="#dd6e78" transitionDuration={1000}/>
                            <NavButton  color="#dd6e78" transitionDuration={1000}/>
                        </div>
                    </div>
                </div>
                <div className="strata sub_header">
                    <div className="strata_content cf">
                        <div className="sub_header_install">npm install --save react-svg-buttons</div>
                        <a className="sub_header_github" href="https://github.com/plouc/react-svg-buttons">view project on github</a>
                    </div>
                </div>
                <div className="strata">
                    <div className="strata_content">
                        <div className="section">
                            <div className="settings">
                                <h2 className="section_title">Settings</h2>
                                <div className="form_row cf">
                                    <label htmlFor="type">type</label>
                                    <span className="select-box">
                                        <select id="type" valueLink={this.linkState('type')}>
                                            <option value="back">BackButton</option>
                                            <option value="plus">PlusButton</option>
                                            <option value="nav">NavButton</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="form_row cf">
                                    <label htmlFor="size">size</label>
                                    <input id="size" type="number" valueLink={this.linkState('size')}/>
                                </div>
                                <div className="form_row cf">
                                    <label htmlFor="thickness">thickness</label>
                                    <input id="thickness" type="number" valueLink={this.linkState('thickness')}/>
                                </div>
                                <div className="form_row cf">
                                    <label htmlFor="outline">outline</label>
                                    <span className="switch">
                                        <input id="outline" type="checkbox" checkedLink={this.linkState('outline')}/>
                                        <label htmlFor="outline"/>
                                    </span>
                                </div>
                                <div className="form_row cf">
                                    <label htmlFor="color">color</label>
                                    <input id="color" type="color" valueLink={this.linkState('color')}/>
                                </div>
                                <div className="form_row cf">
                                    <label htmlFor="transitionDuration">transition duration (ms)</label>
                                    <input id="transitionDuration" type="number" valueLink={this.linkState('transitionDuration')}/>
                                </div>
                            </div>
                            <div className="preview">
                                <h2 className="section_title">Preview</h2>
                                <p>Move your cursor over the icon.</p>
                                {React.createElement(buttonsByType[type].component, buttonProps)}
                            </div>
                            <div className="code">
                                <h2 className="section_title">Code</h2>
                                <pre>
                                    <code>{code}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer strata">
                    <div className="strata_content">
                        Copyright &copy; Raphaël Benitte 2015. MIT Licensed.
                    </div>
                </div>
            </div>
        );
    }
});


React.render(<App/>, document.getElementById('examples'));