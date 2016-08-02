# React SVG buttons

[![Version][npm-image]][npm-url]

This package provides a `<MorphIcon />` component used to compose available buttons,
it's able to morph from whatever icon type to another one.
  
The `<MorphIcon />` component exposes 18 icon types.

It also provides a set of button components.

Please, take a look at the [demo](http://plouc.github.io/react-svg-buttons/).


## Installation

```
npm install --save react-svg-buttons
```

## Usage

```javascript
import { render } from 'react-dom'
import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'

const Demo = () => (
    <div>
        <MorphIcon type="thunderbolt" />
        <CloseButton />
        <NavButton direction="right" opened={false} />
        <PlusButton />
    </div>
)

render(<Demo />, document.getElementById('demo'))
```

## License

MIT. Copyright (c) 2015 Raphaël Benitte.

[npm-image]: https://img.shields.io/npm/v/react-svg-buttons.svg?style=flat-square
[npm-url]:   https://www.npmjs.org/package/react-svg-buttons
