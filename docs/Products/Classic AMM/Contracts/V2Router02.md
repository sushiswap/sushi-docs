---
sidebar_position: 4
---

# V2Router02

V2Router02 is used as a intermediate contract to interact with liquidity pools, or the lower level V2Pair contract. The contract can be used to swap, add liquidity, withdraw liquidity. The contract also contains many variations of these three tasks that can be used for each unique situation like using native gas tokens (i.e. ETH), and Fee-On-Transfer tokens with a tax when transfers happen.

The full contract can be found [here](https://github.com/sushiswap/v2-core/blob/master/contracts/UniswapV2Router02.sol).

## Read-Only Functions

### factory

```solidity
function factory() external pure returns (address);
```

Returns [factory address](./V2Factory#address).

### WETH

```solidity
function WETH() external pure returns (address);
```

Returns the [canonical WETH address](https://blog.0xproject.com/canonical-weth-a9aa7d0279dd) on the Ethereum [mainnet](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2), or the canonical native wrapped address for the network the contracts are deployed on.

### quote

See [quote](./V2Library#quote).

### getAmountOut

See [getAmountOut](./V2Library#getamountout).

### getAmountIn

See [getAmountIn](./V2Library#getamountin).

### getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);
```

See [getAmountsOut](./V2Library#getamountsout).

### getAmountsIn

```solidity
function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts);
```

See [getAmountsIn](./V2Library#getamountsin).

## State-Changing Functions

### addLiquidity

```solidity
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```

Adds liquidity to an ERC-20⇄ERC-20 pool.

-   To cover all possible scenarios, `msg.sender` should have already given the router an allowance of at least amountADesired/amountBDesired on tokenA/tokenB.
-   Always adds assets at the ideal ratio, according to the price when the transaction is executed.
-   If a pool for the passed tokens does not exists, one is created automatically, and exactly amountADesired/amountBDesired tokens are added.
-   `amountAMin` and `amountBMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `tokenA` | address | address for one of the tokens in the pair |
| `tokenB` | address | address for the other token in the pair |
| `amountADesired` | uint | amount of tokenA to add as liquidity if the B/A price is <= amountBDesired/amountADesired (A depreciates) |
| `amountBDesired` | uint | amount of tokenB to add as liquidity if the A/B price is <= amountADesired/amountBDesired (B depreciates) |
| `amountAMin` | uint | bounds the extent to which the B/A price can go up before the transaction reverts. Must be <= amountADesired |
| `amountBMin` | uint | bounds the extent to which the A/B price can go up before the transaction reverts. Must be <= amountBDesired |
| `to` | address | recipient of the liquidity tokens |
| `deadline` | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name        | Type | Description                        |
| :---------- | :--- | :--------------------------------- |
| `amountA`   | uint | amount of tokenA added to the pair |
| `amountB`   | uint | amount of tokenB added to the pair |
| `liquidity` | uint | amount of liquidity tokens minted  |

### addLiquidityETH

```solidity
function addLiquidityETH(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountETH, uint liquidity);
```

Adds liquidity to an ERC-20⇄WETH pool with ETH.

-   To cover all possible scenarios, `msg.sender` should have already given the router an allowance of at least amountTokenDesired on token.
-   Always adds assets at the ideal ratio, according to the price when the transaction is executed.
-   `msg.value` is treated as a amountETHDesired.
-   Leftover ETH, if any, is returned to `msg.sender`.
-   If a pool for the passed token and WETH does not exists, one is created automatically, and exactly amountTokenDesired/`msg.value` tokens are added.
-   `amountTokenMin` and `amountETHMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `token` | address | other token besides WETH in the pair |
| `amountTokenDesired` | uint | amount of token to add as liquidity if the WETH/token price is <= `msg.value`/amountTokenDesired (token depreciates) |
| `amountTokenMin` | uint | amount of ETH to add as liquidity if the token/WETH price is <= amountTokenDesired/`msg.value` (WETH depreciates) |
| `amountETHMin` | uint | bounds the extent to which the WETH/token price can go up before the transaction reverts. Must be <= amountTokenDesire |
| `to` | address | recipient of the liquidity tokens |
| `deadline` | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name          | Type | Description                                          |
| :------------ | :--- | :--------------------------------------------------- |
| `amountToken` | uint | amount of token sent to the pair                     |
| `amountETH`   | uint | amount of ETH converted to WETH and sent to the pool |
| `liquidity`   | uint | amount of liquidity tokens minted                    |

### removeLiquidity

```solidity
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```

Removes liquidity from an ERC-20⇄ERC-20 pool.

-   `msg.sender` should have already given the router an allowance of at least liquidity on the pool.
-   `amountAMin` and `amountBMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name         | Type    | Description                                                                      |
| :----------- | :------ | :------------------------------------------------------------------------------- |
| `tokenA`     | address | address for one of the tokens in the pair                                        |
| `tokenB`     | address | address for the other token in the pair                                          |
| `liquidity`  | uint    | amount of liquidity tokens to remove or burn                                     |
| `amountAMin` | uint    | minimum amount of tokenA that must be received for the transaction not to revert |
| `amountBMin` | uint    | minimum amount of tokenB that must be received for the transaction not to revert |
| `to`         | address | recipient of the underlying assets                                               |
| `deadline`   | uint    | unix timestamp after which the transaction will revert                           |

#### Returns

| Name      | Type | Description               |
| :-------- | :--- | :------------------------ |
| `amountA` | uint | amount of tokenA received |
| `amountB` | uint | amount of tokenB received |

### removeLiquidityETH

```solidity
function removeLiquidityETH(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountETH);
```

Removes liquidity from an ERC-20⇄WETH pool and receive ETH.

-   `msg.sender` should have already given the router an allowance of at least liquidity on the pool.
-   `amountTokenMin` and `amountETHMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name             | Type    | Description                                                                     |
| :--------------- | :------ | :------------------------------------------------------------------------------ |
| `token`          | address | other token besides ETH in the pair                                             |
| `liquidity`      | uint    | amount of liquidity tokens to remove or burn                                    |
| `amountTokenMin` | uint    | minimum amount of token that must be received for the transaction not to revert |
| `amountETHMin`   | uint    | minimum amount of ETH that must be received for the transaction not to revert   |
| `to`             | uint    | recipient of the underlying assets                                              |
| `deadline`       | uint    | unix timestamp after which the transaction will revert                          |

#### Returns

| Name          | Type | Description              |
| :------------ | :--- | :----------------------- |
| `amountToken` | uint | amount of token received |
| `amountETH`   | uint | amount of ETH received   |

### removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```

Removes liquidity from an ERC-20⇄ERC-20 pool without pre-approval.

-   `amountAMin` and `amountBMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name         | Type    | Description                                                                        |
| :----------- | :------ | :--------------------------------------------------------------------------------- |
| `tokenA`     | address | address for one of the tokens in the pair                                          |
| `tokenB`     | address | address for the other token in the pair                                            |
| `liquidity`  | uint    | amount of liquidity tokens to remove                                               |
| `amountAMin` | uint    | minimum amount of tokenA that must be received for the transaction not to revert   |
| `amountBMin` | uint    | minimum amount of tokenB that must be received for the transaction not to revert   |
| `to`         | address | recipient of the underlying assets                                                 |
| `deadline`   | uint    | unix timestamp after which the transaction will revert                             |
| `approveMax` | bool    | whether or not the approval amount in the signature is for liquidity or `uint(-1)` |
| `v`          | uint8   | v component of the permit signature                                                |
| `r`          | bytes32 | r component of the permit signature                                                |
| `s`          | bytes32 | s component of the permit signature                                                |

#### Returns

| Name      | Type | Description               |
| :-------- | :--- | :------------------------ |
| `amountA` | uint | amount of tokenA received |
| `amountB` | uint | amount of tokenB received |

### removeLiquidityETHWithPermit

```solidity
function removeLiquidityETHWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountETH);
```

Removes liquidity from an ERC-20⇄WETTH pool and receive ETH without pre-approval.

-   `amountAMin` and `amountBMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name             | Type    | Description                                                                        |
| :--------------- | :------ | :--------------------------------------------------------------------------------- |
| `token`          | address | other token besides WETH in the pair                                               |
| `liquidity`      | uint    | amount of liquidity tokens to remove                                               |
| `amountTokenMin` | uint    | minimum amount of token that must be received for the transaction not to revert    |
| `amountETHMin`   | uint    | minimum amount of ETH that must be received for the transaction not to revert      |
| `to`             | address | recipient of the underlying assets                                                 |
| `deadline`       | uint    | unix timestamp after which the transaction will revert                             |
| `approveMax`     | bool    | whether or not the approval amount in the signature is for liquidity or `uint(-1)` |
| `v`              | uint8   | v component of the permit signature                                                |
| `r`              | bytes32 | r component of the permit signature                                                |
| `s`              | bytes32 | s component of the permit signature                                                |

#### Returns

| Name          | Type | Description              |
| :------------ | :--- | :----------------------- |
| `amountToken` | uint | amount of token received |
| `amountETH`   | uint | amount of ETH received   |

### removeLiquidityETHSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountETH);
```

Identical to [removeLiquidityETH](#removeliquidityeth), but succeeds for tokens that take a fee on transfer.

#### Parameters

| Name             | Type    | Description                                                                     |
| :--------------- | :------ | :------------------------------------------------------------------------------ |
| `token`          | address | other token besides WETH in the pair                                            |
| `liquidity`      | uint    | amount of liquidity tokens to remove                                            |
| `amountTokenMin` | uint    | minimum amount of token that must be received for the transaction not to revert |
| `amountETHMin`   | uint    | minimum amount of ETH that must be received for the transaction not to revert   |
| `to`             | address | recipient of the underlying assets                                              |
| `deadline`       | uint    | unix timestamp after which the transaction will revert                          |

#### Returns

| Name        | Type | Description            |
| :---------- | :--- | :--------------------- |
| `amountETH` | uint | amount of ETH received |

### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountETH);
```

Identical to [removeLiquidityETHWithPermit](#removeliquidityethwithpermit), but succeeds for tokens that take a fee on transfer.

#### Parameters

| Name             | Type    | Description                                                                        |
| :--------------- | :------ | :--------------------------------------------------------------------------------- |
| `token`          | address | other token besides WETH in the pair                                               |
| `liquidity`      | uint    | the amount of liquidity tokens to remove                                           |
| `amountTokenMin` | uint    | minimum amount of token that must be received for the transaction not to revert    |
| `amountETHMin`   | uint    | minimum amount of ETH that must be received for the transaction not to revert      |
| `to`             | address | recipient of the underlying assets                                                 |
| `deadline`       | uint    | unix timestamp after which the transaction will revert                             |
| `approveMax`     | bool    | whether or not the approval amount in the signature is for liquidity or `uint(-1)` |
| `v`              | uint8   | v component of the permit signature                                                |
| `r`              | bytes32 | r component of the permit signature                                                |
| `s`              | bytes32 | s component of the permit signature                                                |

#### Returns

| Name        | Type | Description                 |
| :---------- | :--- | :-------------------------- |
| `amountETH` | uint | The amount of ETH received. |

### swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Swaps an exact amount of input tokens for as many output tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

-   `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.
-   `msg.sender` should have already given the router an allowance of at least amountIn on the input token.
-   `amountOutMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountIn` | uint | amount of input tokens to send |
| `amountOutMin` | uint | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | address[] calldata | array of token addresses |
| `to` | address | recipient of the output tokens |
| `deadline` | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name      | Type          | Description                                                     |
| :-------- | :------------ | :-------------------------------------------------------------- |
| `amounts` | uint[] memory | The input token amount and all subsequent output token amounts. |

### swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(
  uint amountOut,
  uint amountInMax,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Receive an exact amount of output tokens for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate tokens to trade through (if, for example, a direct pair does not exist).

-   `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.
-   `msg.sender` should have already given the router an allowance of at least amountIn on the input token.
-   `amountInMax` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| amountOut | uint | amount of output tokens to receive |
| amountInMax | uint | maximum amount of input tokens that can be required before the transaction reverts |
| path | address[] calldata | array of token addresses |
| to | address | recipient of the output tokens |
| deadline | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name    | Type          | Description                                                |
| :------ | :------------ | :--------------------------------------------------------- |
| amounts | uint[] memory | input token amount and all subsequent output token amounts |

### swapExactETHForTokens

```solidity
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Swaps an exact amount of ETH for as many output tokens as possible, along the route determined by the path. The first element of path must be [WETH](#weth), the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

-   `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.
-   `amountOutMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `msg.value` (amountIn) | uint | amount of ETH to send |
| `amountOutMin` | `uint` | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | `address[] calldata` | array of token addresses |
| `to` | `address` | recipient of the output tokens |
| `deadline` | `uint` | unix timestamp after which the transaction will revert |

#### Returns

| Name    | Type            | Description                                                |
| :------ | :-------------- | :--------------------------------------------------------- |
| amounts | `uint[] memory` | input token amount and all subsequent output token amounts |

### swapTokensForExactETH

```solidity
function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Receive an exact amount of ETH for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last must be [WETH](#weth), and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

-   `msg.sender` should have already given the router an allowance of at least amountInMax on the input token.
-   If the to address is a smart contract, it must have the ability to receive ETH.
-   `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.
-   `amountInMax` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountOut` | uint | amount of ETH to receive |
| `amountInMax` | uint | maximum amount of input tokens that can be required before the transaction reverts |
| `path` | address[] calldata | array of token addresses |
| `to` | address | recipient of ETH |
| `deadline` | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name      | Type          | Description                                                |
| :-------- | :------------ | :--------------------------------------------------------- |
| `amounts` | uint[] memory | input token amount and all subsequent output token amounts |

### swapExactTokensForETH

```solidity
function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Swaps an exact amount of tokens for as much ETH as possible, along the route determined by the path. The first element of path is the input token, the last must be [WETH](#weth), and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

-   If the to address is a smart contract, it must have the ability to receive ETH.
-   `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.
-   `amountOutMin` can be used for slippage protection.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountIn` | uint | amount of input tokens to send |
| `amountOutMin` | uint | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | address[] calldata | array of token addresses |
| `to` | address | recipient of the ETH |
| `deadline` | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name      | Type          | Description                                                |
| :-------- | :------------ | :--------------------------------------------------------- |
| `amounts` | uint[] memory | input token amount and all subsequent output token amounts |

### swapETHForExactTokens

```solidity
function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Receive an exact amount of tokens for as little ETH as possible, along the route determined by the path. The first element of path must be [WETH](#weth), the last is the output token and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

-   Leftover ETH, if any, is returned to `msg.sender`.
-   `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity.
-   `deadline` is used to set a time restriction on how long it can take for the tx to be executed.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountOut` | uint | amount of tokens to receive |
| `msg.value` (amountInMax) | uint | maximum amount of ETH that can be required before the transaction reverts |
| `path` | address[] calldata | array of token addresses |
| `to` | address | recipient of the output tokens |
| `deadline` | uint | unix timestamp after which the transaction will revert |

#### Returns

| Name      | Type          | Description                                                |
| :-------- | :------------ | :--------------------------------------------------------- |
| `amounts` | uint[] memory | input token amount and all subsequent output token amounts |

### swapExactTokensForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForTokensSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

Identical to [swapExactTokensForTokens](#swapexacttokensfortokens), but succeeds for tokens that take a fee on transfer.

-   `msg.sender` should have already given the router an allowance of at least amountIn on the input token.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountIn` | uint | amount of input tokens to send. |
| `amountOutMin` | uint | minimum amount of output tokens that must be received for the transaction not to revert. |
| `path` | address[] calldata | array of token addresses |
| `to` | address | recipient of the output tokens |
| `deadline` | uint | unix timestamp after which the transaction will revert |

### swapExactETHForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactETHForTokensSupportingFeeOnTransferTokens(
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external payable;
```

Identical to [swapExactETHForTokens](#swapexactethfortokens), but succeeds for tokens that take a fee on transfer.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `msg.value` (amountIn) | uint | amount of ETH to send |
| `amountOutMin` | uint | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | address[] calldata | array of token addresses |
| `to` | address | recipient of the output tokens |
| `deadline` | uint | unix timestamp after which the transaction will revert |

### swapExactTokensForETHSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForETHSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

Identical to [swapExactTokensForETH](#swapexacttokensforeth), but succeeds for tokens that take a fee on transfer.

-   If the to address is a smart contract, it must have the ability to receive ETH.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amountIn` | uint | amount of input tokens to send |
| `amountOutMin` | uint | minimum amount of output tokens that must be received for the transaction not to revert |
| `path` | address[] calldata | array of token addresses. `path.length` must be >= 2 |
| `to` | address | recipient of the ETH |
| `deadline` | uint | unix timestamp after which the transaction will revert |

## Interface

```solidity
pragma solidity >=0.6.2;

import './IUniswapV2Router01.sol';

interface IUniswapV2Router02 is IUniswapV2Router01 {
    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountETH);
    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}
```

## ABI
