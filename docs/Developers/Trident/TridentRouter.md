---
sidebar_position: 2
---

# TridentRouter

The TridentRouter contract is a contract that facilitates in the swapping of assets across Trident pools.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/TridentRouter.sol).

## Functions

### exactInputSingle

```
function exactInputSingle(ExactInputSingleParams calldata params) public payable returns (uint256 amountOut)
```

Swaps token A to token B directly; swaps are done on `bento` tokens.

#### Parameters

| Name     | Type                   | Description                                                                                                                              |
| :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | ExactInputSingleParams | address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap |

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `amountOut` | uint256 | amount of token B after swap |

### exactInput

```
function exactInput(ExactInputParams calldata params) public payable returns (uint256 amountOut)
```

Swaps token A to token B indirectly by using multiple hops.

#### Parameters

| Name     | Type                   | Description                                                                                                                              |
| :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | ExactInputSingleParams | address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap |

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `amountOut` | uint256 | amount of token B after swap |

### exactInputSingleWithNativeToken

```
function exactInputSingleWithNativeToken(ExactInputSingleParams calldata params) public payable returns (uint256 amountOut)
```

Swaps token A to token B directly; it is the same as `exactInputSingle` except it takes raw ERC-20 tokens from the users and deposits them into `bento`.

#### Parameters

| Name     | Type                   | Description                                                                                                                              |
| :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | ExactInputSingleParams | address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap |

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `amountOut` | uint256 | amount of token B after swap |

### exactInputWithNativeToken

```
function exactInputWithNativeToken(ExactInputParams calldata params) public payable returns (uint256 amountOut)
```

Swaps token a to token B indirectly by using multiple hops; it is the same as `exactInput` except it takes raw ERC-20 tokens from the users and deposits them into `bento`.

#### Parameters

| Name     | Type                   | Description                                                                                                                              |
| :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | ExactInputSingleParams | address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap |

#### Returns

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `amountOut` | uint256 | amount of token B after swap |

### complexPath

```
function complexPath(ComplexPathParams calldata params) public payable
```

Swaps multiple input tokens to multiple output tokens using multiple paths, in different percentages.

#### Parameters

| Name     | Type              | Description                                                                       |
| :------- | :---------------- | :-------------------------------------------------------------------------------- |
| `params` | ComplexPathParams | includes all info needed for the swap (check `ComplexPathParams` struct for more) |

### addLiquidity

```
function addLiquidity(
        TokenInput[] calldata tokenInput,
        address pool,
        uint256 minLiquidity,
        bytes calldata data
    ) public payable returns (uint256 liquidity)
```

Adds liquidity to a pool.

#### Parameters

| Name           | Type         | Description                                  |
| :------------- | :----------- | :------------------------------------------- |
| `tokenInput`   | TokenInput[] | token address and amount to add as liquidity |
| `pool`         | address      | address of pool to add liquidity to          |
| `minLiquidity` | uint256      | minimum output liquidity (caps slippage)     |
| `data`         | bytes        | data required by pool to add liquidity       |

#### Returns

| Name        | Type    | Description                              |
| :---------- | :------ | :--------------------------------------- |
| `liquidity` | uint256 | amount of liquidity added to chosen pool |

### burnLiquidity

```
function burnLiquidity(
        address pool,
        uint256 liquidity,
        bytes calldata data,
        IPool.TokenAmount[] calldata minWithdrawals
    ) public payable
```

Burns liquidity tokens to get back `bento` tokens.

#### Parameters

| Name             | Type                | Description                                     |
| :--------------- | :------------------ | :---------------------------------------------- |
| `pool`           | address             | address of pool                                 |
| `liquidity`      | uint256             | amount of liquidity tokens to burn              |
| `data`           | bytes               | data required by pool to burn liquidity         |
| `minWithdrawals` | IPool.TokenAmount[] | minimum amount of `bento` tokens to be returned |

### burnLiquiditySingle

```
function burnLiquiditySingle(
        address pool,
        uint256 liquidity,
        bytes calldata data,
        uint256 minWithdrawal
    ) public payable
```

Burns liquidity tokens to get back `bento` tokens; the tokens are swapped automatically and the output is in a single token.

#### Parameters

| Name             | Type                | Description                             |
| :--------------- | :------------------ | :-------------------------------------- |
| `pool`           | address             | address of pool                         |
| `liquidity`      | uint256             | amount of liquidity tokens to burn      |
| `data`           | bytes               | data required by pool to burn liquidity |
| `minWithdrawals` | IPool.TokenAmount[] | minimum amount of tokens to be returned |

### sweep

```
function sweep(
        address token,
        uint256 amount,
        address recipient,
        bool fromBento
    ) external payable
```

Recovers mistakenly sent tokens.

#### Parameters

| Name        | Type    | Description                            |
| :---------- | :------ | :------------------------------------- |
| `token`     | address | address of token                       |
| `amount`    | uint256 | amount to recover                      |
| `recipient` | address | address to return tokens to            |
| `fromBento` | bool    | boolean to convert from `bento` tokens |

### unwrapWETH

```
function unwrapWETH(address recipient) external payable
```

Helper function to unwrap this contract's wETH into ETH.

#### Parameters

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `recipient` | address | address to send unwrapped ETH to |

### deployPool

```
function deployPool(address factory, bytes calldata deployData) external payable returns (address)
```

Wrapper function to allow pool deployment to be batched and returns the address of the deployed pool.

### approveMasterContract

```
function approveMasterContract(
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external payable
```

#### Parameters

| Name | Type    | Description                      |
| :--- | :------ | :------------------------------- |
| `v`  | uint8   | recovery byte of the signature   |
| `r`  | bytes32 | half of the ECDSA signature pair |
| `s`  | bytes32 | half of the ECDSA signature pair |

Wrapper function to allow Bento set master contract approval to be batched, so that the first trade can happen in a single transaction.

### harvest

```
function harvest(address token, uint256 maxChangeAmount) external payable
```

Rebalances a BentoBox token strategy and ensures there are enough tokens available to withdraw a swap amount.

#### Parameters

| Name              | Type    | Description           |
| :---------------- | :------ | :-------------------- |
| `token`           | address | address of token      |
| `maxChangeAmount` | uint256 | the max change amount |

### \_depositToBentoBox

```
function _depositToBentoBox(
        address token,
        address recipient,
        uint256 amount
    ) internal
```

Internal function used by others than deposits from the user's wallet into BentoBox.

#### Parameters

| Name        | Type    | Description                 |
| :---------- | :------ | :-------------------------- |
| `token`     | address | address of token to deposit |
| `recipient` | address | address of recipient        |
| `amount`    | uint256 | amount to deposit           |
