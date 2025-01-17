FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8545 3000

CMD ["sh", "-c", "npx hardhat node &  npm run dev"]
