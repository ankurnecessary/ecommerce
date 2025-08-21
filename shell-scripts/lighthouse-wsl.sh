#!/bin/bash
# File: shell-scripts/lighthouse-wsl.sh

set -euo pipefail

echo "Launching Chromium with remote debugging..."

chromium-browser \
  --headless \
  --disable-gpu \
  --remote-debugging-port=9222 \
  --no-sandbox \
  about:blank &

CHROME_PID=$!
sleep 2  # Give Chromium time to initialize

echo "Running Lighthouse CI via pnpm..."
if ! command -v pnpm &> /dev/null; then
  echo "pnpm not found. Please install it or use npm/yarn equivalent."
  kill $CHROME_PID
  exit 1
fi

pnpm exec lhci autorun || {
  echo "LHCI failed. Killing Chromium..."
  kill $CHROME_PID
  exit 1
}

echo "Audit complete. Shutting down Chromium..."
kill $CHROME_PID
