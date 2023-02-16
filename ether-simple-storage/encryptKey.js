const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptJsonKey = await wallet.encrypt(process.env.PASSWORD, process.env.PRIVATE_KEY);
  console.log(encryptJsonKey);
  fs.writeFileSync("./.encryptKey.json", encryptJsonKey);
}

main().then(() => process.exit(0)).catch((e) => {
    console.error(e);
    process.exit(1);
});