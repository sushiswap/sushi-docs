---
sidebar_position: 6
---

# SushiMakerKashi

SushiMakerKashi handles "serving up" rewards for xSUSHI holders by trading tokens collected from Kashi fees for SUSHI.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/SushiMakerKashi.sol).

## Functions

### setBridge

```
function setBridge(address token, address bridge) external onlyOwner
```

Sets the bridge for the given token and bridge addresses. Can only be called by the owner of the contract.

#### Parameters

| Name     | Type    | Description                             |
| :------- | :------ | :-------------------------------------- |
| `token`  | address | address of token you wish to bridge     |
| `bridge` | address | address of token bridge you wish to use |

### convert

```
function convert(IKashiWithdrawFee kashiPair) external onlyEOA
```

Calls the private `_convert` function which converts the given Kashi Pair into Bento shares, then into the underlying Kashi asset. !!

#### Parameters

| Name        | Type              | Description           |
| :---------- | :---------------- | :-------------------- |
| `kashiPair` | IKashiWithdrawFee | kashi pair to convert |

### convertMultiple

```
function convertMultiple(IKashiWithdrawFee[] calldata kashiPair) external onlyEOA
```

Calls the private `_convert` function which converts the given Kashi Pairs into Bento shares, then into the underlying Kashi assets.

#### Parameters

| Name        | Type                | Description                     |
| :---------- | :------------------ | :------------------------------ |
| `kashiPair` | IKashiWithdrawFee[] | array of kashi pairs to convert |

### \_convert

```
function _convert(IKashiWithdrawFee kashiPair) private
```

Private function used in `convert` and `convertMultiple` which converts the given Kashi Pair into Bento shares, then into the underlying Kashi asset.

#### Parameters

| Name        | Type              | Description           |
| :---------- | :---------------- | :-------------------- |
| `kashiPair` | IKashiWithdrawFee | kashi pair to convert |

### \_convertStep

```
function _convertStep(address token0, uint256 amount0) private returns (uint256 sushiOut)
```

Private function that calculates and returns the amount of SUSHI to be given after conversion. !!

#### Parameters

| Name      | Type    | Description                          |
| :-------- | :------ | :----------------------------------- |
| `token0`  | address | address of token you wish to convert |
| `amount0` | uint256 | amount of token to convert           |

#### Returns

| Name       | Type    | Description                      |
| :--------- | :------ | :------------------------------- |
| `sushiOut` | uint256 | amount of SUSHI after conversion |

### \_swap

```
function _swap(
        address fromToken,
        address toToken,
        uint256 amountIn,
        address to
    ) private returns (uint256 amountOut)
```

Private function that swaps the tokens with the bridge and returns the amount of the new token. !!

#### Parameters

| Name        | Type    | Description                             |
| :---------- | :------ | :-------------------------------------- |
| `fromToken` | address | address of token you wish to bridge     |
| `toToken`   | address | address of token you wish to swap to    |
| `amountIn`  | uint256 | amount of token to swap                 |
| `to`        | address | address of token bridge you wish to use |

#### Returns

| Name        | Type    | Description                                           |
| :---------- | :------ | :---------------------------------------------------- |
| `amountOut` | uint256 | amount of `toToken` after conversion from `fromToken` |
