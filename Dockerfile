FROM node:20.9

WORKDIR /eda-demo-app/

COPY public/ /eda-demo-app/public
COPY src/ /eda-demo-app/src
COPY package.json /eda-demo-app/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]