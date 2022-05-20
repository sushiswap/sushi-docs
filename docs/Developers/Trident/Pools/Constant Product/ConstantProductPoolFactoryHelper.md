---
sidebar_position: 3
---

# ConstantProductPoolFactoryHelper

This is a helper contract used for fetching info for several pools.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/constant-product/ConstantProductPoolFactoryHelper.sol).

## Functions

### getPoolsForTokens

```
function getPoolsForTokens(address constantProductPoolFactory, address[] calldata tokens)
        external
        view
        returns (ConstantProductPoolInfo[] memory poolInfos, uint256 length)
```

Returns the info on a given pool and its length.

#### Parameters

| Name                         | Type      | Description                   |
| :--------------------------- | :-------- | :---------------------------- |
| `constantProductPoolFactory` | address   | address of factory contract   |
| `tokens`                     | address[] | array of addresses for tokens |

#### Returns

| Name        | Type                      | Description                        |
| :---------- | :------------------------ | :--------------------------------- |
| `poolInfos` | ConstantProductPoolInfo[] | array of info about the given pool |
| `length`    | uint256                   | length of `poolInfos`              |
