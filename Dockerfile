FROM node:10.9.0
ENV APP_ROOT /web_app

WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
RUN npm i npm@6.2.0 -g && npm install && npm cache clean --force && npm install -g node-dev
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2-runtime", "./bin/www"]
