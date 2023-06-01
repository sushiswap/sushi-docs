---
sidebar_position: 1
---

# SushiXSwap

The SushiXSwap is the center for enabling cross-chain swaps for Sushi. The contract works by implementing several adapters to perform cross-chain swaps on each supported network.

The contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/SushiXSwap.sol).

## State-Changing Functions

### cook

```solidity
function cook(
  uint8[] memory actions,
  uint256[] memory values,
  bytes[] memory datas
) public payable override;
```

This function is designed for executing multiple actions in a single transaction. Each action is defined by an integer, and the corresponding value and data are provided in separate arrays.

Possible actions include but are not limited to: approving a master contract, depositing to BentoBox, transferring tokens from BentoBox, transferring tokens from this contract, withdrawing tokens, wrapping tokens, and performing token swaps.

Each action is decoded and executed in the order they appear in the `actions` array. The `values` and `datas` arrays must have the same length as the `actions` array, and each index corresponds to the same action.

The function is payable, which means it can receive native token (e.g. Ether) along with the transaction. The received value is used in actions that require transferring native token.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `actions` | uint8[] | An array of actions to execute. The actions correspond to predefined constants that define a specific behavior. |
| `values` | uint256[] | An array with the same length as `actions`. Each value is the amount of native token (e.g. Ether) to send along with the corresponding action. |
| `datas` | bytes[] | An array with the same length as `actions`. Each data element is ABI encoded data of the function arguments for the corresponding action. |

#### Modifiers

This function uses the `override` modifier, indicating that it overrides a function or modifier in the base contract.

#### Reverts

This function reverts if the number of actions does not match the number of values or datas. It also reverts if an action is not recognized or if a specific action fails to execute.

#### Events

No specific events are emitted by this function. However, depending on the executed actions, various events might be emitted.

#### Functions called

This function calls a variety of other functions based on the provided actions. These might include functions in the same contract or in other contracts, such as BentoBox.

#### Example

The following is an example of how to call the `cook` function:

```solidity
uint8[] memory actions = new uint8[](1);
uint256[] memory values = new uint256[](1);
bytes[] memory datas = new bytes[](1);

// Define the action, value, and data
actions[0] = ACTION_MASTER_CONTRACT_APPROVAL;
values[0] = 0; // No native token sent with this action
datas[0] = abi.encode(user, approved, v, r, s);

// Call the cook function
myContract.cook(actions, values, datas);
```
