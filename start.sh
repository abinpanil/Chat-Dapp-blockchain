#!/bin/sh

npm run build &

sleep 80

# Start the Next.js production server
echo "Starting the Next.js production server..."
npm run start
