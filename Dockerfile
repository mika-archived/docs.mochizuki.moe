FROM node:12.6.0

COPY package.json yarn.lock /home/docsify/
WORKDIR /home/docsify
RUN yarn

CMD [ "yarn", "start" ]