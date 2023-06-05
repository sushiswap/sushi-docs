---
sidebar_position: 1
---

# V2Factory

The Factory contract is responsible for creating and managing unique liquidity pools for various token pairs. The receiver of the trading fees among these liquidity pools is set on this contract.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushiswap/contracts/UniswapV2Factory.sol).

## Events

### PairCreated

```solidity
event PairCreated(address indexed token0, address indexed token1, address pair, uint);
```

Emitted each time a pair is created via [createPair](#createpair).

-   `token0` is guaranteed to be strictly less than `token1` by sort order.
-   The final `uint` log value will be `1` for the first pair created, `2` for the second, etc. (see [allPairs](#allpairs)/[getPair](#getpair)).

## Read-Only Functions

#### allPairs

```solidity
function allPairs(uint) external view returns (address pair);
```

Returns the address of the `n`th pair (`0`-indexed) created through the factory, or `address(0)` (`0x0000000000000000000000000000000000000000`) if not enough pairs have been created yet.

-   Pass `0` for the address of the first pair created, `1` for the second, etc.

### getPair

```solidity
function getPair(address tokenA, address tokenB) external view returns (address pair);
```

Returns the address of the pair for `tokenA` and `tokenB`, if it has been created, else `address(0)` (`0x0000000000000000000000000000000000000000`).

-   `tokenA` and `tokenB` are interchangeable.

#### Parameters

| Name     | Type    | Description                              |
| :------- | :------ | :--------------------------------------- |
| `tokenA` | address | address of one of the tokens in the pair |
| `tokenB` | address | address of the other token in the pair   |

### allPairsLength

```solidity
function allPairsLength() external view returns (uint);
```

Returns the total number of pairs created through the factory so far.

### feeTo

```solidity
function feeTo() external view returns (address);
```

Returns the address of where the feeTo is set to. If `address(0)` then the fees are not turned on.

### feeToSetter

```solidity
function feeToSetter() external view returns (address);
```

The address allowed to change [feeTo](#feeto).

### migrator

```solidity
function migrator() external view returns (address);
```

Returns the address of the migrator contract (used to migrate liquidity initially from uniswap to sushiswap).

## State-Changing Functions

### createPair

```solidity
function createPair(address tokenA, address tokenB) external returns (address pair);
```

Creates a pair for `tokenA` and `tokenB` if one doesn't exist already.

-   `tokenA` and `tokenB` are interchangeable.
-   Emits [PairCreated](#paircreated).

-   `tokenA` and `tokenB` are interchangeable.

| Name     | Type    | Description                              |
| :------- | :------ | :--------------------------------------- |
| `tokenA` | address | address of one of the tokens in the pair |
| `tokenB` | address | address of the other token in the pair   |

### setFeeTo

```solidity
function setFeeTo(address _feeTo) external;
```

Sets the [feeTo](#feeto)

#### Parameters

| Name     | Type    | Description                               |
| :------- | :------ | :---------------------------------------- |
| `_feeTo` | address | address of where to send protocol fees to |

### setMigrator

```solidity
function setMigrator(address _migrator) external;
```

Sets the [migrator](#migrator).

### setFeeToSetter

```solidity
function setFeeToSetter(address _feeToSetter) external;
```

Sets the [feeToSetter](#feetosetter).

#### Parameters

| Name           | Type    | Description                               |
| :------------- | :------ | :---------------------------------------- |
| `_feeToSetter` | address | address that can change the feeTo address |

## Interface

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2Factory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);
    function migrator() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
    function setMigrator(address) external;
}
```

## ABI
