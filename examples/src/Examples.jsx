/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React                                 from 'react';
import { BackButton, PlusButton, NavButton } from './../../src';


const App = React.createClass({
    render() {
        return (
            <div className="section">
                <div className="unit">
                    <pre>
                        <code>{`<BackButton/>`}</code>
                    </pre>
                    <div className="preview">
                        <BackButton/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<PlusButton/>`}</code>
                    </pre>
                    <div className="preview">
                        <PlusButton/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<NavButton/>`}</code>
                    </pre>
                    <div className="preview">
                        <NavButton/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<BackButton size={36} thickness={1}/>`}</code>
                    </pre>
                    <div className="preview">
                        <BackButton size={36} thickness={1}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<PlusButton size={64} thickness={4}/>`}</code>
                    </pre>
                    <div className="preview">
                        <PlusButton size={64} thickness={4}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<NavButton thickness={3}/>`}</code>
                    </pre>
                    <div className="preview">
                        <NavButton thickness={3}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<BackButton outline={false}/>`}</code>
                    </pre>
                    <div className="preview">
                        <BackButton outline={false}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<PlusButton outline={false}/>`}</code>
                    </pre>
                    <div className="preview">
                        <PlusButton outline={false}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<NavButton outline={false}/>`}</code>
                    </pre>
                    <div className="preview">
                        <NavButton outline={false}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<BackButton transitionDuration={4000}/>`}</code>
                    </pre>
                    <div className="preview">
                        <BackButton transitionDuration={4000}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<PlusButton transitionDuration={4000}/>`}</code>
                    </pre>
                    <div className="preview">
                        <PlusButton transitionDuration={4000}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<NavButton transitionDuration={4000}/>`}</code>
                    </pre>
                    <div className="preview">
                        <NavButton transitionDuration={4000}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<BackButton transitionDuration={400}/>`}</code>
                    </pre>
                    <div className="preview">
                        <BackButton transitionDuration={400}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<PlusButton transitionDuration={400}/>`}</code>
                    </pre>
                    <div className="preview">
                        <PlusButton transitionDuration={400}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<NavButton transitionDuration={400}/>`}</code>
                    </pre>
                    <div className="preview">
                        <NavButton transitionDuration={400}/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<BackButton color="#C84A31"/>`}</code>
                    </pre>
                    <div className="preview">
                        <BackButton color="#C84A31"/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<PlusButton color="#4CBA86"/>`}</code>
                    </pre>
                    <div className="preview">
                        <PlusButton color="#4CBA86"/>
                    </div>
                </div>
                <div className="unit">
                    <pre>
                        <code>{`<NavButton color="#6EB4E2"/>`}</code>
                    </pre>
                    <div className="preview">
                        <NavButton color="#6EB4E2"/>
                    </div>
                </div>
            </div>
        );
    }
});


React.render(<App/>, document.getElementById('examples'));