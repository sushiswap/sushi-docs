---
sidebar_position: 1
---

# TridentMaker

The TridentMaker contract inherits functionality from the TridentUnwindooor contract, and also implements functions to swap tokens from other tokens. There is also a withdraw function to withdraw the collected WETH, and other tokens from the contract.

The full contract can be found [here](https://github.com/sushiswap/sushi-peripherals/blob/master/src/makers/trident/TridentMaker.sol).

## State-Changing Functions

### swap

```solidity
function swap(
  address[] calldata tokensIn,
  address[] calldata swapPairs,
  uint256[] calldata amountsIn,
  uint256[] calldata minimumOuts
) external onlyTrusted;
```

Performs swaps of `tokensIn` through the corresponding `swapPairs`, with slippage protection set in `minimumOuts`.

-   `tokensIn` represents the array of tokens to be swapped.
-   `swapPairs` specifies the pairs to be used for each swap operation.
-   `amountsIn` sets the amounts of each token to be swapped.
-   `minimumOuts` sets the minimum amount to be received for each swap as a measure of slippage protection.

#### Parameters

| Name          | Type      | Description                                                                            |
| :------------ | :-------- | :------------------------------------------------------------------------------------- |
| `tokensIn`    | address[] | Array of addresses of tokens to be swapped.                                            |
| `swapPairs`   | address[] | Array of addresses of pairs to be used for each swap operation.                        |
| `amountsIn`   | uint256[] | Array of amounts to be swapped for each token.                                         |
| `minimumOuts` | uint256[] | Array of minimum amounts to be received for each swap operation (slippage protection). |

#### Returns

This function does not return any values.

#### Reverts

This function reverts if the amount received from any swap operation is less than the corresponding value in `minimumOuts`.

#### Events

This function does not emit any events.

#### Modifiers

This function has the `onlyTrusted` modifier, meaning it can only be called by trusted accounts, as defined in the contract.

### setTokenFeeTo

```solidity
function setTokenFeeTo(address token, address feeTo) external onlyOwner;
```

Sets the `feeTo` address for a specific token, dictating where the fees will be served to.

-   `token` is the address of the token to set the `feeTo` for.
-   `feeTo` is the address where the fees will be served.

#### Parameters

| Name    | Type    | Description                                                          |
| :------ | :------ | :------------------------------------------------------------------- |
| `token` | address | The address of the token for which the `feeTo` address is to be set. |
| `feeTo` | address | The address where the fees will be served.                           |

#### Returns

This function does not return any values.

#### Reverts

This function reverts if it is not called by the contract owner.

#### Events

This function does not emit any events.

#### Modifiers

This function has the `onlyOwner` modifier, meaning it can only be called by the contract owner.

### serveFees

```solidity
function serveFees(address[] calldata tokens) external;
```

Executes the serving of fees for all passed in tokens where the `feeTo` address is set.

-   The contract should have a balance of the tokens that are to be served.
-   The function transfers the entire balance of each token to its respective `feeTo` address.

#### Parameters

| Name     | Type      | Description                                              |
| :------- | :-------- | :------------------------------------------------------- |
| `tokens` | address[] | The array of tokens for which the fees are to be served. |

#### Returns

This function does not return any values.

#### Reverts

This function reverts if the transfer fails.

#### Events

```solidity
event Served(address feeTo, address token, uint256 balance);
```

The `Served` event is emitted for each token with the `feeTo` address, the token address, and the balance that was transferred.

#### Modifiers

This function does not have any modifiers.

### withdraw

```solidity
function withdraw(
  address token,
  address to,
  uint256 _value
) external onlyOwner;
```

Withdraws a specified amount of tokens or ETH from the contract to a given address.

-   This function can only be called by the owner of the contract.
-   If `token` is the zero address, the function withdraws ETH. Otherwise, it withdraws the specified ERC-20 token.

#### Parameters

| Name     | Type    | Description                                                         |
| :------- | :------ | :------------------------------------------------------------------ |
| `token`  | address | The address of the token to withdraw. Use the zero address for ETH. |
| `to`     | address | The address to which the tokens or ETH are to be sent.              |
| `_value` | uint256 | The amount of tokens or ETH to withdraw.                            |

#### Returns

This function does not return any values.

#### Reverts

-   This function reverts if the transfer of tokens or ETH fails.
-   This function reverts if it is called by an account other than the owner.

#### Events

```solidity
event Withdrawn(address token, address to, uint256 value);
```

The `Withdrawn` event is emitted with the address of the token (or zero address for ETH), the recipient address, and the amount that was withdrawn.

#### Modifiers

```solidity
modifier onlyOwner();
```

The `onlyOwner` modifier restricts this function to be called by the contract's owner only.

### doAction

```solidity
function doAction(
  address to,
  uint256 _value,
  bytes memory data
) external onlyOwner;
```

Executes a low-level call to a contract.

-   This function can only be called by the owner of the contract.
-   It can be used to interact with any contract that does not have an interface in this contract.
-   The call is executed with a specified amount of Ether (in Wei) and data.

#### Parameters

| Name     | Type    | Description                                         |
| :------- | :------ | :-------------------------------------------------- |
| `to`     | address | The address of the contract to interact with.       |
| `_value` | uint256 | The amount of Ether (in Wei) to send with the call. |
| `data`   | bytes   | The data to send with the call.                     |

#### Returns

This function does not return any values.

#### Reverts

-   This function reverts if the call fails.
-   This function reverts if it is called by an account other than the owner.

#### Events

This function does not emit any events.

#### Modifiers

```solidity
modifier onlyOwner();
```

The `onlyOwner` modifier restricts this function to be called by the contract's owner only.
