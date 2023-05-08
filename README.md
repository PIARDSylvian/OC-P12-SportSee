# SportSee Front

## Set up server

Node version
Node version : 18.13.0

Editor :
Visual Studio Code

create .env.local file
add in file :
BACKEND to set backend URL & port

Example

```bash
HOSTNAME=localhost
PORT=3000
BACKEND=http://$HOSTNAME:$PORT
```

## How to start dev server

// add install

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

## How to start prod server

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
yarn start
```
