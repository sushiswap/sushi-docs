# KashiPair

KashiPair is a masterContract for BentoBox that provides functionality for supplying an asset, borrowing that asset by supplying capital, and links to an oracle for the exchange rate.

## Functions

### init

```
function init(bytes calldata data) public payable override
```

This function serves as the constructor for clone contracts, as the clones can't have a regular constructor.

#### Parameters

| Name   | Type  | Description                                       |
| :----- | :---- | :------------------------------------------------ |
| `data` | bytes | abi-encoded collateral, asset, oracle, oracleData |

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

Internal function used by the `solvent` modifier, it checks if the user is solvent in the closed liquidation case.

#### Parameters

| Name            | Type    | Description                     |
| :-------------- | :------ | :------------------------------ |
| `user`          | address | user address                    |
| `open`          | bool    | liquidation case open or closed |
| `_exchangeRate` | uint256 | exchange rate                   |

### updateExchangeRate

```
function updateExchangeRate() public returns (bool updated, uint256 rate)
```

Gets the exchange rate and returns it.

#### Returns

| Name      | Type    | Description       |
| :-------- | :------ | :---------------- |
| `updated` | bool    | updated yes or no |
| `rate`    | uint256 | exchange rate     |

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

| Name    | Type    | Description                                         |
| :------ | :------ | :-------------------------------------------------- |
| `token` | IERC20  | token to add                                        |
| `share` | uint256 | amount in shares to add                             |
| `total` | uint256 | total amount to deduct from this contract's balance |
| `skim`  | bool    | if true, only does a balance check on this contract |

### addCollateral

```
function addCollateral(
        address to,
        bool skim,
        uint256 share
    ) public
```

Adds `collateral` from msg.sender to the account `to`.

#### Parameters

| Name    | Type    | Description                                                                 |
| :------ | :------ | :-------------------------------------------------------------------------- |
| `to`    | address | recipient address                                                           |
| `skim`  | bool    | true if the amount should be skimmed from the deposit balance of msg.sender |
| `share` | uint256 | amount of shares to add for `to`                                            |

### \_removeCollateral

```
function _removeCollateral(address to, uint256 share) internal
```

Internal function called by `removeCollateral`, it removes `share` amount of collateral and transfers it to the account `to`.

#### Parameters

| Name    | Type    | Description                |
| :------ | :------ | :------------------------- |
| `to`    | address | recipient address          |
| `share` | uint256 | amount of shares to remove |

### removeCollateral

```
function removeCollateral(address to, uint256 share) public solvent
```

Calls `_removeCollateral`, which removes `share` amount of collateral and transfers it to the account `to`.

#### Parameters

| Name    | Type    | Description                |
| :------ | :------ | :------------------------- |
| `to`    | address | recipient address          |
| `share` | uint256 | amount of shares to remove |

### \_addAsset

```
function _addAsset(
        address to,
        bool skim,
        uint256 share
    ) internal returns (uint256 fraction)
```

Internal function called by `addAsset`, it adds assets to the lending pair and returns the total fractions added.

#### Parameters

| Name    | Type    | Description                                                                 |
| :------ | :------ | :-------------------------------------------------------------------------- |
| `to`    | address | recipient address                                                           |
| `skim`  | bool    | true if the amount should be skimmed from the deposit balance of msg.sender |
| `share` | uint256 | amount of shares to add                                                     |

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

Calls `_addAsset`, which adds assets to the lending pair and returns the total fractions added.

#### Parameters

| Name    | Type    | Description                                                                 |
| :------ | :------ | :-------------------------------------------------------------------------- |
| `to`    | address | recipient address                                                           |
| `skim`  | bool    | true if the amount should be skimmed from the deposit balance of msg.sender |
| `share` | uint256 | amount of shares to add                                                     |

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
| `to`       | address | recipient address                        |
| `fraction` | uint256 | amount/fraction of assets held to remove |

#### Returns

| Name    | Type    | Description                            |
| :------ | :------ | :------------------------------------- |
| `share` | uint256 | amount of shares that were transferred |

### removeAsset

```
function removeAsset(address to, uint256 fraction) public returns (uint256 share)
```

Calls `_removeAsset`, which removes an asset from msg.sender and transfers it to `to`.

#### Parameters

| Name       | Type    | Description                              |
| :--------- | :------ | :--------------------------------------- |
| `to`       | address | recipient address                        |
| `fraction` | uint256 | amount/fraction of assets held to remove |

#### Returns

| Name    | Type    | Description                            |
| :------ | :------ | :------------------------------------- |
| `share` | uint256 | amount of shares that were transferred |

### \_borrow

```
function _borrow(address to, uint256 amount) internal returns (uint256 part, uint256 share)
```

Internal function called by `borrow`, it allows sender to borrow `amount` and transfers it to the account `to`.

#### Parameters

| Name     | Type    | Description       |
| :------- | :------ | :---------------- |
| `to`     | address | recipient address |
| `amount` | uint256 | amount to borrow  |

#### Returns

| Name    | Type    | Description                          |
| :------ | :------ | :----------------------------------- |
| `part`  | uint256 | total part of debt held by borrowers |
| `share` | uint256 | total amount in shares borrowed      |

### borrow

```
function borrow(address to, uint256 amount) public solvent returns (uint256 part, uint256 share)
```

Calls `_borrow`, which allows sender to borrow `amount` and transfers it to the account `to`.

#### Parameters

| Name     | Type    | Description       |
| :------- | :------ | :---------------- |
| `to`     | address | recipient address |
| `amount` | uint256 | amount to borrow  |

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

Internal function called by `repay`, it repays a loan and returns the total amount paid.

#### Parameters

| Name   | Type    | Description                                                                 |
| :----- | :------ | :-------------------------------------------------------------------------- |
| `to`   | address | recipient address                                                           |
| `skim` | bool    | true if the amount should be skimmed from the deposit balance of msg.sender |
| `part` | uint256 | amount to repay                                                             |

#### Returns

| Name     | Type    | Description         |
| :------- | :------ | :------------------ |
| `amount` | uint256 | total amount repaid |

### repay

```
function repay(
        address to,
        bool skim,
        uint256 part
    ) public returns (uint256 amount)
```

Calls `_repay`, which repays a loan and returns the total amount paid.

#### Parameters

| Name   | Type    | Description                                                                 |
| :----- | :------ | :-------------------------------------------------------------------------- |
| `to`   | address | recipient address                                                           |
| `skim` | bool    | true if the amount should be skimmed from the deposit balance of msg.sender |
| `part` | uint256 | amount to repay                                                             |

#### Returns

| Name     | Type    | Description         |
| :------- | :------ | :------------------ |
| `amount` | uint256 | total amount repaid |

### \_bentoDeposit

```
function _bentoDeposit(
        bytes memory data,
        uint256 value,
        uint256 value1,
        uint256 value2
    ) internal returns (uint256, uint256)
```

Internal helper function for depositing into `bentoBox`.

#### Parameters

| Name     | Type    | Description      |
| :------- | :------ | :--------------- |
| `data`   | bytes   | abi-encoded data |
| `value`  | uint256 | value            |
| `value1` | uint256 | value1           |
| `value2` | uint256 | value2           |

### \_bentoWithdraw

```
function _bentoWithdraw(
        bytes memory data,
        uint256 value1,
        uint256 value2
    ) internal returns (uint256, uint256)
```

Internal helper function for withdrawing from `bentoBox`.

#### Parameters

| Name     | Type    | Description      |
| :------- | :------ | :--------------- |
| `data`   | bytes   | abi-encoded data |
| `value`  | uint256 | value            |
| `value1` | uint256 | value1           |
| `value2` | uint256 | value2           |

### \_call

```
function _call(
        uint256 value,
        bytes memory data,
        uint256 value1,
        uint256 value2
    ) internal returns (bytes memory, uint8)
```

Internal helper function for performing a contract call and eventually extracting revert messages on failure.

#### Parameters

| Name     | Type    | Description      |
| :------- | :------ | :--------------- |
| `data`   | bytes   | abi-encoded data |
| `value`  | uint256 | value            |
| `value1` | uint256 | value1           |
| `value2` | uint256 | value2           |

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

| Name      | Type      | Description                                                       |
| :-------- | :-------- | :---------------------------------------------------------------- |
| `actions` | uint8[]   | array with a sequence of actions to execute                       |
| `values`  | uint256[] | mapped array to `actions`, ETH amounts to send along with actions |
| `datas`   | bytes[]   | mapped array to `actions`, abi-encoded data of function arguments |

#### Returns

| Name     | Type    | Description                                                                                      |
| :------- | :------ | :----------------------------------------------------------------------------------------------- |
| `value1` | uint256 | first positioned return value of the last executed action, if applicable                         |
| `value2` | uint256 | second positioned return value of the last executed action which returns 2 values, if applicable |

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

Handles the liquidation of users' balances, once the users' amount of collateral is too low.

#### Parameters

| Name             | Type      | Description                                                                                  |
| :--------------- | :-------- | :------------------------------------------------------------------------------------------- |
| `users`          | address[] | array of user addresses                                                                      |
| `maxBorrowParts` | uint256[] | mapped array to `users`, contains maximum borrow amounts to liquidate of the respective user |
| `to`             | address   | address of receiver in open liquidations                                                     |
| `swapper`        | ISwapper  | swapper contract address                                                                     |
| `open`           | bool      | true to perform an open liquidation, else false                                              |

### withdrawFees

```
function withdrawFees() public
```

Withdraws the fees accumulated.

### setSwapper

```
function setSwapper(ISwapper swapper, bool enable) public onlyOwner
```

Registers and enables / disables swapper contracts used in closed liquidations. Can only be called by the owner of the contract.

#### Parameters

| Name      | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `swapper` | ISwapper | swapper contract address                 |
| `enable`  | bool     | true to enable swapper, false to disable |

### setFeeTo

```
function setFeeTo(address newFeeTo) public onlyOwner
```

Sets the beneficiary of fees accrued in liquidations. Can only be called by the owner of the contract.

#### Parameters

| Name       | Type    | Description             |
| :--------- | :------ | :---------------------- |
| `newFeeTo` | address | new beneficiary address |
