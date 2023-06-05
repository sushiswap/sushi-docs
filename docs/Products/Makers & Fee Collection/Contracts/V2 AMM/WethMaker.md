---
sidebar_position: 1
---

# WethMaker

The WethMaker contract inherits functionality from the Unwindooor contract, and also implements functions to swap to weth from other tokens utilizing set bridges for each token. There is also a withdraw function to withdraw the collected WETH, and other tokens from the contract.

The full contract can be found [here](https://github.com/sushiswap/sushi-peripherals/blob/master/src/makers/unwindooor/v2/WethMaker.sol).

## State-Changing Functions

### setBridge

```solidity
function setBridge(
  address token,
  address bridge
) external onlyOwner;
```

Sets the bridge for a given token. Only the owner can call this function.

#### Parameters

| Name     | Type    | Description                         |
| :------- | :------ | :---------------------------------- |
| `token`  | address | The token for which to set a bridge |
| `bridge` | address | The address of the bridge to set    |

#### Reverts

This function reverts if called by any account other than the owner.

#### Events

```solidity
event SetBridge(address indexed token, address indexed bridge);
```

This event is emitted with the addresses of the token and the bridge when a bridge is set.

#### Modifiers

```solidity
modifier onlyOwner();
```

This function can only be called by the owner of the contract.

### buyWeth

```solidity
function buyWeth(
  address[] calldata tokens,
  uint256[] calldata amountsIn,
  uint256[] calldata minimumOuts
) external onlyTrusted;
```

Buys Wrapped Ether (WETH) or bridge tokens, which can be converted into WETH in subsequent transactions. Only trusted entities can call this function.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `tokens` | address array | Array of token addresses to be swapped for WETH or bridge tokens. |
| `amountsIn` | uint256 array | Array of amounts of each token to swap. The length of this array should match the length of the `tokens` array. |
| `minimumOuts` | uint256 array | Array of minimum amounts of WETH or bridge tokens that must be received for the transaction not to revert. |

#### Reverts

This function reverts if the actual output is less than the `minimumOuts` provided for slippage protection, or if called by any account other than trusted ones.

#### Modifiers

```solidity
modifier onlyTrusted();
```

This function can only be called by trusted entities.

### withdraw

```solidity
function withdraw(
  address token,
  address to,
  uint256 _value
) external onlyOwner;
```

Allows the contract owner to withdraw funds and potentially bridge them to mainnet. This function can handle both ERC20 tokens and native Ether (ETH).

-   If `token` is not the zero address, it transfers the `_value` of the `token` ERC20 tokens to the `to` address.
-   If `token` is the zero address, it transfers `_value` ETH to the `to` address.

#### Parameters

| Name     | Type    | Description                                         |
| :------- | :------ | :-------------------------------------------------- |
| `token`  | address | The address of the token to withdraw.               |
| `to`     | address | The address to receive the withdrawn tokens or ETH. |
| `_value` | uint256 | The amount of tokens or ETH to withdraw.            |

#### Reverts

This function reverts if:

-   The contract does not have sufficient balance of the token to transfer.
-   The ETH transfer fails.
-   It is called by any account other than the owner.

#### Modifiers

```solidity
modifier onlyOwner();
```

This function can only be called by the owner of the contract.

### doAction

```solidity
function doAction(
  address to,
  uint256 _value,
  bytes memory data
) external onlyOwner;
```

Performs an arbitrary action by calling a function on an external contract. This can be used to interact with other contracts from the contract itself, such as calling other functions, executing transactions, or even deploying other contracts.

-   The `to` parameter specifies the address of the external contract to be called.
-   The `_value` parameter specifies the amount of ETH to send along with the call.
-   The `data` parameter specifies the function selector and encoded arguments for the function to be called in the external contract.

This function can only be called by the owner of the contract.

#### Parameters

| Name     | Type    | Description                                                                |
| :------- | :------ | :------------------------------------------------------------------------- |
| `to`     | address | The address of the external contract to be called.                         |
| `_value` | uint256 | The amount of ETH to send along with the call.                             |
| `data`   | bytes   | The function selector and encoded arguments for the function to be called. |

#### Reverts

This function reverts if:

-   The external call fails.
-   It is called by any account other than the owner.

#### Modifiers

```solidity
modifier onlyOwner();
```

This function can only be called by the owner of the contract.
