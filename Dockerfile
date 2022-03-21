FROM nginx:1.21.6-alpine

# https://birthday.play-with-docker.com/run-as-user/

COPY --chown=nginx:nginx app/ /usr/share/nginx/html
COPY --chown=nginx:nginx config/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx config/default.conf /etc/nginx/conf.d/default.conf