# blank_static

A boilerplate Hugo project

## Features

- Targeted to build on Debian 11
- Provides a devcontainer as build environment
- PostCSS (autoprefixer, nesting, custom-media)
- Bundling with esbuild
- Linting (eslint, stylelint)

## Utilities

Linting CSS

```bash
npx stylelint themes/**/*.js
npx stylelint --fix themes/**/*.js
```

Linting JavaScript

```bash
npx eslint themes/**/*.js
npx eslint --fix themes/**/*.js
```

## Start a new site

```bash
cp -a lefthook.yml LICENSE README.md site .gitignore .devcontainer .vscode ../new_static
cd ../new_static
rm -rf site/public/ site/resources/ site/node_modules/
sed -i 's/blank_static/new_static/g' README.md site/package.json site/package-lock.json
sed -i 's/blank_theme/new_theme/g' README.md site/config.toml site/themes/blank_theme/theme.toml site/config.toml site/themes/blank_theme/README.md
mv site/themes/blank_theme site/themes/new_theme
sed -i 's/Blank Site/New site/' README.md site/config.toml
cd site
npm install
hugo
lefthook run pre-push
```

## VS Code

A devcontainer is configured to provide a consistent dev setup.
It uses the `ab3k/debian-hugo:bullseye` container, based on Debian stable (11)
and Node 16 from <https://deb.nodesource.com>.

Two tasks are also provided:

- `Hugo: run server with drafts` to run a Hugo dev server at port 1313
- `Hugo: build` to build the site
