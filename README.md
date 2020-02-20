# todo-app

![CI](https://github.com/ptlm500/todo-app/workflows/CI/badge.svg)

## Installation instructions

1. Clone the repository, eg using ssh: `git clone git@github.com:ptlm500/todo-app.git`
2. Change directory `cd todo-app`
3. Install dependencies `npm install`

## Start the development server

1. Run `npm start`
2. A browser tab should open automatically. If not, go to <http://localhost:3000/> in your browser

## Start the production server

1. Run the build script with `npm run build`
2. Run the production server with `npm run start:prod`
3. Go to <http://localhost:8080/> in your browser

## Run tests

1. Run `npm test` or `npm run test:ci` for CI testing mode

## Run lint

1. Run `npm run lint`

## Generate translation strings

1. Install formatjs `npm i -g formatjs`
2. Run `formatjs extract --out-file ./nls/en.json './src/**/*.{jsx,}'`
