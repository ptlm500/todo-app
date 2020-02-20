FROM node:12

ARG PORT
ENV PORT=${PORT}

WORKDIR /app

COPY package*.json ./

RUN npm install --silent
RUN npm build

COPY . .

CMD [ "npm", "run", "start:prod" ]

EXPOSE ${PORT}
