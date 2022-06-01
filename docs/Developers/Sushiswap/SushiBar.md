---
sidebar_position: 4
---

# SushiBar

SushiBar is the coolest bar in town - you come in with some SUSHI, and you leave with more! The longer you stay, the more SUSHI you get :)

The SushiBar contract handles swapping to and from xSUSHI, SushiSwap's staking token.

The full contract can be viewed [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/SushiBar.sol).

## Functions

### enter

```
function enter(uint256 _amount) public
```

Locks SUSHI and mints xSUSHI.

#### Parameters

| Name     | Type    | Description                                 |
| :------- | :------ | :------------------------------------------ |
| `amount` | uint256 | amount of SUSHI you wish to lock for xSUSHI |

### leave

```
function leave(uint256 _share) public
```

Unlocks the staked + gained SUSHI and burns xSUSHI.

#### Parameters

| Name     | Type    | Description                                               |
| :------- | :------ | :-------------------------------------------------------- |
| `_share` | uint256 | amount of SUSHI you have staked that you wish to withdraw |
