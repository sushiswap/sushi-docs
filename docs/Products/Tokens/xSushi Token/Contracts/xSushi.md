---
sidebar_position: 1
---

# SushiBar (xSushi)

The SushiBar contract is used for wrapping/unwrapping your SUSHI from/to xSUSHI. The xSUSHI token is then used in governance, and to take part in the distribution of fees that come from the protocol.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/master/contracts/SushiBar.sol).

## State-Changing Functions

### enter

```solidity
function enter(uint256 _amount) public;
```

Allows a user to deposit SUSHI tokens into the contract in exchange for xSUSHI tokens.

-   `msg.sender` should have already given the contract an allowance of at least `_amount` of SUSHI tokens.
-   The number of xSUSHI tokens minted depends on the current SUSHI to xSUSHI ratio, which can change over time.

#### Parameters

| Name      | Type    | Description                       |
| :-------- | :------ | :-------------------------------- |
| `_amount` | uint256 | number of SUSHI tokens to deposit |

#### Returns

This function doesn't return any values.

#### Reverts

This function reverts if the transfer of SUSHI tokens from `msg.sender` to the contract fails.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `_mint` function of the ERC20 standard and the `transferFrom` function of the SUSHI token contract.

---

### leave

```solidity
function leave(uint256 _share) public;
```

Allows a user to burn xSUSHI tokens in exchange for SUSHI tokens.

-   The number of SUSHI tokens returned depends on the current SUSHI to xSUSHI ratio, which can change over time.

#### Parameters

| Name     | Type    | Description                     |
| :------- | :------ | :------------------------------ |
| `_share` | uint256 | number of xSUSHI tokens to burn |

#### Returns

This function doesn't return any values.

#### Reverts

This function reverts if the burn of xSUSHI tokens from `msg.sender` or the transfer of SUSHI tokens to `msg.sender` fails.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `_burn` function of the ERC20 standard and the `transfer` function of the SUSHI token contract.
