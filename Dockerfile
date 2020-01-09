FROM node:12-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY package.json /home/node/app/

COPY public /home/node/app/public

COPY src /home/node/app/src

EXPOSE 3000

CMD [ "npm", "start" ]