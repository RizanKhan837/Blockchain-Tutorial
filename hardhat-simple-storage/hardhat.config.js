require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://goerli.infura.io/v3/your-api-key"; // if first one is undefined, use second one
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your-private-key";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "your-etherscan-api-key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "your-coinmarketcap-api-key";
module.exports = {
    // defaultNetwork: "hardhat",
    // if we dont specify a network, hardhat will use the default network with its own rpc and accounts
    networks: {
        hardhat: {
            // forking: {
            //   url: "https://eth-mainnet.alchemyapi.io/v2/your-api-key",
            //   blockNumber: 12000000,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    solidity: "0.8.17",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
        // gasPrice: 21,
    },
};
