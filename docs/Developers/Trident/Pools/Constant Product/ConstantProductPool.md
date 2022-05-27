---
sidebar_position: 1
---

# ConstantProductPool

This is a Trident exchange pool template with constant product formula for swapping between an ERC-20 token pair.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/constant-product/ConstantProductPool.sol).

## Functions

### mint

```
 function mint(bytes calldata data) public override nonReentrant returns (uint256 liquidity)
```

Mints LP tokens and returns the amount of liquidity; should be called via the router after transferring `bento` tokens.

#### Parameters

| Name   | Type  | Description                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | data needed to mint LP tokens |

#### Returns

| Name        | Type    | Description         |
| :---------- | :------ | :------------------ |
| `liquidity` | uint256 | amount of liquidity |

### burn

```
 function burn(bytes calldata data) public override nonReentrant returns (IPool.TokenAmount[] memory withdrawnAmounts)
```

Burns LP tokens that are sent to this contract and returns the withdrawn amounts.

#### Parameters

| Name   | Type  | Description                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | data needed to burn LP tokens |

#### Returns

| Name               | Type                | Description                |
| :----------------- | :------------------ | :------------------------- |
| `withdrawnAmounts` | IPool.TokenAmount[] | array of withdrawn amounts |

### burnSingle

```
function burnSingle(bytes calldata data) public override nonReentrant returns (uint256 amountOut)
```

Burns LP tokens that are sent to this contract and swaps one of the output tokens for another.

#### Parameters

| Name   | Type  | Description                   |
| :----- | :---- | :---------------------------- |
| `data` | bytes | data needed to burn LP tokens |

#### Returns

| Name        | Type    | Description            |
| :---------- | :------ | :--------------------- |
| `amountOut` | uint256 | amount of output token |

### swap

```
function swap(bytes calldata data) public override nonReentrant returns (uint256 amountOut)
```

Swaps one token for another; the router must prefund this contract and ensure there isn't too much slippage.

#### Parameters

| Name   | Type  | Description                |
| :----- | :---- | :------------------------- |
| `data` | bytes | data needed to swap tokens |

#### Returns

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `amountOut` | uint256 | amount of token received in swap |

### flashSwap

```
function flashSwap(bytes calldata data) public override nonReentrant returns (uint256 amountOut)
```

Flash swaps one token for another; the router must support swap callbacks and ensure there isn't too much slippage.

#### Parameters

| Name   | Type  | Description                      |
| :----- | :---- | :------------------------------- |
| `data` | bytes | data needed to flash swap tokens |

#### Returns

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `amountOut` | uint256 | amount of token received in swap |

### updateBarParameters

```
function updateBarParameters() public
```

Updates `barFee` and `barFeeTo` for Trident protocol.

### \_update

```
function _update(
        uint256 balance0,
        uint256 balance1,
        uint112 _reserve0,
        uint112 _reserve1,
        uint32 _blockTimestampLast
    ) internal
```

Internal function that updates balances and reserves of pool.

#### Parameters

| Name                  | Type    | Description                      |
| :-------------------- | :------ | :------------------------------- |
| `balance0`            | uint256 | balance of asset to update       |
| `balance1`            | uint256 | balance of other asset to update |
| `_reserve0`           | uint112 | reserves of first asset          |
| `_reserve1`           | uint112 | reserves of second asset         |
| `_blockTimestampLast` | uint32  | timestamp                        |

### \_mintFee

```
function _mintFee(uint112 _reserve0, uint112 _reserve1) internal returns (uint256 _totalSupply, uint256 computed)
```

Internal function that mints and transfers bar fees to the receiver and returns the total supply as well as the computed amount of bar fees.

#### Parameters

| Name        | Type    | Description                         |
| :---------- | :------ | :---------------------------------- |
| `_reserve0` | uint112 | first reserve to calculate fees on  |
| `_reserve1` | uint112 | second reserve to calculate fees on |

#### Returns

| Name           | Type    | Description                         |
| :------------- | :------ | :---------------------------------- |
| `_totalSupply` | uint256 | first reserve to calculate fees on  |
| `computed`     | uint256 | second reserve to calculate fees on |

### \_getAmountOut

```
function _getAmountOut(
        uint256 amountIn,
        uint256 reserveAmountIn,
        uint256 reserveAmountOut
    ) internal view returns (uint256 amountOut)
```

Internal function that calculates the amount of an asset to remove and returns that amount.

#### Parameters

| Name               | Type    | Description                       |
| :----------------- | :------ | :-------------------------------- |
| `amountIn`         | uint256 | amount of tokens user has in pool |
| `reserveAmountIn`  | uint256 | amount to go into reserve         |
| `reserveAmountOut` | uint256 | amount to come out of reserve     |

#### Returns

| Name        | Type    | Description                    |
| :---------- | :------ | :----------------------------- |
| `amountOut` | uint256 | amount of tokens to be removed |

### \_getAmountIn

```
function _getAmountIn(
        uint256 amountOut,
        uint256 reserveAmountIn,
        uint256 reserveAmountOut
    ) internal view returns (uint256 amountIn)
```

Internal function that calculates the amount of an asset to add and returns that amount.

#### Parameters

| Name               | Type    | Description                            |
| :----------------- | :------ | :------------------------------------- |
| `amountOut`        | uint256 | amount of tokens user is trying to add |
| `reserveAmountIn`  | uint256 | amount to go into reserve              |
| `reserveAmountOut` | uint256 | amount to come out of reserve          |

#### Returns

| Name       | Type    | Description                  |
| :--------- | :------ | :--------------------------- |
| `amountIn` | uint256 | amount of tokens to be added |

### getAmountOut

```
function getAmountOut(bytes calldata data) public view override returns (uint256 finalAmountOut)
```

Calls `_getAmountOut` and calculates the amount of an asset to remove.

#### Paramters

| Name   | Type  | Description                  |
| :----- | :---- | :--------------------------- |
| `data` | bytes | data needed for calculations |

#### Returns

| Name             | Type    | Description                    |
| :--------------- | :------ | :----------------------------- |
| `finalAmountOut` | uint256 | amount of tokens to be removed |

### getAmountIn

```
function getAmountIn(bytes calldata data) public view override returns (uint256 finalAmountIn)
```

Calls `_getAmountIn` and calculates the amount of an asset to add.

#### Paramters

| Name   | Type  | Description                  |
| :----- | :---- | :--------------------------- |
| `data` | bytes | data needed for calculations |

#### Returns

| Name            | Type    | Description                  |
| :-------------- | :------ | :--------------------------- |
| `finalAmountIn` | uint256 | amount of tokens to be added |

### \_transfer

```
function _transfer(
        address token,
        uint256 shares,
        address to,
        bool unwrapBento
    ) internal
```

Internal function that transfers `bento` shares.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `token`       | address | address of token to transfer                        |
| `shares`      | uint256 | amount of shares to transfer                        |
| `to`          | address | address of receiver                                 |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |

### \_nonOptimalMintFee

```
function _nonOptimalMintFee(
        uint256 _amount0,
        uint256 _amount1,
        uint256 _reserve0,
        uint256 _reserve1
    ) internal view returns (uint256 token0Fee, uint256 token1Fee)
```

Internal function that calculates the non-optimal mint fee, which is a fee charged to cover for `swapFee` when users add unbalanced liquidity, and returns it for each asset.

#### Parameters

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `_amount0`  | uint256 | amount of token0   |
| `_amount1`  | uint256 | amount of token1   |
| `_reserve0` | uint256 | amount of reserve0 |
| `_reserve1` | uint256 | amount of reserve1 |

#### Returns

| Name        | Type    | Description                 |
| :---------- | :------ | :-------------------------- |
| `token0Fee` | uint256 | token0 non-optimal mint fee |
| `token1Fee` | uint256 | token1 non-optimal mint fee |

### getAssets

```
function getAssets() public view override returns (address[] memory assets)
```

Returns an array containing the addresses of the two assets.

#### Returns

| Name     | Type      | Description                           |
| :------- | :-------- | :------------------------------------ |
| `assets` | address[] | array containing both asset addresses |

### \_getReserves

```
function _getReserves()
        internal
        view
        returns (
            uint112 _reserve0,
            uint112 _reserve1,
            uint32 _blockTimestampLast
        )
```

Internal function that returns the amount of reserves in `bento` shares.

#### Returns

| Name                  | Type    | Description        |
| :-------------------- | :------ | :----------------- |
| `_reserve0`           | uint112 | amount of reserve0 |
| `_reserve1`           | uint112 | amount of reserve1 |
| `_blockTimestampLast` | uint32  | timestamp          |

### getReserves

```
function getReserves()
        public
        view
        returns (
            uint112 _reserve0,
            uint112 _reserve1,
            uint32 _blockTimestampLast
        )
```

Calls `_getReserves` and returns the amount of reserves in `bento` shares.

#### Returns

| Name                  | Type    | Description        |
| :-------------------- | :------ | :----------------- |
| `_reserve0`           | uint112 | amount of reserve0 |
| `_reserve1`           | uint112 | amount of reserve1 |
| `_blockTimestampLast` | uint32  | timestamp          |

### getNativeReserves

```
function getNativeReserves()
        public
        view
        returns (
            uint256 _nativeReserve0,
            uint256 _nativeReserve1,
            uint32 _blockTimestampLast
        )
```

Returns the amount of reserces in native ERC-20 token amounts.

#### Returns

| Name                  | Type    | Description                          |
| :-------------------- | :------ | :----------------------------------- |
| `_reserve0`           | uint112 | amount of reserve0 (in native token) |
| `_reserve1`           | uint112 | amount of reserve1 (in native token) |
| `_blockTimestampLast` | uint32  | timestamp                            |
