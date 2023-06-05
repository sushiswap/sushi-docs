---
sidebar_position: 1
---

# TokenAdapter

The TokenAdapter is an abstract contract that is inherited to provide functions required by the SushiXSwap contract to perform all token operations.

The full contract can be found here [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/adapters/TokenAdapter.sol).

## Read-Only Functions

## State-Changing Functions

### \_transferTokens

```solidity
function _transferTokens(
  IERC20 token,
  address to,
  uint256 amount
) internal;
```

Transfers a specified amount of tokens from the current contract (`this`) to another address.

-   The function checks if the token address is not `address(0)`. If it's not, it performs a `safeTransfer` of the ERC20 token. If it is `address(0)`, it assumes the token to be transferred is native (ETH) and uses the `transfer` function instead.

#### Parameters

| Name     | Type    | Description                                                          |
| :------- | :------ | :------------------------------------------------------------------- |
| `token`  | IERC20  | the token to be transferred. If `address(0)`, it's assumed to be ETH |
| `to`     | address | the recipient address of the tokens                                  |
| `amount` | uint256 | the amount of tokens to be transferred                               |

#### Returns

This function doesn't return any values.

#### Reverts

This function can revert if the `safeTransfer` call fails, which could occur if the contract's balance of the token is less than `amount`, or if `to` is a contract address that doesn't correctly handle ERC20 tokens.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `safeTransfer` function of the ERC20 token if the token is not `address(0)`. If the token is `address(0)`, it uses the `transfer` function to move ETH.

### \_transferFromToken

```solidity
function _transferFromToken(
  IERC20 token,
  address to,
  uint256 amount
) internal;
```

Transfers a specified amount of tokens from the caller (`msg.sender`) to another address.

-   The function uses the `safeTransferFrom` method of the ERC20 token to transfer tokens from the caller to the recipient address.

#### Parameters

| Name     | Type    | Description                            |
| :------- | :------ | :------------------------------------- |
| `token`  | IERC20  | the token to be transferred            |
| `to`     | address | the recipient address of the tokens    |
| `amount` | uint256 | the amount of tokens to be transferred |

#### Returns

This function doesn't return any values.

#### Reverts

This function can revert if the `safeTransferFrom` call fails. This could occur if the caller's balance of the token is less than `amount`, if the caller has not approved the contract to transfer `amount` tokens, or if `to` is a contract address that doesn't correctly handle ERC20 tokens.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `safeTransferFrom` function of the ERC20 token.

---

### \_unwrapTransfer

```solidity
function _unwrapTransfer(
  address token,
  address to
) internal;
```

Unwraps the wrapped native token (such as WETH) into the native token (such as ETH) and sends it to the receiver.

-   The function calls the `withdraw` method of the wrapped native token to convert it back to the native token. It then calls the `_transferTokens` method to send the native tokens to the receiver.

#### Parameters

| Name    | Type    | Description                                             |
| :------ | :------ | :------------------------------------------------------ |
| `token` | address | the address of the wrapped native token to be unwrapped |
| `to`    | address | the recipient address of the native tokens              |

#### Returns

This function doesn't return any values.

#### Reverts

This function can revert if the `withdraw` call fails or if the `_transferTokens` call fails.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `withdraw` function of the wrapped native token and the `_transferTokens` function of the current contract.

---

### \_wrapToken

```solidity
function _wrapToken(
  address token,
  uint256 amount
) internal;
```

Wraps the native token into a wrapped token (such as ETH into WETH).

-   The function calls the `deposit` method of the wrapped native token to convert the native tokens to the wrapped version.

#### Parameters

| Name     | Type    | Description                                                                          |
| :------- | :------ | :----------------------------------------------------------------------------------- |
| `token`  | address | the address of the wrapped native token that the native token should be converted to |
| `amount` | uint256 | the amount of native tokens to be converted                                          |

#### Returns

This function doesn't return any values.

#### Reverts

This function can revert if the `deposit` call fails.

#### Modifiers

This function doesn't use any modifiers.

#### Functions called

This function calls the `deposit` function of the wrapped native token.
