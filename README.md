# Graph-Theory


![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

Hosted Subgraph Link: https://thegraph.com/hosted-service/subgraph/labib147/usdt-transaction

Graph ql documentation for showing data in Graph Studio (Linux)

Go to Git of Graph protocol: https://github.com/graphprotocol 

Find graph client folder and go through the installation process: https://github.com/graphprotocol/graph-cli

### Install the followings beforehand
1. Node
2. NPM

### Installation of node - 
1. `sudo apt install nodejs`
2. `sudo apt update`
3. `curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -`
4. `sudo apt install -y nodejs`
5. `node -v`

Check this for help: https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu-and-update-npm-to-the-latest-version/#:~:text=If%20you%20run%20into%20any,command%20above%20to%20update%20it.&text=sudo%20apt%20install%20build%2Dessential,NPM%20on%20your%20Ubuntu%20machine. </br>
Or https://askubuntu.com/questions/1265813/how-to-update-node-js-to-the-long-term-support-version-on-ubuntu-20-04 </br>

After running the final command, you should get the following output `v16.14.2`

### Installation of npm -

1. `sudo npm install -g npm@latest`
2.  `npm -v` 
3.  This should show an output as follows `8.5.0`
4.  If this does not update to your required version, then try `sudo npm install -g npm@8.5.0`

After this you can watch this 30 min video that explains the entire process step by step: https://www.youtube.com/watch?v=jxhNsSicEzA

The project might throw an error in the end because of the version of the dependencies. So, be sure to update the graph-cli & graph-ts to their latest versions.
```
    npm i @graphprotocol/graph-cli@latest or npm i -D @graphprotocol/graph-cli@latest 
    npm i @graphprotocol/graph-ts@latest or  npm i -D @graphprotocol/graph-ts@latest
    npm i @graphprotocol/graph-ts@latest
```
Afther updating the package.json file should show the following devDependencies:
```
    "@graphprotocol/graph-cli": "^0.29.0",
    "@graphprotocol/graph-ts": "^0.26.0",    
    "typescript": "^4.6.2"
```

Install graph-cli in your package.json file 
`graph codegen ./token.yaml`  (Generates a schema.ts file)

`npm install`

Use `npm run codegen` or `yarn run codegen` to run codegen

- `yarn run deploy *paste your access token here*`





