#!/bin/bash
export PATH="$PWD/local_node/bin:$PATH"

# 1. Start Next.js Server in Background
echo "Starting Verblynx Server..."
npm start > server.log 2>&1 &
SERVER_PID=$!

# 2. Wait for Port 3000
echo "Waiting for server to boot..."
sleep 5

# 3. Start Tunnel
echo "Opening Secure Tunnel..."
lt --port 3000 --subdomain verblynx-elite

# Cleanup on exit
kill $SERVER_PID
