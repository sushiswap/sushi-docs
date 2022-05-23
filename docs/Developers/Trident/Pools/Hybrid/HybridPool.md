---
sidebar_position: 1
---

# HybridPool

This contract is an implementation of a Trident exchange pool template with hybrid like-kind formula for swapping an ERC-20 token pair.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/hybrid/HybridPool.sol).

## Functions

### mint

```
function mint(bytes calldata data) public override nonReentrant returns (uint256 liquidity)
```

Mints LP tokens and returns the amount minted; should be called via the router after transferring `bento` tokens.

#### Parameters

| Name   | Type  | Description                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | data needed to mint LP tokens |

#### Returns

| Name        | Type    | Description                |
| :---------- | :------ | :------------------------- |
| `liquidity` | uint256 | amount of LP tokens minted |

### burn

```
function burn(bytes calldata data) public override nonReentrant returns (IPool.TokenAmount[] memory withdrawnAmounts)
```

Burns LP tokens sent to this contract and returns the amount the user receives after burning the LPs.

#### Parameters

| Name   | Type  | Description                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | data needed to burn LP tokens |

#### Returns

| Name               | Type                | Description                          |
| :----------------- | :------------------ | :----------------------------------- |
| `withdrawnAmounts` | IPool.TokenAmount[] | amount of tokens returned after burn |

### burnSingle

```
function burnSingle(bytes calldata data) public override nonReentrant returns (uint256 amountOut)
```

Burns LP tokens sent this contract and swaps one of the output tokens for another.

#### Parameters

| Name   | Type  | Description                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | data needed to burn LP tokens |

#### Returns

| Name        | Type    | Description                                      |
| :---------- | :------ | :----------------------------------------------- |
| `amountOut` | uint256 | amount of single token returned in chosen output |

### swap

```
function swap(bytes calldata data) public override nonReentrant returns (uint256 amountOut)
```

Swaps one token for another and returns the amount of the swapped token received.

#### Parameters

| Name   | Type  | Description         |
| :----- | :---- | :------------------ |
| `data` | bytes | data needed to swap |

#### Returns

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `amountOut` | uint256 | amount of swapped token received |

### flashSwap

```
function flashSwap(bytes calldata data) public override nonReentrant returns (uint256 amountOut)
```

Swaps one token for another with payload returns the amount of the swapped token received.

#### Parameters

| Name   | Type  | Description         |
| :----- | :---- | :------------------ |
| `data` | bytes | data needed to swap |

#### Returns

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `amountOut` | uint256 | amount of swapped token received |

### updateBarFee

```
function updateBarFee() public
```

Updates the `barFee` for the Trident protocol.

### \_processSwap

```
function _processSwap(
        address tokenOut,
        address to,
        uint256 amountOut,
        bytes memory data,
        bool unwrapBento
    ) internal
```

Internal helper function used by the `swap` functions to execute the swap.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `tokenOut`    | address | address of token to swap                            |
| `to`          | address | address of recipient                                |
| `amountOut`   | uint256 | amount to swap                                      |
| `data`        | bytes   | data needed to swap                                 |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |

### \_getReserves

```
function _getReserves() internal view returns (uint256 _reserve0, uint256 _reserve1)
```

Internal function that returns the current amount of reserves in the pool.

#### Returns

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_reserve0` | uint256 | amount of reserve0 |
| `_reserve1` | uint256 | amount of reserve1 |

### getReserves

```
function getReserves() public view returns (uint256 _reserve0, uint256 _reserve1)
```

Calls `_getReserves` which returns the current amount of reserves in the pool.

#### Returns

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_reserve0` | uint256 | amount of reserve0 |
| `_reserve1` | uint256 | amount of reserve1 |

### \_getReservesAndBalances

```
function _getReservesAndBalances()
        internal
        view
        returns (
            uint256 _reserve0,
            uint256 _reserve1,
            uint256 balance0,
            uint256 balance1
        )
```

Internal helper function that returns the amount of reserves and balances in the pool.

#### Returns

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_reserve0` | uint256 | amount of reserve0 |
| `_reserve1` | uint256 | amount of reserve1 |
| `balance0`  | uint256 | balance of token0  |
| `balance1`  | uint256 | balance of token1  |

### \_updateReserves

```
function _updateReserves() internal
```

Internal function to update the reserves in the pool.

### \_getAmountOut

```
function _getAmountOut(
        uint256 amountIn,
        uint256 _reserve0,
        uint256 _reserve1,
        bool token0In
    ) internal view returns (uint256 dy)
```

Internal function that calculates the amount of a withdrawal and returns the data needed to make that withdrawal.

#### Parameters

| Name        | Type    | Description                            |
| :---------- | :------ | :------------------------------------- |
| `amountIn`  | uint256 | amount of token to withdraw            |
| `_reserve0` | uint256 | amount of reserve0                     |
| `_reserve1` | uint256 | amount of reserve1                     |
| `token0In`  | bool    | adding tokens as well (true if adding) |

#### Parameters

| Name | Type    | Description                   |
| :--- | :------ | :---------------------------- |
| `dy` | uint256 | data needed to withdraw token |

### getAmountOut

```
function getAmountOut(bytes calldata data) public view override returns (uint256 finalAmountOut)
```

Calls `_getAmountOut` and uses the data returned to withdraw tokens.

#### Parameters

| Name   | Type  | Description                    |
| :----- | :---- | :----------------------------- |
| `data` | bytes | data needed to withdraw tokens |

#### Returns

| Name             | Type    | Description                  |
| :--------------- | :------ | :--------------------------- |
| `finalAmountOut` | uint256 | amount of tokens to withdraw |

### \_transfer

```
function _transfer(
        address token,
        uint256 amount,
        address to,
        bool unwrapBento
    ) internal
```

Internal function to transfer tokens or `bento` shares.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `token`       | address | address of token to transfer                        |
| `amount`      | uint256 | amount of token to transfer                         |
| `to`          | address | address of recipient                                |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |

### \_computeLiquidity

```
function _computeLiquidity(uint256 _reserve0, uint256 _reserve1) internal view returns (uint256 liquidity)
```

Internal function that gets D (the StableSwap invariant) based on a set of balances and a particular A.

See the [StableSwap Whitepaper](https://curve.fi/files/stableswap-paper.pdf) for more details.

#### Parameters

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_reserve0` | uint256 | amount of reserve0 |
| `_reserve1` | uint256 | amount of reserve1 |

#### Returns

| Name        | Type    | Description                             |
| :---------- | :------ | :-------------------------------------- |
| `liquidity` | uint256 | invariant, at the precision of the pool |

### computeLiquidityFromAdjustedBalances

```
function _computeLiquidityFromAdjustedBalances(uint256 xp0, uint256 xp1) internal view returns (uint256 computed)
```

Internal function that computes and returns the liquidity from the given balances (adjusted).

#### Parameters

| Name  | Type    | Description                  |
| :---- | :------ | :--------------------------- |
| `xp0` | uint256 | adjusted balance of reserve0 |
| `xp1` | uint256 | adjusted balance of reserve1 |

#### Returns

| Name       | Type    | Description                  |
| :--------- | :------ | :--------------------------- |
| `computed` | uint256 | computed amount of liquidity |

### \_getY

```
function _getY(uint256 x, uint256 D) internal view returns (uint256 y)
```

Internal function that calculates the new balances of the tokens, given the indexes of the token that is swapped from and the tokens that is swapped to.

#### Parameters

| Name | Type    | Description                        |
| :--- | :------ | :--------------------------------- |
| `x`  | uint256 | the new total amount of FROM token |
| `D`  | uint256 | index of FROM token                |

#### Returns

| Name | Type    | Description                                   |
| :--- | :------ | :-------------------------------------------- |
| `y`  | uint256 | amount of TO token that should remain in pool |

### \_mintFee

```
function _mintFee(uint256 _reserve0, uint256 _reserve1) internal returns (uint256 _totalSupply, uint256 d)
```

Internal function used to calculate and return the mint fee and total supply.

#### Parameters

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_reserve0` | uint256 | amount in reserve0 |
| `_reserve1` | uint256 | amount in reserve1 |

#### Returns

| Name           | Type    | Description              |
| :------------- | :------ | :----------------------- |
| `_totalSupply` | uint256 | total supply of reserves |
| `d`            | uint256 | calculated mint fee      |

### \_nonOptimalMintFee

```
function _nonOptimalMintFee(
        uint256 _amount0,
        uint256 _amount1,
        uint256 _reserve0,
        uint256 _reserve1
    ) internal view returns (uint256 token0Fee, uint256 token1Fee)
```

Internal function used to calculate the non optimal mint fee, which is charged to cover for `swapFee` when users add unbalanced liquidity.

#### Parameters

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_amount0`  | uint256 | balance of token0  |
| `_amount1`  | uint256 | balance of token1  |
| `_reserve0` | uint256 | amount of reserve0 |
| `_reserve1` | uint256 | amount of reserve1 |

#### Returns

| Name        | Type    | Description                     |
| :---------- | :------ | :------------------------------ |
| `token0Fee` | uint256 | non-optimal mint fee for token0 |
| `token1Fee` | uint256 | non-optimal mint fee for token1 |

### getAssets

```
function getAssets() public view override returns (address[] memory assets)
```

Returns an array of the assets in the pool.

#### Returns

| Name     | Type      | Description              |
| :------- | :-------- | :----------------------- |
| `assets` | address[] | array of asset addresses |

### getVirtualPrice

```
function getVirtualPrice() public view returns (uint256 virtualPrice)
```

Grabs and returns the virtual price.

#### Returns

| Name           | Type    | Description       |
| :------------- | :------ | :---------------- |
| `virtualPrice` | uint256 | the virtual price |
