// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract DiceGame {
    address public owner;
    uint256 public minimumBet;
    uint256 public threshold;
    uint256 public lastRoll;

    event BetPlaced(address indexed player, uint256 amount, uint256 rollResult, bool won);

    constructor(uint _minimumBet, uint256 _threshold) {
        owner = msg.sender;
        minimumBet = _minimumBet;
        threshold = _threshold;
    }

    function rollDice() external payable {
        require(msg.value >= minimumBet, "Insufficient bet amount");

        // Simulate dice roll (replace with more secure random function in production)
        uint256 diceResult = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 6 + 1;

        // Check if user won
        bool won = diceResult > threshold;

        // Update last roll result
        lastRoll = diceResult;

        // Send payout if the user won
        if(won){
            payable(msg.sender).transfer(msg.value*2);
        }

        emit BetPlaced(msg.sender, msg.value,diceResult, won);
    }
}


