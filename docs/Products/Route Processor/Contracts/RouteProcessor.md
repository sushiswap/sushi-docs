---
sidebar_position: 1
---

# RouteProcessor

The RouteProcessor contract is used to perform complicated swaps that go through multiple pairs and AMMS.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/route-processor/contracts/RouteProcessor.sol).

## Read-Only Functions

## State-Changing Functions

### processRoute

```solidity
function processRoute(
  address tokenIn,
  uint256 amountIn,
  address tokenOut,
  uint256 amountOutMin,
  address to,
  bytes memory route
) external payable lock returns (uint256 amountOut);
```

Processes the off-chain generated route for token swap.

-   This function is `payable` and has a `lock` modifier to prevent re-entrancy attacks.
-   Executes a token swap along a specified route, with slippage protection through the `amountOutMin` parameter.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `tokenIn` | address | The address of the input token. |
| `amountIn` | uint256 | The amount of the input token to swap. |
| `tokenOut` | address | The address of the output token. |
| `amountOutMin` | uint256 | The minimum amount of the output token that must be received for the transaction not to revert. |
| `to` | address | The address to send the output tokens to. |
| `route` | bytes | The encoded data for the swap route, generated off-chain. |

#### Returns

| Name        | Type    | Description                                     |
| :---------- | :------ | :---------------------------------------------- |
| `amountOut` | uint256 | The actual amount of the output token received. |

#### Reverts

-   This function reverts if the actual output amount is less than the minimum specified output amount.
-   This function reverts if there's a problem with executing the token swap along the route.

#### Events

This function does not emit any events.

#### Modifiers

```solidity
modifier lock();
```

The `lock` modifier prevents re-entrancy attacks by ensuring that the function cannot be re-entered while it's being executed.

### transferValueAndprocessRoute

```solidity
function transferValueAndprocessRoute(
  address payable transferValueTo,
  uint256 amountValueTransfer,
  address tokenIn,
  uint256 amountIn,
  address tokenOut,
  uint256 amountOutMin,
  address to,
  bytes memory route
) external payable lock returns (uint256 amountOut);
```

Transfers some value to a specified address and then processes the off-chain generated route for token swap.

-   This function is `payable` and has a `lock` modifier to prevent re-entrancy attacks.
-   Executes a token swap along a specified route, with slippage protection through the `amountOutMin` parameter.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `transferValueTo` | address | The address to transfer the value to. |
| `amountValueTransfer` | uint256 | The amount of value to transfer. |
| `tokenIn` | address | The address of the input token. |
| `amountIn` | uint256 | The amount of the input token to swap. |
| `tokenOut` | address | The address of the output token. |
| `amountOutMin` | uint256 | The minimum amount of the output token that must be received for the transaction not to revert. |
| `to` | address | The address to send the output tokens to. |
| `route` | bytes | The encoded data for the swap route, generated off-chain. |

#### Returns

| Name        | Type    | Description                                     |
| :---------- | :------ | :---------------------------------------------- |
| `amountOut` | uint256 | The actual amount of the output token received. |

#### Reverts

-   This function reverts if the actual output amount is less than the minimum specified output amount.
-   This function reverts if there's a problem with executing the token swap along the route.
-   This function reverts if the value transfer fails.

#### Events

This function does not emit any events.

#### Modifiers

```solidity
modifier lock();
```

The `lock` modifier prevents re-entrancy attacks by ensuring that the function cannot be re-entered while it's being executed.
