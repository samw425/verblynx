#!/bin/bash
# Find Node.js
NODE_PATH=$(find /usr/local /opt/homebrew -name "node" -type f -perm +111 2>/dev/null | head -n 1)

if [ -z "$NODE_PATH" ]; then
    echo "Could not find node."
    exit 1
fi

echo "Found node at $NODE_PATH"
"$NODE_PATH" -v
"$NODE_PATH" --version
