---
sidebar_position: 1
---

# QuoterV2

The QuoterV2 contract can be used for getting the expected amount out or amount in for a given swap without executing the swap.

These functions are not gas efficient and should not be called on chain.

The full contract can be found [here](https://github.com/sushiswap/v3-periphery/blob/master/contracts/lens/QuoterV2.sol).

## Read-Only Functions

### uniswapV3SwapCallback

```solidity
function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes memory path
) external view override;
```

This function is a callback method that is invoked by a Uniswap V3 pool during a swap operation. It ensures the correct amount of tokens were transferred during the swap and the pool's state after the swap is as expected.

-   The `uniswapV3SwapCallback` function must be implemented by any contract that interacts with Uniswap V3 pool's swap operation.
-   Swaps entirely within 0-liquidity regions are not supported; thus, `amount0Delta` or `amount1Delta` must be positive.

#### Parameters

| Name           | Type   | Description                                                                          |
| :------------- | :----- | :----------------------------------------------------------------------------------- |
| `amount0Delta` | int256 | The difference in the pool's token0 balance before and after the swap.               |
| `amount1Delta` | int256 | The difference in the pool's token1 balance before and after the swap.               |
| `path`         | bytes  | Encoded path of the swap, containing addresses of tokens involved and pool fee tier. |

#### Returns

This function doesn't return any values. Instead, it reverts with a reason produced by encoding the amount received, the pool's square root price, and the pool's tick after the swap.

#### Reverts

This function reverts if:

-   Both `amount0Delta` and `amount1Delta` are non-positive.
-   The callback is not invoked by a valid Uniswap V3 pool.
-   The amount received is not equal to the cached output amount (only when swapping for an exact output amount).

#### Events

This function does not emit any events.

#### Modifiers

This function does not have any explicit modifiers. However, it's subject to restrictions and validations inherent to the Uniswap V3 protocol.

#### Note

The function's visibility is `view`, but it is not pure and will revert to pass information back to the caller. This function should never be called in normal operations; it is only called as part of the internal swap process in a Uniswap V3 pool.

### quoteExactInputSingle

```solidity
function quoteExactInputSingle(
    QuoteExactInputSingleParams memory params
) public override returns (
    uint256 amountOut,
    uint160 sqrtPriceX96After,
    uint32 initializedTicksCrossed,
    uint256 gasEstimate
);
```

Executes a swap for a precise input amount of a single token, returning the output amount. The function allows for the swap to occur in a specific pool defined by the `tokenIn`, `tokenOut`, and `fee` parameters.

-   It's crucial to note that the swap might not be successful due to price movement or lack of liquidity, in which case the function will revert.
-   The `sqrtPriceLimitX96` parameter can be used to protect against slippage by defining a price limit. If the price limit is not specified, the function will default to the maximum or minimum price that can be represented on the curve for the given tokens.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `params` | QuoteExactInputSingleParams | Struct containing parameters for the function. Struct fields: `tokenIn`, `tokenOut`, `fee`, `amountIn`, `sqrtPriceLimitX96`. |

#### Returns

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountOut` | uint256 | The output amount of `tokenOut` received from the swap. |
| `sqrtPriceX96After` | uint160 | The square root price after the swap has been executed. |
| `initializedTicksCrossed` | uint32 | The number of ticks crossed that were initialized (i.e., had non-zero liquidity) when the swap was executed. |
| `gasEstimate` | uint256 | An estimate of the amount of gas used to execute the swap. |

#### Reverts

This function can revert due to several reasons including lack of liquidity in the pool, price movement beyond the specified price limit, or failure in the underlying `swap` function of the Uniswap V3 pool.

#### Events

This function does not emit any events.

#### Modifiers

This function is `public` and `override`, meaning it is accessible externally and it overrides a function with the same name in the base contract.

#### Note

The `QuoteExactInputSingleParams` struct used in the `params` parameter has the following fields:

-   `tokenIn`: The address of the input token.
-   `tokenOut`: The address of the output token.
-   `fee`: The fee tier of the pool in which the swap should occur.
-   `amountIn`: The exact input amount that will be swapped.
-   `sqrtPriceLimitX96`: The price limit of the swap in square root price representation. Can be used to protect against slippage.

### quoteExactInput

```solidity
function quoteExactInput(
    bytes memory path,
    uint256 amountIn
) public override returns (
    uint256 amountOut,
    uint160[] memory sqrtPriceX96AfterList,
    uint32[] memory initializedTicksCrossedList,
    uint256 gasEstimate
);
```

Executes a swap with an exact input amount across a path of pools. The function will calculate and return the output amount, a list of square root prices after each swap, a list of the number of initialized ticks crossed after each swap, and an estimate of the total gas used.

-   The path is encoded in a `bytes` array where each segment of the path specifies the two tokens and the fee of the pool to be used for that part of the path.
-   The swap will be executed across each pool in the path sequentially.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `path` | bytes | Encoded information about the path of pools to be used for the swap. Each segment of the path contains the addresses of the two tokens and the fee tier of the pool. |
| `amountIn` | uint256 | The exact input amount that will be swapped. |

#### Returns

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountOut` | uint256 | The output amount received from the last swap in the path. |
| `sqrtPriceX96AfterList` | uint160[] | List of the square root price after each swap in the path. |
| `initializedTicksCrossedList` | uint32[] | List of the number of ticks crossed that were initialized after each swap in the path. |
| `gasEstimate` | uint256 | An estimate of the total gas used to execute the swaps across the path. |

#### Reverts

This function can revert due to several reasons including lack of liquidity in any pool in the path, price movement beyond the specified price limit, or failure in the underlying `swap` function of the Uniswap V3 pool.

#### Events

This function does not emit any events.

#### Modifiers

This function is `public` and `override`, meaning it is accessible externally and it overrides a function with the same name in the base contract.

### quoteExactOutputSingle

```solidity
function quoteExactOutputSingle(
    QuoteExactOutputSingleParams memory params
) public override returns (
    uint256 amountIn,
    uint160 sqrtPriceX96After,
    uint32 initializedTicksCrossed,
    uint256 gasEstimate
);
```

Executes a single swap with an exact output amount in a specific pool. The function will calculate and return the input amount required, the square root price after the swap, the number of initialized ticks crossed, and an estimate of the gas used.

-   If no price limit is specified (`params.sqrtPriceLimitX96 == 0`), the output amount will be cached for comparison in the swap callback.
-   `QuoteExactOutputSingleParams` is a struct with the following fields: `tokenIn`, `tokenOut`, `fee`, `amount`, and `sqrtPriceLimitX96`.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `params` | QuoteExactOutputSingleParams | A struct containing the following fields: `tokenIn`, `tokenOut`, `fee`, `amount`, `sqrtPriceLimitX96` |

#### Returns

| Name                      | Type    | Description                                                       |
| :------------------------ | :------ | :---------------------------------------------------------------- |
| `amountIn`                | uint256 | The input amount required for the swap.                           |
| `sqrtPriceX96After`       | uint160 | The square root price after the swap.                             |
| `initializedTicksCrossed` | uint32  | The number of ticks crossed that were initialized after the swap. |
| `gasEstimate`             | uint256 | An estimate of the gas used to execute the swap.                  |

#### Reverts

This function can revert due to several reasons including lack of liquidity in the pool, price movement beyond the specified price limit, or failure in the underlying `swap` function of the Uniswap V3 pool.

#### Events

This function does not emit any events.

#### Modifiers

This function is `public` and `override`, meaning it is accessible externally and it overrides a function with the same name in the base contract.

#### Note

The `QuoteExactOutputSingleParams` struct used in the `params` parameter has the following fields:

-   `tokenIn`: The address of the input token.
-   `tokenOut`: The address of the output token.
-   `fee`: The fee tier of the pool in which the swap should occur.
-   `amount`: The exact output amount.
-   `sqrtPriceLimitX96`: The price limit, represented as the square root price shifted by 96 bits. If zero, a price limit is not specified.

### quoteExactOutput

```solidity
function quoteExactOutput(
    bytes memory path,
    uint256 amountOut
) public override returns (
    uint256 amountIn,
    uint160[] memory sqrtPriceX96AfterList,
    uint32[] memory initializedTicksCrossedList,
    uint256 gasEstimate
);
```

Executes a series of swaps along a given `path` for an exact output amount. The function will calculate and return the total input amount required, the square root price after each swap, the number of initialized ticks crossed in each swap, and an estimate of the total gas used.

-   The `path` is a byte array which encodes a sequence of token addresses and fee tiers for the swaps.
-   The outputs of prior swaps become the inputs of subsequent ones.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `path` | bytes | Encodes a sequence of token addresses and fee tiers for the swaps. Each pool along the path is encoded as 20 bytes for token0, 20 bytes for token1, and 3 bytes for fee. |
| `amountOut` | uint256 | The exact output amount. |

#### Returns

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountIn` | uint256 | The total input amount required for the swaps. |
| `sqrtPriceX96AfterList` | uint160[] | An array of the square root price after each swap. |
| `initializedTicksCrossedList` | uint32[] | An array of the number of ticks crossed that were initialized in each swap. |
| `gasEstimate` | uint256 | An estimate of the total gas used to execute the swaps. |

#### Reverts

This function can revert due to several reasons including lack of liquidity in the pools, price movement beyond the specified price limit, or failure in the underlying `swap` function of the Uniswap V3 pool.

#### Events

This function does not emit any events.

#### Modifiers

This function is `public` and `override`, meaning it is accessible externally and it overrides a function with the same name in the base contract.
