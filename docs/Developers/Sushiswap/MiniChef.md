---
sidebar_position: 3
---

# MiniChef

The MiniChef contract plays the same role as the MasterChef contract does, with the main exception being that they are deployed across L2's, whereas MasterChef is deployed on the Ethereum mainnet.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/MiniChefV2.sol).

## Functions

### poolLength

```
function poolLength() public view returns (uint256 pools)
```

View function that returns the number of MiniChef pools.

### add

```
function add(uint256 allocPoint, IERC20 _lpToken, IRewarder _rewarder) public onlyOwner
```

Adds a new LP to the pool. Can only be called by the owner of the contract.

**Note:** _Do **NOT** add the same LP token more than once. Rewards will be messed up if you do!_

#### Parameters

| Name          | Type      | Description                                  |
| :------------ | :-------- | :------------------------------------------- |
| `_allocPoint` | uint256   | number of allocation points assigned to pool |
| `_lpToken`    | IERC20    | address of ERC20 token that will be staked   |
| `_rewarder`   | IRewarder | implementation of rewarder contract          |

### set

```
function set(uint256 _pid, uint256 _allocPoint, IRewarder _rewarder, bool overwrite) public onlyOwner
```

Updates the given pool's SUSHI allocation point and `IRewarder` contract. Can only be called by the owner of the contract.

#### Parameters

| Name          | Type      | Description                                        |
| :------------ | :-------- | :------------------------------------------------- |
| `_pid`        | uint256   | pool ID of pool to update                          |
| `_allocPoint` | uint256   | number of allocation points assigned to pool       |
| `_rewarder`   | IRewarder | implementation of rewarder contract                |
| `overwrite`   | bool      | true if `_rewarder` should be set, otherwise false |

### setSushiPerSecond

```
function setSushiPerSecond(uint256 _sushiPerSecond) public onlyOwner
```

Sets the SUSHI per second to be distributed. Can only be called by the owner of the contract.

#### Parameters

| Name              | Type    | Description                              |
| :---------------- | :------ | :--------------------------------------- |
| `_sushiPerSecond` | uint256 | amount of SUSHI to distribute per second |

### setMigrator

```
function setMigrator(IMigratorChef _migrator) public onlyOwner
```

Sets the `migrator` contract. Can only be called by the owner of the contract.

#### Parameters

| Name        | Type          | Description                         |
| :---------- | :------------ | :---------------------------------- |
| `_migrator` | IMigratorChef | contract address of migrator to set |

### migrate

```
function migrate(uint256 _pid) public
```

Migrates an LP token to another LP contract through the `migrator` contract.

#### Parameters

| Name   | Type    | Description                 |
| :----- | :------ | :-------------------------- |
| `_pid` | uint256 | pool ID to migrate an LP to |

### pendingSushi

```
function pendingSushi(uint256 _pid, address _user) external view returns (uint256 pending)
```

View function to see pending SUSHI on the frontend and returns the pending SUSHI rewards for a given user.

#### Parameters

| Name    | Type    | Description                                  |
| :------ | :------ | :------------------------------------------- |
| `_pid`  | uint256 | pool ID of pool to check                     |
| `_user` | address | address of user to check pending rewards for |

#### Returns

| Name      | Type    | Description                                        |
| :-------- | :------ | :------------------------------------------------- |
| `pending` | uint256 | amount of pending SUSHI rewards the given user has |

### massUpdatePools

```
function massUpdatePools(uint256[] calldata pids) external
```

Updates the reward variables for _all_ of the pools. Be careful of gas spending!

#### Parameters

| Name   | Type      | Description                 |
| :----- | :-------- | :-------------------------- |
| `pids` | uint256[] | pool IDs of pools to update |

### updatePool

```
function updatePool(uint256 pid) public returns (PoolInfo memory pool)
```

Updates rewards variables for the given pool and returns the pool that was updated.

#### Parameters

| Name  | Type    | Description               |
| :---- | :------ | :------------------------ |
| `pid` | uint256 | pool ID of pool to update |

#### Returns

| Name   | Type     | Description           |
| :----- | :------- | :-------------------- |
| `pool` | PoolInfo | pool that was updated |

### deposit

```
function deposit(uint256 pid, uint256 amount, address to) public
```

Deposits LP tokens to the MiniChef for SUSHI allocation. !!

#### Parameters

| Name     | Type    | Description                                  |
| :------- | :------ | :------------------------------------------- |
| `pid`    | uint256 | pool ID of pool to to deposit LP tokens from |
| `amount` | uint256 | amount of LP tokens to deposit               |
| `to`     | address | address of the receiver of the LP tokens     |

### withdraw

```
function withdraw(uint256 pid, uint256 amount, address to) public
```

Withdraws LP tokens from the MiniChef. !!

#### Parameters

| Name     | Type    | Description                                   |
| :------- | :------ | :-------------------------------------------- |
| `pid`    | uint256 | pool ID of pool to to withdraw LP tokens from |
| `amount` | uint256 | amount of LP tokens to withdraw               |
| `to`     | address | address of the receiver of the LP tokens      |

### harvest

```
function harvest(uint256 pid, address to) public
```

Harvests SUSHI rewards for transaction sender to `to`.

#### Parameters

| Name  | Type    | Description                                            |
| :---- | :------ | :----------------------------------------------------- |
| `pid` | uint256 | pool ID of pool to harvest from                        |
| `to`  | address | address of the receiver of the harvested SUSHI rewards |

### withdrawAndHarvest

```
function withdrawAndHarvest(uint256 pid, uint256 amount, address to) public
```

Withdraws LP tokens from the MiniChef _and_ harvests SUSHI rewards for transaction sender to `to`.

#### Parameters

| Name     | Type    | Description                                                |
| :------- | :------ | :--------------------------------------------------------- |
| `pid`    | uint256 | pool ID of pool to to withdraw LP tokens from              |
| `amount` | uint256 | amount of LP tokens to withdraw                            |
| `to`     | address | address of the receiver of the LP tokens and SUSHI rewards |

### emergencyWithdraw

```
function emergencyWithdraw(uint256 pid, address to) public
```

Withdraws LP tokens without caring about rewards. To be used in emergencies only.

#### Parameters

| Name  | Type    | Description                                |
| :---- | :------ | :----------------------------------------- |
| `pid` | uint256 | pool ID of pool to withdraw LP tokens from |
| `to`  | address | address of the receiver of the LP tokens   |
