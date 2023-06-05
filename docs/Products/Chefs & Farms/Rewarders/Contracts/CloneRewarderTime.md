---
sidebar_position: 3
---

# CloneRewarderTime

The CloneRewarderTime contract is a rewarder contract that can be used with MasterChefV2 or MiniChef to distribute a single extra reward token to a single pool. Works by setting a rewardPerSecond on the contract to determine the number of reward tokens distributed every second.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/mocks/CloneRewarderTime.sol).

## Functions

### init

```solidity
function init(bytes calldata data) public payable
```

Serves as the constructor for clones, calldata is structured as `(address rewardToken, address owner, uint256 rewardPerSecond, address masterLpToken)`

#### Parameters

| Name   | Type  | Description                               |
| :----- | :---- | :---------------------------------------- |
| `data` | bytes | bytes calldata to initialize the contract |

### onSushiReward

```solidity
function onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpTokenAmount) onlyMCV2 lock override external
```

Hook that is called from the MasterChefV2 or MiniChef contract to distribute the reward token to user that is harvesting SUSHI rewards.

#### Parameters

| Name            | Type    | Description                           |
| :-------------- | :------ | :------------------------------------ |
| `pid`           | uint256 | pool ID of pool making the call       |
| `_user`         | address | address of user staked                |
| `to`            | address | address of where to send reward token |
| `lpTokenAmount` | uint256 | amount of LP token staked             |

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

### rewardRates

```solidity
function rewardRates() external view returns (uint256[] memory)
```

View function to fetch the rewardPerSecond set on the rewarder contract.

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

### updatePool

```solidity
function updatePool(uint256 pid) public returns (PoolInfo memory pool)
```

Updates reward variables for the given pool and returns the pool that was updated.

#### Parameters

| Name  | Type    | Description                                         |
| :---- | :------ | :-------------------------------------------------- |
| `pid` | uint256 | pool ID of pool rewarder is set to on chef contract |
