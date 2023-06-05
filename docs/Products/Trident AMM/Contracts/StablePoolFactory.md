---
sidebar_position: 1
---

# StablePoolFactory

The StablePoolFactory is responsible for creation of Stable pools.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/stable/StablePoolFactory.sol)

## Read-Only Functions

### getDeployData

```solidity
function getDeployData() external view override returns (bytes memory, IMasterDeployerV2);
```

Returns the cached deploy data and the master deployer.

#### Returns

| Name                | Type              | Description                   |
| :------------------ | :---------------- | :---------------------------- |
| `bytes`             | bytes memory      | The cached deployment data.   |
| `IMasterDeployerV2` | IMasterDeployerV2 | The master deployer contract. |

#### Modifiers

This function is marked as a `view`, which means it doesn't modify the contract state.

---

### calculatePoolAddress

```solidity
function calculatePoolAddress(
  address token0,
  address token1,
  uint256 swapFee
) external view returns (address);
```

Calculates the address of a pool given token addresses and a swap fee.

#### Parameters

| Name      | Type    | Description                               |
| :-------- | :------ | :---------------------------------------- |
| `token0`  | address | address for one of the tokens in the pair |
| `token1`  | address | address for the other token in the pair   |
| `swapFee` | uint256 | fee for swapping tokens in the pool       |

#### Returns

| Name      | Type    | Description             |
| :-------- | :------ | :---------------------- |
| `address` | address | Calculated pool address |

#### Modifiers

This function is marked as a `view`, which means it doesn't modify the contract state.

## State-Changing Functions

### deployPool

```solidity
function deployPool(bytes memory _deployData) external returns (address pool);
```

Deploys a new StablePool with the given parameters.

-   `tokenA` and `tokenB` are the two tokens of the pool.
-   `swapFee` is the fee for swapping tokens in the pool.

#### Parameters

| Name          | Type  | Description                         |
| :------------ | :---- | :---------------------------------- |
| `_deployData` | bytes | encoded tokenA, tokenB, and swapFee |

#### Returns

| Name   | Type    | Description                              |
| :----- | :------ | :--------------------------------------- |
| `pool` | address | address of the newly deployed StablePool |

#### Modifiers

This function does not have any explicit modifiers.

#### Events

This function does not emit any events.
