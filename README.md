# blank_static

A boilerplate Hugo project

## Features

- Targeted to build on Debian 11
- Provides a devcontainer as build environment
- Normalizing CSS from tailwind
- 3 column layout
- Basic Typography
- Menus (main and footer)
- Image styling
- Vertical rhythm
- Basic quotation styling
- PostCSS (autoprefixer, nesting, custom-media)
- Bundling with esbuild
- Linting (eslint, stylelint)

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

## Utilities

Linting CSS

```bash
npx stylelint themes/blank_theme/assets/**/*.js
npx stylelint --fix themes/blank_theme/assets/**/*.js
```

Linting JavaScript

```bash
npx eslint themes/blank_theme/assets/**/*.js
npx eslint --fix themes/blank_theme/assets/**/*.js
```

In the browser (runtime utils)

```javascript
Theme.isModern()
Theme.toggleVerticalRhythm()
```

## Start a new site

```bash
cp -a lefthook.yml LICENSE README.md site .gitignore .devcontainer .vscode ../new_static
cd ../new_static
rm -rf site/public/ site/resources/ site/node_modules/
sed -i 's/blank_static/new_static/g' README.md site/package.json site/package-lock.json
sed -i 's/blank_theme/new_theme/g' README.md site/config.toml site/themes/blank_theme/theme.toml
mv site/themes/blank_theme site/themes/new_theme
sed -i 's/Blank Site/New site/' README.md site/config.toml
cd site
npm install
hugo
```

## VS Code

A devcontainer is configured to provide a consistent dev setup.
It uses the `ab3k/debian-hugo:bullseye` container, based on Debian stable (11)
and Node 16 from <https://deb.nodesource.com>.

Two tasks are also provided:

- `Hugo: run server with drafts` to run a Hugo dev server at port 1313
- `Hugo: build` to build the site

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
