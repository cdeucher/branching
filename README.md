
# 
## VSCode Extensions
1) Extensions
- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- vscode-styled-components
- vscode-firefox-debug
2) Debug
- Create folder `.vscode` and inside `launch.json` file.
3)
```bash
nvm use v14.19.0
npx create-react-app app --template typescript
```
3) Lint 
- `yarn add eslint -D`.
- `npx eslint --init`, next, next, ok.
4)
- Create `.prettierrc` file.
5) Setup node version.
```bash
nvm use v14.19.0
npx create-react-app app --template typescript
yarn test
yarn add --dev prettier
```
6) Monorepo management
- Install Lerna, `npm install --global lerna`.
- Create `lerna.json` file.
- Setup `package.json` file:
```
  "workspaces": {
    "packages": [
      "packages/app",
      "packages/pwa"
    ]
  },  
```
7) Composing
- https://www.pluralsight.com/guides/composing-react-components-with-typescript

