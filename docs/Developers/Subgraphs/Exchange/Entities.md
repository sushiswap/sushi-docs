---
sidebar_position: 1
---

# Entities

Entities for the Exchange subgraph are all listed below.

### Factory

| Field                | Type       | Description                                                              |
| :------------------- | :--------- | :----------------------------------------------------------------------- |
| `id`                 | ID         | factory address                                                          |
| `volumeUSD`          | BigDecimal | all time volume across pairs stored as a derived amount of USD           |
| `volumeETH`          | BigDecimal | all time volume across pairs stored as a derived amount of ETH           |
| `untrackedVolumeUSD` | BigDecimal | all time untracked volume across pairs stored as a derived amount of USD |
| `liquidityUSD`       | BigDecimal | all time liquidity across pairs stored as a derived amount of USD        |
| `liquidityETH`       | BigDecimal | all time liquidity across pairs stored as a derived amount of ETH        |
| `txCount`            | BigInt     | all time transaction count                                               |
| `tokenCount`         | BigInt     | token count                                                              |
| `pairCount`          | BigInt     | pair count                                                               |
| `userCount`          | BigInt     | user count                                                               |
| `pairs`              | [Pairs]    | array of pair ids                                                        |
| `tokens`             | [Token]    | array of tokens                                                          |
| `hourData`           | [HourData] | array of hour data                                                       |
| `dayData`            | [DayData]  | array of day data                                                        |

### Token

| Field                | Type            | Description                                                                        |
| :------------------- | :-------------- | :--------------------------------------------------------------------------------- |
| `id`                 | ID              | token address                                                                      |
| `factory`            | Factory         | factory                                                                            |
| `symbol`             | String          | token symbol                                                                       |
| `name`               | String          | token name                                                                         |
| `decimals`           | BigInt          | token decimals                                                                     |
| `totalSupply`        | BigInt          | total supply of token                                                              |
| `volume`             | BigDecimal      | amount of token traded all time across all pairs                                   |
| `volumeUSD`          | BigDecimal      | amount of token traded all time across all pairs stored as a derived amount of USD |
| `untrackedVolumeUSD` | BigDecimal      | all time untracked volume across all pairs stored as a derived amount of USD       |
| `txCount`            | BigInt          | all time transaction count of token across all pairs                               |
| `liquidity`          | BigDecimal      | amount of token provided as liquidity across all pairs                             |
| `derivedETH`         | BigDecimal      | ETH per token                                                                      |
| `whitelistPairs`     | [Pair]          | array of whitelisted pairs                                                         |
| `hourData`           | [TokenHourData] | array of token hour data                                                           |
| `dayData`            | [TokenDayData]  | array of token day data                                                            |
| `basePairs`          | [Pair]          | array of base pairs                                                                |
| `quotePairs`         | [Pair]          | array of quote pairs                                                               |
| `basePairsDayData`   | [PairDayData]   | array of hour data                                                                 |
| `quotePairsDayData`  | [PairDayData]   | array of day data                                                                  |

### Pair

| Field                        | Type                         | Description                                                              |
| :--------------------------- | :--------------------------- | :----------------------------------------------------------------------- |
| `id`                         | ID                           | pair address                                                             |
| `factory`                    | Factory                      | factory                                                                  |
| `name`                       | String                       | pair name                                                                |
| `token0`                     | Token                        | reference to token0 stored in pair contract                              |
| `token1`                     | Token                        | reference to token1 stored in pair contract                              |
| `reserve0`                   | BigDecimal                   | reserve of token0                                                        |
| `reserve1`                   | BigDecimal                   | reserve of token1                                                        |
| `totalSupply`                | BigDecimal                   | total supply of liquidity token distributed to liquidity providers       |
| `reserveETH`                 | BigDecimal                   | total liquidity in pair stored as amount of ETH                          |
| `reserveUSD`                 | BigDecimal                   | total liquidity in pair stored as amount of USD                          |
| `trackedReserveETH`          | BigDecimal                   | used for separating per pair reserves and global                         |
| `token0Price`                | BigDecimal                   | token0 per token1                                                        |
| `token1Price`                | BigDecimal                   | token1 per token0                                                        |
| `volumeToken0`               | BigDecimal                   | amount of token0 swapped on this pair                                    |
| `volumeToken1`               | BigDecimal                   | amount of token1 swapped on this pair                                    |
| `volumeUSD`                  | BigDecimal                   | all time volume on this pair stored as a derived amount of USD           |
| `untrackedVolumeUSD`         | BigDecimal                   | all time untracked volume on this pair stored as a derived amount of USD |
| `txCount`                    | BigInt                       | all time transaction count on this pair                                  |
| `liquidityProviderCount`     | BigInt                       | liquidity provider count for this pair                                   |
| `liquidityPositions`         | [LiquidityPosition]          | array of liquidity positions                                             |
| `liquidityPositionSnapshots` | [LiquidityProvisionSnapshot] | array of snapshots                                                       |
| `dayData`                    | [PairDayData]                | pair day data                                                            |
| `hourData`                   | [PairHourData]               | pair hour data                                                           |
| `mints`                      | [Mint]                       | array of mints for pair                                                  |
| `burns`                      | [Burn]                       | array of burns for pair                                                  |
| `swaps`                      | [Swap]                       | array of swaps for pair                                                  |
| `timestamp`                  | BigInt                       | timestamp                                                                |
| `block`                      | BigInt                       | block contract was created at                                            |

### User

A user entity is created for any unknown address that provides liquidity to a pool on SushiSwap. It can be used to track active liquidity positions and all time value in USD of swaps performed by the user.

| Field                | Type                | Description                         |
| :------------------- | :------------------ | :---------------------------------- |
| `id`                 | ID                  | user address                        |
| `liquidityPositions` | [LiquidityPosition] | array of active liquidity positions |

### LiquidityPosition

| Field                   | Type                        | Description                           |
| :---------------------- | :-------------------------- | :------------------------------------ |
| `id`                    | ID                          | pair address                          |
| `user`                  | User                        | user reference                        |
| `pair`                  | Pair                        | pair reference                        |
| `liquidityTokenBalance` | BigDecimal                  | amount of liquidity token             |
| `snapshots`             | [LiquidityPositionSnapshot] | array of liquidity position snapshots |
| `block`                 | Int                         | block                                 |
| `timestamp`             | Int                         | timestamp                             |

### LiquidityPositionSnapshot

| Field                       | Type              | Description                               |
| :-------------------------- | :---------------- | :---------------------------------------- |
| `id`                        | ID                | id                                        |
| `liquidityPosition`         | LiquidityPosition | liquidity position                        |
| `timestamp`                 | Int               | timestamp for quick historical lookups    |
| `block`                     | Int               | block number for quick historical lookups |
| `user`                      | User              | user                                      |
| `pair`                      | Pair              | pair                                      |
| `token0PriceUSD`            | BigDecimal        | token0 price in USD                       |
| `token1PriceUSD`            | BigDecimal        | token1 price in USD                       |
| `reserve0`                  | BigDecimal        | snapshot of pair token0 reserves          |
| `reserve1`                  | BigDecimal        | snapshot of pair token1 reserves          |
| `reserveUSD`                | BigDecimal        | snapshot of pair reserves in USD          |
| `liquidityTokenTotalSupply` | BigDecimal        | snapshot of pool's token supply           |
| `liquidityTokenBalance`     | BigDecimal        | snapshot of user's pool token balance     |

### Transaction

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| `id`          | ID     | transaction hash                  |
| `blockNumber` | BigInt | block transaction was mined       |
| `timestamp`   | BigInt | timestamp transaction was created |
| `mints`       | [Mint] | array of Mint events              |
| `burns`       | [Burn] | array of Burn events              |
| `swaps`       | [Swap] | array of Swap events              |

### Mint

| Field          | Type        | Description                                                                          |
| :------------- | :---------- | :----------------------------------------------------------------------------------- |
| `id`           | ID          | transaction hash, a hyphen and the index in the transaction mint array, concatenated |
| `transaction`  | Transaction | reference to transaction                                                             |
| `timestamp`    | BigInt      | timestamp mint was created                                                           |
| `pair`         | Pair        | reference to pair                                                                    |
| `to`           | Bytes       | address of recipient                                                                 |
| `liquidity`    | BigDecimal  | amount of liquidity tokens minted                                                    |
| `sender`       | Bytes       | address of initiator                                                                 |
| `amount0`      | BigDecimal  | amount of token0                                                                     |
| `amount1`      | BigDecimal  | amount of token1                                                                     |
| `logIndex`     | BigInt      | index in the transaction event that was emitted                                      |
| `amountUSD`    | BigDecimal  | value of token0 and token1 in USD                                                    |
| `feeTo`        | Bytes       | address of fee recipient                                                             |
| `feeLiquidity` | BigDecimal  | amount of liquidity sent to fee recipient                                            |

### Burn

| Field          | Type        | Description                                                                          |
| :------------- | :---------- | :----------------------------------------------------------------------------------- |
| `id`           | ID          | transaction hash, a hyphen and the index in the transaction burn array, concatenated |
| `transaction`  | Transaction | reference to transaction                                                             |
| `timestamp`    | BigInt      | timestamp burn was created                                                           |
| `pair`         | Pair        | reference to pair                                                                    |
| `to`           | Bytes       | address of recipient                                                                 |
| `liquidity`    | BigDecimal  | amount of liquidity tokens burned                                                    |
| `sender`       | Bytes       | address of initiator                                                                 |
| `amount0`      | BigDecimal  | amount of token0 burned                                                              |
| `amount1`      | BigDecimal  | amount of token1 burned                                                              |
| `logIndex`     | BigInt      | index in the transaction event that was emitted                                      |
| `amountUSD`    | BigDecimal  | value of token0 and token1 in USD                                                    |
| `complete`     | Boolean     | false in ETH case                                                                    |
| `feeTo`        | Bytes       | address of fee recipient                                                             |
| `feeLiquidity` | BigDecimal  | amount of liquidity sent to fee recipient                                            |

### Swap

| Field         | Type        | Description                                                                          |
| :------------ | :---------- | :----------------------------------------------------------------------------------- |
| `id`          | ID          | transaction hash, a hyphen and the index in the transaction burn array, concatenated |
| `transaction` | Transaction | reference to transaction                                                             |
| `timestamp`   | BigInt      | timestamp swap was created                                                           |
| `pair`        | Pair        | reference to pair                                                                    |
| `sender`      | Bytes       | address of initiator                                                                 |
| `amount0In`   | BigDecimal  | amount of token0 to swap                                                             |
| `amount1In`   | BigDecimal  | amount of token1 to swap                                                             |
| `amount0Out`  | BigDecimal  | amount of token0 received                                                            |
| `amount1Out`  | BigDecimal  | amount of token1 received                                                            |
| `to`          | Bytes       | address of recipient                                                                 |
| `logIndex`    | BigInt      | index in the transaction event that was emitted                                      |
| `amountUSD`   | BigDecimal  | value of token0 and token1 in USD                                                    |

### Bundle

| Field      | Type       | Description                                                                          |
| :--------- | :--------- | :----------------------------------------------------------------------------------- |
| `id`       | ID         | transaction hash, a hyphen and the index in the transaction burn array, concatenated |
| `ethPrice` | BigDecimal | price of ETH in USD                                                                  |

### DayData

Combined pair data aggregated daily.

| Field             | Type       | Description                                                        |
| :---------------- | :--------- | :----------------------------------------------------------------- |
| `id`              | ID         | unix timestamp for the start of the day / 86400                    |
| `factory`         | Factory    | factory                                                            |
| `date`            | Int        | unix timestamp for the start of the day                            |
| `volumeETH`       | BigDecimal | volume across all pairs stored as a derived amount of ETH          |
| `volumeUSD`       | BigDecimal | volume across all pairs stored as a derived amount of USD          |
| `untrackedVolume` | BigDecimal | untracked volume across all pairs                                  |
| `liquidityETH`    | BigDecimal | total liquidity across all pairs stored as a derived amount of ETH |
| `liquidityUSD`    | BigDecimal | total liquidity across all pairs stored as a derived amount of USD |
| `txCount`         | BigInt     | total number of transactions                                       |

### HourData

| Field             | Type       | Description                                                        |
| :---------------- | :--------- | :----------------------------------------------------------------- |
| `id`              | ID         | unix timestamp for the start of hour                               |
| `factory`         | Factory    | factory                                                            |
| `date`            | Int        | unix timestamp for the start of the day                            |
| `volumeETH`       | BigDecimal | volume across all pairs stored as a derived amount of ETH          |
| `volumeUSD`       | BigDecimal | volume across all pairs stored as a derived amount of USD          |
| `untrackedVolume` | BigDecimal | untracked volume across all pairs                                  |
| `liquidityETH`    | BigDecimal | total liquidity across all pairs stored as a derived amount of ETH |
| `liquidityUSD`    | BigDecimal | total liquidity across all pairs stored as a derived amount of USD |
| `txCount`         | BigInt     | total number of transactions                                       |

### PairDayData

Pair data aggreated daily.

| Field          | Type       | Description                                                                             |
| :------------- | :--------- | :-------------------------------------------------------------------------------------- |
| `id`           | ID         | pair address concatenated with day id (unix timestamp for the start of the day / 86400) |
| `date`         | Int        | unix timestamp for the start of the day                                                 |
| `pairAddress`  | Bytes      | pair address                                                                            |
| `token0`       | Token      | token0 reference                                                                        |
| `token1`       | Token      | token1 reference                                                                        |
| `reserveUSD`   | BigDecimal | reserve of token0 and token1 as the derived amount of USD                               |
| `volumeToken0` | BigDecimal | amount of token0 swapped                                                                |
| `volumeToken1` | BigDecimal | amount of token1 swapped                                                                |
| `volumeUSD`    | BigDecimal | volume of pairs as the derived amount of USD                                            |
| `txCount`      | BigInt     | amount of transactions on pair                                                          |

### TokenDayData

Token data across related pairs aggregated daily.

| Field          | Type       | Description                                                                             |
| :------------- | :--------- | :-------------------------------------------------------------------------------------- |
| `id`           | ID         | pair address concatenated with day id (unix timestamp for the start of the day / 86400) |
| `date`         | Int        | unix timestamp for the start of the day                                                 |
| `token`        | Token      | token reference                                                                         |
| `volume`       | BigDecimal | amount of token swapped across related pairs                                            |
| `volumeETH`    | BigDecimal | amount of token swapped across related pairs stored as a derived amount of ETH          |
| `volumeUSD`    | BigDecimal | amount of token swapped across related pairs stored as a derived amount of USD          |
| `txCount`      | BigInt     | amount of transactions with this token across related pairs                             |
| `liquidity`    | BigDecimal | amount of tokens deposited across related pairs                                         |
| `liquidityETH` | BigDecimal | amount of tokens deposited across related pairs stored as ETH                           |
| `liquidityUSD` | BigDecimal | amount of tokens deposited across related pairs stored as USD                           |
| `priceUSD`     | BigInt     | token price in USD                                                                      |

### TokenHourData

| Field          | Type       | Description                                                                    |
| :------------- | :--------- | :----------------------------------------------------------------------------- |
| `id`           | ID         | hour start timestamp concatenated with date                                    |
| `date`         | Int        | unix timestamp for the start of the hour                                       |
| `token`        | Token      | token reference                                                                |
| `volume`       | BigDecimal | amount of token swapped across related pairs                                   |
| `volumeETH`    | BigDecimal | amount of token swapped across related pairs stored as a derived amount of ETH |
| `volumeUSD`    | BigDecimal | amount of token swapped across related pairs stored as a derived amount of USD |
| `txCount`      | BigInt     | amount of transactions with this token across related pairs                    |
| `liquidity`    | BigDecimal | amount of tokens deposited across related pairs                                |
| `liquidityETH` | BigDecimal | amount of tokens deposited across related pairs stored as ETH                  |
| `liquidityUSD` | BigDecimal | amount of tokens deposited across related pairs stored as USD                  |
| `priceUSD`     | BigInt     | token price in USD                                                             |
