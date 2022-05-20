---
sidebar_position: 2
---

# ConstantProductPoolFactory

This contract is for deploying Trident Constant Product Pools with configurations.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/constant-product/ConstantProductPoolFactory.sol).

## Functions

### getDeployData

```
function getDeployData() external view override returns (bytes memory, IMasterDeployer)
```

Called in the constructor to populate deploy data.

### calculatePoolAddress

```
function calculatePoolAddress(
        address token0,
        address token1,
        uint256 swapFee,
        bool twapSupport
    ) external view returns (address)
```

Calculates a pool's address and returns it.

#### Parameters

| Name          | Type    | Description                           |
| :------------ | :------ | :------------------------------------ |
| `token0`      | address | address of token0                     |
| `token1`      | address | address of token1                     |
| `swapFee`     | uint256 | swap fee                              |
| `twapSupport` | bool    | boolean for is pool using TWAP or not |
