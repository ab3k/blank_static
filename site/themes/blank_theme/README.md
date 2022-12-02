# blank_theme

## Features

- Normalizing CSS from tailwind
- 3 column layout
- Basic Typography
- Menus (main and footer)
- Image styling
- Vertical rhythm
- Basic quotation styling

## Layout

### Breakpoints

2 breakpoints, 3 widths

- (small)
  - `40em`
- (medium)
  - `70em`
- (large)

### Layout structure

- *(very top)*
- `#page`
  - `#header`
    - `#banner`, `#title`
  - `#content`
  - `#footer`
- *(very bottom)*

### Contrainted containers

Behaviour depending on width

- small: has full width
- medium: has a max width and centered
- large: has a max width and is pulled to the left (not centered)

Different displays:

- `.container`
- `.flex-container` (`display: flex`)
- `.grid-container` (`display: grid`)
  - `.before`
  - `.content`
  - `.after`

## Browser runtime utils

```javascript
Theme.isModern()
Theme.toggleVerticalRhythm()
```

## Supported browsers

Target browser which have been released since 2019:

- Chrome 71+
- Firefox 64+
- Edge 79+
- Safari 12+
- Safari on iOS 12.1+

Some older versions might be supported too but it is not expected.

Assume at least support for:

- ES6:
  - See <https://caniuse.com/es6>
  - Unsupported: IE (just partial support), Firefox before 54 (2017), Chrome before 51 (2016)
- WOFF2:
  - See <https://caniuse.com/woff2>
  - Unsupported: IE, macOS before 10.12 (2016)

Thus supported too:

- ES6 modules: <https://caniuse.com/es6-module>
- `fetch`: <https://caniuse.com/fetch>
- `navigator.sendBeacon`: <https://caniuse.com/beacon>
- ES6 (ECMAScript 2015): Promises, `let`/`const`, template literals, arrow functions, destructuring assignment, ...
- ES8 (ECMAScript 2017): `async`/`await`
