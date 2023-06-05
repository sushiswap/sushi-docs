---
sidebar_position: 1
---

# BentoAdapter

The BentoAdapter is an abstract contract that is inherited to provide all functions of BentoBox required by the SushiXSwap contract.

The full contract can be found here [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/adapters/BentoAdapter.sol).

## Read-Only Functions

## State-Changing Functions

### \_depositToBentoBox

```solidity
function _depositToBentoBox(
  address token,
  address from,
  address to,
  uint256 amount,
  uint256 share,
  uint256 value
) internal;
```

This function is an internal function that is used to deposit tokens into the BentoBox. The function takes the token address, the sender's address, the receiver's address, the amount to be deposited, the share to be deposited, and the value of the native token to be deposited.

The function directly calls the `deposit` function of the BentoBox contract, passing along the token, sender, receiver, amount, share, and value. The native token value is sent along with the function call using the `{value: value}` syntax.

#### Parameters

| Name     | Type    | Description                                    |
| :------- | :------ | :--------------------------------------------- |
| `token`  | address | The address of the token to deposit.           |
| `from`   | address | The address of the sender.                     |
| `to`     | address | The address of the receiver.                   |
| `amount` | uint256 | The amount of the token to be deposited.       |
| `share`  | uint256 | The share of the token to be deposited.        |
| `value`  | uint256 | The value of the native token to be deposited. |

#### Reverts

This function may revert if the BentoBox deposit operation fails.

#### Modifiers

This function doesn't use any modifiers.

#### Events

No specific events are emitted by this function. However, the BentoBox `deposit` function might emit events.

#### Functions called

This function calls the `deposit` function of the BentoBox contract.

#### Security Considerations

For the `from` parameter, only `msg.sender`, `address(this)`, and `address(bentoBox)` should be passed in, or else an attacker can siphon user's funds in BentoBox. The `token` parameter should be `address(0)` when depositing native token. You should pass either `amount` or `share`, not both.

### \_transferFromBentoBox

```solidity
function _transferFromBentoBox(
  address token,
  address from,
  address to,
  uint256 amount,
  uint256 share,
  bool unwrapBento
) internal;
```

This function is an internal function that is used to transfer tokens from the BentoBox to another user or withdraw them to another address. The function takes the token address, the sender's address, the receiver's address, the amount to be transferred, the share to be transferred, and a boolean flag indicating whether to unwrap the BentoBox or not.

This function is marked `internal`, which means it can only be called from within the contract itself, or from contracts that inherit from this contract.

Depending on the `unwrapBento` parameter, the function either calls the `withdraw` or `transfer` function of the BentoBox contract. If the `amount` is greater than 0 and `unwrapBento` is `false`, it first calculates the corresponding share using the `toShare` function of the BentoBox.

#### Parameters

| Name          | Type    | Description                                                                               |
| :------------ | :------ | :---------------------------------------------------------------------------------------- |
| `token`       | address | The address of the token to transfer. Use wrapped native token address for native tokens. |
| `from`        | address | The address of the sender.                                                                |
| `to`          | address | The address of the receiver.                                                              |
| `amount`      | uint256 | The amount of the token to transfer.                                                      |
| `share`       | uint256 | The share of the token to transfer.                                                       |
| `unwrapBento` | bool    | Set to `true` for withdrawal and `false` for transfer.                                    |

#### Reverts

This function may revert if the BentoBox withdraw or transfer operation fails.

#### Modifiers

This function doesn't use any modifiers.

#### Events

No specific events are emitted by this function. However, the BentoBox `withdraw` or `transfer` function might emit events.

#### Functions called

This function calls the `withdraw`, `toShare`, and `transfer` functions of the BentoBox contract.

#### Security Considerations

For the `from` parameter, only `msg.sender`, `address(this)`, and `address(bentoBox)` should be passed in, or else an attacker can siphon user's funds in BentoBox. The `token` parameter should be the address of the wrapped native token when transferring native tokens. You should pass either `amount` or `share`, not both.
