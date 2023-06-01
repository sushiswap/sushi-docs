---
sidebar_position: 1
---

# RouteProcessor3

The RouteProcessor3 contract is used to perform complicated swaps that go through multiple pairs and AMMS. This version of the route processor introduces V3 AMM or concentrated liquidity style of support.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/route-processor/contracts/RouteProcessor3.sol).

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

Processes the route generated off-chain for a token swap with a lock to prevent re-entrancy.

This function is a wrapper for the `processRouteInternal` function. It has a lock modifier to prevent re-entrancy attacks. This function is marked as `payable` which means it can receive Ether. This is useful in scenarios where the input token is Ether.

The function forwards all the parameters to the `processRouteInternal` function and returns the output of that function.

#### Parameters

| Name           | Type    | Description                                                       |
| :------------- | :------ | :---------------------------------------------------------------- |
| `tokenIn`      | address | The address of the input token.                                   |
| `amountIn`     | uint256 | The amount of the input token to swap.                            |
| `tokenOut`     | address | The address of the output token.                                  |
| `amountOutMin` | uint256 | The minimum amount of the output token that needs to be received. |
| `to`           | address | The address where the output tokens should be sent.               |
| `route`        | bytes   | Byte-encoded data that describes the route of the swap.           |

#### Returns

| Name        | Type    | Description                                     |
| :---------- | :------ | :---------------------------------------------- |
| `amountOut` | uint256 | The actual amount of the output token received. |

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

Transfers a specified amount of Ether to an address and then processes a token swap route.

This function first transfers the specified amount of Ether to the `transferValueTo` address. If the transfer fails, it reverts the transaction with the return data of the failed call.

Then it processes the token swap route by calling the `processRouteInternal` function with the remaining parameters and returns its output.

The function is marked as `payable` which means it can receive Ether. This is useful in scenarios where the input token is Ether. It also has a lock modifier to prevent re-entrancy attacks.

#### Parameters

| Name                  | Type            | Description                                                       |
| :-------------------- | :-------------- | :---------------------------------------------------------------- |
| `transferValueTo`     | address payable | The address to which the Ether is transferred.                    |
| `amountValueTransfer` | uint256         | The amount of Ether to transfer.                                  |
| `tokenIn`             | address         | The address of the input token.                                   |
| `amountIn`            | uint256         | The amount of the input token to swap.                            |
| `tokenOut`            | address         | The address of the output token.                                  |
| `amountOutMin`        | uint256         | The minimum amount of the output token that needs to be received. |
| `to`                  | address         | The address where the output tokens should be sent.               |
| `route`               | bytes           | Byte-encoded data that describes the route of the swap.           |

#### Returns

| Name        | Type    | Description                                     |
| :---------- | :------ | :---------------------------------------------- |
| `amountOut` | uint256 | The actual amount of the output token received. |
