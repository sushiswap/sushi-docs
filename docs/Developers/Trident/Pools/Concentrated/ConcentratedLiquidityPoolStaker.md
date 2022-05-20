---
sidebar_position: 6
---

# ConcentratedLiquidityPoolStaker

This is a Trident Concentrated Liquidity Pool periphery contract that combines non-fungible position management and staking.

## Functions

### addIncentive

```
 function addIncentive(IConcentratedLiquidityPool pool, Incentive memory incentive) public
```

Adds an incentive to the pool.

#### Parameters

| Name        | Type                       | Description          |
| :---------- | :------------------------- | :------------------- |
| `pool`      | IConcentratedLiquidityPool | pool instance        |
| `incentive` | Incentive                  | the incentive to add |

### reclaimIncentive

```
function reclaimIncentive(
        IConcentratedLiquidityPool pool,
        uint256 incentiveId,
        address receiver,
        uint96 amount,
        bool unwrapBento
    ) public
```

Withdraws any unclaimed incentive rewards.

#### Parameters

| Name          | Type                       | Description                                         |
| :------------ | :------------------------- | :-------------------------------------------------- |
| `pool`        | IConcentratedLiquidityPool | pool instance                                       |
| `incentiveId` | uint256                    | incentive ID                                        |
| `receiver`    | address                    | address of receiver                                 |
| `amount`      | uint96                     | amount of rewards to claim                          |
| `unwrapBento` | bool                       | boolean for whether to unwrap `bento` shares or not |

### subscribe

```
function subscribe(uint256 positionId, uint256[] calldata incentiveId) external
```

Subscribes a non-fungible position token to an incentive.

#### Parameters

| Name          | Type      | Description                                       |
| :------------ | :-------- | :------------------------------------------------ |
| `positionId`  | uint256   | position ID                                       |
| `incentiveId` | uint256[] | array of incentive IDs to subscribe a position to |

### claimRewards

```
function claimRewards(
        uint256 positionId,
        uint256[] memory incentiveIds,
        address recipient,
        bool unwrapBento
    ) public
```

Claims rewards from pool.

#### Parameters

| Name           | Type      | Description                                         |
| :------------- | :-------- | :-------------------------------------------------- |
| `positionId`   | uint256   | position ID to claim rewards from                   |
| `incentiveIds` | uint256[] | array of incentive IDs                              |
| `recipient`    | address   | address of receiver                                 |
| `unwrapBento`  | bool      | boolean for whether to unwrap `bento` shares or not |

### getReward

```
function getReward(uint256 positionId, uint256 incentiveId) public view returns (uint256 rewards, uint256 secondsInside)
```

Calculates the amount of rewards owed on a position and returns the amount and seconds per liquidity.

#### Parameters

| Name          | Type    | Description                         |
| :------------ | :------ | :---------------------------------- |
| `positionId`  | uint256 | position ID to caclulate rewards on |
| `incentiveId` | uint256 | incentive ID                        |

#### Returns

| Name            | Type    | Description                    |
| :-------------- | :------ | :----------------------------- |
| `rewards`       | uint256 | amount of rewards position has |
| `secondsInside` | uint256 | seconds per liquidity          |

### rangeSecondsInside

```
 function rangeSecondsInside(
        IConcentratedLiquidityPool pool,
        int24 lowerTick,
        int24 upperTick
    ) public view returns (uint256 secondsInside)
```

Calculates the seconds per liquidity accumulator for a range and returns the seconds per liquidity.

#### Parameters

| Name        | Type                       | Description   |
| :---------- | :------------------------- | :------------ |
| `pool`      | IConcentratedLiquidityPool | pool instance |
| `upperTick` | int24                      | lower tick    |
| `lowerTick` | int24                      | upper tick    |

#### Returns

#### Returns

| Name            | Type    | Description           |
| :-------------- | :------ | :-------------------- |
| `secondsInside` | uint256 | seconds per liquidity |

### \_transfer

```
function _transfer(
        address token,
        address from,
        address to,
        uint256 shares,
        bool unwrapBento
    ) internal
```

Internal transfer function.

#### Parameters

| Name          | Type    | Description                                         |
| :------------ | :------ | :-------------------------------------------------- |
| `token`       | address | address of token to transfer                        |
| `from`        | address | address of sender                                   |
| `to`          | address | address of receiver                                 |
| `shares`      | uint256 | amount of shares to transfer                        |
| `unwrapBento` | bool    | boolean for whether to unwrap `bento` shares or not |
