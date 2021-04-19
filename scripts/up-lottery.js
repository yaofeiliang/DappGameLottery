// scripts/upgrade-Lottery.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',Lottery);
  console.log("Lottery upgraded");
}

main();