---
sidebar_position: 1
---

# Unwindooor

The Unwindooor contract is the base for the Sushi V2 AMM fee collection contracts. The unwindooor provides functions that can be used to unwind SLP tokens selling one side of the pair into the other token. It can also be used to burn SLP tokens, and return back both sides or tokens in the SLP pair.

The full contract can be found [here](https://github.com/sushiswap/sushi-peripherals/blob/master/src/makers/unwindooor/v2/Unwindooor.sol).

## State-Changing Functions

### unwindPairs

```solidity
function unwindPairs(
  address[] calldata tokensA,
  address[] calldata tokensB,
  uint256[] calldata amounts,
  uint256[] calldata minimumOuts
) external onlyTrusted;
```

Unwinds pairs of tokens by removing liquidity and selling one token for another in each pair.

-   `msg.sender` must be a trusted account (as defined by the `onlyTrusted` modifier).
-   The `tokensA` and `tokensB` arrays should be of equal length, and represent pairs of tokens to unwind.
-   The `amounts` array represents the amount of liquidity to remove from each respective pair.
-   The `minimumOuts` array can be used for slippage protection.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `tokensA` | address[] | Array of addresses representing one token in each pair. |
| `tokensB` | address[] | Array of addresses representing the other token in each pair. |
| `amounts` | uint256[] | Array of amounts of liquidity to remove from each respective pair. |
| `minimumOuts` | uint256[] | Array of minimum amount of tokens that must be received for the transaction not to revert (for each pair). |

#### Reverts

This function throws an error with the `SlippageProtection` error message if the amount of token received from unwinding a pair is less than the corresponding `minimumOut` amount.

#### Events

This function does not directly emit any events. However, it calls the `_unwindPair` function, which might emit events.

#### Modifiers

```solidity
modifier onlyTrusted();
```

This function can only be called by a trusted account, as defined by the `onlyTrusted` modifier.

### burnPairs

```solidity
function burnPairs(
  IUniV2[] calldata lpTokens,
  uint256[] calldata amounts,
  uint256[] calldata minimumOut0,
  uint256[] calldata minimumOut1
) external onlyTrusted;
```

Burns pairs of liquidity tokens, without swapping one token for another.

-   `msg.sender` must be a trusted account (as defined by the `onlyTrusted` modifier).
-   The `lpTokens`, `amounts`, `minimumOut0`, and `minimumOut1` arrays should all be of equal length, and represent pairs of liquidity tokens to burn.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `lpTokens` | IUniV2[] | Array of liquidity token pairs to burn. |
| `amounts` | uint256[] | Array of amounts of liquidity tokens to burn from each respective pair. |
| `minimumOut0` | uint256[] | Array of minimum amounts of the first token that must be received for the transaction not to revert. |
| `minimumOut1` | uint256[] | Array of minimum amounts of the second token that must be received for the transaction not to revert. |

#### Reverts

This function throws an error with the `SlippageProtection` error message if the amount of either token received from burning a pair is less than the corresponding `minimumOut` amount.

#### Events

This function does not directly emit any events. However, it calls the `burn` function on each liquidity token pair, which might emit events.

#### Modifiers

```solidity
modifier onlyTrusted();
```

This function can only be called by a trusted account, as defined by the `onlyTrusted` modifier.
