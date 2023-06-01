---
sidebar_position: 1
---

# TridentUnwindooor

The TridentUnwindooor contract is the base for the Sushi Trident AMM fee collection contracts. The unwindooor provides functions that can be used to unwind SLP tokens selling one side of the pair into the other token. It can also be used to burn SLP tokens, and return back both sides or tokens in the SLP pair.

The full contract can be found [here](https://github.com/sushiswap/sushi-peripherals/blob/master/src/makers/trident/TridentUnwindooor.sol).

## State-Changing Functions

### burnSinglePairs

```solidity
function burnSinglePairs(
  address[] calldata pairs,
  uint256[] calldata amounts,
  address[] calldata keepTokens,
  uint256[] calldata minimumOuts
) external onlyTrusted;
```

Burns liquidity pairs and unwinds position into one of the two tokens.

-   `pairs` represents the array of liquidity pair addresses to be unwound.
-   `amounts` specifies the amounts of each pair to be burned.
-   `keepTokens` refers to the addresses of the tokens to keep from each burn.
-   `minimumOuts` sets the minimum amount to receive for each burn operation as a measure of slippage protection.

#### Parameters

| Name          | Type      | Description                                                                        |
| :------------ | :-------- | :--------------------------------------------------------------------------------- |
| `pairs`       | address[] | Array of addresses of pairs to unwind.                                             |
| `amounts`     | uint256[] | Array of amounts to burn for each pair.                                            |
| `keepTokens`  | address[] | Addresses of tokens to keep for the burn operation.                                |
| `minimumOuts` | uint256[] | Array of minimum amounts to receive for each burn operation (slippage protection). |

#### Returns

This function does not return any values.

#### Reverts

This function reverts if the amount received from any burn operation is less than the corresponding value in `minimumOuts`.

#### Events

This function does not emit any events.

#### Modifiers

This function has the `onlyTrusted` modifier, meaning it can only be called by trusted accounts, as defined in the contract.

### burnPairs

```solidity
function burnPairs(
  address[] calldata pairs,
  uint256[] calldata amounts,
  uint256[] calldata minimumOut0,
  uint256[] calldata minimumOut1
) external onlyTrusted;
```

Burns liquidity pairs and unwinds position into both tokens of the pair.

-   `pairs` represents the array of liquidity pair addresses to be unwound.
-   `amounts` specifies the amounts of each pair to be burned.
-   `minimumOut0` and `minimumOut1` set the minimum amount to receive for each token in the pair as a measure of slippage protection.

#### Parameters

| Name          | Type      | Description                                                                        |
| :------------ | :-------- | :--------------------------------------------------------------------------------- |
| `pairs`       | address[] | Array of addresses of pairs to unwind.                                             |
| `amounts`     | uint256[] | Array of amounts to burn for each pair.                                            |
| `minimumOut0` | uint256[] | Array of minimum amounts to receive for token0 in each pair (slippage protection). |
| `minimumOut1` | uint256[] | Array of minimum amounts to receive for token1 in each pair (slippage protection). |

#### Returns

This function does not return any values.

#### Reverts

This function reverts if the amount received from any burn operation for either token in the pair is less than the corresponding value in `minimumOut0` or `minimumOut1`.

#### Events

This function does not emit any events.

#### Modifiers

This function has the `onlyTrusted` modifier, meaning it can only be called by trusted accounts, as defined in the contract.
