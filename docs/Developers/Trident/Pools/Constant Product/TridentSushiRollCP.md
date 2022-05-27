# TridentSushiRollCP

This contract migrates liquidity from a Uniswap V2 style pool to a Trident Constant Product Pool.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/migration/TridentSushiRollCP.sol).

## Functions

### migrateLegacyToCP

```
function migrateLegacyToCP(
        IUniswapV2Minimal pair,
        uint256 amount,
        uint256 swapFee,
        bool twapSupport,
        uint256 minToken0Received,
        uint256 minToken1Received,
        uint256 minLpReceived
    ) external returns (uint256 liquidity)
```

Migrates existing SushiSwap or other Uniswap V2 style pools to Trident and returns the amount migrated.

#### Parameters

| Name                | Type              | Description                                                      |
| :------------------ | :---------------- | :--------------------------------------------------------------- |
| `pair`              | IUniswapV2Minimal | Uniswap V2 style liquidity pool address                          |
| `amount`            | uint256           | LP token balance to be migrated                                  |
| `swapFee`           | uint256           | swap fee of the CP pool being migrated into                      |
| `twapSupport`       | bool              | does CP pool moving into support TWAP oracles                    |
| `minToken0Received` | uint256           | slippage protection for removing liquidity from UniV2 style pool |
| `minToken1Received` | uint256           | slippage protection for removing liquidity from UniV2 style pool |
| `minLpReceived`     | uint256           | slippage protection for minting liquidity on Trident CP pool     |

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `liquidity` | uint256 | amount of liquidity migrated |

### migrateCP

```
function migrateCP(
        IConstantProductPool currentPool,
        uint256 amount,
        uint256 swapFee,
        bool twapSupport,
        uint256 minToken0Received,
        uint256 minToken1Received,
        uint256 minLpReceived
    ) external returns (uint256 liquidity)
```

Migrates between Trident Constant Product pools with different fee / TWAP settings.

#### Parameters

| Name                | Type                 | Description                                                                |
| :------------------ | :------------------- | :------------------------------------------------------------------------- |
| `currentPool`       | IConstantProductPool | Trident CP address we want to migrate from (can be an outdated CP factory) |
| `amount`            | uint256              | LP token balance to be migrated                                            |
| `swapFee`           | uint256              | swap fee of the CP pool being migrated into                                |
| `twapSupport`       | bool                 | does CP pool moving into support TWAP oracles                              |
| `minToken0Received` | uint256              | slippage protection for removing liquidity from UniV2 style pool           |
| `minToken1Received` | uint256              | slippage protection for removing liquidity from UniV2 style pool           |
| `minLpReceived`     | uint256              | slippage protection for minting liquidity on Trident CP pool               |

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `liquidity` | uint256 | amount of liquidity migrated |
