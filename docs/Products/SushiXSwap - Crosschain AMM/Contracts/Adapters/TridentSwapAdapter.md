---
sidebar_position: 1
---

# TridentSwapAdapter

The TridentSwapAdapter is an abstract contract that is inherited to provide functions required by the SushiXSwap contract to perform all Trident based swaps.

The full contract can be found here [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/adapters/TridentSwapAdapter.sol).

## Read-Only Functions

## State-Changing Functions

### \_exactInput

```solidity
function _exactInput(
  ExactInputParams memory params
) internal returns (uint256 amountOut);
```

Performs a swap of `tokenIn` for another token (determined by the pool path) via one or more trusted pools.

-   `msg.sender` should have already given the contract an allowance of at least `amountIn` on `tokenIn`.
-   `amountOutMinimum` can be used for slippage protection.

#### Parameters

| Name     | Type             | Description                                     |
| :------- | :--------------- | :---------------------------------------------- |
| `params` | ExactInputParams | a struct containing the parameters for the swap |

The `ExactInputParams` struct contains:

| Name | Type | Description |
| :-- | :-- | :-- |
| `tokenIn` | address | address for the input token |
| `amountIn` | uint256 | amount of `tokenIn` to swap |
| `amountOutMinimum` | uint256 | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | struct | a struct containing information about the pools to use for the swap. Each element of the array represents one swap in the path |

#### Returns

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `amountOut` | uint256 | amount of output tokens received |

#### Reverts

This function reverts if the amount of tokens received is less than `amountOutMinimum`.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `swap` function of the pools in the path and the `transferTokens` and `deposit` functions of the current contract.

---

### \_complexPath

```solidity
function _complexPath(
  ComplexPathParams memory params
) internal;
```

Performs a complex swap involving multiple input tokens, multiple output tokens, and multiple paths.

-   The function requires that the user has already given the contract an allowance of at least the input amounts for each token.

#### Parameters

| Name     | Type              | Description                                     |
| :------- | :---------------- | :---------------------------------------------- |
| `params` | ComplexPathParams | a struct containing the parameters for the swap |

The `ComplexPathParams` struct contains:

| Name | Type | Description |
| :-- | :-- | :-- |
| `initialPath` | struct array | an array of structs containing information about the initial tokens to be swapped and the pools to use |
| `percentagePath` | struct array | an array of structs containing information about the middle swaps |
| `output` | struct array | an array of structs containing information about the output tokens |

#### Returns

This function doesn't return any values.

#### Reverts

This function reverts if the amount of tokens received for any output token is less than its `minAmount`.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `swap` function of the pools in the path, and the `transfer`, `balanceOf`, and `withdraw` functions of the BentoBox contract.
