---
sidebar_position: 2
---

# FuroStream

FuroStream allows you to create and update token streams, complete with full deposit / withdraw functionality - all on BentoBox!

The full contract can be found [here](https://github.com/sushiswap/furo/blob/master/contracts/base/FuroStream.sol).

## Functions

### tokenURI

```
function tokenURI(uint256 id)
        public
        view
        override
        returns (string memory)
```

View function that returns the token URI.

#### Parameters

| Name | Type    | Description                     |
| :--- | :------ | :------------------------------ |
| `id` | uint256 | token ID to return the URI from |

### setBentoBoxApproval

```
function setBentoBoxApproval(
        address user,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external override
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

```
function createStream(
        address recipient,
        address token,
        uint64 startTime,
        uint64 endTime,
        uint256 amount,
        bool fromBentoBox
    )
        external
        payable
        override
        returns (uint256 streamId, uint256 depositedShares)
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

#### Returns

| Name              | Type    | Description                          |
| :---------------- | :------ | :----------------------------------- |
| `streamId`        | uint256 | new stream's ID                      |
| `depositedShares` | uint256 | amount of shares deposited in stream |

### withdrawFromStream

```
function withdrawFromStream(
        uint256 streamId,
        uint256 sharesToWithdraw,
        address withdrawTo,
        bool toBentoBox,
        bytes calldata taskData
    ) external override returns (uint256 recipientBalance, address to)
```

Withdraws token shares from the stream.

#### Parameters

| Name               | Type    | Description                                 |
| :----------------- | :------ | :------------------------------------------ |
| `streamId`         | uint256 | stream ID to withdraw from                  |
| `sharesToWithdraw` | uint256 | amount of tokens (in shares) to withdraw    |
| `withdrawTo`       | address | address to push withdrawn shares into       |
| `toBentoBox`       | bool    | boolean of whether its from BentoBox or not |
| `taskData`         | bytes   | the task data                               |

#### Returns

| Name               | Type    | Description                           |
| :----------------- | :------ | :------------------------------------ |
| `recipientBalance` | uint256 | user's new balance after withdrawal   |
| `to`               | address | address that shares were withdrawn to |

### cancelStream

```
function cancelStream(uint256 streamId, bool toBentoBox)
        external
        override
        returns (uint256 senderBalance, uint256 recipientBalance)
```

Cancels a token stream with the given ID and returns the sender and recipient balances.

#### Parameters

| Name         | Type    | Description                                               |
| :----------- | :------ | :-------------------------------------------------------- |
| `streamId`   | uint256 | stream ID of stream to delete                             |
| `toBentoBox` | bool    | boolean of if funds will be sent to BentoBox after or not |

### Returns

| Name               | Type    | Description                                               |
| :----------------- | :------ | :-------------------------------------------------------- |
| `senderBalance`    | uint256 | new balance of user after cancelling stream               |
| `recipientBalance` | uint256 | new balance of recipient of funds after cancelling stream |

### getStream

```
function getStream(uint256 streamId)
        external
        view
        override
        returns (Stream memory)
```

View function that returns a stream given its ID.

#### Parameters

| Name       | Type    | Description                   |
| :--------- | :------ | :---------------------------- |
| `streamId` | uint256 | stream ID of stream to return |

### streamBalanceOf

```
function streamBalanceOf(uint256 streamId)
        external
        view
        override
        returns (uint256 senderBalance, uint256 recipientBalance)
```

View function that calls `_balanceOf`, which returns the balances (sender and recipient) of a stream given its ID.

#### Parameters

| Name       | Type    | Description                   |
| :--------- | :------ | :---------------------------- |
| `streamId` | uint256 | stream ID of stream to return |

### Returns

| Name               | Type    | Description          |
| :----------------- | :------ | :------------------- |
| `senderBalance`    | uint256 | balance of user      |
| `recipientBalance` | uint256 | balance of recipient |

### \_balanceOf

```
function _balanceOf(Stream memory stream)
        internal
        view
        returns (uint256 senderBalance, uint256 recipientBalance)
```

Internal function called by `balanceOf`, it returns the balances (sender and recipient) of a stream given the Stream object itself.

#### Parameters

| Name     | Type   | Description                                   |
| :------- | :----- | :-------------------------------------------- |
| `stream` | Stream | specific stream object to find the balance of |

### Returns

| Name               | Type    | Description          |
| :----------------- | :------ | :------------------- |
| `senderBalance`    | uint256 | balance of user      |
| `recipientBalance` | uint256 | balance of recipient |

### updateSender

```
function updateSender(uint256 streamId, address sender) external override
```

Updates the sender of a stream. Must be the current sender to update.

#### Parameters

| Name       | Type    | Description                             |
| :--------- | :------ | :-------------------------------------- |
| `streamId` | uint256 | stream ID of stream to update sender of |
| `sender`   | address | address of new sender to update to      |

### updateStream

```
function updateStream(
        uint256 streamId,
        uint128 topUpAmount,
        uint64 extendTime,
        bool fromBentoBox
    ) external returns (uint256 depositedShares)
```

Updates an entire stream and returns the total amount of shares currently deposited in the stream. Must be sender to update.

#### Parameters

| Name           | Type    | Description                                              |
| :------------- | :------ | :------------------------------------------------------- |
| `streamId`     | uint256 | stream ID of stream to update                            |
| `topUpAmount`  | uint128 | amount of tokens to top stream off with                  |
| `extendTime`   | uint64  | amount of time to extend stream by                       |
| `fromBentoBox` | bool    | boolean of whether update is coming from BentoBox or not |

#### Returns

| Name              | Type    | Description                          |
| :---------------- | :------ | :----------------------------------- |
| `depositedShares` | uint256 | amount of shares deposited in stream |

### \_depositToken

```
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

### \_transferToken

```
function _transferToken(
        address token,
        address from,
        address to,
        uint256 amount,
        bool toBentoBox
    ) internal
```

Internal function used by others in the contract, it safely transfers tokens.

#### Parameters

| Name         | Type    | Description                                                 |
| :----------- | :------ | :---------------------------------------------------------- |
| `token`      | address | address of token to send                                    |
| `from`       | address | address of user sending the tokens                          |
| `to`         | address | address of token recipient                                  |
| `amount`     | uint256 | amount of tokens to send                                    |
| `toBentoBox` | bool    | boolean of whether the transfer is going to BentoBox or not |
