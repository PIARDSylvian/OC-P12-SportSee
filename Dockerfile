FROM node:18

WORKDIR /usr/src/app

ENV PORT 3001

CMD npm install; npm run dev