---
sidebar_position: 2
---

# BentoBox

The BentoBox is a vault for tokens. The stored tokens can be flashloaned or used in strategies - the yield from this will go to the token depositors.

You can find the full contract [here](https://github.com/sushiswap/sushiswap/tree/master/protocols/bentobox/v1/contracts).

**_Warning:_** Rebasing tokens are **NOT** supported and **WILL** cause a loss of funds!

## Functions

### \_tokenBalanceOf

```
function _tokenBalanceOf(IERC20 token) internal view returns (uint256 amount)
```

Internal function that returns the balance of `token` this contract holds, plus the total amount this contract thinks the strategy holds.

#### Parameters

| Name    | Type   | Description                         |
| :------ | :----- | :---------------------------------- |
| `token` | IERC20 | address of ERC20 token to represent |

### toShare

```
function toShare(
        IERC20 token,
        uint256 amount,
        bool roundUp
    ) external view returns (uint256 share)
```

Helper function to represent an amount of token in shares.

#### Parameters

| Name      | Type    | Description                              |
| :-------- | :------ | :--------------------------------------- |
| `token`   | IERC20  | address of ERC20 token to represent      |
| `amount`  | uint256 | amount of aforementioned ERC20 token     |
| `roundUp` | bool    | if the result share should be rounded up |

### toAmount

```
function toAmount(
        IERC20 token,
        uint256 share,
        bool roundUp
    ) external view returns (uint256 amount)
```

Helper function to represent shares back into token amount.

#### Parameters

| Name      | Type    | Description                               |
| :-------- | :------ | :---------------------------------------- |
| `token`   | IERC20  | address of ERC20 token to represent       |
| `share`   | uint256 | amount of shares                          |
| `roundUp` | bool    | if the result amount should be rounded up |

### deposit

```
function deposit(
        IERC20 token_,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public payable allowed(from) returns (uint256 amountOut, uint256 shareOut)
```

Deposit an amount of token represented in either amount or share.

#### Parameters

| Name     | Type    | Description                                                                  |
| :------- | :------ | :--------------------------------------------------------------------------- |
| `token`  | IERC20  | address of ERC20 token to deposit                                            |
| `from`   | address | address of account to pull the tokens from                                   |
| `to`     | address | address of account to push the tokens to                                     |
| `amount` | uint256 | token amount in native representation to deposit                             |
| `share`  | uint256 | token amount represented in shares to deposit, takes precendence over amount |

#### Returns

| Name        | Type    | Description                            |
| :---------- | :------ | :------------------------------------- |
| `amountOut` | uint256 | amount deposited                       |
| `shareOut`  | uint256 | deposited amount represented in shares |

### withdraw

```
 function withdraw(
        IERC20 token_,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public allowed(from) returns (uint256 amountOut, uint256 shareOut)
```

Withdraws an amount of token from a user account.

#### Parameters

| Name     | Type    | Description                                                                        |
| :------- | :------ | :--------------------------------------------------------------------------------- |
| `token`  | IERC20  | address of ERC20 token to withdraw                                                 |
| `from`   | address | address of account to pull the tokens from                                         |
| `to`     | address | address of account to push the tokens to                                           |
| `amount` | uint256 | token amount in native representation to deposit (must supply `amount` or `share`) |
| `share`  | uint256 | token amount represented in shares to deposit, takes precendence over amount       |

#### Returns

| Name        | Type    | Description                            |
| :---------- | :------ | :------------------------------------- |
| `amountOut` | uint256 | amount withdrawn                       |
| `shareOut`  | uint256 | withdrawn amount represented in shares |

### transfer

```
 function transfer(
        IERC20 token,
        address from,
        address to,
        uint256 share
    ) public allowed(from)
```

Transfer shares from a user account to another one.

#### Parameters

| Name    | Type    | Description                                |
| :------ | :------ | :----------------------------------------- |
| `token` | IERC20  | address of ERC20 token to transfer         |
| `from`  | address | address of account to pull the tokens from |
| `to`    | address | address of account to push the tokens to   |
| `share` | uint256 | token amount represented in shares         |

### transferMultiple

```
function transferMultiple(
        IERC20 token,
        address from,
        address[] calldata tos,
        uint256[] calldata shares
    ) public allowed(from)
```

Transfer shares from a user account to _multiple other ones._

#### Parameters

| Name     | Type               | Description                                                   |
| :------- | :----------------- | :------------------------------------------------------------ |
| `token`  | IERC20             | address of ERC20 token to transfer                            |
| `from`   | address            | address of account to pull the tokens from                    |
| `tos`    | address[] calldata | addresses of the receivers of the tokens                      |
| `shares` | uint256[] calldata | token amount represented in shares for each receiver in `tos` |

### flashLoan

```
function flashLoan(
        IFlashBorrower borrower,
        address receiver,
        IERC20 token,
        uint256 amount,
        bytes calldata data
    ) public
```

Provides flash loan capabilities.

#### Parameters

| Name       | Type           | Description                                                                                            |
| :--------- | :------------- | :----------------------------------------------------------------------------------------------------- |
| `borrower` | IFlashBorrower | the address of the contract that implements and conforms to `IFlashBorrower` and handles the flashloan |
| `receiver` | address        | address of the token receiver                                                                          |
| `token`    | IERC20         | address of the token to receive                                                                        |
| `amount`   | uint256        | amount of tokens to receive                                                                            |
| `data`     | bytes          | the calldata to pass to the `borrower` contract                                                        |

### batchFlashLoan

```
 function batchFlashLoan(
        IBatchFlashBorrower borrower,
        address[] calldata receivers,
        IERC20[] calldata tokens,
        uint256[] calldata amounts,
        bytes calldata data
    ) public
```

Support for batched flashloans; useful to request multiple different tokens in a single transaction.

#### Parameters

| Name        | Type                | Description                                                                                                 |
| :---------- | :------------------ | :---------------------------------------------------------------------------------------------------------- |
| `borrower`  | IBatchFlashBorrower | the address of the contract that implements and conforms to `IBatchFlashBorrower` and handles the flashloan |
| `receivers` | address[]           | array of addresses of the token receivers                                                                   |
| `tokens`    | IERC20[]            | addresses of the tokens                                                                                     |
| `amounts`   | uint256[]           | amounts of the tokens for each receiver                                                                     |
| `data`      | bytes               | the calldata to pass to the `borrower` contract                                                             |

### setStrategyTargetPercentage

```
function setStrategyTargetPercentage(IERC20 token, uint64 targetPercentage_) public onlyOwner
```

Sets the target percentage of the strategy for `token`. Can only be called by the owner of the contract.

#### Parameters

| Name                | Type   | Description                                                                   |
| :------------------ | :----- | :---------------------------------------------------------------------------- |
| `token`             | IERC20 | address of ERC20 token that maps to a strategy to change                      |
| `targetPercentage_` | uint64 | the new target in percent, must be lesser or equal to `MAX_TARGET_PERCENTAGE` |

### setStrategy

```
function setStrategy(IERC20 token, IStrategy newStrategy) public onlyOwner
```

Sets the contract address of a new strategy that conforms to `IStrategy` for `token` (must be called twice with the same arguments). Can only be called by the owner of the contract.

#### Parameters

| Name          | Type      | Description                                              |
| :------------ | :-------- | :------------------------------------------------------- |
| `token`       | IERC20    | address of ERC20 token that maps to a strategy to change |
| `newStrategy` | IStrategy | address of the contract that conforms to `IStrategy`     |

### harvest

```
function harvest(
        IERC20 token,
        bool balance,
        uint256 maxChangeAmount
    ) public
```

Executes the strategy of `token` - ie, the actual process of yield farming. Optionally does housekeeping if `balance` is true.

#### Parameters

| Name              | Type    | Description                                                                        |
| :---------------- | :------ | :--------------------------------------------------------------------------------- |
| `token`           | IERC20  | address of ERC20 token for which a strategy is deployed                            |
| `balance`         | bool    | true if housekeeping should be done                                                |
| `maxChangeAmount` | uint256 | the maximum abmount for either pulling or pushing from/to the `IStrategy` contract |
