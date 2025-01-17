#!/bin/sh

# Start hardhat node
npx hardhat node &

# Wait for hardhat node to fully start (adjust sleep time if necessary)
sleep 5

# Run the deployChatApp script
npm run deployChatApp &

sleep 5

mv artifacts/contracts/ChatApp.sol/ChatApp.json Context/

# Finally, start the Next.js development server
npm run dev
