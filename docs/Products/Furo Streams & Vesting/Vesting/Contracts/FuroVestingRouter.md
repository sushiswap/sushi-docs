---
sidebar_position: 1
---

# FuroVestingRouter

FuroVestingRouter is the contract that is actually utilized directly for vesting tokens.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/furo/contracts/FuroVestingRouter.sol).

## State-Changing Functions

### createVesting

```solidity
function createVesting(
    IFuroVesting.VestParams memory vestParams,
    uint256 minShare
) external payable returns (
    uint256 depositedShares,
    uint256 vestId,
    uint128 stepShares,
    uint128 cliffShares
);
```

Creates a new vesting schedule.

-   `msg.sender` should have already given the router an allowance of at least the `vestParams.amount` on the `vestParams.token`.
-   `vestParams` contains the details of the vesting schedule.
-   `minShare` sets a lower limit for the deposited shares.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `vestParams` | IFuroVesting.VestParams | Struct containing parameters for the vesting schedule. |
| `minShare` | uint256 | The minimum amount of shares to be deposited. If not met, the function reverts. |

#### Returns

| Name              | Type    | Description                                           |
| :---------------- | :------ | :---------------------------------------------------- |
| `depositedShares` | uint256 | Amount of shares deposited into the vesting schedule. |
| `vestId`          | uint256 | ID of the created vesting schedule.                   |
| `stepShares`      | uint128 | The number of shares distributed at each step.        |
| `cliffShares`     | uint128 | The number of shares distributed after the cliff.     |

#### Reverts

This function reverts if the `depositedShares` is less than `minShare`.

#### Events

No events are directly emitted from this function. However, it calls `createVesting` function in `furoVesting` contract, which might emit events.
