---
sidebar_position: 2
---

# ConcentratedLiquidityPool

This is the implementation of the Trident Concentrated Liquidity Pool.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/concentrated/ConcentratedLiquidityPool.sol).

## Functions

### setPrice

```
function setPrice(uint160 _price) external
```

Sets the price, only called once from the factory; not a constructor parameter to allow for predictable address calculation.

#### Parameters

| Name     | Type    | Description  |
| :------- | :------ | :----------- |
| `_price` | uint160 | price to set |

### mint

```
function mint(MintParams memory mintParams) public lock returns (uint256 liquidityMinted)
```

Mints LP tokens; should be called via the Concentrated Liquidity Pool manager contract.

#### Parameters

| Name         | Type       | Description                   |
| :----------- | :--------- | :---------------------------- |
| `mintParams` | MintParams | data needed to mint LP tokens |

#### Returns

| Name              | Type    | Description                |
| :---------------- | :------ | :------------------------- |
| `liquidityMinted` | uint256 | amount of LP tokens minted |

### burn

```
function burn(
        int24 lower,
        int24 upper,
        uint128 amount
    )
        public
        lock
        returns (
            uint256 token0Amount,
            uint256 token1Amount,
            uint256 token0Fees,
            uint256 token1Fees
        )
```

Burns LP tokens.

#### Parameters

| Name     | Type    | Description              |
| :------- | :------ | :----------------------- |
| `lower`  | int24   | lower bound price        |
| `upper`  | int24   | upper bound price        |
| `amount` | uint128 | amount of tokens to burn |

#### Returns

| Name           | Type    | Description                      |
| :------------- | :------ | :------------------------------- |
| `token0Amount` | uint256 | amount of token0 returned        |
| `token1Amount` | uint256 | amount of token1 returned        |
| `token0Fees`   | uint256 | amount of token0's fees returned |
| `token1Fees`   | uint256 | amount of token1's fees returned |

### collect

```
function collect(int24 lower, int24 upper) public lock returns (uint256 amount0fees, uint256 amount1fees)
```

Collects fees for user.

#### Parameters

| Name    | Type  | Description       |
| :------ | :---- | :---------------- |
| `lower` | int24 | lower bound price |
| `upper` | int24 | upper bound price |

#### Returns

| Name          | Type    | Description                       |
| :------------ | :------ | :-------------------------------- |
| `amount0fees` | uint256 | amount of token0's fees collected |
| `amount1fees` | uint256 | amount of token1's fees collected |

### \_updateSecondsPerLiquidity

```
function _updateSecondsPerLiquidity(uint256 currentLiquidity) internal
```

Internal function used to calculate liquidity flows per second.

#### Parameters

| Name               | Type    | Description              |
| :----------------- | :------ | :----------------------- |
| `currentLiquidity` | uint256 | previous liquidity level |

### swap

```
function swap(bytes memory data) public lock returns (uint256 amountOut)
```

Swaps one token for another; the router must prefund this contract and ensure there isn't too much slippage.

#### Parameters

| Name   | Type  | Description                 |
| :----- | :---- | :-------------------------- |
| `data` | bytes | data needed to perform swap |

#### Returns

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `amountOut` | uint256 | amount of swapped token returned |

### updateBarFee

```
function updateBarFee() public
```

Updates the `barFee` for Trident protocol.

### collectProtocolFee

```
function collectProtocolFee() public lock returns (uint128 amount0, uint128 amount1)
```

Collects fees for Trident protocol.

#### Returns

| Name      | Type    | Description           |
| :-------- | :------ | :-------------------- |
| `amount1` | uint128 | amount of token0 fees |
| `amount2` | uint128 | amount of token1 fees |

### \_updateReserves

```
function _updateReserves(
        bool zeroForOne,
        uint128 inAmount,
        uint256 amountOut
    ) internal
```

Internal function that updates the amount of reserves in pool.

#### Parameters

| Name         | Type    | Description                                          |
| :----------- | :------ | :--------------------------------------------------- |
| `zeroForOne` | bool    | update amount for token0 or token1 (true for token0) |
| `inAmount`   | uint128 | amount in                                            |
| `amountOut`  | uint128 | amount to remove                                     |

### \_updateFees

```
function _updateFees(
        bool zeroForOne,
        uint256 feeGrowthGlobal,
        uint128 protocolFee
    ) internal
```

Internal function that updates total fees for pool.

#### Parameters

| Name              | Type    | Description                                        |
| :---------------- | :------ | :------------------------------------------------- |
| `zeroForOne`      | bool    | update fees for token0 or token1 (true for token0) |
| `feeGrowthGlobal` | uint256 | global fee growth                                  |
| `protocolFee`     | uint128 | fee to update                                      |

### \_updatePosition

```
function _updatePosition(
        address owner,
        int24 lower,
        int24 upper,
        int128 amount
    ) internal returns (uint256 amount0Fees, uint256 amount1Fees)
```

Internal function that updates user's position in pool.

#### Parameters

| Name     | Type    | Description                            |
| :------- | :------ | :------------------------------------- |
| `owner`  | address | address of user to update position for |
| `lower`  | uint24  | lower tick                             |
| `upper`  | uint24  | upper tick                             |
| `amount` | uint128 | amount to add / remove from position   |

#### Returns

| Name          | Type    | Description |
| :------------ | :------ | :---------- |
| `amount0Fees` | uint256 | token0 fees |
| `amount1Fees` | uint256 | token1 fees |

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

| Name          | Type    | Description                               |
| :------------ | :------ | :---------------------------------------- |
| `token`       | address | address of asset to transfer              |
| `shares`      | uint256 | amount to transfer in `bento` shares      |
| `to`          | address | address to transfer shares to             |
| `unwrapBento` | bool    | boolean to unwrap shares (true to unwrap) |

### \_transferBothTokens

```
function _transferBothTokens(
        address to,
        uint256 shares0,
        uint256 shares1
    ) internal
```

Internal function that transfers both token0 and token1 (in shares).

#### Parameters

| Name      | Type    | Description                                    |
| :-------- | :------ | :--------------------------------------------- |
| `to`      | address | address of recipient of tokens                 |
| `shares0` | uint256 | amount of token0 to transfer in `bento` shares |
| `shares1` | uint256 | amount of token1 to transfer in `bento` shares |

### rangeFeeGrowth

```
function rangeFeeGrowth(int24 lowerTick, int24 upperTick) public view returns (uint256 feeGrowthInside0, uint256 feeGrowthInside1)
```

View function that calculates the fee growth inside a range (per unit of liquidity).

#### Parameters

| Name        | Type  | Description |
| :---------- | :---- | :---------- |
| `lowerTick` | int24 | lower tick  |
| `upperTick` | int24 | upper tick  |

#### Returns

| Name               | Type    | Description        |
| :----------------- | :------ | :----------------- |
| `feeGrowthInside0` | uint256 | fee growth below 1 |
| `feeGrowthInside1` | uint256 | fee growth above 1 |

### getAssets

```
function getAssets() public view returns (address[] memory assets)
```

Returns addresses of both assets in pool.

#### Returns

| Name    | Type      | Description                             |
| :------ | :-------- | :-------------------------------------- |
| `assets | address[] | array containing both assets' addresses |

### getImmutables

```
function getImmutables()
        public
        view
        returns (
            uint128 _MAX_TICK_LIQUIDITY,
            uint24 _tickSpacing,
            uint24 _swapFee,
            address _barFeeTo,
            IBentoBoxMinimal _bento,
            IMasterDeployer _masterDeployer,
            address _token0,
            address _token1
        )
```

View function that returns all of the immutable variables of the pool.

#### Returns

| Name                 | Type             | Description                      |
| :------------------- | :--------------- | :------------------------------- |
| `MAX_TICK_LIQUIDITY` | uint128          | max tick liquidity               |
| `_tickSpacing`       | uint24           | tick spacing                     |
| `_swapFee`           | uint24           | the swap fee                     |
| `_barFeeTo`          | address          | address of recipient of bar fees |
| `_bento`             | IBentoBoxMinimal | BentoBox implementation          |
| `_masterDeployer`    | IMasterDeployer  | MasterDeployer implementation    |
| `token0`             | address          | address of token0                |
| `token1`             | address          | address of token1                |

### getPriceAndNearestTicks

```
function getPriceAndNearestTicks() public view returns (uint160 _price, int24 _nearestTick)
```

Helper function that returns the price and nearest tick.

#### Returns

| Name           | Type    | Description  |
| :------------- | :------ | :----------- |
| `_price`       | uint160 | price        |
| `_nearestTick` | int24   | nearest tick |

### getTokenProtocolFees

```
function getTokenProtocolFees() public view returns (uint128 _token0ProtocolFee, uint128 _token1ProtocolFee)
```

Helper function that returns the protocol fees for each asset.

#### Returns

| Name                 | Type    | Description            |
| :------------------- | :------ | :--------------------- |
| `_token0ProtocolFee` | uint128 | protocol fee of token0 |
| `_token1ProtocolFee` | uint128 | protocol fee of token1 |

### getReserves

```
function getReserves() public view returns (uint128 _reserve0, uint128 _reserve1)
```

Helper function that returns the reserves for each asset.

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `_reserve0` | uint128 | amount of reserves of token0 |
| `_reserve1` | uint128 | amount of reserves of token1 |

### getSecondsGrowthAndLastObservation

```
function getSecondsGrowthAndLastObservation() public view returns (uint160 _secondsGrowthGlobal, uint32 _lastObservation)
```

Helper function that returns the global seconds growth and the most recent observation.

#### Returns

| Name                   | Type    | Description           |
| :--------------------- | :------ | :-------------------- |
| `_secondsGrowthGlobal` | uint160 | global seconds growth |
| `_lastObservation`     | uint32  | last observation      |
