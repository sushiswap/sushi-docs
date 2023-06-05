---
sidebar_position: 1
---

# SushiLegacyAdapter

The SushiLegacyAdapter is an abstract contract that is inherited to provide functions required by the SushiXSwap contract to swap using the Sushi Classic AMM contracts (V2).

The full contract can be found here [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/adapters/SushiLegacyAdapter.sol).

## Read-Only Functions

## State-Changing Functions

### \_swapExactTokensForTokens

```solidity
function _swapExactTokensForTokens(
  uint256 amountIn,
  uint256 amountOutMin,
  address[] memory path,
  address to,
  bool sendTokens
) internal returns (uint256 amountOut);
```

Swaps an exact amount of input tokens for as many output tokens as possible, along a predefined path.

-   `msg.sender` should have already given the router an allowance of at least `amountIn` on the input token.
-   `amountOutMin` can be used for slippage protection.
-   `sendTokens` controls whether tokens should be forcibly sent to the first pair if they have not already been sent.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountIn` | uint256 | amount of input tokens to send |
| `amountOutMin` | uint256 | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | address[] memory | the path the tokens will take (a list of token addresses). Must be at least 2 elements long, with the input token as the first element |
| `to` | address | recipient of the output tokens |
| `sendTokens` | bool | flag to forcibly send tokens to the first pair if not already sent |

#### Returns

| Name        | Type    | Description                                |
| :---------- | :------ | :----------------------------------------- |
| `amountOut` | uint256 | amount of output tokens that were received |

#### Reverts

This function reverts if the output amount is less than `amountOutMin`, with the error message "insufficient-amount-out".

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `getAmountsOut`, `safeTransfer`, and `pairFor` functions of the UniswapV2Library, and the `balanceOf` function of the input token.

#### Security Considerations

This function is marked as `internal`, which means it can only be called from within the contract or from contracts that inherit from this contract. It should be ensured that the parameters passed are accurate and safe to use. The function uses the contract's balance of the input token, so it should be ensured that this is intended and safe. It also requires the contract to have a sufficient balance of the input token for the swap operation to succeed.
