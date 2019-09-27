# web_app
A sample web app created by using Node.js Express framework to do a sample images recognition.

## Abstract
- Create a sample web-app by using Node.js [Express](https://expressjs.com/) framwork.
- And this app is deploied in a aws EC2 server. And can access in url: http://3.112.152.77/
- In website, there is a method of Sign Language Digits recognize. -> [reference](https://qiita.com/PonDad/items/14d1d1c0e6e80a43e0b7)
  - Use python Tensorflow.keras to train a deep CNN model ([VGG16](https://www.pyimagesearch.com/2017/03/20/imagenet-vggnet-resnet-inception-xception-keras/), [paper](https://arxiv.org/abs/1409.1556))
    - Also build a simple python notebook experimental environment in floder [notebook](https://github.com/MyDuan/web_app/tree/master/notebook)
    - The training notebook file and some data prepare `.py` also in this floder.
  - Use Tensorflow.js to read the model, and use it to recognize the pictures which have "Sign Language Digits"

## local development
### Normal
  - Run `npm install`
  - Run `node-dev ./bin/www`
  - In browser type http://localhost:3000/
### About docker (just be tested in local.)
  - use docker-compose
  - Step to use
     - Install the docker (I use docker for mac) and run.
     - Run `docker-compose -f docker-compose.nginx_test.yml up`
         - URL: https://localhost/
     - Or run `docker-compose -f docker-compose.without_nginx.yml up`
         - URL: http://localhost:8080/

## Deploy to aws server
- http://3.112.152.77/
### Circleci

  - [config file](https://github.com/MyDuan/web_app/blob/master/.circleci/config.yml)
  - Install Jtest `npm install --save-dev jest` and add a sample test in `/test`.
      - run `npm test`
  - Use [pm2](https://qiita.com/sakkuntyo/items/4ddabbb356254d863aae) to deploy
  - Send the noti to slack.
