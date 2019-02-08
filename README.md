# web_app
A sample web app create in Express framework by using docker-compose

### Abstract

Using nginx, mysql, Redis container.
In nginx container, I use https. So it can be used https://localhost to see your own web app.
And I use dummy ssl key to realize it.
And also I use EntryKit to render different .conf file in order to different environment.

### Step to use

- Install the docker (I use docker for mac)
- export COMPOSE_FILE=docker-compose.nginx_test.yml (That means you docker-compose will use "docker-compose.nginx_test.yml"
you can set it according to yourself.)
- docker-compose up
- https://localhost
- note: when use the COMPOSE_FILE=docker-compose.without_nginx.yml, the url will be
  - http://localhost:8080/
  - networks and hard coding IP was used.

### about atom
- install the terminal in atom
- use `atom -a <path>` to add floder to Atom.

### circleci
- local circle CI
    - `curl -o /usr/local/bin/circleci https://circle-downloads.s3.amazonaws.com/releases/build_agent_wrapper/circleci && chmod +x /usr/local/bin/circleci`
    - `circleci update`
    - `circleci config validate -c .circleci/config.yml`
    - `circleci build .circleci/config.yml`
- Also send the noti to slack.

- install Jtest `npm install --save-dev jest`
- Add test in /test
- run `npm test`
  ```
  PASS  test/first.test.js

  ✓ adds 1 + 2 to equal 3 (3ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        6.21s
  ```

### pm2 deploy
- `pm2 deploy ecosystem.json produnction.`
- use circleci to deploy via pm2 automatically
- URL: http://118.27.14.11/
