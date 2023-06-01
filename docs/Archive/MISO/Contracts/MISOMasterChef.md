---
sidebar_position: 6
---

# MISOMasterChef

The MISOMasterChef contract is in charge of alll the rewards in MISO... he's kind of a big deal.

The full contract can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/Farms/MISOMasterChef.sol).

## Functions

### getInitData

```solidity
function getInitData(
            address _rewards,
            uint256 _rewardsPerBlock,
            uint256 _startBlock,
            address _divaddr,
            address _accessControls
    )
        external
        pure
        returns (bytes memory _data)
```

Generates the init data for Farm Factory.

#### Parameters

| Name               | Type    | Description                        |
| :----------------- | :------ | :--------------------------------- |
| `_rewards`         | address | rewards token address              |
| `_rewardsPerBlock` | uint256 | rewards per block for whole farm   |
| `_startBlock`      | uint256 | starting block                     |
| `_divaddr`         | address | any donations if set are sent here |
| `_accessControls`  | address | address of accessControls          |

#### Returns

| Name    | Type  | Description            |
| :------ | :---- | :--------------------- |
| `_data` | bytes | abi-encoded parameters |

### setBonus

```solidity
function setBonus(
        uint256 _bonusEndBlock,
        uint256 _bonusMultiplier
    ) public
```

Sets the bonus rewards for the farm. Can only be called by the owner of the contract. !!

#### Parameters

| Name               | Type    | Description                        |
| :----------------- | :------ | :--------------------------------- |
| `_bonusEndBlock`   | uint256 | block to end the bonus on          |
| `_rewardsPerBlock` | uint256 | amount of bonus per block to award |

### poolLength

```solidity
function poolLength() external view returns (uint256)
```

View function that returns how many pools are in the farm. !!

### addToken

```solidity
function addToken(uint256 _allocPoint, IERC20 _lpToken, bool _withUpdate) public
```

Adds a new LP to the pool. Can only be called by the owner of the contract.

**Note:** _Do **NOT** add the same LP token more than once; rewards will be messed up if you do!_

#### Parameters

| Name          | Type    | Description                                  |
| :------------ | :------ | :------------------------------------------- |
| `_allocPoint` | uint256 | allocation point for the LP                  |
| `_lpToken`    | IERC20  | the LP token to be added                     |
| `_withUpdate` | bool    | boolean of whether update has started or not |

### set

```solidity
function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) public
```

Updates the given pool's token allocation point. Can only be called by the owner of the contract.

#### Parameters

| Name          | Type    | Description                                              |
| :------------ | :------ | :------------------------------------------------------- |
| `_pid`        | uint256 | pool ID that you want to change the allocation point for |
| `_allocPoint` | uint256 | LP allocation point to change to                         |
| `_withUpdate` | bool    | boolean of whether update has started or not             |

### getMultiplier

```solidity
function getMultiplier(uint256 _from, uint256 _to) public view returns (uint256)
```

Returns the reward multiplier over the given `_from` to `_to` block.

#### Parameters

| Name    | Type    | Description                                           |
| :------ | :------ | :---------------------------------------------------- |
| `_from` | uint256 | block to start calculating the reward multiplier from |
| `_to`   | uint256 | block to stop calculating the reward multiplier up to |

### pendingRewards

```solidity
function pendingRewards(uint256 _pid, address _user) external view returns (uint256)
```

View function to see pending token rewards on the frontend.

#### Parameters

| Name    | Type    | Description                           |
| :------ | :------ | :------------------------------------ |
| `_pid`  | uint256 | pool ID of pool to check rewards from |
| `_user` | address | address of user to check rewards for  |

### massUpdatePools

```solidity
function massUpdatePools() public
```

Updates the reward variables for _all_ pools.

**Note:** _Be careful of gas spending!_

### updatePool

```solidity
function updatePool(uint256 _pid) public
```

Updates the reward variables of a given pool to be up-to-date.

#### Parameters

| Name   | Type    | Description                           |
| :----- | :------ | :------------------------------------ |
| `_pid` | uint256 | pool ID of pool to update rewards for |

### deposit

```solidity
function deposit(uint256 _pid, uint256 _amount) public
```

Deposits LP tokens to MasterChef for rewards allocation.

#### Parameters

| Name      | Type    | Description                               |
| :-------- | :------ | :---------------------------------------- |
| `_pid`    | uint256 | pool ID of pool to deposit LP tokens from |
| `_amount` | uint256 | amount of LP tokens to deposit            |

### withdraw

```solidity
function withdraw(uint256 _pid, uint256 _amount) public
```

Withdraws LP tokens from MasterChef.

#### Parameters

| Name      | Type    | Description                                |
| :-------- | :------ | :----------------------------------------- |
| `_pid`    | uint256 | pool ID of pool to withdraw LP tokens from |
| `_amount` | uint256 | amount of LP tokens to withdraw            |

### emergencyWithdraw

```solidity
function emergencyWithdraw(uint256 _pid) public
```

Withdraws LP without caring for rewards. **_Use in EMERGENCIES only_**

#### Parameters

| Name   | Type    | Description                                |
| :----- | :------ | :----------------------------------------- |
| `_pid` | uint256 | pool ID of pool to emergency withdraw from |

### safeRewardsTransfer

```solidity
function safeRewardsTransfer(address _to, uint256 _amount) internal
```

An internal safe rewards transfer function, used in case of rounding errors causing a pool to not have enough tokens.

#### Parameters

| Name      | Type    | Description                   |
| :-------- | :------ | :---------------------------- |
| `_to`     | address | address to transfer tokens to |
| `_amount` | uint256 | amount of tokens to transfer  |

### tokensRemaining

```solidity
function tokensRemaining() public view returns(uint256)
```

View function that returns how many tokens the farm is holding. !!

### tokenDebt

```solidity
function tokenDebt() public view returns(uint256)
```

View function that returns the total amount of token debt. !!

### blocksRemaining

```solidity
function blocksRemaining() public view returns (uint256)
```

View function that returns the number of blocks remining with the current rewards balance.

### claimTips

```solidity
function claimTips() public
```

Claims any rewards for the developers, if set.

### dev

```solidity
function dev(address _devaddr) public
```

Update the developer address, by the previous dev (ie, can only be set by the previous `devaddr`).

#### Parameters

| Name       | Type    | Description               |
| :--------- | :------ | :------------------------ |
| `_devaddr` | address | new dev address to set to |

### setDevPercentage

```solidity
function setDevPercentage(uint256 _devPercentage) public
```

Updates the developer percentage, if applicable.

#### Parameters

| Name             | Type    | Description                 |
| :--------------- | :------ | :-------------------------- |
| `_devPercentage` | uint256 | dev percentage to update to |
