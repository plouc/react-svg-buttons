# React SVG buttons

[![Version][npm-image]][npm-url]


This package contains a small set of animated svg icons to be used as button.
Take a look at the [demo](http://plouc.github.io/react-svg-buttons/).


## Installation

```
npm install --save react-svg-buttons
```

## Usage

```javascript
import { React }                             from 'react';
import { BackButton, PlusButton, NavButton } from 'react-svg-buttons';

const Test = React.createClass({
    displayName: 'Test',
    render() {
        return (
            <div>
                <BackButton/>
                <PlusButton/>
                <NavButton/>
            </div>
        );
    }
});

React.render(<Test/>, document.getElementById('test'));
```

## License

MIT. Copyright (c) 2015 Raphaël Benitte.

[npm-image]: https://img.shields.io/npm/v/react-svg-buttons.svg?style=flat-square
[npm-url]:   https://www.npmjs.org/package/react-svg-buttons
