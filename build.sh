#!/bin/bash
set -x

# Build script
cd ~/app.thomas-claireau.fr/fcc/technical-documentation
source ~/.bashrc
npm install
npm run build