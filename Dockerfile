FROM node:10.9.0
ENV APP_ROOT /web_app

WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
RUN npm i npm@6.2.0 -g && npm install && npm cache clean --force
RUN npm install -g node-dev
EXPOSE 3000
CMD ["node-dev", "./bin/www"]
