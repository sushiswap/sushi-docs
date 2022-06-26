# OpenMevRouter

_Sandy Bradley &lt;sandy@commoditystream.com&gt;, Sam Bacha &lt;sam@commoditystream.com&gt;, ControlCandP_

> OpenMevRouter

Optimal MEV router contract (IUniswapV2Router compatible)

## Methods

### acceptOwnership

```solidity
function acceptOwnership() external nonpayable
```

_Transfers ownership of the contract to the caller. Can only be called by a new potential owner set by the current owner._

### addLiquidity

```solidity
function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) external nonpayable returns (uint256 amountA, uint256 amountB, uint256 liquidity)
```

Adds liquidity to an ERC-20⇄ERC-20 pool. msg.sender should have already given the router an allowance of at least amountADesired/amountBDesired on tokenA/tokenB

#### Parameters

| Name           | Type    | Description                                                       |
| -------------- | ------- | ----------------------------------------------------------------- |
| tokenA         | address | Token in pool                                                     |
| tokenB         | address | Token in pool                                                     |
| amountADesired | uint256 | Amount of token A desired to add to pool                          |
| amountBDesired | uint256 | Amount of token B desired to add to pool                          |
| amountAMin     | uint256 | Minimum amount of token A, can be 0                               |
| amountBMin     | uint256 | Minimum amount of token B, can be 0                               |
| to             | address | Address to receive liquidity token                                |
| deadline       | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name      | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| amountA   | uint256 | exact amount of token A added to pool |
| amountB   | uint256 | exact amount of token B added to pool |
| liquidity | uint256 | amount of liquidity token received    |

### addLiquidityETH

```solidity
function addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external payable returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)
```

Adds liquidity to an ERC-20⇄WETH pool with ETH. msg.sender should have already given the router an allowance of at least amountTokenDesired on token. msg.value is treated as a amountETHDesired. Leftover ETH, if any, is returned to msg.sender

#### Parameters

| Name               | Type    | Description                                                       |
| ------------------ | ------- | ----------------------------------------------------------------- |
| token              | address | Token in pool                                                     |
| amountTokenDesired | uint256 | Amount of token desired to add to pool                            |
| amountTokenMin     | uint256 | Minimum amount of token, can be 0                                 |
| amountETHMin       | uint256 | Minimum amount of ETH, can be 0                                   |
| to                 | address | Address to receive liquidity token                                |
| deadline           | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name        | Type    | Description                         |
| ----------- | ------- | ----------------------------------- |
| amountToken | uint256 | exact amount of token added to pool |
| amountETH   | uint256 | exact amount of ETH added to pool   |
| liquidity   | uint256 | amount of liquidity token received  |

### cancelOwnershipTransfer

```solidity
function cancelOwnershipTransfer() external payable
```

_Cancel a transfer of ownership to a new account. Can only be called by the current owner._

### executeOperation

```solidity
function executeOperation(address[] assets, uint256[] amounts, uint256[] premiums, address initiator, bytes params) external nonpayable returns (bool)
```

Called from Aave Lending pool after contract has received the flash loaned amount (https://docs.aave.com/developers/v/2.0/guides/flash-loans)

_Reverts if not profitable._

#### Parameters

| Name      | Type      | Description                                |
| --------- | --------- | ------------------------------------------ |
| assets    | address[] | Array of tokens to loan                    |
| amounts   | uint256[] | Array of amounts to loan                   |
| premiums  | uint256[] | Array of premiums to repay on loan amounts |
| initiator | address   | Address of flashloan initiator             |
| params    | bytes     | Encoded factories and tokens               |

#### Returns

| Name | Type | Description                |
| ---- | ---- | -------------------------- |
| \_0  | bool | success indicating success |

### getAmountIn

```solidity
function getAmountIn(uint256 amountOut, uint256 reserveIn, uint256 reserveOut) external pure returns (uint256 amountIn)
```

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| amountOut  | uint256 | undefined   |
| reserveIn  | uint256 | undefined   |
| reserveOut | uint256 | undefined   |

#### Returns

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| amountIn | uint256 | undefined   |

### getAmountOut

```solidity
function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) external pure returns (uint256 amountOut)
```

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| amountIn   | uint256 | undefined   |
| reserveIn  | uint256 | undefined   |
| reserveOut | uint256 | undefined   |

#### Returns

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| amountOut | uint256 | undefined   |

### getAmountsIn

```solidity
function getAmountsIn(uint256 amountOut, address[] path) external view returns (uint256[] amounts)
```

#### Parameters

| Name      | Type      | Description |
| --------- | --------- | ----------- |
| amountOut | uint256   | undefined   |
| path      | address[] | undefined   |

#### Returns

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| amounts | uint256[] | undefined   |

### getAmountsOut

```solidity
function getAmountsOut(uint256 amountIn, address[] path) external view returns (uint256[] amounts)
```

#### Parameters

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| amountIn | uint256   | undefined   |
| path     | address[] | undefined   |

#### Returns

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| amounts | uint256[] | undefined   |

### harvest

```solidity
function harvest(uint256 percentage, address[] tokens, address[] receivers) external payable
```

Multi-sig consensus call to distribute a given percentage of specified tokens to specified receivers.

#### Parameters

| Name       | Type      | Description                                   |
| ---------- | --------- | --------------------------------------------- |
| percentage | uint256   | Percentage of balance to distribute           |
| tokens     | address[] | Array of token addresses to distribute        |
| receivers  | address[] | Array of addresses for receiving distribution |

### isOwner

```solidity
function isOwner() external view returns (bool)
```

_Returns true if the caller is the current owner._

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### onFlashLoan

```solidity
function onFlashLoan(address sender, address token, uint256 amount, uint256 fee, bytes data) external nonpayable
```

Called from BentoBox Lending pool after contract has received the flash loaned amount

_Reverts if not profitable._

#### Parameters

| Name   | Type    | Description                    |
| ------ | ------- | ------------------------------ |
| sender | address | Address of flashloan initiator |
| token  | address | Token to loan                  |
| amount | uint256 | Amount to loan                 |
| fee    | uint256 | Fee to repay on loan amount    |
| data   | bytes   | Encoded factories and tokens   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### quote

```solidity
function quote(uint256 amountA, uint256 reserveA, uint256 reserveB) external pure returns (uint256 amountB)
```

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| amountA  | uint256 | undefined   |
| reserveA | uint256 | undefined   |
| reserveB | uint256 | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| amountB | uint256 | undefined   |

### removeLiquidity

```solidity
function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) external nonpayable returns (uint256 amountA, uint256 amountB)
```

Removes liquidity from an ERC-20⇄ERC-20 pool. msg.sender should have already given the router an allowance of at least liquidity on the pool.

#### Parameters

| Name       | Type    | Description                                                       |
| ---------- | ------- | ----------------------------------------------------------------- |
| tokenA     | address | Token in pool                                                     |
| tokenB     | address | Token in pool                                                     |
| liquidity  | uint256 | Amount of liquidity tokens to remove                              |
| amountAMin | uint256 | Minimum amount of token A, can be 0                               |
| amountBMin | uint256 | Minimum amount of token B, can be 0                               |
| to         | address | Address to receive pool tokens                                    |
| deadline   | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type    | Description                |
| ------- | ------- | -------------------------- |
| amountA | uint256 | Amount of token A received |
| amountB | uint256 | Amount of token B received |

### removeLiquidityETH

```solidity
function removeLiquidityETH(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external nonpayable returns (uint256 amountToken, uint256 amountETH)
```

Removes liquidity from an ERC-20⇄WETH pool and receive ETH. msg.sender should have already given the router an allowance of at least liquidity on the pool.

#### Parameters

| Name           | Type    | Description                                                       |
| -------------- | ------- | ----------------------------------------------------------------- |
| token          | address | Token in pool                                                     |
| liquidity      | uint256 | Amount of liquidity tokens to remove                              |
| amountTokenMin | uint256 | Minimum amount of token, can be 0                                 |
| amountETHMin   | uint256 | Minimum amount of ETH, can be 0                                   |
| to             | address | Address to receive pool tokens                                    |
| deadline       | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name        | Type    | Description              |
| ----------- | ------- | ------------------------ |
| amountToken | uint256 | Amount of token received |
| amountETH   | uint256 | Amount of ETH received   |

### removeLiquidityETHSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHSupportingFeeOnTransferTokens(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external nonpayable returns (uint256 amountETH)
```

Identical to removeLiquidityETH, but succeeds for tokens that take a fee on transfer. msg.sender should have already given the router an allowance of at least liquidity on the pool.

#### Parameters

| Name           | Type    | Description                                                       |
| -------------- | ------- | ----------------------------------------------------------------- |
| token          | address | Token in pool                                                     |
| liquidity      | uint256 | Amount of liquidity tokens to remove                              |
| amountTokenMin | uint256 | Minimum amount of token, can be 0                                 |
| amountETHMin   | uint256 | Minimum amount of ETH, can be 0                                   |
| to             | address | Address to receive pool tokens                                    |
| deadline       | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name      | Type    | Description            |
| --------- | ------- | ---------------------- |
| amountETH | uint256 | Amount of ETH received |

### removeLiquidityETHWithPermit

```solidity
function removeLiquidityETHWithPermit(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external nonpayable returns (uint256 amountToken, uint256 amountETH)
```

Removes liquidity from an ERC-20⇄WETTH pool and receive ETH without pre-approval, thanks to permit

#### Parameters

| Name           | Type    | Description                                                                      |
| -------------- | ------- | -------------------------------------------------------------------------------- |
| token          | address | Token in pool                                                                    |
| liquidity      | uint256 | Amount of liquidity tokens to remove                                             |
| amountTokenMin | uint256 | Minimum amount of token, can be 0                                                |
| amountETHMin   | uint256 | Minimum amount of ETH, can be 0                                                  |
| to             | address | Address to receive pool tokens                                                   |
| deadline       | uint256 | Unix timestamp in seconds after which the transaction will revert                |
| approveMax     | bool    | Whether or not the approval amount in the signature is for liquidity or uint(-1) |
| v              | uint8   | The v component of the permit signature                                          |
| r              | bytes32 | The r component of the permit signature                                          |
| s              | bytes32 | The s component of the permit signature                                          |

#### Returns

| Name        | Type    | Description              |
| ----------- | ------- | ------------------------ |
| amountToken | uint256 | Amount of token received |
| amountETH   | uint256 | Amount of ETH received   |

### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external nonpayable returns (uint256 amountETH)
```

Identical to removeLiquidityETHWithPermit, but succeeds for tokens that take a fee on transfer.

#### Parameters

| Name           | Type    | Description                                                                      |
| -------------- | ------- | -------------------------------------------------------------------------------- |
| token          | address | Token in pool                                                                    |
| liquidity      | uint256 | Amount of liquidity tokens to remove                                             |
| amountTokenMin | uint256 | Minimum amount of token, can be 0                                                |
| amountETHMin   | uint256 | Minimum amount of ETH, can be 0                                                  |
| to             | address | Address to receive pool tokens                                                   |
| deadline       | uint256 | Unix timestamp in seconds after which the transaction will revert                |
| approveMax     | bool    | Whether or not the approval amount in the signature is for liquidity or uint(-1) |
| v              | uint8   | The v component of the permit signature                                          |
| r              | bytes32 | The r component of the permit signature                                          |
| s              | bytes32 | The s component of the permit signature                                          |

#### Returns

| Name      | Type    | Description            |
| --------- | ------- | ---------------------- |
| amountETH | uint256 | Amount of ETH received |

### removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external nonpayable returns (uint256 amountA, uint256 amountB)
```

Removes liquidity from an ERC-20⇄ERC-20 pool without pre-approval, thanks to permit.

#### Parameters

| Name       | Type    | Description                                                                      |
| ---------- | ------- | -------------------------------------------------------------------------------- |
| tokenA     | address | Token in pool                                                                    |
| tokenB     | address | Token in pool                                                                    |
| liquidity  | uint256 | Amount of liquidity tokens to remove                                             |
| amountAMin | uint256 | Minimum amount of token A, can be 0                                              |
| amountBMin | uint256 | Minimum amount of token B, can be 0                                              |
| to         | address | Address to receive pool tokens                                                   |
| deadline   | uint256 | Unix timestamp in seconds after which the transaction will revert                |
| approveMax | bool    | Whether or not the approval amount in the signature is for liquidity or uint(-1) |
| v          | uint8   | The v component of the permit signature                                          |
| r          | bytes32 | The r component of the permit signature                                          |
| s          | bytes32 | The s component of the permit signature                                          |

#### Returns

| Name    | Type    | Description                |
| ------- | ------- | -------------------------- |
| amountA | uint256 | Amount of token A received |
| amountB | uint256 | Amount of token B received |

### swapETHForExactTokens

```solidity
function swapETHForExactTokens(uint256 amountOut, address[] path, address to, uint256 deadline) external payable returns (uint256[] amounts)
```

Receive an exact amount of tokens for as little ETH as possible, along the route determined by the path. The first element of path must be WETH9. Leftover ETH, if any, is returned to msg.sender. amountInMax = msg.value

_Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountOut | uint256 | Amount of output tokens that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type      | Description                                                         |
| ------- | --------- | ------------------------------------------------------------------- |
| amounts | uint256[] | Array of input token amount and all subsequent output token amounts |

### swapExactETHForTokens

```solidity
function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) external payable returns (uint256[] amounts)
```

Swaps an exact amount of ETH for as many output tokens as possible, along the route determined by the path. The first element of path must be WETH9, the last is the output token. amountIn = msg.value

_Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountOutMin | uint256 | Minimum amount of output tokens that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type      | Description                                                         |
| ------- | --------- | ------------------------------------------------------------------- |
| amounts | uint256[] | Array of input token amount and all subsequent output token amounts |

### swapExactETHForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactETHForTokensSupportingFeeOnTransferTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) external payable
```

Identical to swapExactETHForTokens, but succeeds for tokens that take a fee on transfer. amountIn = msg.value

_Require has been replaced with revert for gas optimization. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountOutMin | uint256 | Minimum amount of output tokens that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

### swapExactTokensForETH

```solidity
function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external nonpayable returns (uint256[] amounts)
```

Swaps an exact amount of tokens for as much ETH as possible, along the route determined by the path. The first element of path is the input token, the last must be WETH9.

_Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountIn | uint256 | Amount of input tokens to send. |
| amountOutMin | uint256 | Minimum amount of ETH that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type      | Description                                                         |
| ------- | --------- | ------------------------------------------------------------------- |
| amounts | uint256[] | Array of input token amount and all subsequent output token amounts |

### swapExactTokensForETHSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForETHSupportingFeeOnTransferTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external nonpayable
```

Identical to swapExactTokensForETH, but succeeds for tokens that take a fee on transfer.

_Require has been replaced with revert for gas optimization. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountIn | uint256 | Amount of input tokens to send. |
| amountOutMin | uint256 | Minimum amount of ETH that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

### swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external nonpayable returns (uint256[] amounts)
```

Swaps an exact amount of input tokens for as many output tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through. msg.sender should have already given the router an allowance of at least amountIn on the input token.

_Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountIn | uint256 | Amount of input tokens to send. |
| amountOutMin | uint256 | Minimum amount of output tokens that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type      | Description                                                         |
| ------- | --------- | ------------------------------------------------------------------- |
| amounts | uint256[] | Array of input token amount and all subsequent output token amounts |

### swapExactTokensForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external nonpayable
```

Identical to swapExactTokensForTokens, but succeeds for tokens that take a fee on transfer. msg.sender should have already given the router an allowance of at least amountIn on the input token.

_Require has been replaced with revert for gas optimization. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountIn | uint256 | Amount of input tokens to send. |
| amountOutMin | uint256 | Minimum amount of output tokens that must be received |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

### swapTokensForExactETH

```solidity
function swapTokensForExactETH(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline) external nonpayable returns (uint256[] amounts)
```

Receive an exact amount of ETH for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last must be WETH9. msg.sender should have already given the router an allowance of at least amountInMax on the input token.

_Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountOut | uint256 | Amount of ETH to receive |
| amountInMax | uint256 | Maximum amount of input tokens |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type      | Description                                                         |
| ------- | --------- | ------------------------------------------------------------------- |
| amounts | uint256[] | Array of input token amount and all subsequent output token amounts |

### swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline) external nonpayable returns (uint256[] amounts)
```

Receive an exact amount of output tokens for as few input tokens as possible, along the route determined by the path. msg.sender should have already given the router an allowance of at least amountInMax on the input token.

_Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| amountOut | uint256 | Amount of output tokens to receive |
| amountInMax | uint256 | Maximum amount of input tokens |
| path | address[] | Array of token addresses. path.length must be &gt;= 2. Pools for each consecutive pair of addresses must exist and have liquidity |
| to | address | Address of receiver |
| deadline | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name    | Type      | Description                                                         |
| ------- | --------- | ------------------------------------------------------------------- |
| amounts | uint256[] | Array of input token amount and all subsequent output token amounts |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external payable
```

_Allows a new account (`newOwner`) to accept ownership. Can only be called by the current owner._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| newOwner | address | undefined   |

### updateAaveAsset

```solidity
function updateAaveAsset(bool isActive, address asset) external payable
```

Update internal Aave asset flag

#### Parameters

| Name     | Type    | Description                                                   |
| -------- | ------- | ------------------------------------------------------------- |
| isActive | bool    | Boolean flagging whether to use the asset for Aave flashloans |
| asset    | address | Address of asset                                              |

### updateAllAaveAssets

```solidity
function updateAllAaveAssets() external payable
```

Update all internal Aave assets

## Events

### LoanError

```solidity
event LoanError(address indexed token, uint256 amountIn)
```

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| token `indexed` | address | undefined   |
| amountIn        | uint256 | undefined   |

### MEV

```solidity
event MEV(address indexed user, address indexed token, uint256 value)
```

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| user `indexed`  | address | undefined   |
| token `indexed` | address | undefined   |
| value           | uint256 | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |

## Errors

### ExcessiveInputAmount

```solidity
error ExcessiveInputAmount()
```

### ExecuteNotAuthorized

```solidity
error ExecuteNotAuthorized()
```

### Expired

```solidity
error Expired()
```

### IdenticalAddresses

```solidity
error IdenticalAddresses()
```

### InsufficientAAmount

```solidity
error InsufficientAAmount()
```

### InsufficientAllowance

```solidity
error InsufficientAllowance()
```

### InsufficientBAmount

```solidity
error InsufficientBAmount()
```

### InsufficientLiquidity

```solidity
error InsufficientLiquidity()
```

### InsufficientOutputAmount

```solidity
error InsufficientOutputAmount()
```

### InvalidPath

```solidity
error InvalidPath()
```

### NoReceivers

```solidity
error NoReceivers()
```

### NoTokens

```solidity
error NoTokens()
```

### NotPercent

```solidity
error NotPercent()
```

### Overflow

```solidity
error Overflow()
```

### TokenIsFeeOnTransfer

```solidity
error TokenIsFeeOnTransfer()
```

### TransferFailed

```solidity
error TransferFailed()
```

### Unauthorized

```solidity
error Unauthorized()
```

### ZeroAddress

```solidity
error ZeroAddress()
```

### ZeroAmount

```solidity
error ZeroAmount()
```
