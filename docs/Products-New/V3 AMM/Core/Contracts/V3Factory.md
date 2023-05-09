---
sidebar_position: 1
---

# V3Factory

The Factory contract is a core component of the Sushi V3 AMM, which is responsible for the creation and management of V3 liquidity pools. It allows users to create new pools with specified fee amounts and tick spacings, as well as retrieve existing pool addresses. It also enables and manages fee amounts and tick spacings for the V3 pools.

The full contract can be found [here](https://github.com/sushiswap/v3-core/blob/master/contracts/UniswapV3Factory.sol).

## Read-Only Functions

## State-Changing Functions

### createPool

```solidity
function createPool(
    address tokenA,
    address tokenB,
    uint24 fee
) external returns (address pool);
```

Creates a new Uniswap V3 pool with the specified tokens and fee.

-   The function validates the provided tokens and fee, ensuring that they meet the necessary requirements.
-   The pool is created with the specified tokens, fee, and tick spacing.
-   The function updates the pool mappings and emits a `PoolCreated` event.

#### Parameters

| Name     | Type    | Description                                              |
| :------- | :------ | :------------------------------------------------------- |
| `tokenA` | address | address for one of the tokens in the pool                |
| `tokenB` | address | address for the other token in the pool                  |
| `fee`    | uint24  | the fee amount for the pool (in hundredths of a percent) |

#### Returns

| Name   | Type    | Description                                      |
| :----- | :------ | :----------------------------------------------- |
| `pool` | address | the address of the newly created Uniswap V3 pool |

#### Events

```solidity
event PoolCreated(
    address indexed token0,
    address indexed token1,
    uint24 indexed fee,
    int24 tickSpacing,
    address pool
);
```

#### Modifiers

```solidity
modifier noDelegateCall();
```

### setOwner

```solidity
function setOwner(address _owner) external;
```

Changes the owner of the Uniswap V3 factory contract.

-   Only the current owner can call this function.
-   Updates the owner to the provided address.
-   Emits an `OwnerChanged` event.

#### Parameters

| Name     | Type    | Description                                  |
| :------- | :------ | :------------------------------------------- |
| `_owner` | address | the address of the new owner for the factory |

#### Events

```solidity
event OwnerChanged(
    address indexed oldOwner,
    address indexed newOwner
);
```

### enableFeeAmount

```solidity
function enableFeeAmount(uint24 fee, int24 tickSpacing) public;
```

Enables a new fee amount with the specified tick spacing for Uniswap V3 pools.

-   Only the owner can call this function.
-   The fee must be less than 1,000,000.
-   The tick spacing must be greater than 0 and less than 16,384.
-   The fee amount must not have been enabled previously.
-   Emits a `FeeAmountEnabled` event.

#### Parameters

| Name          | Type   | Description                                               |
| :------------ | :----- | :-------------------------------------------------------- |
| `fee`         | uint24 | the fee amount to be enabled                              |
| `tickSpacing` | int24  | the tick spacing associated with the specified fee amount |

#### Events

```solidity
event FeeAmountEnabled(
    uint24 indexed fee,
    int24 indexed tickSpacing
);
```
