FROM node:21.6.1

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8545 3000

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
