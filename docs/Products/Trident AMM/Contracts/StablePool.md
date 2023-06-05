---
sidebar_position: 1
---

# StablePool

The StablePool is similar to solidly style pools that provide liquidity in very concentrated positions, and meant for pairs that are 1:1 to each other. The StablePool implements the Trident interface, and uses BentoBox as the central vault for storing tokens.

The contract is responsible for all pair logic including: liquidity provision, swapping, and rebalancing the pair.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/stable/StablePool.sol)

# Read-Only Functions

### updateBarParameters

```solidity
function updateBarParameters() public;
```

Updates `barFee` and `barFeeTo` for Trident protocol. This function fetches the current values of `barFee` and `barFeeTo` from the `masterDeployer` contract and updates the local copies of these parameters.

#### Modifiers

This function has no modifiers.

#### Events

This function does not emit any events.

---

### getAmountOut

```solidity
function getAmountOut(bytes calldata data) public view override returns (uint256 finalAmountOut);
```

Calculates the amount of output tokens that can be obtained for a given amount of input tokens.

-   The `data` parameter is used to specify the input token and the amount of the input token.
-   The function returns the amount of the output token that can be obtained.

#### Parameters

| Name   | Type  | Description                                                                    |
| :----- | :---- | :----------------------------------------------------------------------------- |
| `data` | bytes | Encoded data that specifies the input token and the amount of the input token. |

#### Returns

| Name             | Type    | Description                                          |
| :--------------- | :------ | :--------------------------------------------------- |
| `finalAmountOut` | uint256 | The amount of the output token that can be obtained. |

#### Reverts

-   `InvalidInputToken`: This error is thrown if the input token specified is not one of the tokens in the liquidity pool.

#### Modifiers

This function is marked as a `view`, which means it doesn't modify the contract state.

### getAssets

```solidity
function getAssets() public view returns (address[] memory assets);
```

Returns the addresses of the tokens in the pool.

#### Returns

| Name     | Type      | Description                              |
| :------- | :-------- | :--------------------------------------- |
| `assets` | address[] | The addresses of the tokens in the pool. |

#### Modifiers

This function is marked as a `view`, which means it doesn't modify the contract state.

---

### skim

```solidity
function skim() public nonReentrant;
```

Transfers the balances of the tokens in the pool to the owner of the masterDeployer.

#### Modifiers

-   `nonReentrant`: This modifier prevents reentrancy attacks.

#### Events

This function does not emit any events.

---

### getReserves

```solidity
function getReserves() public view returns (uint256 _reserve0, uint256 _reserve1);
```

Returns the reserves of the tokens in the pool.

#### Returns

| Name        | Type    | Description                                  |
| :---------- | :------ | :------------------------------------------- |
| `_reserve0` | uint256 | The reserve of the first token in the pool.  |
| `_reserve1` | uint256 | The reserve of the second token in the pool. |

#### Modifiers

This function is marked as a `view`, which means it doesn't modify the contract state.

---

### getNativeReserves

```solidity
function getNativeReserves() public view returns (uint256 _nativeReserve0, uint256 _nativeReserve1);
```

Returns the reserves of the tokens in the pool.

#### Returns

| Name              | Type    | Description                                  |
| :---------------- | :------ | :------------------------------------------- |
| `_nativeReserve0` | uint256 | The reserve of the first token in the pool.  |
| `_nativeReserve1` | uint256 | The reserve of the second token in the pool. |

#### Modifiers

This function is marked as a `view`, which means it doesn't modify the contract state.

## State-Changing Functions

### mint

```solidity
function mint(bytes calldata data) public override nonReentrant returns (uint256 liquidity);
```

Mints liquidity provider (LP) tokens to the specified recipient. This function should be called via the router after transferring the `bento` tokens. The router must ensure that sufficient LP tokens are minted by using the return value of this function.

-   The function requires that the contract is not currently in the middle of a reentrant call.
-   The `data` parameter is used to specify the recipient of the newly minted LP tokens.

#### Parameters

| Name   | Type  | Description                                                              |
| :----- | :---- | :----------------------------------------------------------------------- |
| `data` | bytes | Encoded data that specifies the recipient of the newly minted LP tokens. |

#### Returns

| Name        | Type    | Description                     |
| :---------- | :------ | :------------------------------ |
| `liquidity` | uint256 | The amount of LP tokens minted. |

#### Reverts

-   `InvalidAmounts`: This error is thrown if either of the amounts to be deposited into the liquidity pool is zero.
-   `InsufficientLiquidityMinted`: This error is thrown if the function failed to mint any LP tokens.

#### Events

```solidity
event Mint(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
```

This event is emitted when new LP tokens are minted. The `sender` is the address of the entity that initiated the minting process, `amount0` and `amount1` are the amounts of the two tokens that were added to the liquidity pool, and `to` is the address of the recipient of the newly minted LP tokens.

#### Modifiers

```solidity
modifier nonReentrant();
```

This modifier requires that the contract is not currently in the middle of a reentrant call.

### burn

```solidity
function burn(bytes calldata data) public override nonReentrant returns (IPool.TokenAmount[] memory withdrawnAmounts);
```

Burns liquidity provider (LP) tokens sent to this contract and returns the underlying assets to the specified recipient. The router must ensure that the user receives a sufficient amount of output tokens.

-   The function requires that the contract is not currently in the middle of a reentrant call.
-   The `data` parameter is used to specify the recipient of the underlying assets and a boolean flag indicating whether to unwrap the bento box tokens.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes | Encoded data that specifies the recipient of the underlying assets and a boolean flag indicating whether to unwrap the bento box tokens. |

#### Returns

| Name | Type | Description |
| :-- | :-- | :-- |
| `withdrawnAmounts` | IPool.TokenAmount[] | Array containing information about the tokens and the amounts that have been withdrawn. |

#### Events

```solidity
event Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
```

This event is emitted when LP tokens are burned. The `sender` is the address of the entity that initiated the burning process, `amount0` and `amount1` are the amounts of the two tokens that were withdrawn from the liquidity pool, and `to` is the address of the recipient of the withdrawn tokens.

#### Modifiers

```solidity
modifier nonReentrant();
```

This modifier requires that the contract is not currently in the middle of a reentrant call.

### burnSingle

```solidity
function burnSingle(bytes calldata data) public override nonReentrant returns (uint256 amountOut);
```

Burns liquidity provider (LP) tokens sent to this contract and returns a single type of underlying asset to the specified recipient. The router must ensure that the user receives a sufficient amount of output tokens.

-   The function requires that the contract is not currently in the middle of a reentrant call.
-   The `data` parameter is used to specify the type of token to be withdrawn, the recipient of the underlying assets, and a boolean flag indicating whether to unwrap the bento box tokens.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes | Encoded data that specifies the type of token to be withdrawn, the recipient of the underlying assets, and a boolean flag indicating whether to unwrap the bento box tokens. |

#### Returns

| Name        | Type    | Description                                      |
| :---------- | :------ | :----------------------------------------------- |
| `amountOut` | uint256 | The amount of the token that has been withdrawn. |

#### Reverts

-   `InvalidOutputToken`: This error is thrown if the output token specified is not one of the tokens in the liquidity pool.

#### Events

```solidity
event Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
```

This event is emitted when LP tokens are burned. The `sender` is the address of the entity that initiated the burning process, `amount0` and `amount1` are the amounts of the two tokens that were withdrawn from the liquidity pool, and `to` is the address of the recipient of the withdrawn tokens.

#### Modifiers

```solidity
modifier nonReentrant();
```

This modifier requires that the contract is not currently in the middle of a reentrant call.

### swap

```solidity
function swap(bytes calldata data) public override nonReentrant returns (uint256 amountOut);
```

Swaps one token for another. The router must prefund this contract and ensure there isn't too much slippage.

-   The function requires that the contract is not currently in the middle of a reentrant call.
-   The `data` parameter is used to specify the input token, the recipient of the output tokens, and a boolean flag indicating whether to unwrap the bento box tokens.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes | Encoded data that specifies the input token, the recipient of the output tokens, and a boolean flag indicating whether to unwrap the bento box tokens. |

#### Returns

| Name        | Type    | Description                                           |
| :---------- | :------ | :---------------------------------------------------- |
| `amountOut` | uint256 | The amount of the output token that has been swapped. |

#### Reverts

-   `InvalidInputToken`: This error is thrown if the input token specified is not one of the tokens in the liquidity pool.

#### Events

```solidity
event Swap(address indexed to, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOut);
```

This event is emitted when a token swap occurs. The `to` is the address of the recipient of the output tokens, `tokenIn` and `tokenOut` are the addresses of the input and output tokens, respectively, and `amountIn` and `amountOut` are the amounts of the input and output tokens, respectively.

#### Modifiers

```solidity
modifier nonReentrant();
```

This modifier requires that the contract is not currently in the middle of a reentrant call.
