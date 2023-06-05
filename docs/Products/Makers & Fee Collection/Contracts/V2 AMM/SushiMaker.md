---
sidebar_position: 1
---

# SushiMaker

The SushiMaker contract inherits functions from the WethMaker contract, and primarily use case is to provide a contract for breaking down Sushi V2 AMM fees that come to the contract in the form of SLP tokens. SushiMaker is used for buying Sushi after breaking down these SLP tokens into individual tokens, and then selling them for WETH.

The full contract can be found [here](https://github.com/sushiswap/sushi-peripherals/blob/master/src/makers/unwindooor/v2/SushiMaker.sol).

## State-Changing Functions

### buySushi

```solidity
function buySushi(
  uint256 amountIn,
  uint256 minOutAmount
) external onlyTrusted returns (uint256 amountOut);
```

Performs a swap operation to buy Sushi tokens using WETH or its equivalent.

-   The `amountIn` parameter indicates the amount of WETH to use in the swap operation.
-   The `minOutAmount` parameter sets a lower limit on the number of Sushi tokens to be received. If the swap operation doesn't yield at least this amount, the function will revert to protect against slippage.
-   Only trusted entities can execute this function.

The function returns the actual amount of Sushi tokens acquired through the swap.

#### Parameters

| Name           | Type    | Description                                                      |
| :------------- | :------ | :--------------------------------------------------------------- |
| `amountIn`     | uint256 | The amount of WETH to use in the swap operation.                 |
| `minOutAmount` | uint256 | The minimum amount of Sushi tokens to be received from the swap. |

#### Returns

| Name        | Type    | Description                                           |
| :---------- | :------ | :---------------------------------------------------- |
| `amountOut` | uint256 | The actual amount of Sushi tokens received from swap. |

#### Reverts

This function reverts if:

-   The output of the swap is less than `minOutAmount` (slippage protection).
-   It is called by any account other than the trusted entities.

#### Events

```solidity
event Serve(uint256 amount);
```

Emitted when Sushi tokens are successfully purchased.

#### Modifiers

```solidity
modifier onlyTrusted();
```

This function can only be called by trusted entities.

### sweep

```solidity
function sweep(
  uint256 amount
) external onlyTrusted;
```

Transfers a specified amount of Sushi tokens to the xSushi contract address.

-   The `amount` parameter indicates the amount of Sushi tokens to transfer to the xSushi contract.
-   Only trusted entities can execute this function.

This function does not return any values.

#### Parameters

| Name     | Type    | Description                                                    |
| :------- | :------ | :------------------------------------------------------------- |
| `amount` | uint256 | The amount of Sushi tokens to transfer to the xSushi contract. |

#### Reverts

This function reverts if:

-   It is called by any account other than the trusted entities.

#### Events

```solidity
event Serve(uint256 amount);
```

Emitted when Sushi tokens are successfully transferred to the xSushi contract.

#### Modifiers

```solidity
modifier onlyTrusted();
```

This function can only be called by trusted entities.

### wrapEth

```solidity
function wrapEth() external;
```

Converts any unwrapped Ethereum (ETH) held by the contract into Wrapped Ethereum (WETH).

-   This function wraps any ETH balance of the contract into WETH.
-   It does not require any input parameters and does not return any values.

This function can be called by any account.

#### Parameters

This function does not take any parameters.

#### Returns

This function does not return any values.

#### Reverts

This function does not have any known conditions under which it will revert.

#### Events

This function does not emit any events.

#### Modifiers

This function does not have any modifiers.
