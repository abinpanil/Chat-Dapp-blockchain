# Blockchain Chat Application

A decentralized chat application built on the Ethereum blockchain, featuring a Next.js frontend and Hardhat for smart contract development and deployment.

## Features

- **Decentralized Chat**: Enjoy privacy and ownership of messages through blockchain technology.
- **Futuristic Design**: A visually appealing, space-themed UI with animations.
- **Secure Transactions**: Messages and interactions are secured by Ethereum smart contracts.

## Tech Stack

- **Blockchain**: Ethereum
- **Frontend**: [Next.js](https://nextjs.org/)
- **Smart Contract Development**: [Hardhat](https://hardhat.org/)
- **Containerization**: Docker

## Prerequisites

- Docker
- Docker Compose
- MetaMask browser extension (for interacting with the Ethereum network)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abinpanil/Chat-Dapp-blockchain.git
cd Chat-Dapp-blockchain
```

### 2. Install MetaMask

MetaMask is a browser extension that allows you to interact with the Ethereum blockchain.
- Install MetaMask: MetaMask Extension
- Create or import a wallet.
- Connect MetaMask to the network (e.g., local testnet or specified network).

### 3. Use Test Accounts
Use the provided test accounts to interact with the application.

### 4. Run the Application

Run the following command to build and start all services (frontend, backend, and blockchain):
```bash
 docker-compose up --build 
 ```

### 5. Access the Application

Once the containers are running:

- Frontend: Visit http://localhost:3000 in browser.
- Blockchain Node: Ensure MetaMask or Ethereum wallet is connected to the correct network (e.g., a local testnet).

### 6. Stopping the Application

To stop all running containers, use:
```bash
docker-compose down  
```

### Smart Contract Deployment

Contracts are automatically deployed using Hardhat when run docker-compose up.