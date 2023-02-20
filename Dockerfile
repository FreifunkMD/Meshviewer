FROM node:13-slim

WORKDIR .

EXPOSE 80

RUN apt update \
    && apt install -y --no-install-recommends \
           unattended-upgrades \
           ca-certificates \
           nginx \
           git \
           wget \
           curl

COPY ./nginx-site.default /etc/nginx/sites-available/default

CMD rm -rf /var/www/html/* ; \
    mkdir -p /var/www/html/data ; \
    echo "<html><head><meta http-equiv="refresh" content="5"></head> <body><h1>Meshviewer wird frisch geklont und neu gebaut.</h1><h1>Bitte 1-2 Minuten warten...</h1></body></html>" > /var/www/html/index.html ; \
    service nginx start ; \
    yarn ; \
    yarn gulp ; \
    yarn cache clean ; \
    rm -rf node_modules ; \
    sh -c "wget http://gw01.babel.md.freifunk.net:8080/data/meshviewer.json -O /var/www/html/data/meshviewer.json" ; \
    cp -R -f build/* /var/www/html ; \
    while true; do sleep 1m; sh -c "wget http://gw01.babel.md.freifunk.net:8080/data/meshviewer.json -O /var/www/html/data/meshviewer.json" ; done
