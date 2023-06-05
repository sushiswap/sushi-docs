---
sidebar_position: 1
---

# V3Pool

The UniswapV3Pool contract is a core component of the Sushi V3 AMM, implementing the decentralized exchange functionality for trading and providing liquidity for token pairs.

## Read-Only Functions

### snapshotCumulativesInside

```solidity
function snapshotCumulativesInside(
    int24 tickLower,
    int24 tickUpper
) external view override returns (
    int56 tickCumulativeInside,
    uint160 secondsPerLiquidityInsideX128,
    uint32 secondsInside
);
```

Returns the cumulative values within the specified tick range. This function is useful for off-chain consumers to get aggregated values for a specific range of ticks without needing to query each individual tick.

#### Parameters

| Name        | Type  | Description             |
| :---------- | :---- | :---------------------- |
| `tickLower` | int24 | lower tick of the range |
| `tickUpper` | int24 | upper tick of the range |

#### Returns

| Name                            | Type    | Description                                                      |
| :------------------------------ | :------ | :--------------------------------------------------------------- |
| `tickCumulativeInside`          | int56   | difference in cumulative tick values between the tick range      |
| `secondsPerLiquidityInsideX128` | uint160 | difference in seconds per liquidity values within the tick range |
| `secondsInside`                 | uint32  | number of seconds that have passed within the tick range         |

#### Modifiers

```solidity
modifier noDelegateCall();
```

### observe

```solidity
function observe(
    uint32[] calldata secondsAgos
) external view override returns (
    int56[] memory tickCumulatives,
    uint160[] memory secondsPerLiquidityCumulativeX128s
);
```

Returns the tick and liquidity values for each `secondsAgo` specified in the input array. This function is useful for off-chain consumers to get historical data points for a pool's tick and liquidity values.

#### Parameters

| Name          | Type     | Description                                    |
| :------------ | :------- | :--------------------------------------------- |
| `secondsAgos` | uint32[] | array of seconds in the past to get values for |

#### Returns

| Name                                 | Type      | Description                                                 |
| :----------------------------------- | :-------- | :---------------------------------------------------------- |
| `tickCumulatives`                    | int56[]   | array of tick cumulative values for each `secondsAgo`       |
| `secondsPerLiquidityCumulativeX128s` | uint160[] | array of seconds per liquidity values for each `secondsAgo` |

#### Modifiers

```solidity
modifier noDelegateCall();
```

## State-Changing Functions

### increaseObservationCardinalityNext

```solidity
function increaseObservationCardinalityNext(uint16 observationCardinalityNext)
    external
    override
    lock
    noDelegateCall
```

Increases the maximum number of stored observations for the pool. This allows for more historical data to be retrieved, which can be useful for off-chain consumers.

#### Parameters

| Name                         | Type   | Description                                       |
| :--------------------------- | :----- | :------------------------------------------------ |
| `observationCardinalityNext` | uint16 | desired new maximum number of stored observations |

#### Events

```solidity
event IncreaseObservationCardinalityNext(uint16 oldObservationCardinalityNext, uint16 newObservationCardinalityNext);
```

#### Modifiers

```solidity
modifier lock();
modifier noDelegateCall();
```

### initialize

```solidity
function initialize(uint160 sqrtPriceX96) external override
```

Initializes the pool with a given square root price. This function can only be called once when the pool is first created. After initialization, the pool starts tracking price and liquidity data.

#### Parameters

| Name           | Type    | Description                                                                         |
| :------------- | :------ | :---------------------------------------------------------------------------------- |
| `sqrtPriceX96` | uint160 | the initial square root price for the pool (encoded as a Q64.96 fixed-point number) |

#### Events

```solidity
event Initialize(uint160 sqrtPriceX96, int24 tick);
```

### mint

```solidity
function mint(
  address recipient,
  int24 tickLower,
  int24 tickUpper,
  uint128 amount,
  bytes calldata data
) external override lock returns (uint256 amount0, uint256 amount1);
```

Mints new liquidity tokens in a specified range by depositing the underlying assets. The caller will provide the assets (amount0 and amount1) and receives liquidity tokens in return.

#### Parameters

| Name        | Type           | Description                                               |
| :---------- | :------------- | :-------------------------------------------------------- |
| `recipient` | address        | the address that will receive the minted liquidity tokens |
| `tickLower` | int24          | the lower tick of the desired price range                 |
| `tickUpper` | int24          | the upper tick of the desired price range                 |
| `amount`    | uint128        | the amount of liquidity to be minted                      |
| `data`      | bytes calldata | callback data to be passed to `uniswapV3MintCallback`     |

#### Returns

| Name      | Type    | Description                |
| :-------- | :------ | :------------------------- |
| `amount0` | uint256 | amount of token0 deposited |
| `amount1` | uint256 | amount of token1 deposited |

#### Events

```solidity
event Mint(
    address indexed sender,
    address indexed owner,
    int24 indexed tickLower,
    int24 indexed tickUpper,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
);
```

#### Modifiers

```solidity
modifier lock();
```

### collect

```solidity
function collect(
    address recipient,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount0Requested,
    uint128 amount1Requested
) external override lock returns (uint128 amount0, uint128 amount1);
```

Collects the fees owed to a position. The position's tokensOwed{0,1} fields are reduced by the collected amounts, and the tokens are transferred to the specified recipient.

#### Parameters

| Name               | Type    | Description                                        |
| :----------------- | :------ | :------------------------------------------------- |
| `recipient`        | address | the address that will receive the collected tokens |
| `tickLower`        | int24   | the lower tick of the position's price range       |
| `tickUpper`        | int24   | the upper tick of the position's price range       |
| `amount0Requested` | uint128 | the amount of token0 requested to be collected     |
| `amount1Requested` | uint128 | the amount of token1 requested to be collected     |

#### Returns

| Name      | Type    | Description                |
| :-------- | :------ | :------------------------- |
| `amount0` | uint128 | amount of token0 collected |
| `amount1` | uint128 | amount of token1 collected |

#### Events

```solidity
event Collect(
    address indexed owner,
    address indexed recipient,
    int24 indexed tickLower,
    int24 indexed tickUpper,
    uint128 amount0,
    uint128 amount1
);
```

#### Modifiers

```solidity
modifier lock();
```

### burn

```solidity
function burn(
    int24 tickLower,
    int24 tickUpper,
    uint128 amount
) external override lock returns (uint256 amount0, uint256 amount1);
```

Burns a specified amount of liquidity from a position. The position's liquidity is decreased, and the tokensOwed{0,1} fields are increased by the amounts that would be collected.

#### Parameters

| Name        | Type    | Description                                  |
| :---------- | :------ | :------------------------------------------- |
| `tickLower` | int24   | the lower tick of the position's price range |
| `tickUpper` | int24   | the upper tick of the position's price range |
| `amount`    | uint128 | the amount of liquidity to be burned         |

#### Returns

| Name      | Type    | Description           |
| :-------- | :------ | :-------------------- |
| `amount0` | uint256 | amount of token0 owed |
| `amount1` | uint256 | amount of token1 owed |

#### Events

```solidity
event Burn(
    address indexed owner,
    int24 indexed tickLower,
    int24 indexed tickUpper,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
);
```

#### Modifiers

```solidity
modifier lock();
```

### swap

```solidity
function swap(
    address recipient,
    bool zeroForOne,
    int256 amountSpecified,
    uint160 sqrtPriceLimitX96,
    bytes calldata data
) external override noDelegateCall returns (int256 amount0, int256 amount1);
```

Swaps an exact input or output amount between token0 and token1, subject to a price limit, and updates the pool's state.

#### Parameters

| Name                | Type    | Description                                                                     |
| :------------------ | :------ | :------------------------------------------------------------------------------ |
| `recipient`         | address | the address that receives the output tokens                                     |
| `zeroForOne`        | bool    | true if swapping token0 for token1, false if swapping token1 for token0         |
| `amountSpecified`   | int256  | exact amount to swap in or out, depending on whether it is positive or negative |
| `sqrtPriceLimitX96` | uint160 | the price limit of the swap, represented as a square root price                 |
| `data`              | bytes   | any additional data to be passed through to the callback                        |

#### Returns

| Name      | Type   | Description                        |
| :-------- | :----- | :--------------------------------- |
| `amount0` | int256 | amount of token0 swapped in or out |
| `amount1` | int256 | amount of token1 swapped in or out |

#### Events

```solidity
event Swap(
    address indexed sender,
    address indexed recipient,
    int256 amount0,
    int256 amount1,
    uint160 sqrtPriceX96,
    uint128 liquidity,
    int24 tick
);
```

#### Modifiers

```solidity
modifier noDelegateCall();
```

### flash

```solidity
function flash(
    address recipient,
    uint256 amount0,
    uint256 amount1,
    bytes calldata data
) external override lock noDelegateCall;
```

This function is designed to execute a flash swap, where the user borrows `amount0` of token0 and/or `amount1` of token1 from the pool and repays them with a fee within the same transaction. The `recipient` is the address that receives the borrowed tokens. The `data` parameter allows passing any additional data through to the callback function.

#### Parameters

| Name        | Type    | Description                                              |
| :---------- | :------ | :------------------------------------------------------- |
| `recipient` | address | the address that receives the borrowed tokens            |
| `amount0`   | uint256 | the amount of token0 to borrow                           |
| `amount1`   | uint256 | the amount of token1 to borrow                           |
| `data`      | bytes   | any additional data to be passed through to the callback |

#### Events

```solidity
event Flash(
    address indexed sender,
    address indexed recipient,
    uint256 amount0,
    uint256 amount1,
    uint256 paid0,
    uint256 paid1
);
```

#### Modifiers

```solidity
modifier lock();
modifier noDelegateCall();
```

### setFeeProtocol

```solidity
function setFeeProtocol(uint8 feeProtocol0, uint8 feeProtocol1) external override lock onlyFactoryOwner;
```

Sets the protocol fee for token0 and token1 in the pool.

#### Parameters

| Name           | Type  | Description                     |
| :------------- | :---- | :------------------------------ |
| `feeProtocol0` | uint8 | the new protocol fee for token0 |
| `feeProtocol1` | uint8 | the new protocol fee for token1 |

#### Events

```solidity
event SetFeeProtocol(uint8 indexed oldFeeProtocol0, uint8 indexed oldFeeProtocol1, uint8 indexed newFeeProtocol0, uint8 indexed newFeeProtocol1);
```

#### Modifiers

```solidity
modifier lock();
modifier onlyFactoryOwner();
```

### collectProtocol

```solidity
function collectProtocol(
    address recipient,
    uint128 amount0Requested,
    uint128 amount1Requested
) external override lock onlyFactoryOwner returns (uint128 amount0, uint128 amount1);
```

This function allows the factory owner to collect protocol fees that have been accumulated in the pool for both tokens.

#### Parameters

| Name               | Type    | Description                                       |
| :----------------- | :------ | :------------------------------------------------ |
| `recipient`        | address | the address receiving the collected protocol fees |
| `amount0Requested` | uint128 | the requested amount of token0 to collect         |
| `amount1Requested` | uint128 | the requested amount of token1 to collect         |

#### Returns

| Name      | Type    | Description                           |
| :-------- | :------ | :------------------------------------ |
| `amount0` | uint128 | the actual collected amount of token0 |
| `amount1` | uint128 | the actual collected amount of token1 |

#### Modifiers

```solidity
modifier lock();
modifier onlyFactoryOwner();
```
