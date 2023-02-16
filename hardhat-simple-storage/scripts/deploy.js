// imports
const {ethers, run, network} = require("hardhat");

// async main function

async function main() {
  // get contract factory
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  // deploy contract
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // get signer
  // get contract address
  console.log("Contract deployed to:", simpleStorage.address);


  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY !== undefined) {
    console.log("Waiting for block transaction to be mined...")
    await simpleStorage.deployTransaction.wait(3);
    await verifyContract(simpleStorage.address, []);
  } else {
    console.log("Contract not verified on etherscan");
  }

  // get favorite number
  const favoriteNumber = await simpleStorage.retrieve();
  console.log(`Favorite number: ${favoriteNumber.toNumber()}`);

  // update favorite number
  const transactionResponse = await simpleStorage.store(42);
  await transactionResponse.wait(1);

  const updateFavourite = await simpleStorage.retrieve();
  console.log(`Favorite number updated: ${updateFavourite}`)
}

// verify contract on etherscan
async function verifyContract(contractAddress, contractArgs) {
  console.log("Verifying contract on etherscan...");

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: contractArgs,
    });
  } catch (error) {
    if (error.message.includes("Contract source code already verified")) {
      console.log("Contract already verified");
    }
  }
}

// call main function

main()
  .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
});