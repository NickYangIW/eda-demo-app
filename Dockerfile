FROM node:20.9

WORKDIR /EDA-DEMO-APP/

COPY public/ /EDA-DEMO-APP/public
COPY src/ /EDA-DEMO-APP/src
COPY package.json /EDA-DEMO-APP/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]