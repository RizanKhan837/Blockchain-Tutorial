# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
yarn hardhat help
yarn hardhat test
REPORT_GAS=true yarn hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.js
```

## Tasks

we can see all the tasks we can run by running yarn hardhat
to add a custom tasks add it in tasks folder and add it to hardhat.config.js


## Quickstart

```
git clone https://github.com/PatrickAlphaC/hardhat-simple-storage-fcc
cd hardhat-simple-storage-fcc
yarn
yarn hardhat
```

# Usage

Deploy:

```
npx hardhat run scripts/deploy.js
```

## Testing

```
npx hardhat test
```

### Test Coverage

```
npx hardhat coverage
```

## Estimate gas

You can estimate how much gas things cost by running:

```
npx hardhat test
```

And you'll see and output file called `gas-report.txt`

## Local Deployment 

If you'd like to run your own local hardhat network, you can run:

```
npx hardhat node
```

And then **in a different terminal**

```
npx hardhat run scripts/deploy.js --network localhost
```

And you should see transactions happen in your terminal that is running `npx hardhat node`

### Important localhost note

If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in. And maybe don't do this if you're a little confused by this. 
