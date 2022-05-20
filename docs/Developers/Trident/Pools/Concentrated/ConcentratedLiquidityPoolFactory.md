---
sidebar_position: 3
---

# ConcentratedLiquidityPoolFactory

This is the factory contract for deploying Concentrated Liquidity Pools on Trident with configurations.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/concentrated/ConcentratedLiquidityPoolFactory.sol).

## Functions

### deployPool

```
function deployPool(bytes memory _deployData) external returns (address pool)
```

Deploys a Concentrated Liquidity Pool with custom configurations and returns the newly deployed pool's address.

#### Parameters

| Name          | Type  | Description                |
| :------------ | :---- | :------------------------- |
| `_deployData` | bytes | data needed to deploy pool |

#### Returns

| Name   | Type    | Description                    |
| :----- | :------ | :----------------------------- |
| `pool` | address | address of newly deployed pool |
