---
sidebar_position: 4
---

# PeggedOracleV1

This is the contract for the oracle used for pegged prices that _don't change._

You can find the full contract [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/bentobox/PeggedOracleV1.sol).

## Functions

### getDataParameter

```
function getDataParameter(uint256 rate) public pure returns (bytes memory)
```

Returns the abi-encoded fixed exchange rate.

#### Parameters

| Name   | Type    | Description             |
| :----- | :------ | :---------------------- |
| `rate` | uint256 | the fixed exchange rate |

### get

```
function get(bytes calldata data) public override returns (bool, uint256)
```

Gets the fixed exchange rate.

#### Parameters

| Name   | Type  | Description                     |
| :----- | :---- | :------------------------------ |
| `data` | bytes | abi-encoded fixed exchange rate |

### peek

```
function peek(bytes calldata data) public view override returns (bool, uint256)
```

Check the current exchange rate without any state changes.

#### Parameters

| Name   | Type  | Description               |
| :----- | :---- | :------------------------ |
| `data` | bytes | abi-encoded exchange rate |

### peekSpot

```
function peekSpot(bytes calldata data) external view override returns (uint256 rate)
```

Check the current spot exchange rate without any state changes.

#### Parameters

| Name   | Type  | Description               |
| :----- | :---- | :------------------------ |
| `data` | bytes | abi-encoded exchange rate |

#### Returns

| Name   | Type    | Description                |
| :----- | :------ | :------------------------- |
| `rate` | uint256 | current spot exchange rate |
