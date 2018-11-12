FROM nginx:1.13

run apt-get update
run apt-get install -y wget

run wget https://github.com/progrium/entrykit/releases/download/v0.4.0/entrykit_0.4.0_linux_x86_64.tgz
run tar -xvzf entrykit_0.4.0_linux_x86_64.tgz
run rm entrykit_0.4.0_linux_x86_64.tgz
run mv entrykit /usr/local/bin
run entrykit --symlink

RUN rm /etc/nginx/conf.d/*
COPY conf.d/ /etc/nginx/conf.d/
RUN ls /etc/nginx/conf.d/
ENTRYPOINT ["render", "/etc/nginx/conf.d/web_app.conf", "--"]
CMD ["nginx", "-g", "daemon off;"]
