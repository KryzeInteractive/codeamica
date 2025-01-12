# First time cloning project
Install Node package manager(NPM) for Window
Install Node
Install bun.js runtime and CLI

# Install project dependency
`bun install`

# Starting dev web
`bun dev`

# Building
## Web app
`bun build ./src/main.tsx --outdir ./dist`

## Mobile app

## Desktop app
Step 1: Install rust: https://www.rust-lang.org/tools/install
Step 2: build web first
bun build ./src/main.tsx --outdir ./dist
Step 3: build desktop app
`bunx tauri build`

