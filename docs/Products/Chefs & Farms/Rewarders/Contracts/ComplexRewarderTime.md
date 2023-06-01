---
sidebar_position: 3
---

# ComplexRewarderTime

The ComplexRewarderTime contract is a rewarder contract that can be used with MasterChefV2 or MiniChef to distribute a single extra reward token to multiple pools. Works by setting a rewardPerSecond on the contract to determine the number of reward tokens distributed every second, and uses allocation points for each pool to determine the ratio of distribution for each.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/mocks/ComplexRewarderTime.sol).

## Functions

### onSushiReward

```solidity
function onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpToken) onlyMCV2 lock override external
```

Hook that is called from the MasterChefV2 or MiniChef contract to distribute the reward token to user that is harvesting SUSHI rewards.

#### Parameters

| Name      | Type    | Description                           |
| :-------- | :------ | :------------------------------------ |
| `pid`     | uint256 | pool ID of pool making the call       |
| `_user`   | address | address of user staked                |
| `to`      | address | address of where to send reward token |
| `lpToken` | uint256 | amount of LP token staked             |

### pendingTokens

```solidity
function pendingTokens(uint256 pid, address user, uint256) override external view returns (IERC20[] memory rewardTokens, uint256[] memory rewardAmounts)
```

View function to see pending reward tokens to harvest for a given user.

#### Parameters

| Name   | Type    | Description                                         |
| :----- | :------ | :-------------------------------------------------- |
| `pid`  | uint256 | pool ID of pool rewarder is set to on chef contract |
| `user` | address | address of user staked                              |

### setRewardPerSecond

```solidity
function setRewardPerSecond(uint256 _rewardPerSecond) public onlyOwner
```

Sets the reward per second to be distributed. Can only be called by the owner.

** Be conscious of reward token decimals when setting this **

#### Parameters

| Name               | Type    | Description                                              |
| :----------------- | :------ | :------------------------------------------------------- |
| `_rewardPerSecond` | uint256 | the amount of reward tokens to be distributed per second |

### poolLength

```solidity
function poolLength() public view returns (uint256 pools)
```

View functions that returns the number of pools added on this rewarder.

### add

```solidity
function add(uint256 allocPoint, uint256 _pid) public onlyOwner
```

Adds a new LP token to the rewarder. Can only be called by the owner.

Must be set to the same pid of pool on chef contract that this rewarder will be rewarding.

#### Parameters

| Name         | Type    | Description                                  |
| :----------- | :------ | :------------------------------------------- |
| `allocPoint` | uint256 | number of allocation points assigned to pool |
| `_pid`       | uint256 | pid of the pool on chef contracts            |

### set

```solidity
function set(uint256 _pid, uint256 _allocPoint) public onlyOwner
```

Update the given pool's allocation point. Can only be called by the owner.

#### Parameters

| Name          | Type    | Description                                  |
| :------------ | :------ | :------------------------------------------- | --------------------------------- |
| `_pid`        | uint256 |                                              | pid of the pool on chef contracts |
| `_allocPoint` | uint256 | number of allocation points assigned to pool |

### reclaimTokens

```solidity
function reclaimTokens(address token, uint256 amount, address payable to) public onlyOwner
```

Allows owner to reclaim/withdraw any tokens (including reward tokens) held by the contract.

#### Parameters

| Name     | Type    | Description                                                |
| :------- | :------ | :--------------------------------------------------------- |
| `token`  | address | token address to reclaim, use 0x00 for ETH or native token |
| `amount` | uint256 | amount of tokens to reclaim                                |
| `to`     | address | receiver of the reclaimed tokens                           |

### pendingToken

```solidity
function pendingToken(uint256 _pid, address _user) public view returns (uint256 pending)
```

View function to see pending reward tokens.

#### Parameters

| Name    | Type    | Description                                         |
| :------ | :------ | :-------------------------------------------------- |
| `_pid`  | uint256 | pool ID of pool rewarder is set to on chef contract |
| `_user` | address | address of user staked                              |

### massUpdatePools

```solidity
function massUpdatePools(uint256[] calldata pids) external
```

Update reward variables for all pools passed in the pid array.

#### Parameters

| Name   | Type      | Description                 |
| :----- | :-------- | :-------------------------- |
| `pids` | uint256[] | pool IDs of pools to update |

### updatePool

```solidity
function updatePool(uint256 pid) public returns (PoolInfo memory pool)
```

Updates reward variables for the given pool and returns the pool that was updated.

#### Parameters

| Name  | Type    | Description                                         |
| :---- | :------ | :-------------------------------------------------- |
| `pid` | uint256 | pool ID of pool rewarder is set to on chef contract |
