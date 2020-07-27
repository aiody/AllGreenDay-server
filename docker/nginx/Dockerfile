FROM nginx:latest
LABEL maintainer="aiody329@gmail.com"

COPY default.conf /etc/nginx/conf.d/default.conf
COPY ssl-params.conf /etc/nginx/conf.d/ssl-params.conf

CMD ["nginx", "-g", "daemon off;"]