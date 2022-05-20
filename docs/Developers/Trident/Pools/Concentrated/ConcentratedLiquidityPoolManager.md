---
sidebar_position: 5
---

# ConcentratedLiquidityPoolManager

This is a Trident Concentrated Liquidity Pool periphery contract that combines non-fungible position management and staking.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/concentrated/ConcentratedLiquidityPoolManager.sol).

## Functions

### mint

```
function mint(
        IConcentratedLiquidityPool pool,
        int24 lowerOld,
        int24 lower,
        int24 upperOld,
        int24 upper,
        uint128 amount0Desired,
        uint128 amount1Desired,
        bool native,
        uint256 minLiquidity,
        uint256 positionId
    ) external payable returns (uint256 _positionId)
```

Mints LP tokens.

#### Parameters

| Name             | Type                       | Description               |
| :--------------- | :------------------------- | :------------------------ |
| `pool`           | IConcentratedLiquidityPool | pool instance             |
| `lowerOld`       | int24                      | previous lower tick       |
| `lower`          | int24                      | lower tick                |
| `upperOld`       | int24                      | previous upper tick       |
| `upper`          | int24                      | upper tick                |
| `amount0Desired` | uint128                    | amount of token0 you want |
| `amount1Desired` | uint128                    | amount of token1 you want |
| `native`         | bool                       | native or not             |
| `minLiquidity`   | uint256                    | minimum liquidity         |
| `positionId`     | uint256                    | the position ID           |

#### Returns

| Name          | Type    | Description         |
| :------------ | :------ | :------------------ |
| `_positionId` | uint256 | the new position ID |

### mintCallback

```
function mintCallback(
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        bool native
    ) external override
```

Callback function for minting.

#### Parameters

| Name      | Type    | Description       |
| :-------- | :------ | :---------------- |
| `token0`  | address | address of token0 |
| `token1`  | address | address of token1 |
| `amount0` | uint256 | amount of token0  |
| `amount1` | uint256 | amount of token1  |
| `native`  | bool    | native or not     |

### burn

```
function burn(
        uint256 tokenId,
        uint128 amount,
        address recipient,
        bool unwrapBento,
        uint256 minimumOut0,
        uint256 minimumOut1
    ) external returns (uint256 token0Amount, uint256 token1Amount)
```

Burns LP tokens and returns the amount of each asset received.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `tokenId`     | uint256 | token ID                                            |
| `amount`      | uint128 | amount of LP tokens to burn                         |
| `recipient`   | address | address of recipient                                |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |
| `minimumOut0` | uint256 | minimum amount of token0 one is willing to receive  |
| `minimumOut1` | uint256 | minimum amount of token1 one is willing to receive  |

#### Returns

| Name           | Type    | Description                         |
| :------------- | :------ | :---------------------------------- |
| `token0Amount` | uint256 | amount of token0 recipient received |
| `token1Amount` | uint256 | amount of token1 recipient received |

### collect

```
function collect(
        uint256 tokenId,
        address recipient,
        bool unwrapBento
    ) public returns (uint256 token0amount, uint256 token1amount)
```

Collects position fees and returns the amount of fees accumulated for each asset in pool.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `tokenId`     | uint256 | token ID                                            |
| `recipient`   | address | address of recipient                                |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |

#### Returns

| Name           | Type    | Description                              |
| :------------- | :------ | :--------------------------------------- |
| `token0Amount` | uint256 | amount of token0 fees recipient received |
| `token1Amount` | uint256 | amount of token1 fees recipient received |

### positionFees

```
function positionFees(uint256 tokenId)
        public
        view
        returns (
            uint256 token0amount,
            uint256 token1amount,
            uint256 feeGrowthInside0,
            uint256 feeGrowthInside1
        )
```

Returns the claimable fees and the fee growth accumulators of a given position.

#### Parameters

| Name      | Type    | Description                   |
| :-------- | :------ | :---------------------------- |
| `tokenId` | uint256 | token ID of position to check |

#### Returns

| Name               | Type    | Description                                |
| :----------------- | :------ | :----------------------------------------- |
| `token0Amount`     | uint256 | amount of token0 claimable fees            |
| `token1Amount`     | uint256 | amount of token0 claimable fees            |
| `feeGrowthInside0` | uint256 | fee growth accumulator for token0 position |
| `feeGrowthInside1` | uint256 | fee growth accumulator for token1 position |

### \_transferBoth

```
function _transferBoth(
        IConcentratedLiquidityPool pool,
        address to,
        uint256 token0Amount,
        uint256 token1Amount,
        bool unwrapBento
    ) internal
```

Internal function that transfers both assets in pool at same time.

#### Parameters

| Name           | Type                       | Description                                         |
| :------------- | :------------------------- | :-------------------------------------------------- |
| `pool`         | IConcentratedLiquidityPool | pool instance                                       |
| `to`           | address                    | address of recipient                                |
| `token0Amount` | uint256                    | amount of token0 to transfer                        |
| `token1Amount` | uint256                    | amount of token0 to transfer                        |
| `unwrapBento`  | bool                       | boolean for whether to unwrap `bento` shares or not |

### \_transferOut

```
function _transferOut(
        address token,
        address to,
        uint256 shares,
        bool unwrapBento
    ) internal
```

Internal function that transfers a single asset out of the pool.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `token`       | address | address of token to transfer out of pool            |
| `to`          | address | address of recipient                                |
| `shares`      | uint256 | amount of `bento` shares to transfer out            |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |

### \_depositFromUserToBentoBox

```
function _depositFromUserToBentoBox(
        address token,
        address sender,
        address recipient,
        uint256 amount
    ) internal
```

Internal function that allows user to deposit to BentoBox.

#### Parameters

| Name        | Type    | Description                               |
| :---------- | :------ | :---------------------------------------- |
| `token`     | address | address of token to deposit into BentoBox |
| `sender`    | address | address of sender                         |
| `recipient` | address | address of recipient                      |
| `amount`    | uint256 | amount to deposit into BentoBox           |
