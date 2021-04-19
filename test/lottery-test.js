// const { expect,upgrades } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Lottery", function() {
  it("测试投注", async function() {
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await upgrades.deployProxy(Lottery);
    await lottery.deployed();
    console.log("Lottery deployed to:", lottery.address);
    await lottery.throwIn([1,2,3,4])
    console.log("Lottery lastUserId:");
    console.dir(await lottery.lastUserId())
    console.log("Lottery idToLotteryPlayers:");
    console.dir(await lottery.idToLotteryPlayers(1))
    //通过用户地址 查询 该用户所有的投注编号 
    console.dir(await lottery.getUserIdsByAddress('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'))
    //通过用户投注编号 查询 彩票数组内容
    console.dir(await lottery.getLotteryNumberByUserId(1))
    //开奖
    console.dir(await lottery.luckDraw())
    //查询开奖号码
    console.dir(await lottery.getWinningLotteryNumber())
    
  });
});
