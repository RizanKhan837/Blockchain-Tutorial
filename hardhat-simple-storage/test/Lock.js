const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
    let simpleStorage;

    beforeEach(async () => {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.deployed();
    });

    it("Should return the right value", async () => {
        assert.equal(await simpleStorage.retrieve(), 0);
        // or 
        // expect(await simpleStorage.retrieve()).to.equal(0);
    });

    it("Should update when we call store", async () => {
        const expected = 42;
        const transactionResponse = await simpleStorage.store(expected);
        await transactionResponse.wait(1);

        assert.equal(await simpleStorage.retrieve(), expected);
        // or
        // expect(await simpleStorage.retrieve()).to.equal(expected);
    });

    /* it("Should revert if the value is not 42", async () => {
        await assert(simpleStorage.store(43)).to.be.revertedWith(
            "You can only store the number 42",
        );
    }); */
});
