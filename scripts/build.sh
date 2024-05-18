#!/bin/bash
chmod +x ./scripts/build.sh
set -e
curl -fsSL https://bun.sh/install | bash
export PATH="/opt/buildhome/.bun/bin:$PATH"
bun --version
bun install
bun --bun run build