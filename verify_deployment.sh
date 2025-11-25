#!/bin/bash
export PATH="$PWD/local_node/bin:$PATH"

# 1. Start Server
echo "Starting server for testing..."
npm start > test_server.log 2>&1 &
PID=$!

# 2. Wait for boot
echo "Waiting for boot..."
sleep 10

# 3. Test Endpoint
echo "Testing HTTP 200 OK..."
HTTP_CODE=$(curl -o /dev/null -s -w "%{http_code}\n" http://localhost:3000)

if [ "$HTTP_CODE" == "200" ]; then
    echo "✅ TEST PASSED: Server is up and returning 200 OK."
    kill $PID
    exit 0
else
    echo "❌ TEST FAILED: Server returned $HTTP_CODE"
    cat test_server.log
    kill $PID
    exit 1
fi
