# TODO https://birthday.play-with-docker.com/run-as-user/
FROM nginx:1.21.6-alpine

WORKDIR /app

COPY app/ /app
COPY app/src/ /usr/share/nginx/html/
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/default.conf /etc/nginx/conf.d/default.conf