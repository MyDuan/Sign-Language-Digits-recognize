# web_app
A sample web app created by using Node.js Express framework to do a sample image recognition.

## Abstract
- Create a sample web-app by using Node.js [Express](https://expressjs.com/) framwork. 
- And this app is deploied in a Conoha VPS server. And can access in url: http://118.27.14.11/
- In website, there is a method of Sign Language Digits recognize. -> [reference](https://qiita.com/PonDad/items/14d1d1c0e6e80a43e0b7)
  - Use python Tensorflow.keras to train a deep CNN model ([VGG16](https://www.pyimagesearch.com/2017/03/20/imagenet-vggnet-resnet-inception-xception-keras/), [paper](https://arxiv.org/abs/1409.1556))
    - Also build a simple python notebook experimental environment in floder [notebook](https://github.com/MyDuan/web_app/tree/master/notebook)
    - The training notebook file and some data prepare `.py` also in this floder.
  - Use Tensorflow.js to read the model, and use it to recognize the pictures which have "Sign Language Digits"

## local development
### Normal
  - Using `node-dev` to run in local. 
### About docker (just be tested in local.)
  - use docker-compose
  - Using nginx, mysql, Redis container.
      - In nginx container, I use https. So it can be used https://localhost to see your own web app.
      - And I use dummy ssl key to realize it.
      - And also I use EntryKit to render different .conf file in order to different environment.
  - Step to use
     - Install the docker (I use docker for mac)
     - export COMPOSE_FILE=docker-compose.nginx_test.yml (That means you docker-compose will use "docker-compose.nginx_test.yml"
you can set it according to yourself.)
     - docker-compose up
     - https://localhost
     - note: when use the COMPOSE_FILE=docker-compose.without_nginx.yml, the url will be http://localhost:8080/
     - networks and hard coding IP was used.

## Deploy to VPS server
### Setting the VPS server
  - [reference](https://qiita.com/ongaeshi/items/bb17ebfbd4d22057c8fd)
### circleci

  - [config file](https://github.com/MyDuan/web_app/blob/master/.circleci/config.yml)
  - install Jtest `npm install --save-dev jest` and add a sample test in `/test`.
      - run `npm test`
  - use [pm2](https://qiita.com/sakkuntyo/items/4ddabbb356254d863aae) to deploy
  - Send the noti to slack.
