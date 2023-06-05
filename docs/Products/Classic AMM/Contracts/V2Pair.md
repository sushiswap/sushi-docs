---
sidebar_position: 2
---

# V2Pair

The V2Pair contracts are responsible for all pair logic including: liquidity provision, swapping, and rebalancing the pair.

The V2Pair contract inherits ERC20 functionality, so all usual ERC20 can be used with pair tokens.

This documentation covers pool specific functionality, where the full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushiswap/contracts/UniswapV2Pair.sol).

## Events

### Mint

```solidity
event Mint(address indexed sender, uint amount0, uint amount1);
```

Emitted each time liquidity tokens are created via [mint](#mint-1)

### Burn

```solidity
event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
```

Emitted each time liquidity tokens are destroyed via [burn](#burn-1).

### Swap

```solidity
event Swap(
  address indexed sender,
  uint amount0In,
  uint amount1In,
  uint amount0Out,
  uint amount1Out,
  address indexed to
);
```

Emitted each time a swap occurs via [swap](#swap-1).

### Sync

```solidity
event Sync(uint112 reserve0, uint112 reserve1);
```

Emitted each time reserves are updated via [mint](#mint-1), [burn](#burn-1), [swap](#swap-1), or [sync](#sync-1).

## Read-Only Functions

### MINIMUM_LIQUIDITY

```solidity
function MINIMUM_LIQUIDITY() external pure returns (uint);
```

Returns `1000` for all pairs.

-   To ameliorate rounding errors and increase the theoretical minimum tick size for liquidity provision, pairs burn the first MINIMUM_LIQUIDITY pool tokens.
-   Happens automatically during the first liquidity provision.

### factory

```solidity
function factory() external view returns (address);
```

Returns the factory address.

### token0

```solidity
function token0() external view returns (address);
```

Returns the address of the pair token with the lower sort order.

### token1

```solidity
function token1() external view returns (address);
```

Returns the address of the pair token with the higher sort order.

### getReserves

```solidity
function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
```

Returns the reserves of token0 and token1 used to price trades and distribute liquidity. Also returns the `block.timestamp` (mod `2**32`) of the last block during which an interaction occurred for the pair.

### price0CumulativeLast

```solidity
function price0CumulativeLast() external view returns (uint);
```

Returns the sum of the token's price for every second in the entire history of the contract.

-   Can be used to track accurate time-weighted average prices (TWAP)s across any time interval.
-   The TWAP is constructed by reading the cumulative price at the beginning and at the end of the desired TWAP interval. The difference in this cumulative price can then be divided by the length of the interval to create a TWAP for that period.

### price1CumulativeLast

```solidity
function price1CumulativeLast() external view returns (uint);
```

Returns the sum of the token's price for every second in the entire history of the contract.

### kLast

```solidity
function kLast() external view returns (uint);
```

Returns the product of the reserves as of the most recent liquidity event.

## State-Changing Functions

### mint

```solidity
function mint(address to) external returns (uint liquidity);
```

Creates pool tokens.

-   Emits [Mint](#mint), [Sync](#sync), Transfer

#### Parameters

| Name | Type    | Description                            |
| :--- | :------ | :------------------------------------- |
| `to` | address | address of the receiver of pool tokens |

#### Returns

| Name        | Type | Description                        |
| :---------- | :--- | :--------------------------------- |
| `liquidity` | uint | amount of liquidity tokens created |

### burn

```solidity
function burn(address to) external returns (uint amount0, uint amount1);
```

Destroys pool tokens.

-   Emits [Burn](#burn), [Sync](#sync), Transfer

#### Parameters

| Name | Type    | Description                                  |
| :--- | :------ | :------------------------------------------- |
| `to` | address | address of the receiver of token0 and token1 |

#### Returns

| Name      | Type | Description                         |
| :-------- | :--- | :---------------------------------- |
| `amount0` | uint | amount of token0 returned from burn |
| `amount1` | uint | amount of token1 returned from burn |

### swap

```solidity
function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
```

Swaps tokens. For regular swaps, `data.length` must be `0`.

-   Emits [Swap](#swap), [Sync](#sync).
-   Either amount0Out or amount1Out will be 0 on calls depending on what the swap is from and to.

#### Parameters

| Name         | Type    | Description                                  |
| :----------- | :------ | :------------------------------------------- |
| `amount0Out` | uint    | address of the receiver of pool tokens       |
| `amount1Out` | uint    | address of the other token in the pair       |
| `to`         | address | address of the receiver of out token         |
| `data`       | bytes   | calldata data to pass forward after the swap |

### skim

```solidity
function skim(address to) external;
```

Allows a user to withdraw the difference between the current balance of the pair and `2^112 - 1` to the caller, if that difference is greater than 0.

-   Used as a recovery mechanism in case enough tokens are sent to a pair to overflow the two uint112 storage slots for reserves, which could otherwise cause trades to fail.

#### Parameters

| Name | Type    | Description               |
| :--- | :------ | :------------------------ |
| `to` | address | address to skim tokens to |

### sync

```solidity
function sync() external;
```

Exists to set the the reserve of the contract to the current balances.

-   Emits [Sync](#sync).
-   Used as recovery mechanism in the case that a token asynchronously deflates the balance of a pair.

## Interface

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2Pair {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);
    function symbol() external pure returns (string memory);
    function decimals() external pure returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;

    event Mint(address indexed sender, uint amount0, uint amount1);
    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
    event Swap(
        address indexed sender,
        uint amount0In,
        uint amount1In,
        uint amount0Out,
        uint amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);

    function MINIMUM_LIQUIDITY() external pure returns (uint);
    function factory() external view returns (address);
    function token0() external view returns (address);
    function token1() external view returns (address);
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function price0CumulativeLast() external view returns (uint);
    function price1CumulativeLast() external view returns (uint);
    function kLast() external view returns (uint);

    function mint(address to) external returns (uint liquidity);
    function burn(address to) external returns (uint amount0, uint amount1);
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
    function skim(address to) external;
    function sync() external;

    function initialize(address, address) external;
}
```

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2ERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);
    function symbol() external pure returns (string memory);
    function decimals() external pure returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
```

## ABI
