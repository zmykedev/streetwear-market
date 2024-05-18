#!/bin/bash

# Instala Bun
curl -fsSL https://bun.sh/install | bash

# Añade Bun al PATH
export PATH=$HOME/.bun/bin:$PATH

# Construye el proyecto con Vite utilizando Bun
bun run build