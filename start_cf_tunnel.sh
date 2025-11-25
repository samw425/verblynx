#!/bin/bash
export PATH="$PWD/local_node/bin:$PATH"

# 1. Start Next.js Server (if not running)
if ! pgrep -f "next start" > /dev/null; then
    echo "Starting Verblynx Server..."
    npm start > server.log 2>&1 &
    sleep 5
fi

# 2. Start Cloudflare Tunnel
echo "Starting Cloudflare Tunnel..."
./cloudflared tunnel --url http://localhost:3000 > tunnel.log 2>&1 &
PID=$!

echo "Tunnel started with PID $PID"
echo "Waiting for URL..."
sleep 5
grep -o 'https://.*\.trycloudflare.com' tunnel.log
