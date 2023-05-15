---
sidebar_position: 1
---

# ConstantProductFactory

The ConstantProductPoolFactory is responsible for creation of ConstantProduct pools.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/constant-product/ConstantProductPoolFactory.sol)

## Read-Only Functions

### getDeployData

```solidity
function getDeployData() external view override returns (bytes memory, IMasterDeployer);
```

Returns the deployment data that was used to deploy the current Constant Product Pool instance. This function is called in the constructor of the `ConstantProductPool`.

-   The `cachedDeployData` is returned which contains the parameters used to deploy the pool.
-   Additionally, it also returns the `masterDeployer` casted as an `IMasterDeployer`.

#### Parameters

This function doesn't take any parameters.

#### Returns

| Name               | Type            | Description                                                        |
| :----------------- | :-------------- | :----------------------------------------------------------------- |
| `cachedDeployData` | bytes           | The cached deployment data of the pool.                            |
| `IMasterDeployer`  | IMasterDeployer | The `masterDeployer` contract address casted as `IMasterDeployer`. |

---

### calculatePoolAddress

```solidity
function calculatePoolAddress(
    address token0,
    address token1,
    uint256 swapFee,
    bool twapSupport
) external view returns (address);
```

Calculates the expected address of a pool with the provided parameters. It uses the create2 opcode which allows for deterministic addressing of contracts.

-   The function generates a salt which is a hash of the parameters.
-   Then it calculates a hash which includes the salt, the bytecode of the pool, and the address of the current contract (factory).
-   Finally, it casts the hash to an address and returns it.

#### Parameters

| Name          | Type    | Description                                                               |
| :------------ | :------ | :------------------------------------------------------------------------ |
| `token0`      | address | address for one of the tokens in the pair                                 |
| `token1`      | address | address for the other token in the pair                                   |
| `swapFee`     | uint256 | swap fee for the pool                                                     |
| `twapSupport` | bool    | indicates if the pool supports Time Weighted Average Price (TWAP) oracles |

#### Returns

| Name | Type    | Description                         |
| :--- | :------ | :---------------------------------- |
|      | address | The calculated address of the pool. |

## State-Changing Functions

### deployPool

```solidity
function deployPool(bytes memory _deployData) external returns (address pool);
```

Deploys a new Constant Product Pool, a type of liquidity pool used in automated market makers (AMMs) with a constant product formula. The function requires details about the two tokens to be included in the pool, the swap fee for the pool, and whether the pool supports time-weighted average price (TWAP) oracles.

-   The function first decodes the `_deployData` into the respective parameters.
-   If the address of `tokenA` is greater than `tokenB`, the function swaps the order of the tokens to ensure a consistent order of tokens across all pools.
-   The `_deployData` is then re-encoded with the correct order of tokens and any additional data is stripped off.
-   The function generates a salt for creating the pool, which is a hash of the `_deployData`.
-   The `_deployData` is temporarily cached in `cachedDeployData`, and then the pool is created using the `new` keyword with the `salt`.
-   The `cachedDeployData` is then cleared.
-   Finally, the function registers the pool using the `_registerPool` function.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `_deployData` | bytes | The deployment data for the pool, which includes the addresses of the two tokens to be included in the pool, the swap fee, and a boolean indicating whether the pool supports TWAP oracles. |

#### Returns

| Name   | Type    | Description                             |
| :----- | :------ | :-------------------------------------- |
| `pool` | address | The address of the newly deployed pool. |

#### Reverts

This function throws an error if there is an issue with deploying the pool.

#### Events

```solidity
event PoolCreated(address poolAddress, address tokenA, address tokenB);
```

#### Modifiers

```solidity
modifier onlyMasterDeployer();
```
