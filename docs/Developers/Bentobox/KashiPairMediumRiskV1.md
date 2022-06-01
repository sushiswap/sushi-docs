---
sidebar_position: 3
---

# KashiPairMediumRiskV1

This contract contains one of the Kashi strategies used on top of BentoBox.

You can find the full contract [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/bentobox/KashiPairMediumRiskV1.sol).

## Functions

### accrue

```
function accrue() public
```

Accrues the interest on the borrowed tokens and handles the accumulation of fees.

### \_isSolvent

```
function _isSolvent(
        address user,
        bool open,
        uint256 _exchangeRate
    ) internal view returns (bool)
```

Internal function used by the `solvent` modifier, it checks if the user is solvent in the closed liquidation case and returns a boolean.

#### Parameters

| Name            | Type    | Description                                                   |
| :-------------- | :------ | :------------------------------------------------------------ |
| `user`          | address | address of user to check solvency for                         |
| `open`          | bool    | boolean determining if liquidation case is closed or not      |
| `_exchangeRate` | uint256 | the exchange rate, used to cache `exchangeRate` between calls |

### updateExchangeRate

```
function updateExchangeRate() public returns (bool updated, uint256 rate)
```

Gets the exchange rate, ie how much collateral to buy 1e18 asset. Invoked if needed since Oracle queries can be expensive.

#### Returns

| Name      | Type    | Description                                                          |
| :-------- | :------ | :------------------------------------------------------------------- |
| `updated` | bool    | boolean determining if the exchange rate has been updated yet or not |
| `rate`    | uint256 | the new exchange rate that was fetched                               |

### \_addTokens

```
 function _addTokens(
        IERC20 token,
        uint256 share,
        uint256 total,
        bool skim
    ) internal
```

Internal helper function to move tokens.

#### Parameters

| Name    | Type    | Description                                                                                                            |
| :------ | :------ | :--------------------------------------------------------------------------------------------------------------------- |
| `token` | IERC20  | ERC20 token to add                                                                                                     |
| `share` | uint256 | amount of ERC20 token in shares to add                                                                                 |
| `total` | uint256 | total amount to deduct from this contract's balance                                                                    |
| `skim`  | bool    | if true, only does a balance check on this contract; false if tokens from msg.sender in bentoBox should be transferred |

### addCollateral

```
function addCollateral(
        address to,
        bool skim,
        uint256 share
    ) public
```

Adds `share` amount of collateral from `msg.sender` to the account `to`.

#### Parameters

| Name    | Type    | Description                            |
| :------ | :------ | :------------------------------------- |
| `to`    | address | receiver of the tokens                 |
| `skim`  | bool    | amount of ERC20 token in shares to add |
| `share` | uint256 | amount of shares to add for `to`       |

### \_removeCollateral

```
function _removeCollateral(address to, uint256 share) internal
```

Internal function called by `removeCollateral`, it removes the amount `share` of collateral and transfers it to the account `to`.

#### Parameters

| Name    | Type    | Description              |
| :------ | :------ | :----------------------- |
| `to`    | address | receiver of the shares   |
| `share` | uint256 | amount of shares to send |

### removeCollateral

```
function removeCollateral(address to, uint256 share) public solvent
```

Calls `_removeCollateral`, which removes the amount `share` of collateral and transfers it to the account `to`.

#### Parameters

| Name    | Type    | Description              |
| :------ | :------ | :----------------------- |
| `to`    | address | receiver of the shares   |
| `share` | uint256 | amount of shares to send |

### \_addAsset

```
function _addAsset(
        address to,
        bool skim,
        uint256 share
    ) internal returns (uint256 fraction)
```

Internal function called by `addAsset`, it adds the given assets to the lending pair.

#### Parameters

| Name    | Type    | Description                                                             |
| :------ | :------ | :---------------------------------------------------------------------- |
| `to`    | address | receiver of the assets                                                  |
| `skim`  | bool    | true if amount should be skimmed from the deposit balance of msg.sender |
| `share` | uint256 | amount of shares to add                                                 |

#### Returns

| Name       | Type    | Description           |
| :--------- | :------ | :-------------------- |
| `fraction` | uint256 | total fractions added |

### addAsset

```
function addAsset(
        address to,
        bool skim,
        uint256 share
    ) public returns (uint256 fraction)
```

Calls `_addAsset`, which adds the given assets to the lending pair.

#### Parameters

| Name    | Type    | Description                                                             |
| :------ | :------ | :---------------------------------------------------------------------- |
| `to`    | address | receiver of the assets                                                  |
| `skim`  | bool    | true if amount should be skimmed from the deposit balance of msg.sender |
| `share` | uint256 | amount of shares to add                                                 |

#### Returns

| Name       | Type    | Description           |
| :--------- | :------ | :-------------------- |
| `fraction` | uint256 | total fractions added |

### \_removeAsset

```
function _removeAsset(address to, uint256 fraction) internal returns (uint256 share)
```

Internal function called by `removeAsset`, it removes an asset from msg.sender and transfers it to `to`.

#### Parameters

| Name       | Type    | Description                              |
| :--------- | :------ | :--------------------------------------- |
| `to`       | address | receiver of the removed assets           |
| `fraction` | uint256 | amount/fraction of assets held to remove |

#### Returns

| Name    | Type    | Description                          |
| :------ | :------ | :----------------------------------- |
| `share` | uint256 | amount of shares transferred to `to` |

### removeAsset

```
function removeAsset(address to, uint256 fraction) public returns (uint256 share)
```

Calls `_removeAsset`, which removes an asset from msg.sender and transfers it to `to`.

#### Parameters

| Name       | Type    | Description                              |
| :--------- | :------ | :--------------------------------------- |
| `to`       | address | receiver of the removed assets           |
| `fraction` | uint256 | amount/fraction of assets held to remove |

#### Returns

| Name    | Type    | Description                          |
| :------ | :------ | :----------------------------------- |
| `share` | uint256 | amount of shares transferred to `to` |

### \_borrow

```
function _borrow(address to, uint256 amount) internal returns (uint256 part, uint256 share)
```

Internal function called by `borrow`, it allows the sender to borrow `amount` and transfer to `to`.

#### Parameters

| Name     | Type    | Description                     |
| :------- | :------ | :------------------------------ |
| `to`     | address | receiver of the borrowed assets |
| `amount` | uint256 | amount of assets to borrow      |

#### Returns

| Name    | Type    | Description                          |
| :------ | :------ | :----------------------------------- |
| `part`  | uint256 | total part of debt held by borrowers |
| `share` | uint256 | total amount in shares borrowed      |

### borrow

```
function borrow(address to, uint256 amount) public solvent returns (uint256 part, uint256 share)
```

Calls `_borrow`, which allows the sender to borrow `amount` and transfer to `to`.

#### Parameters

| Name     | Type    | Description                     |
| :------- | :------ | :------------------------------ |
| `to`     | address | receiver of the borrowed assets |
| `amount` | uint256 | amount of assets to borrow      |

#### Returns

| Name    | Type    | Description                          |
| :------ | :------ | :----------------------------------- |
| `part`  | uint256 | total part of debt held by borrowers |
| `share` | uint256 | total amount in shares borrowed      |

### \_repay

```
function _repay(
        address to,
        bool skim,
        uint256 part
    ) internal returns (uint256 amount)
```

Internal function called by `repay`, it repays a loan.

#### Parameters

| Name   | Type    | Description                                                             |
| :----- | :------ | :---------------------------------------------------------------------- |
| `to`   | address | address of user payment should go to                                    |
| `skim` | bool    | true if amount should be skimmed from the deposit balance of msg.sender |
| `part` | uint256 | amount to repay                                                         |

#### Returns

| Name     | Type    | Description          |
| :------- | :------ | :------------------- |
| `amount` | uint256 | total amount repayed |

### repay

```
function repay(
        address to,
        bool skim,
        uint256 part
    ) public returns (uint256 amount)
```

Calls `_repay`, which repays a loan.

#### Parameters

| Name   | Type    | Description                                                             |
| :----- | :------ | :---------------------------------------------------------------------- |
| `to`   | address | address of user payment should go to                                    |
| `skim` | bool    | true if amount should be skimmed from the deposit balance of msg.sender |
| `part` | uint256 | amount to repay                                                         |

#### Returns

| Name     | Type    | Description          |
| :------- | :------ | :------------------- |
| `amount` | uint256 | total amount repayed |

### cook

```
function cook(
        uint8[] calldata actions,
        uint256[] calldata values,
        bytes[] calldata datas
    ) external payable returns (uint256 value1, uint256 value2)
```

Executes a set of actions and allows composability (contract calls) to other contracts.

#### Parameters

| Name      | Type      | Description                                                                           |
| :-------- | :-------- | :------------------------------------------------------------------------------------ |
| `actions` | uint8[]   | array with sequence of actions to execute                                             |
| `values`  | uint256[] | one-to-one mapped array to `actions`, ETH amounts to send along with the actions      |
| `datas`   | bytes[]   | one-to-one mapped array to `actions`, contains abi encoded data of function arguments |

#### Returns

| Name     | Type    | Description                                                                                               |
| :------- | :------ | :-------------------------------------------------------------------------------------------------------- |
| `value1` | uint256 | may contain first positioned return value of last executed action (if applicable)                         |
| `value2` | uint256 | may contain second positioned return value of last executed action which returns 2 values (if applicable) |

### liquidate

```
function liquidate(
        address[] calldata users,
        uint256[] calldata maxBorrowParts,
        address to,
        ISwapper swapper,
        bool open
    ) public
```

Handles the liquidation of users' balances once the users' amount of collateral is too low.

#### Parameters

| Name             | Type      | Description                                                                                                    |
| :--------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| `users`          | address[] | array of user addresses                                                                                        |
| `maxBorrowParts` | uint256[] | one-to-one mapping to `users`, contains maximum (partial) borrow amounts (to liquidate) of the respective user |
| `to`             | address   | address of the receiver in open liquidations if `swapper` is zero                                              |
| `swapper`        | ISwapper  | contract address of the `ISwapper` implementation, swappers are restricted for closed liquidations             |
| `open`           | bool      | true to perform an open liquidation, else false                                                                |

### withdrawFees

```
function withdrawFees() public
```

Withdraw the fees accumulated.

### setSwapper

```
function setSwapper(ISwapper swapper, bool enable) public onlyOwner
```

Used to register and enable / disable swapper contracts used in closed liquidations. Can only be called by the owner of the contract.

#### Parameters

| Name      | Type     | Description                                                 |
| :-------- | :------- | :---------------------------------------------------------- |
| `swapper` | ISwapper | address of the swapper contract that conforms to `ISwapper` |
| `enable`  | bool     | true to enable the swapper, false to disable                |

### setFeeTo

```
function setFeeTo(address newFeeTo) public onlyOwner
```

Sets the beneficiary of fees accrued in liquidations. Can only be called by the owner of the contract.

#### Parameters

| Name       | Type    | Description                |
| :--------- | :------ | :------------------------- |
| `newFeeTo` | address | address of the beneficiary |
