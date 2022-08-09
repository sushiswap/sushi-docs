---
sidebar_position: 3
---

# FuroStreamRouter

FuroStreamRouter contract is the contract that is directly used to create and update token streams, complete with full deposit / withdraw functionality - all on BentoBox!

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/furo/contracts/FuroStreamRouter.sol).

## Functions

### setBentoBoxApproval

```solidity
function setBentoBoxApproval(
    address user,
    bool approved,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external payable
```

Approves this contract for BentoBox.

#### Parameters

| Name       | Type    | Description                              |
| :--------- | :------ | :--------------------------------------- |
| `user`     | address | user address to set as owner in BentoBox |
| `approved` | bool    | boolean if approved or not by BentoBox   |
| `v`        | uint8   | recovery byte of the signature           |
| `r`        | bytes32 | half of the ECDSA signature pair         |
| `s`        | bytes32 | half of the ECDSA signature pair         |

### createStream

```solidity
function createStream(
    address recipient,
    address token,
    uint64 startTime,
    uint64 endTime,
    uint256 amount, /// @dev in token amount and not in shares
    bool fromBentoBox,
    uint256 minShare
  ) external payable returns (uint256 streamId, uint256 depositedShares)
```

Creates a new token stream.

#### Parameters

| Name           | Type    | Description                                             |
| :------------- | :------ | :------------------------------------------------------ |
| `recipient`    | address | recipient address                                       |
| `token`        | address | address of token to create stream for                   |
| `startTime`    | uint64  | when stream starts                                      |
| `endTime`      | uint64  | when stream will end                                    |
| `amount`       | uint256 | amount of token to stream (in token amount, not shares) |
| `fromBentoBox` | bool    | boolean for if stream is coming from BentoBox or not    |
| `minShare`     | uint256 | minimum amount of shares                                |

#### Returns

| Name              | Type    | Description                          |
| :---------------- | :------ | :----------------------------------- |
| `streamId`        | uint256 | new stream's ID                      |
| `depositedShares` | uint256 | amount of shares deposited in stream |

### \_depositToken

```solidity
function _depositToken(
    address token,
    address from,
    address to,
    uint256 amount,
    bool fromBentoBox
  ) internal returns (uint256 depositedShares)
```

Internal function that deposits a token into a stream.

#### Parameters

| Name           | Type    | Description                                              |
| :------------- | :------ | :------------------------------------------------------- |
| `token`        | address | address of token to deposit                              |
| `from`         | address | address of user depositing tokens                        |
| `to`           | address | address of token recipient                               |
| `amount`       | uint256 | amount of tokens to deposit                              |
| `fromBentoBox` | bool    | boolean of whether update is coming from BentoBox or not |

#### Returns

| Name              | Type    | Description                          |
| :---------------- | :------ | :----------------------------------- |
| `depositedShares` | uint256 | amount of shares deposited in stream |
