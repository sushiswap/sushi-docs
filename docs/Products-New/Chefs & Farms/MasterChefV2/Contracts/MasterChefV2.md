# MasterChefV2

The MasterChefV2 gives out a constant number of SUSHI per block, for liquidity providers that stake SLP tokens within contract.

New ERC20s or pools are added/updated by the owner of the contract with allocation points that determines the number of SUSHI rewarded to each pool.

Additional rewarders can be set with the pools that are added to allow distribution of additional tokens alongside what is harvested in SUSHI.

A dummy token is used to accumulate and distribute SUSHI tokens from the original MasterChef contract, and thus the total allocation points set must match the allocation points dedicated to the dummy token on MasterChef.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/masterchef/contracts/MasterChefV2.sol).

## Functions

### init

```solidity
function init(IERC20 dummyToken) external
```

Deposits a dummy token to `MASTER_CHEF`.

### poolLength

```solidity
function poolLength() public view returns (uint256 pools)
```

Polls and returns the total number of pools added.

### add

```solidity
function add(
  uint256 allocPoint,
  IERC20 _lpToken,
  IRewarder _rewarder
) public onlyOwner
```

Adds a new SLP/Token to be staked, and can only be called by the owner.

Set rewarder to 0x0 address to add a pool with no secondary rewards.

Adding duplicate pools can cause problems with the rewards.

#### Parameters

| Name         | Type      | Description                                  |
| :----------- | :-------- | :------------------------------------------- |
| `allocPoint` | uint256   | number of allocation points assigned to pool |
| `_lpToken`   | IERC20    | address of ERC20 token that will be staked   |
| `_rewarder`  | IRewarder | address of rewarder contract set to pool     |

### set

```solidity
function set(
  uint256 _pid,
  uint256 _allocPoint,
  IRewarder _rewarder,
  bool overwrite
) public onlyOwner
```

Updates the allocation points assigned to an existing pool, and can also update the rewarder address set for the pool when overwrite is set to `true`. Only can be called by the owner.

#### Parameters

| Name          | Type      | Description                                        |
| :------------ | :-------- | :------------------------------------------------- |
| `_pid`        | uint256   | id for individual pool                             |
| `_allocPoint` | uint256   | number of allocation points assigned to pool       |
| `_rewarder`   | IRewarder | address of rewarder contract set to pool           |
| `overwrite`   | bool      | bool to overwrite the already set rewarder address |

### setMigrator

```solidity
function setMigrator(
  IMigratorChef _migrator
) public onlyOwner
```

Sets the contract that is has ability to perform a migration for staked tokens, and can only be called by the owner.

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

Migrates an lp token/pool to another lp contract. Can be called by anyone, and we trust that migrator contract is good.

#### Parameters

| Name   | Type    | Description            |
| :----- | :------ | :--------------------- |
| `_pid` | uint256 | id for individual pool |

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
  uint256[] calldata pid
)
```

Updates reward variables for all pools passed via pid array.

### Parameters

| Name   | Type      | Description                       |
| :----- | :-------- | :-------------------------------- |
| `pids` | uint256[] | array of ids for individual pools |

### sushiPerBlock

```solidity
function sushiPerBlock() public view returns (uint256)
```

Polls and returns the amount of SUSHI per block distributed.

### updatePool

```solidity
function updatePool(
  uint256 pid
) public
```

Update reward variables for a given pool to be kept up-to-date.

Is called on all withdraws, and deposits. So will only be called by itself individually for pools that aren't as active to keep them up-to-date when updating allocation points.

#### Parameters

| Name  | Type    | Description            |
| :---- | :------ | :--------------------- |
| `pid` | uint256 | id for individual pool |

### deposit

```solidity
function deposit(
  uint256 pid,
  uint256 amount,
  address to
) public
```

Deposit LP tokens to MasterChef to start accruing SUSHI rewards.

#### Parameters

| Name     | Type    | Description                         |
| :------- | :------ | :---------------------------------- |
| `pid`    | uint256 | id for individual pool              |
| `amount` | uint256 | amount of tokens to deposit         |
| `to`     | address | receiver of amount deposit benefits |

### withdraw

```solidity
function withdraw(
  uint256 pid,
  uint256 amount,
  address to
) public
```

Withdraw LP tokens from MasterChef.

#### Parameters

| Name     | Type    | Description                         |
| :------- | :------ | :---------------------------------- |
| `pid`    | uint256 | id for individual pool              |
| `amount` | uint256 | amount of tokens to withdraw        |
| `to`     | address | receiver of amount deposit benefits |

### harvest

```solidity
function harvest(
  uint256 pid,
  address to
) public
```

Harvest earned reward tokens from the individual pool.

#### Parameters

| Name  | Type    | Description                         |
| :---- | :------ | :---------------------------------- |
| `pid` | uint256 | id for individual pool              |
| `to`  | address | receiver of amount deposit benefits |

### withdrawAndHarvest

```solidity
function withdrawAndHarvest(
  uint256 pid,
  uint256 amount,
  address to
) public
```

Withdraw LP tokens from MasterChefV2 and harvest rewards.

#### Parameters

| Name     | Type    | Description                         |
| :------- | :------ | :---------------------------------- |
| `pid`    | uint256 | id for individual pool              |
| `amount` | uint256 | amount of tokens to withdraw        |
| `to`     | address | receiver of amount deposit benefits |

### harvestFromMasterChef

```solidity
function harvestFromMasterChef() public
```

Harvest SUSHI from `MASTER_CHEF` and pool `MASTER_PID` to this MasterChefV2 contract.

### emergencyWithdraw

```solidity
function emergencyWithdraw(
  uint256 pid,
  address to
) public
```

Withdraws full amount of staked LP tokens from MasterChefV2 without receiving SUSHI rewards. To be only used for emergencies or problems with harvesting rewards.

#### Parameters

| Name  | Type    | Description                         |
| :---- | :------ | :---------------------------------- |
| `pid` | uint256 | id for individual pool              |
| `to`  | address | receiver of amount deposit benefits |
