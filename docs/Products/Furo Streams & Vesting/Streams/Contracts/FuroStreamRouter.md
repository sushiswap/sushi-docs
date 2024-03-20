---
sidebar_position: 1
---

# FuroStreamRouter

FuroStreamRouter contract is the contract that is directly used to create and update token streams, complete with full deposit / withdraw functionality - all on BentoBox.

## State-Changing Functions

### createStream

```solidity
function createStream(
    address recipient,
    address token,
    uint64 startTime,
    uint64 endTime,
    uint256 amount,
    bool fromBentoBox,
    uint256 minShare
) external payable returns (uint256 streamId, uint256 depositedShares);
```

Creates a new stream.

-   `msg.sender` should have already given the router an allowance of at least the `amount` on the `token`.
-   `startTime` and `endTime` define the duration of the stream.
-   `minShare` sets a lower limit for the deposited shares.

#### Parameters

| Name           | Type    | Description                                                                     |
| :------------- | :------ | :------------------------------------------------------------------------------ |
| `recipient`    | address | Address of the recipient of the stream.                                         |
| `token`        | address | Address of the token to be streamed.                                            |
| `startTime`    | uint64  | UNIX timestamp for when the stream should start.                                |
| `endTime`      | uint64  | UNIX timestamp for when the stream should end.                                  |
| `amount`       | uint256 | Amount of tokens to be streamed.                                                |
| `fromBentoBox` | bool    | If true, the tokens will be taken from the caller's BentoBox balance.           |
| `minShare`     | uint256 | The minimum amount of shares to be deposited. If not met, the function reverts. |

#### Returns

| Name              | Type    | Description                                 |
| :---------------- | :------ | :------------------------------------------ |
| `streamId`        | uint256 | ID of the created stream.                   |
| `depositedShares` | uint256 | Amount of shares deposited into the stream. |

#### Reverts

This function reverts if the `depositedShares` is less than `minShare`.

#### Events

No events are directly emitted from this function. However, it calls `createStream` function in `furoStream` contract, which might emit events.
