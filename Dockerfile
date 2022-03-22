FROM nginx:1.21.6-alpine

# TODO https://birthday.play-with-docker.com/run-as-user/

COPY app/ /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/default.conf /etc/nginx/conf.d/default.conf