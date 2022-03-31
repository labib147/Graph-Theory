# Graph-Theory
Graph ql documentation (Linux)

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

After running the final command, you should get the following output `v16.14.2`

### Installation of npm -

1. `sudo npm install -g npm@latest`
2.  `npm -v` 
3.  This should show an output as follows `8.5.0`
4.  If this does not update to your required version, then try `sudo npm install -g npm@8.5.0`

After this you can watch this 30 min video that explains the entire process step by step: https://www.youtube.com/watch?v=jxhNsSicEzA

Create a folder where you want to create your project. Open VS code in the folder. Go to terminal and type the following command

`npm init -y`

This creates a `package.jason` file which initializes all dependecnies by default and you can modify those further as per your requirements.

Afther than we need ABI of the token we are trying to extract data from. We are doing "USDT" for this example. We can go to the Etherscan website, find USDT token, go to its "Contract" and copy the ABI. 
Now create a folder in your own project, name it 'abi', create a file in that folder "USDT.json". Then paste the ABI in there and save the file.



