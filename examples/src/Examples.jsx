/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React                      from 'react';
import { BackButton, PlusButton } from './../../src';


const App = React.createClass({
    render() {
        return (
            <div>
                <h2>Default configuration</h2>
                <div>
                    <BackButton/>
                    <PlusButton/>
                </div>

                <h2>Size varations</h2>
                <div>
                    <BackButton size={64}/>
                    <BackButton size={36}/>
                    <BackButton size={64} thickness={4}/>
                    <BackButton size={36} thickness={1}/>
                </div>
            </div>
        );
    }
});


React.render(<App/>, document.getElementById('examples'));