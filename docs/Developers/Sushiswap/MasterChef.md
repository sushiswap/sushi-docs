---
sidebar_position: 2
---

# MasterChef

The MasterChef gives out a constant number of SUSHI per block, for liquidity providers that stake
SLP tokens within contract.

New ERC20s or pools are added/updated by the owner of the contract with allocation
points that determines the number of SUSHI rewarded to each pool.

MasterChef is the only contract with minting rights for the SUSHI token.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/MasterChefV2.sol).

## Functions

### poolLength

```solidity
function poolLength(
) external view returns (uint256)
```

Polls and returns the total number of pools added.

### add

```solidity
function add(
  uint256 _allocPoint,
  IERC20 _lpToken,
  bool _withUpdate
) public onlyOwner
```

Adds a new SLP/Token to be staked, and can only be called by the owner.

Adding duplicate pools can cause problems with the rewards.

#### Parameters

| Name          | Type    | Description                                  |
| :------------ | :------ | :------------------------------------------- |
| `_allocPoint` | uint256 | number of allocation points assigned to pool |
| `_lpToken`    | IERC20  | address of ERC20 token that will be staked   |
| `_withUpdate` | bool    | bool to call massUpdatePools or not          |

### set

```solidity
function set(
  uint256 _pid,
  uint256 _allocPoint,
  bool _withUpdate
) public onlyOwner
```

Updates the allocation points assigned to an existing pool, and can only be called
by the owner.

#### Parameters

| Name          | Type    | Description                                  |
| :------------ | :------ | :------------------------------------------- |
| `_pid`        | uint256 | id for individual pool                       |
| `_allocPoint` | uint256 | number of allocation points assigned to pool |
| `_withUpdate` | bool    | bool to call massUpdatePools or not          |

### setMigrator

```solidity
function setMigrator(
  IMigratorChef _migrator
) public onlyOwner
```

Sets the contract that is has ability to perform a migration for staked tokens,
and can only be called by the owner.

#### Parameters

| Name        | Type          | Description                  |
| :---------- | :------------ | :--------------------------- |
| `_migrator` | IMigratorChef | address of migrator contract |

### migrate

```solidity
function migrate(
  uint256 _pid
) public
```

Migrates an lp token/pool to another lp contract. Can be called by anyone, and we trust
that migrator contract is good.

#### Parameters

| Name   | Type    | Description            |
| :----- | :------ | :--------------------- |
| `_pid` | uint256 | id for individual pool |

### getMultiplier

```solidity
function getMultiplier(
  uint256 _from,
  uint256 _to
) public view returns (uint256)
```

Polls and returns reward multiplier over a given \_from to \_to block.

#### Parameters

| Name    | Type    | Description        |
| :------ | :------ | :----------------- |
| `_from` | uint256 | start block number |
| `_to`   | uint256 | end block number   |

### pendingSushi

```solidity
function pendingSushi(
  uint256 _pid,
  address _user
) external view returns (uint256)
```

Polls and returns pending SUSHIs to be claimed for a given pool and user.

#### Parameters

| Name    | Type    | Description            |
| :------ | :------ | :--------------------- |
| `_pid`  | uint256 | id for individual pool |
| `_user` | address | address for user       |

### massUpdatePools

```solidity
function massUpdatePools(
) public
```

Updates reward variables for all pools.

### updatePool

```solidity
function updatePool(
  uint256 _pid
) public
```

Update reward variables for a given pool to be kept up-to-date.

Is called on all withdraws, and deposits. So will only be called by itself individually for
pools that aren't as active to keep them up-to-date when updating allocation points.

#### Parameters

| Name   | Type    | Description            |
| :----- | :------ | :--------------------- |
| `_pid` | uint256 | id for individual pool |

### deposit

```solidity
function deposit(
  uint256 _pid,
  uint256 _amount
) public
```

Deposit LP tokens to MasterChef to start accruing SUSHI rewards.

#### Parameters

| Name      | Type    | Description                 |
| :-------- | :------ | :-------------------------- |
| `_pid`    | uint256 | id for individual pool      |
| `_amount` | uint256 | amount of tokens to deposit |

### withdraw

```solidity
function withdraw(
  uint256 _pid,
  uint256 _amount
) public
```

Withdraw LP tokens from MasterChef.

#### Parameters

| Name      | Type    | Description                  |
| :-------- | :------ | :--------------------------- |
| `_pid`    | uint256 | id for individual pool       |
| `_amount` | uint256 | amount of tokens to withdraw |

### emergencyWithdraw

```solidity
function emergencyWithdraw(
  uint256 _pid
) public
```

Withdraw LP tokens from MasterChef without receiving SUSHI rewards.
To be only used for emergencies or problems with harvesting rewards.

#### Parameters

| Name   | Type    | Description            |
| :----- | :------ | :--------------------- |
| `_pid` | uint256 | id for individual pool |

### safeSushiTransfer

```solidity
function safeSushiTransfer(
  address _to,
  uint256 _amount
) internal
```

Internal function to be used in case of rounding error that causes pool to
not have enough SUSHI.

#### Parameters

| Name      | Type    | Description            |
| :-------- | :------ | :--------------------- |
| `_to`     | address | address to transfer to |
| `_amount` | uint256 | amount to transfer     |
