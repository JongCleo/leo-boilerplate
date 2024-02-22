# Leo boilerplate

This is an evolving boilerplate for my personal projects.

### Preqrequities

- pnpm via `brew install pnpm`
- NODE JS >= 18.18.2

### Quickstart

```
rm -rf .git
nvm install && nvm use
pnpm install
```

### Commands

- `pnpm dev` runs the server in development mode
- `pnpm build` builds the server
- `pnpm start` runs the server in production mode

### Tools Explanations

- _ESLint_, _prettier_ standard stuff mate if you don't know these NGMI
- _TSX_ is recommended as a replacement for ts-node and nodemon because it works with both CSJ and es6 modules
- _PNPM_ is recommended for package management because npm sucks

### File Structure

- `tsconfig.json` tells the compiler how to compile the code
- `.prettierrc` tells prettier how to format the code
- `eslintrc.json` tells eslint how to lint the code

### Todos

- [ ] recommended eslint settings
- [ ] preferred vs code settings?
- [ ] testing setup
- [ ] clerk, prisma, tailwind... am I just making t3 again..
