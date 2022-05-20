---
sidebar_position: 4
---

# ConcentratedLiquidityPoolHelper

This is a Trident Concentrated Liquidity Pool periphery contract for reading state.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/concentrated/ConcentratedLiquidityPoolHelper.sol).

## Functions

### getTickState

```
function getTickState(IConcentratedLiquidityPool pool, uint24 tickCount) external view returns (SimpleTick[] memory)
```

Gets the current tick state and returns an array of ticks.

#### Parameters

| Name        | Type                       | Description   |
| :---------- | :------------------------- | :------------ |
| `pool`      | IConcentratedLiquidityPool | pool instance |
| `tickCount` | uint24                     | tick count    |
