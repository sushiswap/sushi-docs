---
sidebar_position: 3
---

# FuroVesting

FuroVesting is the contract for vesting tokens.

The full contract can be found [here](https://github.com/sushiswap/furo/blob/master/contracts/base/FuroVesting.sol).

## Functions

### createVesting

```
function createVesting(
        IERC20 token,
        address recipient,
        uint32 start,
        uint32 cliffDuration,
        uint32 stepDuration,
        uint32 steps,
        uint128 cliffAmount,
        uint128 stepAmount,
        bool fromBentoBox
    )
        external
        payable
        override
        returns (uint256 depositedShares, uint256 vestId)
```

Creates a vesting schedule for the token stream.

#### Parameters

| Name            | Type    | Description                                |
| :-------------- | :------ | :----------------------------------------- |
| `token`         | IERC20  | the token to vest                          |
| `recipient`     | address | address of recipient                       |
| `start`         | uint32  | when vesting starts                        |
| `cliffDuration` | uint32  | length of vesting cliff                    |
| `stepDuration`  | uint32  | length of steps                            |
| `steps`         | uint32  | amount of steps                            |
| `cliffAmount`   | uint128 | amount to set for cliff                    |
| `stepAmount`    | uint128 | amount to set for each step                |
| `fromBentoBox`  | bool    | boolean for if coming from BentoBox or not |

#### Returns

| Name              | Type    | Description                |
| :---------------- | :------ | :------------------------- |
| `depositedShares` | uint256 | amount of shares deposited |
| `vestId`          | uint256 | new vesting ID             |

### withdraw

```
 function withdraw(
        uint256 vestId,
        bytes calldata taskData,
        bool toBentoBox
    ) external override
```

Withdraws from the vesting.

#### Parameters

| Name         | Type    | Description                                |
| :----------- | :------ | :----------------------------------------- |
| `vestId`     | uint256 | the ID of the vestment to withdraw from    |
| `taskData`   | bytes   | data tasks                                 |
| `toBentoBox` | bool    | boolean for if coming from BentoBox or not |

### stopVesting

```
function stopVesting(uint256 vestId, bool toBentoBox) external override
```

Stops a vesting.

#### Parameters

| Name         | Type    | Description                                |
| :----------- | :------ | :----------------------------------------- |
| `vestId`     | uint256 | vesting ID to stop                         |
| `toBentoBox` | bool    | boolean for if coming from BentoBox or not |

### vestBalance

```
function vestBalance(uint256 vestId)
        external
        view
        override
        returns (uint256)
```

View function that returns the current balance of the vesting.

#### Parameters

| Name     | Type    | Description                    |
| :------- | :------ | :----------------------------- |
| `vestId` | uint256 | vesting ID to check balance of |

### \_balanceOf

```
function _balanceOf(Vest memory vest)
        internal
        view
        returns (uint256 claimable)
```

Internal function that returns the amount of claimable tokens from a vesting, given the specific vestment object.

#### Parameters

| Name   | Type | Description                        |
| :----- | :--- | :--------------------------------- |
| `vest` | Vest | vesting object to check balance of |

#### Returns

| Name        | Type    | Description                             |
| :---------- | :------ | :-------------------------------------- |
| `claimable` | uint256 | amount of claimable tokens from vesting |

### updateOwner

```
function updateOwner(uint256 vestId, address newOwner) external override
```

Sets the new owner of a vesting. Must be current owner to set.

#### Parameters

| Name       | Type    | Description                   |
| :--------- | :------ | :---------------------------- |
| `vestId`   | uint256 | vesting ID to change owner of |
| `newOwner` | address | address of new owner to set   |

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
