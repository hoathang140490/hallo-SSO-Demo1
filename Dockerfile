FROM node:18-alpine

WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
COPY .prettierrc.json /react-docker-example/
COPY jsconfig.json /react-docker-example/
RUN ls src/
RUN npm install
CMD ["npm", "start"]