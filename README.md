# Leo boilerplate

This is an evolving boilerplate for my personal projects.

### Preqrequities

- `brew install pnpm`
- node.js version 18
- pnpm add zod express dotenv cookie-parser
- pnpm add -D typescript eslint @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier prettier
  tsx

### Quickstart

```
rm -rf .git
// install node version
nvm install && nvm use
pnpm install
```

### Tools and Explanations

- _TSX_ is recommended for watching stuff as a replacement for ts-node because it works with both CSJ and es6 modules
- _ESLint_ is recommended for linting
- _prettier_ for formatting
- _PNPM_ is recommended for package management because npm is slow and faulty

### File Structure

- `tsconfig.json` tells the compiler how to compile the code
- `package.json` tells npm how to manage the project

### Todos

- how do you invoke commands with pnpm? https://github.com/xddq/nodejs-typescript-modern-starter/blob/main/package.json
- recommended eslint settings
- vs code settings?
- change commands to use tsx
- replace nodemon.json with tsx
- jest sthit?
- https://dev.to/codewithahsan/the-complete-typescript-setup-from-zero-to-hero-398h fix launch.json
