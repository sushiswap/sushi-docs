# TickLens

The full contract can be found [here](https://github.com/sushiswap/v3-periphery/blob/master/contracts/lens/TickLens.sol)

## Read-Only Functions

### getPopulatedTicksInWord

```solidity
function getPopulatedTicksInWord(
    address pool,
    int16 tickBitmapIndex
) public view override returns (PopulatedTick[] memory populatedTicks);
```

This function retrieves the populated ticks within a word from the Sushi V3 pool for a given `tickBitmapIndex`. It returns an array of populated tick data, including the tick value, net liquidity, and gross liquidity.

-   It fetches the tick bitmap for the given `tickBitmapIndex` from the Sushi V3 pool.
-   It calculates the number of populated ticks in the word and fetches the populated tick data.
-   The function returns an array of `PopulatedTick` structs containing the tick value, net liquidity, and gross liquidity.

#### Parameters

| Name              | Type    | Description                                               |
| :---------------- | :------ | :-------------------------------------------------------- |
| `pool`            | address | Address of the Sushi V3 pool                              |
| `tickBitmapIndex` | int16   | Index of the tick bitmap from which to retrieve tick data |

#### Returns

| Name             | Type                   | Description                                          |
| :--------------- | :--------------------- | :--------------------------------------------------- |
| `populatedTicks` | PopulatedTick[] memory | Array of populated tick data in the tick bitmap word |

#### Events

None

#### Modifiers

None
