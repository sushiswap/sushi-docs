---
sidebar_position: 1
---

# ConstantProductPool

The ConstProductPool is similar to x\*y=k, V2, or classic style pools that provide liquidity full range over the entire range. The ConstantProductPool implements the Trident interface, and uses BentoBox as the central vault for storing tokens.

The contract is responsible for all pair logic including: liquidity provision, swapping, and rebalancing the pair.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/pool/constant-product/ConstantProductPool.sol)

## Read-Only Functions

### getAssets

```solidity
function getAssets() public view override returns (address[] memory assets);
```

This function is used to fetch the tokens stored in this contract.

#### Returns

| Name     | Type             | Description                                             |
| :------- | :--------------- | :------------------------------------------------------ |
| `assets` | address[] memory | Array of the addresses of the tokens stored in contract |

#### Modifiers

This function is a view, meaning it doesn't change the state of the blockchain.

### getAmountOut

```solidity
function getAmountOut(bytes calldata data) public view override returns (uint256 finalAmountOut);
```

This function calculates the amount of tokens to be received (output) when a certain amount of a token is given (input) for a swap.

#### Parameters

| Name   | Type           | Description                                            |
| :----- | :------------- | :----------------------------------------------------- |
| `data` | bytes calldata | Encoded input token address and the input token amount |

#### Returns

| Name             | Type    | Description                                      |
| :--------------- | :------ | :----------------------------------------------- |
| `finalAmountOut` | uint256 | Amount of the output token that will be received |

#### Modifiers

This function is a view, meaning it doesn't change the state of the blockchain.

#### Reverts

This function reverts if the input token is neither `token0` nor `token1`.

#### Functions called

This function calls `_getReserves` and `_getAmountOut` from within its own contract. These functions are used to get the current reserves and calculate the amount to be output after the swap, respectively.

### getAmountIn

```solidity
function getAmountIn(bytes calldata data) public view override returns (uint256 finalAmountIn);
```

This function calculates the amount of tokens to be given (input) to receive a certain amount of a token (output) from a swap.

#### Parameters

| Name   | Type           | Description                                              |
| :----- | :------------- | :------------------------------------------------------- |
| `data` | bytes calldata | Encoded output token address and the output token amount |

#### Returns

| Name            | Type    | Description                                  |
| :-------------- | :------ | :------------------------------------------- |
| `finalAmountIn` | uint256 | Amount of the input token that will be given |

#### Modifiers

This function is a view, meaning it doesn't change the state of the blockchain.

#### Reverts

This function reverts if the output token is neither `token0` nor `token1`.

#### Functions called

This function calls `_getReserves` and `_getAmountIn` from within its own contract. These functions are used to get the current reserves and calculate the amount to be input for the swap, respectively.

### getReserves

```solidity
function getReserves()
        public
        view
        returns (
            uint112 _reserve0,
            uint112 _reserve1,
            uint32 _blockTimestampLast
        );
```

This function fetches the current reserves of both tokens in the pair and the timestamp of the last block where the reserves were updated. The returned values are in terms of BentoBox "shares".

## State-Changing Functions

### mint

```solidity
function mint(bytes calldata data) public override nonReentrant returns (uint256 liquidity);
```

Mints Liquidity Provider (LP) tokens. This function is typically called via a router after transferring `bento` tokens. The router must ensure that a sufficient amount of LP tokens are minted by using the return value.

-   The function calculates the amount of LP tokens to mint based on the current reserves and the new balances after the deposit.
-   If it's the first liquidity provision in the pool, the liquidity provided is set to the geometric mean of the amounts of the two tokens deposited, minus the minimum liquidity. The minimum liquidity is burned to avoid issues with rounding errors.
-   For subsequent liquidity provisions, the amount of LP tokens minted is proportional to the square root of the product of the new balances of the two tokens in the pool, divided by the square root of the product of the old balances.

#### Parameters

| Name   | Type           | Description               |
| :----- | :------------- | :------------------------ |
| `data` | bytes calldata | encoded recipient address |

#### Returns

| Name        | Type    | Description                                             |
| :---------- | :------ | :------------------------------------------------------ |
| `liquidity` | uint256 | amount of LP tokens minted and transferred to recipient |

#### Reverts

-   If both the amounts of the two tokens deposited are 0.
-   If no LP tokens were minted.

#### Events

```solidity
event Mint(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
```

#### Modifiers

This function is guarded by a `nonReentrant` modifier to prevent re-entrancy attacks.

### burn

```solidity
function burn(bytes calldata data) public override nonReentrant returns (IPool.TokenAmount[] memory withdrawnAmounts);
```

Burns Liquidity Provider (LP) tokens that have been sent to this contract. This function is typically called via a router. The router must ensure that the user gets a sufficient amount of output tokens.

-   The function calculates the amount of each underlying token to return to the user based on the proportion of the total supply of LP tokens that were burned.
-   The tokens are then transferred to the recipient.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes calldata | Encoded recipient address and a boolean indicating whether the tokens should be unwrapped from `bento` tokens or not |

#### Returns

| Name               | Type                       | Description                                                       |
| :----------------- | :------------------------- | :---------------------------------------------------------------- |
| `withdrawnAmounts` | IPool.TokenAmount[] memory | Array of TokenAmount structs with the amounts of tokens withdrawn |

#### Reverts

This function does not explicitly revert.

#### Events

```solidity
event Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
```

#### Modifiers

This function is guarded by a `nonReentrant` modifier to prevent re-entrancy attacks.

### burnSingle

```solidity
function burnSingle(bytes calldata data) public override nonReentrant returns (uint256 amountOut);
```

Burns Liquidity Provider (LP) tokens sent to this contract and performs a swap operation. The user gets a single output token by burning LP tokens.

-   This function is typically used when a user wants to withdraw their liquidity and immediately swap one of the tokens for the other, all in a single transaction.
-   The function calculates the amount of each underlying token to return to the user based on the proportion of the total supply of LP tokens that were burned.
-   One of the tokens is then swapped for the other, and the resulting token is transferred to the recipient.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes calldata | Encoded output token address, recipient address and a boolean indicating whether the tokens should be unwrapped from `bento` tokens or not |

#### Returns

| Name        | Type    | Description                                                          |
| :---------- | :------ | :------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of the output token that will be transferred to the recipient |

#### Reverts

This function reverts if the output token is neither `token0` nor `token1`.

#### Events

```solidity
event Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
```

#### Modifiers

This function is guarded by a `nonReentrant` modifier to prevent re-entrancy attacks.

### swap

```solidity
function swap(bytes calldata data) public override nonReentrant returns (uint256 amountOut);
```

Swaps one token for another within the pair in this contract. The router must prefund this contract with the input token and ensure there isn't too much slippage.

-   This function is typically used when a user wants to exchange one token for another in a single transaction.
-   The function calculates the amount of the output token to return to the user based on the input token amount and the current reserves.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes calldata | Encoded input token address, recipient address and a boolean indicating whether the tokens should be unwrapped from `bento` tokens or not |

#### Returns

| Name        | Type    | Description                                                          |
| :---------- | :------ | :------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of the output token that will be transferred to the recipient |

#### Reverts

This function reverts if the input token is neither `token0` nor `token1`, or if the pool is uninitialized.

#### Events

```solidity
event Swap(address indexed recipient, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOut);
```

#### Modifiers

This function is guarded by a `nonReentrant` modifier to prevent re-entrancy attacks.

#### Functions called

This function calls `_getReserves`, `_getAmountOut`, `_transfer`, and `_update` from within its own contract. These functions are used to get the current reserves, calculate the amount to be output after the swap, transfer the resulting tokens, and update the reserves, respectively.

This function calls `_getReserves`, `_getAmountOut`, `_transfer`, `_balance`, `_update` from within its own contract, and also the `tridentSwapCallback` from the `ITridentCallee` interface. These functions are used to get the current reserves, calculate the amount to be output after the swap, transfer the resulting tokens, get the current balances, update the reserves, and perform the callback function, respectively.

### flashSwap

```solidity
function flashSwap(bytes calldata data) public override nonReentrant returns (uint256 amountOut);
```

Executes a flash swap, i.e., it swaps one token for another and then performs a callback function to an external contract. The router must support swap callbacks and ensure there isn't too much slippage.

-   This function is typically used for arbitrage opportunities, where the contract borrows tokens, performs an action and repays the tokens within the same transaction.
-   The caller must ensure that after the callback, the pool's balance is greater than or equal to the amount borrowed, otherwise the transaction will revert.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `data` | bytes calldata | Encoded input token address, recipient address, a boolean indicating whether the tokens should be unwrapped from `bento` tokens or not, the input token amount and additional callback data |

#### Returns

| Name        | Type    | Description                                                          |
| :---------- | :------ | :------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of the output token that will be transferred to the recipient |

#### Reverts

This function reverts if the input token is neither `token0` nor `token1`, if the pool is uninitialized, or if the amount returned to the pool after the callback is less than the amount borrowed.

#### Events

```solidity
event Swap(address indexed recipient, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOut);
```

#### Modifiers

This function is guarded by a `nonReentrant` modifier to prevent re-entrancy attacks.

#### Functions called

This function calls `_getReserves`, `_getAmountOut`, `_transfer`, `_balance`, `_update` from within its own contract, and also the `tridentSwapCallback` from the `ITridentCallee` interface. These functions are used to get the current reserves, calculate the amount to be output after the swap, transfer the resulting tokens, get the current balances, update the reserves, and perform the callback function, respectively.

### updateBarParameters

```solidity
function updateBarParameters() public;
```

This function is used to update the `barFee` and `barFeeTo` for the Trident protocol. These parameters are fetched from the `masterDeployer` contract.

#### Modifiers

No modifiers are used in this function.

### getReserves

```solidity
function getReserves()
    public
    view
    returns (
        uint112 _reserve0,
        uint112 _reserve1,
        uint32 _blockTimestampLast
    );
```

This function fetches the current reserves of both tokens in the pair and the timestamp of the last block where the reserves were updated. The returned values are in terms of BentoBox "shares".

#### Returns

| Name                  | Type    | Description                                                |
| :-------------------- | :------ | :--------------------------------------------------------- |
| `_reserve0`           | uint112 | The reserve of `token0` in BentoBox shares                 |
| `_reserve1`           | uint112 | The reserve of `token1` in BentoBox shares                 |
| `_blockTimestampLast` | uint32  | The timestamp of the last block where the reserves updated |

#### Modifiers

This function is a view, meaning it doesn't change the state of the blockchain.

#### Functions called

This function calls `_getReserves` from within its own contract. This function is used to get the current reserves and the timestamp of the last block where the reserves were updated.

### getNativeReserves

```solidity
function getNativeReserves()
    public
    view
    returns (
        uint256 _nativeReserve0,
        uint256 _nativeReserve1,
        uint32 _blockTimestampLast
    );
```

This function fetches the current reserves of both tokens in the pair and the timestamp of the last block where the reserves were updated. The returned values are the native ERC20 token amounts.

#### Returns

| Name                  | Type    | Description                                                |
| :-------------------- | :------ | :--------------------------------------------------------- |
| `_nativeReserve0`     | uint256 | The reserve of `token0` in native ERC20 token amounts      |
| `_nativeReserve1`     | uint256 | The reserve of `token1` in native ERC20 token amounts      |
| `_blockTimestampLast` | uint32  | The timestamp of the last block where the reserves updated |

#### Modifiers

This function is a view, meaning it doesn't change the state of the blockchain.

#### Functions called

This function calls `_getReserves` from within its own contract to get the current reserves and the timestamp of the last block where the reserves were updated. It also calls `toAmount` from the `bento` contract to convert the reserves from BentoBox shares to native ERC20 token amounts.
