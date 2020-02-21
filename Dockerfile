FROM node:12

ARG PORT
ENV PORT=${PORT}

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . /app/

RUN npm run build

CMD [ "npm", "run", "start:prod" ]

EXPOSE ${PORT}
