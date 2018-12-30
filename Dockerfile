FROM node:10.15-alpine

MAINTAINER pavel.karpovich@outlook.com

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm i pm2 -g

RUN npm i --production

EXPOSE $PORT

CMD [ "pm2-runtime", "ecosystem.config.js" ]
