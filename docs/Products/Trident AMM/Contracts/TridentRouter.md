---
sidebar_position: 1
---

# TridentRouter

The TridentRouter contract is used for facilitating swaps between pairs.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/TridentRouter.sol).

## State-Changing Functions

### exactInputSingle

```solidity
function exactInputSingle(ExactInputSingleParams calldata params) public payable returns (uint256 amountOut);
```

Performs a swap from token A to token B in a single pool. The swap is performed on `bento` tokens.

-   `params` includes the address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap.
-   Ensure that the pool is trusted before calling this function. The pool can steal users' tokens.

#### Parameters

| Name     | Type                   | Description                 |
| :------- | :--------------------- | :-------------------------- |
| `params` | ExactInputSingleParams | The parameters for the swap |

#### Returns

| Name        | Type    | Description                    |
| :---------- | :------ | :----------------------------- |
| `amountOut` | uint256 | The amount of token B received |

---

### exactInput

```solidity
function exactInput(ExactInputParams calldata params) public payable returns (uint256 amountOut);
```

Performs a swap from token A to token B across multiple hops.

-   `params` includes the addresses of the tokens, pools, amount of token A to swap, minimum amount of token B after the swap and data required by the pools for the swaps.
-   Ensure that the pools are trusted before calling this function. The pools can steal users' tokens.

#### Parameters

| Name     | Type             | Description                  |
| :------- | :--------------- | :--------------------------- |
| `params` | ExactInputParams | The parameters for the swaps |

#### Returns

| Name        | Type    | Description                          |
| :---------- | :------ | :----------------------------------- |
| `amountOut` | uint256 | The final amount of token B received |

---

### exactInputSingleWithNativeToken

```solidity
function exactInputSingleWithNativeToken(ExactInputSingleParams calldata params) public payable returns (uint256 amountOut);
```

Performs a swap from token A to token B in a single pool. The swap is performed on native ERC-20 tokens, which are deposited into `bento` before the swap.

-   `params` includes the address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap.
-   Ensure that the pool is trusted before calling this function. The pool can steal users' tokens.

#### Parameters

| Name     | Type                   | Description                 |
| :------- | :--------------------- | :-------------------------- |
| `params` | ExactInputSingleParams | The parameters for the swap |

#### Returns

| Name        | Type    | Description                    |
| :---------- | :------ | :----------------------------- |
| `amountOut` | uint256 | The amount of token B received |

### exactInputWithNativeToken

```solidity
function exactInputWithNativeToken(ExactInputParams calldata params) public payable returns (uint256 amountOut);
```

Performs a swap from token A to token B across multiple hops. The swap is performed on native ERC-20 tokens, which are deposited into `bento` before the swap.

-   `params` includes the addresses of the tokens, pools, amount of token A to swap, minimum amount of token B after the swap and data required by the pools for the swaps.
-   Ensure that the pools are trusted before calling this function. The pools can steal users' tokens.

#### Parameters

| Name     | Type             | Description                  |
| :------- | :--------------- | :--------------------------- |
| `params` | ExactInputParams | The parameters for the swaps |

#### Returns

| Name        | Type    | Description                          |
| :---------- | :------ | :----------------------------------- |
| `amountOut` | uint256 | The final amount of token B received |

---

### complexPath

```solidity
function complexPath(ComplexPathParams calldata params) public payable;
```

Performs a complex swap operation from multiple input tokens to multiple output tokens using different paths and proportions. For example, you can swap 50 DAI + 100 USDC into 60% ETH and 40% BTC.

-   `params` includes everything needed for the swap. Look at the `ComplexPathParams` struct for more details.
-   This function is not optimized for single swaps and should only be used in complex cases where the amounts are large enough that minimizing slippage by using multiple paths is worth the extra gas.

#### Parameters

| Name     | Type              | Description                 |
| :------- | :---------------- | :-------------------------- |
| `params` | ComplexPathParams | The parameters for the swap |

### addLiquidity

```solidity
function addLiquidity(TokenInput[] calldata tokenInput, address pool, uint256 minLiquidity, bytes calldata data) public payable returns (uint256 liquidity);
```

Adds liquidity to a specified pool.

-   `tokenInput` specifies the tokens and the corresponding amounts to be deposited as liquidity.
-   `pool` is the address of the pool to which liquidity will be added.
-   `minLiquidity` is the minimum amount of liquidity tokens the caller is willing to receive. This parameter sets a limit on slippage.
-   `data` is additional data that might be required by the pool to add liquidity.

#### Parameters

| Name           | Type         | Description                                           |
| :------------- | :----------- | :---------------------------------------------------- |
| `tokenInput`   | TokenInput[] | Tokens and corresponding amounts to add as liquidity  |
| `pool`         | address      | Address of the pool to add liquidity to               |
| `minLiquidity` | uint256      | Minimum liquidity the caller is willing to receive    |
| `data`         | bytes        | Additional data required by the pool to add liquidity |

#### Returns

| Name        | Type    | Description                       |
| :---------- | :------ | :-------------------------------- |
| `liquidity` | uint256 | Amount of liquidity tokens minted |

---

### burnLiquidity

```solidity
function burnLiquidity(address pool, uint256 liquidity, bytes calldata data, IPool.TokenAmount[] calldata minWithdrawals) public payable;
```

Burns liquidity tokens to withdraw tokens from a specified pool.

-   `pool` is the address of the pool from which tokens will be withdrawn.
-   `liquidity` is the amount of liquidity tokens to be burnt.
-   `data` is additional data that might be required by the pool to burn liquidity.
-   `minWithdrawals` is the minimum amount of each token that the caller is willing to receive. This parameter sets a limit on slippage.

#### Parameters

| Name             | Type                | Description                                                   |
| :--------------- | :------------------ | :------------------------------------------------------------ |
| `pool`           | address             | Address of the pool to burn liquidity from                    |
| `liquidity`      | uint256             | Amount of liquidity tokens to burn                            |
| `data`           | bytes               | Additional data required by the pool to burn liquidity        |
| `minWithdrawals` | IPool.TokenAmount[] | Minimum amount of each token the caller is willing to receive |

---

### burnLiquiditySingle

```solidity
function burnLiquiditySingle(address pool, uint256 liquidity, bytes calldata data, uint256 minWithdrawal) public payable;
```

Burns liquidity tokens to withdraw a single type of token from a specified pool.

-   `pool` is the address of the pool from which tokens will be withdrawn.
-   `liquidity` is the amount of liquidity tokens to be burnt.
-   `data` is additional data that might be required by the pool to burn liquidity.
-   `minWithdrawal` is the minimum amount of tokens that the caller is willing to receive. This parameter sets a limit on slippage.

#### Parameters

| Name            | Type    | Description                                               |
| :-------------- | :------ | :-------------------------------------------------------- |
| `pool`          | address | Address of the pool to burn liquidity from                |
| `liquidity`     | uint256 | Amount of liquidity tokens to burn                        |
| `data`          | bytes   | Additional data required by the pool to burn liquidity    |
| `minWithdrawal` | uint256 | Minimum amount of tokens the caller is willing to receive |

### sweep

```solidity
function sweep(address token, address recipient, bool fromBento) external payable;
```

Recovers mistakenly sent tokens.

-   `token` is the address of the token to be recovered.
-   `recipient` is the address that will receive the recovered tokens.
-   `fromBento` is a boolean indicating if the tokens to be swept are from the BentoBox contract.

#### Parameters

| Name        | Type    | Description                                                        |
| :---------- | :------ | :----------------------------------------------------------------- |
| `token`     | address | Address of the token to be recovered                               |
| `recipient` | address | Address that will receive the recovered tokens                     |
| `fromBento` | bool    | Indicates if the tokens to be swept are from the BentoBox contract |

---

### unwrapWETH

```solidity
function unwrapWETH(address recipient) external payable;
```

Unwraps the contract's wETH into ETH.

-   `recipient` is the address that will receive the unwrapped ETH.

#### Parameters

| Name        | Type    | Description                                 |
| :---------- | :------ | :------------------------------------------ |
| `recipient` | address | Address that will receive the unwrapped ETH |

---

### deployPool

```solidity
function deployPool(address factory, bytes calldata deployData) external payable returns (address);
```

Deploys a new pool.

-   `factory` is the address of the factory contract that will create the pool.
-   `deployData` is the data needed to deploy the pool.

#### Parameters

| Name         | Type    | Description                                               |
| :----------- | :------ | :-------------------------------------------------------- |
| `factory`    | address | Address of the factory contract that will create the pool |
| `deployData` | bytes   | Data needed to deploy the pool                            |

#### Returns

| Name      | Type    | Description                  |
| :-------- | :------ | :--------------------------- |
| (unnamed) | address | Address of the deployed pool |

---

### approveMasterContract

```solidity
function approveMasterContract(uint8 v, bytes32 r, bytes32 s) external payable;
```

Approves a master contract in the BentoBox contract.

-   `v`, `r`, `s` are the v, r, s components of a signature.

#### Parameters

| Name | Type    | Description                |
| :--- | :------ | :------------------------- |
| `v`  | uint8   | v component of a signature |
| `r`  | bytes32 | r component of a signature |
| `s`  | bytes32 | s component of a signature |

---

### harvest

```solidity
function harvest(address token, uint256 maxChangeAmount) external payable;
```

Calls the BentoBox harvest function to rebalance a BentoBox token strategy and ensure there are enough tokens available to withdraw a swap output.

-   `token` is the address of the token to be harvested.
-   `maxChangeAmount` is the maximum amount by which the balance of the token can change during the harvest operation.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `token` | address | Address of the token to be harvested |
| `maxChangeAmount` | uint256 | Maximum amount by which the balance of the token can change during the harvest operation |
