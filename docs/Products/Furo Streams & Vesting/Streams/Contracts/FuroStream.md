---
sidebar_position: 1
---

# FuroStream

FuroStream is the base contract for creating and updating token streams; it is not called directly, but instead utilized via the router.

**_Important:_** Use the `FuroStreamRouter` to create streams; do NOT create streams directly.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/furo/contracts/base/FuroStream.sol).

## Read-Only Functions

### getStream

```solidity
function getStream(uint256 streamId)
    external
    view
    override
    returns (Stream memory);
```

The function simply returns the stream associated with the provided `streamId`. It assumes that the `streamId` exists in the `streams` mapping. If it does not exist, it will return a default `Stream` object.

#### Parameters

| Name       | Type    | Description           |
| :--------- | :------ | :-------------------- |
| `streamId` | uint256 | The ID of the stream. |

#### Modifiers

This function is `external`, `view`, and `override`. This means it can be called from outside the contract, does not modify the state of the contract, and overrides a function with the same name in a base contract.

#### Returns

| Name      | Type          | Description           |
| :-------- | :------------ | :-------------------- |
| (no name) | Stream memory | The requested stream. |

### streamBalanceOf

```solidity
function streamBalanceOf(
    uint256 streamId
) external view override returns (uint256 senderBalance, uint256 recipientBalance);
```

Retrieves the current balances of the sender and recipient in a specific stream.

-   `streamId` identifies the stream for which the balances are to be retrieved.

#### Parameters

| Name       | Type    | Description                                         |
| :--------- | :------ | :-------------------------------------------------- |
| `streamId` | uint256 | ID of the stream for which the balances are needed. |

#### Returns

| Name               | Type    | Description                                 |
| :----------------- | :------ | :------------------------------------------ |
| `senderBalance`    | uint256 | Current balance of the sender in stream.    |
| `recipientBalance` | uint256 | Current balance of the recipient in stream. |

#### Reverts

This function reverts if the provided `streamId` does not exist.

#### Events

This function does not emit any events.

## State-Changing Functions

### setBentoBoxApproval

```solidity
function setBentoBoxApproval(
    address user,
    bool approved,
    uint8 v,
    bytes32 r,
    bytes32 s
) external payable override;
```

Sets the approval status of this contract as a master contract on the BentoBox for a specific user.

-   This function is a proxy to the `setMasterContractApproval` function on the BentoBox contract.
-   The approval is granted or revoked based on the `approved` parameter.
-   The function uses an EIP-712 signature (`v`, `r`, `s`) to securely implement the approval.

#### Parameters

| Name       | Type    | Description                                                                |
| :--------- | :------ | :------------------------------------------------------------------------- |
| `user`     | address | The user address for which to set the approval.                            |
| `approved` | bool    | Whether the BentoBox approval should be granted (true) or revoked (false). |
| `v`        | uint8   | EIP-712 signature parameter: recovery byte of the signature.               |
| `r`        | bytes32 | EIP-712 signature parameter: first 32 bytes of the signature.              |
| `s`        | bytes32 | EIP-712 signature parameter: second 32 bytes of the signature.             |

#### Modifiers

This function is `external`, `payable`, and `override`, meaning it is accessible externally, can receive Ether, and it overrides a function with the same name in the base contract.

#### Reverts

This function reverts if the `setMasterContractApproval` function on the BentoBox contract reverts.

#### Returns

This function does not return any values.

#### Events

This function does not emit any events.

### createStream

```solidity
function createStream(
    address recipient,
    address token,
    uint64 startTime,
    uint64 endTime,
    uint256 amount,
    bool fromBentoBox
) external payable override returns (
    uint256 streamId,
    uint256 depositedShares
);
```

Creates a new stream of tokens from the sender to the recipient.

-   The sender must have approved the contract to transfer the `amount` of tokens on their behalf.
-   The stream starts at the `startTime` and ends at the `endTime`. The tokens are released linearly between these two times.
-   If `fromBentoBox` is true, the tokens are transferred from the sender's BentoBox balance. Otherwise, they are transferred from the sender's regular token balance.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `recipient` | address | The address of the stream recipient. |
| `token` | address | The address of the token to be streamed. If address(0) is used, it defaults to WETH. |
| `startTime` | uint64 | The unix timestamp for when the stream should start. |
| `endTime` | uint64 | The unix timestamp for when the stream should end. |
| `amount` | uint256 | The total amount of tokens to be streamed. |
| `fromBentoBox` | bool | Whether to transfer the tokens from the sender's BentoBox balance or regular token balance. |

#### Returns

| Name              | Type    | Description                                          |
| :---------------- | :------ | :--------------------------------------------------- |
| `streamId`        | uint256 | The id of the newly created stream.                  |
| `depositedShares` | uint256 | The number of shares deposited to create the stream. |

#### Reverts

This function reverts if:

-   `startTime` is in the past.
-   `endTime` is not strictly after `startTime`.

#### Events

```solidity
event CreateStream(
    uint256 indexed streamId,
    address indexed sender,
    address indexed recipient,
    address token,
    uint256 depositedShares,
    uint64 startTime,
    uint64 endTime,
    bool fromBentoBox
);
```

This event is emitted when a new stream is created.

#### Modifiers

This function is `external`, `payable`, and `override`, meaning it is accessible externally, can receive Ether, and it overrides a function with the same name in the base contract.

### withdrawFromStream

```solidity
function withdrawFromStream(
    uint256 streamId,
    uint256 sharesToWithdraw,
    address withdrawTo,
    bool toBentoBox,
    bytes calldata taskData
) external override returns (uint256 recipientBalance, address to);
```

Allows the sender or the recipient of a stream to withdraw a specified amount of shares from the stream.

#### Parameters

| Name               | Type    | Description                                                       |
| :----------------- | :------ | :---------------------------------------------------------------- |
| `streamId`         | uint256 | The ID of the stream from which to withdraw.                      |
| `sharesToWithdraw` | uint256 | The amount of shares to withdraw from the stream.                 |
| `withdrawTo`       | address | The address to which the withdrawn shares should be transferred.  |
| `toBentoBox`       | bool    | Whether to transfer the withdrawn shares to BentoBox.             |
| `taskData`         | bytes   | Arbitrary data to be sent to the ITasker interface if applicable. |

#### Modifiers

This function is `external` and `override`, meaning it is accessible externally and it overrides a function with the same name in the base contract.

#### Reverts

This function reverts if:

-   The caller is not the sender or recipient of the stream.
-   The number of shares to be withdrawn exceeds the recipient's balance.

#### Returns

| Name               | Type    | Description                                                 |
| :----------------- | :------ | :---------------------------------------------------------- |
| `recipientBalance` | uint256 | The balance of the recipient after the withdrawal.          |
| `to`               | address | The address to which the withdrawn shares were transferred. |

#### Events

This function emits a `Withdraw` event upon a successful withdrawal.

### updateStream

```solidity
function updateStream(
    uint256 streamId,
    uint128 topUpAmount,
    uint64 extendTime,
    bool fromBentoBox
) external payable override returns (uint256 depositedShares);
```

Updates an existing stream by depositing additional funds and extending the stream's duration.

-   `msg.sender` should be the same as the sender of the stream.
-   The `topUpAmount` will be deposited to the stream, adding to the initial amount.
-   The `extendTime` is added to the current `endTime` of the stream, extending the duration.
-   The `fromBentoBox` determines whether the tokens should be withdrawn from the BentoBox or not.

#### Parameters

| Name           | Type    | Description                                                  |
| :------------- | :------ | :----------------------------------------------------------- |
| `streamId`     | uint256 | ID of the stream to be updated.                              |
| `topUpAmount`  | uint128 | Amount of tokens to be added to the stream.                  |
| `extendTime`   | uint64  | Time (in seconds) by which to extend the duration of stream. |
| `fromBentoBox` | bool    | Whether to deposit from BentoBox or not.                     |

#### Returns

| Name              | Type    | Description                           |
| :---------------- | :------ | :------------------------------------ |
| `depositedShares` | uint256 | Amount of shares deposited to stream. |

#### Reverts

This function reverts if `msg.sender` is not the same as the sender of the stream or if the total deposited shares would exceed the maximum uint128 value.

#### Events

```solidity
event UpdateStream(uint256 streamId, uint128 topUpAmount, uint64 extendTime, bool fromBentoBox);
```

This event is emitted when a stream is updated. It includes the stream ID, the amount added, the extended time, and whether the deposit came from BentoBox.

#### Modifiers

This function is `external`, `payable`, and `override`. This means it can be called from outside the contract, can accept ether, and overrides a function with the same name in a base contract.

### cancelStream

```solidity
function cancelStream(
    uint256 streamId,
    bool toBentoBox
) external override returns (uint256 senderBalance, uint256 recipientBalance);
```

Cancels an existing stream and returns the remaining balances to the sender and recipient.

-   `msg.sender` should be either the sender or the recipient of the stream.
-   The `streamId` identifies the stream to be cancelled.
-   The `toBentoBox` determines whether the tokens should be sent to the BentoBox or not.

#### Parameters

| Name         | Type    | Description                                           |
| :----------- | :------ | :---------------------------------------------------- |
| `streamId`   | uint256 | ID of the stream to be cancelled.                     |
| `toBentoBox` | bool    | Whether to send remaining balance to BentoBox or not. |

#### Returns

| Name               | Type    | Description                                                 |
| :----------------- | :------ | :---------------------------------------------------------- |
| `senderBalance`    | uint256 | Remaining balance of the sender in the cancelled stream.    |
| `recipientBalance` | uint256 | Remaining balance of the recipient in the cancelled stream. |

#### Reverts

This function reverts if `msg.sender` is not the same as the sender or recipient of the stream.

#### Events

```solidity
event CancelStream(uint256 streamId, uint256 senderBalance, uint256 recipientBalance, address token, bool toBentoBox);
```

This event is emitted when a stream is cancelled. It includes the stream ID, the remaining balances of the sender and recipient, the token involved, and whether the balances were sent to BentoBox.

#### Modifiers

This function is `external` and `override`. This means it can be called from outside the contract and it overrides a function with the same name in a base contract.

### updateSender

```solidity
function updateSender(
    uint256 streamId,
    address sender
) external override;
```

Updates the sender of a specific stream.

-   `msg.sender` must be the current sender of the stream.
-   `streamId` identifies the stream for which the sender is to be updated.
-   `sender` is the new sender of the stream.

#### Parameters

| Name       | Type    | Description                              |
| :--------- | :------ | :--------------------------------------- |
| `streamId` | uint256 | ID of the stream to update the sender.   |
| `sender`   | address | Address of the new sender of the stream. |

#### Returns

This function does not return any values.

#### Reverts

This function reverts if the `msg.sender` is not the current sender of the stream.

#### Events

This function does not emit any events.
