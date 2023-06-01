---
sidebar_position: 1
---

# V3PoolDeployer

The Deployer is used to deploy new Sushi V3 AMM pools.

## State-Changing Functions

### deploy

```solidity
function deploy(
    address factory,
    address token0,
    address token1,
    uint24 fee,
    int24 tickSpacing
) internal returns (address pool);
```

This function deploys a new Uniswap V3 pool instance, initialized with the specified parameters. A unique salt derived from the `token0`, `token1`, and `fee` values is used to create a deterministic address for the new pool.

#### Parameters

| Name          | Type    | Description                                              |
| :------------ | :------ | :------------------------------------------------------- |
| `factory`     | address | the address of the Uniswap V3 factory                    |
| `token0`      | address | the address of the first token in the pool               |
| `token1`      | address | the address of the second token in the pool              |
| `fee`         | uint24  | the pool's swap fee rate (in parts per million)          |
| `tickSpacing` | int24   | the number of price tick indexes between supported ticks |

#### Returns

| Name   | Type    | Description                                       |
| :----- | :------ | :------------------------------------------------ |
| `pool` | address | the address of the newly deployed Uniswap V3 pool |
