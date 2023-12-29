import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { Contract } from 'ethers';

describe("DiceGame", function () {
  let diceGame: Contract;

  beforeEach(async () => {
    const DiceGame = await ethers.getContractFactory('DiceGame');
    diceGame = await DiceGame.deploy(1, 3); // Minimun bet of 1, threshold of 3
    await diceGame.deployed();
  });

  it('should allow a player to roll the dice and emit BetPlaced event', async () => {
    const [player] = await ethers.getSigners();
    const betAmount = 2;

    const result = await diceGame.connect(player).rollDice({ value: betAmount });

    expect(result).to.emit(diceGame, 'BetPlaced').withArgs(player.address, betAmount);
  });
  
  it('should update the last roll result after a dice roll', async () => {
    const [player] = await ethers.getSigners();
    const betAmount = 2;

    await diceGame.connect(player).rollDice({ value: betAmount });

    const lastRoll = await diceGame.lastRoll();

    expect(lastRoll).to.be.gte(1).and.to.be.lte(6);
  });

});
