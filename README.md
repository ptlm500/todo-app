# todo-app

![CI](https://github.com/ptlm500/todo-app/workflows/CI/badge.svg)

## Running the docker container

1. Pull the image from Docker Hub `docker pull petermills/todo-app:latest`
2. Find the image ID by running `docker images petermills/todo-app:latest` eg:

  ```sh
  REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
  petermills/todo-app   latest              0724740b8e2b        7 minutes ago       1.31GB
  ```

3. Run `docker run -d -P <IMAGE ID>`
4. Get the exposed port of the container by running `docker ps`:

```sh
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
ff805d40b418        0724740b8e2b        "docker-entrypoint.s…"   8 minutes ago       Up 8 minutes        0.0.0.0:32769->3000/tcp   boring_lamport
```

5. Go to <http://localhost:32769>, substituing the port (`32769`) for the port shown by `docker ps`

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
