---
sidebar_position: 4
---

# SushiBar

Entities for the SushiBar subgraph are all listed below.

## Entities

### Bar

| Field                | Type       | Description                      |
| :------------------- | :--------- | :------------------------------- |
| `id`                 | ID         | id                               |
| `decimals`           | BigInt     | decimals                         |
| `name`               | String     | name                             |
| `sushi`              | Bytes      | address of sushi                 |
| `symbol`             | String     | symbol                           |
| `totalSupply`        | BigDecimal | total supply                     |
| `ratio`              | BigDecimal | ratio                            |
| `xSushiMinted`       | BigDecimal | amount of xSUSHI minted          |
| `xSUSHIBurned`       | BigDecimal | amount of xSUSHI burned          |
| `sushiStaked`        | BigDecimal | amount of SUSHI staked           |
| `sushiStakedUSD`     | BigDecimal | amount of SUSHI staked in USD    |
| `sushiHarvested`     | BigDecimal | amount of SUSHI harvested        |
| `sushiHarvestedUSD`  | BigDecimal | amount of SUSHI harvested in USD |
| `xSushiAge`          | BigDecimal | age of the xSUSHI                |
| `xSushiAgeDestroyed` | BigDecimal | xSUSHI age destroyed             |
| `users`              | [Users]    | array of users                   |
| `updatedAt`          | BigInt     | timestamp bar was updated at     |

### User

| Field                | Type       | Description                        |
| :------------------- | :--------- | :--------------------------------- |
| `id`                 | ID         | id                                 |
| `xSushi`             | BigDecimal | xSUSHI                             |
| `xSushiIn`           | BigDecimal | amount of xSUSHI in                |
| `xSushiOut`          | BigDecimal | amount of xSUSHI out               |
| `xSushiMinted`       | BigDecimal | amount of xSUSHI minted            |
| `xSUSHIBurned`       | BigDecimal | amount of xSUSHI burned            |
| `xSushiOffset`       | BigDecimal | xSUSHI offset                      |
| `xSushiAge`          | BigDecimal | age of the xSUSHI                  |
| `xSushiAgeDestroyed` | BigDecimal | xSUSHI age destroyed               |
| `sushiStaked`        | BigDecimal | amount of SUSHI staked             |
| `sushiStakedUSD`     | BigDecimal | amount of SUSHI staked in USD      |
| `sushiHarvested`     | BigDecimal | amount of SUSHI harvested          |
| `sushiHarvestedUSD`  | BigDecimal | amount of SUSHI harvested in USD   |
| `sushiOut`           | BigDecimal | amount of SUSHI out                |
| `sushiIn`            | BigDecimal | amount of SUSHI in                 |
| `usdOut`             | BigDecimal | amount of USD out                  |
| `usdIn`              | BigDecimal | amount of USD in                   |
| `sushiOffset`        | BigDecimal | SUSHI offset                       |
| `usdOffset`          | BigDecimal | USD offset                         |
| `createdAt`          | BigInt     | timestamp of when user was created |
| `createdAtBlock`     | BigInt     | block of when user was created     |
| `updatedAt`          | BigInt     | timestamp of when user was updated |
| `updatedAtBlock`     | BigInt     | block of when user was updated     |
