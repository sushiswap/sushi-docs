---
sidebar_position: 1
---

# FuroVesting

FuroVesting is the base contract for vesting tokens; it is not called directly, but instead utilized via the router.

**_Important:_** Use the `FuroVestingRouter` to create vestings; do NOT create vestings directly.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/furo/contracts/base/FuroVesting.sol).

## Read-Only Functions

### vestBalance

```solidity
function vestBalance(uint256 vestId) external view override returns (uint256);
```

Returns the unclaimed balance of a vesting schedule.

-   This function calculates the claimable balance by subtracting the already claimed amount from the total claimable amount.

#### Parameters

| Name     | Type    | Description                 |
| :------- | :------ | :-------------------------- |
| `vestId` | uint256 | ID of the vesting to check. |

#### Returns

| Name      | Type    | Description                           |
| :-------- | :------ | :------------------------------------ |
| `balance` | uint256 | The unclaimed balance of the vesting. |

#### Modifiers

This function is `external`, `view`, and `override`. This means it can be called from outside the contract, it doesn't change the state of the contract, and it overrides a function with the same name in a base contract.

### \_balanceOf

```solidity
function _balanceOf(Vest memory vest) internal view returns (uint256 claimable);
```

Calculates the total claimable amount from a vesting schedule.

-   This is an internal function that is not accessible outside of the contract.
-   It is used to calculate the total claimable amount based on the time elapsed since the vesting started.

#### Parameters

| Name   | Type        | Description                        |
| :----- | :---------- | :--------------------------------- |
| `vest` | Vest memory | The vesting schedule to calculate. |

#### Returns

| Name        | Type    | Description                              |
| :---------- | :------ | :--------------------------------------- |
| `claimable` | uint256 | The total claimable amount from vesting. |

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

#### Reverts

This function reverts if the `setMasterContractApproval` function on the BentoBox contract reverts.

#### Returns

This function does not return any values.

#### Events

This function does not emit any events.

### createVesting

```solidity
function createVesting(
    VestParams calldata vestParams
) external payable override returns (
    uint256 depositedShares,
    uint256 vestId,
    uint128 stepShares,
    uint128 cliffShares
);
```

Creates a new vesting schedule for a specific token.

-   The `vestParams.start` should be later than the current timestamp.
-   The `vestParams.stepPercentage` should be equal to or less than the `PERCENTAGE_PRECISION`.
-   The `vestParams.stepDuration` and `vestParams.steps` should not be zero.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `vestParams` | VestParams struct | Struct containing parameters for vesting creation. Contains fields for `token`, `amount`, `start`, `cliffDuration`, `stepDuration`, `steps`, `stepPercentage` and `fromBentoBox`. |

#### Returns

| Name              | Type    | Description                                                       |
| :---------------- | :------ | :---------------------------------------------------------------- |
| `depositedShares` | uint256 | Amount of shares deposited.                                       |
| `vestId`          | uint256 | ID of the created vesting.                                        |
| `stepShares`      | uint128 | Amount of shares per step.                                        |
| `cliffShares`     | uint128 | Amount of shares available after the cliff duration is completed. |

#### Reverts

This function reverts if the `vestParams.start` is earlier than the current timestamp, if the `vestParams.stepPercentage` is greater than the `PERCENTAGE_PRECISION`, or if the `vestParams.stepDuration` or `vestParams.steps` are zero.

#### Events

```solidity
event CreateVesting(
    uint256 vestId,
    IERC20 token,
    address sender,
    address recipient,
    uint64 start,
    uint64 cliffDuration,
    uint64 stepDuration,
    uint64 steps,
    uint128 cliffShares,
    uint128 stepShares,
    bool fromBentoBox
);
```

### withdraw

```solidity
function withdraw(
    uint256 vestId,
    bytes calldata taskData,
    bool toBentoBox
) external override;
```

Withdraws the vested tokens for a specific vesting ID.

-   The `msg.sender` should be the recipient of the vest.
-   The `taskData` can optionally contain data for a task to be executed after withdrawal.

#### Parameters

| Name         | Type           | Description                                                          |
| :----------- | :------------- | :------------------------------------------------------------------- |
| `vestId`     | uint256        | ID of the vesting from which to withdraw.                            |
| `taskData`   | bytes calldata | Optional data to be sent to `ITasker.onTaskReceived` after withdraw. |
| `toBentoBox` | bool           | Whether to transfer the withdrawn tokens to BentoBox.                |

#### Reverts

This function reverts if the `msg.sender` is not the recipient of the vest.

#### Events

```solidity
event Withdraw(uint256 vestId, IERC20 token, uint256 amount, bool toBentoBox);
```

### stopVesting

```solidity
function stopVesting(uint256 vestId, bool toBentoBox) external override;
```

Stops a vesting schedule.

-   The `msg.sender` should be the owner of the vest.
-   The vested but unclaimed tokens are sent to the vest recipient.
-   The unvested tokens are returned to the owner.
-   The vesting schedule is then deleted.

#### Parameters

| Name         | Type    | Description                                           |
| :----------- | :------ | :---------------------------------------------------- |
| `vestId`     | uint256 | ID of the vesting to stop.                            |
| `toBentoBox` | bool    | Whether to transfer the withdrawn tokens to BentoBox. |

#### Reverts

This function reverts if the `msg.sender` is not the owner of the vest.

#### Events

```solidity
event CancelVesting(uint256 vestId, uint256 returnShares, uint256 canClaim, IERC20 token, bool toBentoBox);
```

### updateOwner

```solidity
function updateOwner(uint256 vestId, address newOwner) external override;
```

Updates the owner of a vesting schedule.

-   Only the current owner of a vesting schedule can call this function.
-   The `msg.sender` must be the current owner of the vesting schedule.

#### Parameters

| Name       | Type    | Description                                        |
| :--------- | :------ | :------------------------------------------------- |
| `vestId`   | uint256 | ID of the vesting schedule to update the owner of. |
| `newOwner` | address | Address of the new owner of the vesting schedule.  |

#### Returns

This function doesn't return anything.

#### Reverts

This function reverts if the `msg.sender` is not the current owner of the vesting schedule.

#### Events

```solidity
event LogUpdateOwner(uint256 indexed vestId, address indexed newOwner);
```

This event is emitted when the owner of a vesting schedule is updated. It returns the vesting ID and the new owner's address.
