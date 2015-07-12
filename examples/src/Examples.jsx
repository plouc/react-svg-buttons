import React      from 'react';
import BackButton from './../../src/BackButton.jsx';
import PlusButton from './../../src/PlusButton.jsx';


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