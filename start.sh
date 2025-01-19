#!/bin/sh

# Start hardhat node
npx hardhat node &

# Wait for hardhat node to fully start (adjust sleep time if necessary)
sleep 5

# Run the deployChatApp script
npm run deployChatApp &

sleep 5

mv artifacts/contracts/ChatApp.sol/ChatApp.json Context/

# Build the Next.js app
echo "Building the Next.js app..."
npm run build &

sleep 80

# Start the Next.js production server
echo "Starting the Next.js production server..."
npm run start
