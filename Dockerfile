FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY script.js .
COPY styles.css .

EXPOSE 80