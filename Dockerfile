FROM node:20.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8083

CMD [ "yarn", "start" ]