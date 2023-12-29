# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# We will go over the game DiceGame Contract and Learn Solidity Fundamentals for most interviews

# Lets go over Function with a paramter vs. state variable

In Solidity, function parameters and state variables serve different purposes and have distinct characteristics. Here are the key differences between function parameters and state variables:

Function Parameters:
Local Scope:

Function parameters are variables declared within the parameter list of a function or constructor.
They have a local scope and are only accessible within the body of the function where they are defined.
Temporary Storage:

Function parameters are temporary variables used to pass values into a function when it is called.
They do not persist beyond the execution of the function.
No Storage on the Blockchain:

Function parameters do not consume storage on the blockchain. They exist only during the execution of the function.
Input Values:

Function parameters receive input values from the caller of the function. These values can be literals, variables, or expressions.
State Variables:
Storage Variables:

State variables are variables declared at the contract level, outside the scope of any function.
They represent data that is permanently stored on the blockchain.
Persistent Storage:

State variables persist across multiple function calls and transactions. Their values are stored on the blockchain and are accessible from any function within the contract.
Persistent Values:

State variables hold values that are meant to be persistent and maintain their state between transactions.
Gas Cost for Storage:

Storing data in state variables comes with a gas cost. Modifying the value of a state variable requires a transaction and incurs gas fees.
Contract State:

State variables define the state of the contract. They represent the contract's long-term memory.

Here is an example below:

```solidity
pragma solidity ^0.8.0;

contract Example { 
    // State variable
   uint256 public stateVariable;

    // Function with a parameter
    function setVariable(uint256 newValue) external { 
        // The parameter 'newValue' is a local variable
        // It is used within the scope of this function
        // and does not persist beyond this function call.
        stateVariable = newValue;
    }
}
```

# Lets go over Events in Solidity

Events in smart contracts serve as a mechanism for emitting information about state changes or important occurrences within the contract. These events are recorded in the blockchain's transaction logs, and they can be observed by external parties, such as user interfaces, other smart contracts, or off-chain applications.

Here's a breakdown of the concept:

Immutable Ledger:

The blockchain is an immutable ledger that records all transactions and state changes.
Smart contracts execute on the blockchain, and their results are stored in the blockchain's history.
Decentralized Execution:

Smart contracts execute deterministically on all nodes in the network, ensuring consensus and decentralization.
However, the execution itself doesn't automatically broadcast information to the outside world.
Events as Communication:

Events act as a way for smart contracts to "communicate" or notify external entities about important state changes or activities within the contract.
When an event is emitted, it is logged in the transaction receipt and becomes part of the blockchain's history.
External Observers:

External entities, such as user interfaces, dApps (decentralized applications), or other smart contracts, can "listen" for these events.
They use the emitted event information to react, update their own states, or display relevant information to users.
In your specific example, the BetPlaced event in the DiceGame contract serves as a notification that a bet has been placed, including details such as the player's address, the amount bet, the result of the dice roll, and whether the player won or lost. External applications or interfaces can subscribe to this event and take actions based on the emitted information.


