#!/usr/bin/env bash
until npx vite build | grep "0.00"; do
  echo "Empty chunk not found yet, retrying..."
done
echo "Empty chunk found!"