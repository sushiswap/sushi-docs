---
sidebar_position: 5
---

# MasterChef

Entities for the MasterChef subgraph are all listed below.

## Entities

### MasterChef

| Field             | Type       | Description                     |
| :---------------- | :--------- | :------------------------------ |
| `id`              | ID         | chef address                    |
| `bonusMultiplier` | BigInt     | bonus multiplier                |
| `devaddr`         | Bytes      | dev address                     |
| `migrator`        | Bytes      | migrator address                |
| `owner`           | Bytes      | owner address                   |
| `startBlock`      | BigInt     | start block                     |
| `sushi`           | Bytes      | SUSHI token address             |
| `sushiPerBlock`   | BigInt     | SUSHI per block                 |
| `totalAllocPoint` | BigInt     | total SUSHI allocation point    |
| `pools`           | [Pools]    | array of pools                  |
| `poolCount`       | BigInt     | number of pools                 |
| `slpBalance`      | BigDecimal | SLP balance                     |
| `slpAge`          | BigDecimal | age of SLP                      |
| `slpAgeRemoved`   | BigDecimal | SLP age removed                 |
| `slpDeposited`    | BigDecimal | amount of SLP deposited         |
| `slpWithdrawn`    | BigDecimal | amount of SLP withdrawn         |
| `history`         | [History]  | array of history                |
| `updatedAt`       | BigInt     | timestamp of most recent update |

### History

| Field           | Type       | Description                                     |
| :-------------- | :--------- | :---------------------------------------------- |
| `id`            | ID         | unix timestamp for the start of the day / 86400 |
| `owner`         | Bytes      | owner address                                   |
| `slpBalance`    | BigDecimal | SLP balance                                     |
| `slpAge`        | BigDecimal | age of SLP                                      |
| `slpAgeRemoved` | BigDecimal | SLP age removed                                 |
| `slpDeposited`  | BigDecimal | amount of SLP deposited                         |
| `slpWithdrawn`  | BigDecimal | amount of SLP withdrawn                         |
| `timestamp`     | BigInt     | timestamp                                       |
| `block`         | BigInt     | block                                           |

### Pool

| Field               | Type       | Description                      |
| :------------------ | :--------- | :------------------------------- |
| `id`                | ID         | id                               |
| `owner`             | Bytes      | owner address                    |
| `pair`              | Bytes      | pair address                     |
| `allocPoint`        | BigInt     | allocation point                 |
| `lastRewardBlock`   | BigInt     | last reward block                |
| `accSushiPerShare`  | BigInt     | accumulated SUSHI per share      |
| `users`             | [User]     | array of users                   |
| `userCount`         | BigInt     | number of users                  |
| `slpBalance`        | BigDecimal | SLP balance                      |
| `slpAge`            | BigDecimal | age of SLP                       |
| `slpAgeRemoved`     | BigDecimal | SLP age removed                  |
| `slpDeposited`      | BigDecimal | amount of SLP deposited          |
| `slpWithdrawn`      | BigDecimal | amount of SLP withdrawn          |
| `sushiHarvested`    | BigDecimal | amount of SUSHI harvested        |
| `sushiHarvestedUSD` | BigDecimal | amount of SUSHI harvested in USD |
| `entryUSD`          | BigDecimal | all time entries in USD          |
| `exitUSD`           | BigDecimal | all time exits in USD            |
| `timestamp`         | BigInt     | timestamp                        |
| `block`             | BigInt     | block                            |
| `updatedAt`         | BigInt     | timestamp of most recent update  |

### Pool History

| Field               | Type       | Description                                                               |
| :------------------ | :--------- | :------------------------------------------------------------------------ |
| `id`                | ID         | pool id concatenated with unix timestamp for the start of the day / 86400 |
| `pool`              | Pool       | pool                                                                      |
| `pair`              | Bytes      | pair address                                                              |
| `users`             | [User]     | array of users                                                            |
| `userCount`         | BigInt     | number of users                                                           |
| `slpBalance`        | BigDecimal | SLP balance                                                               |
| `slpAge`            | BigDecimal | age of SLP                                                                |
| `slpAgeRemoved`     | BigDecimal | SLP age removed                                                           |
| `slpDeposited`      | BigDecimal | amount of SLP deposited                                                   |
| `slpWithdrawn`      | BigDecimal | amount of SLP withdrawn                                                   |
| `sushiHarvested`    | BigDecimal | amount of SUSHI harvested                                                 |
| `sushiHarvestedUSD` | BigDecimal | amount of SUSHI harvested in USD                                          |
| `entryUSD`          | BigDecimal | all time entries in USD                                                   |
| `exitUSD`           | BigDecimal | all time exits in USD                                                     |
| `timestamp`         | BigInt     | timestamp                                                                 |
| `block`             | BigInt     | block                                                                     |
| `updatedAt`         | BigInt     | timestamp of most recent update                                           |

### User

| Field                          | Type       | Description                                   |
| :----------------------------- | :--------- | :-------------------------------------------- |
| `id`                           | ID         | user address                                  |
| `pool`                         | Pool       | pool                                          |
| `amount`                       | BigInt     | amount                                        |
| `rewardDebt`                   | BigInt     | amount of reward debt                         |
| `entryUSD`                     | BigDecimal | all time entries in USD                       |
| `exitUSD`                      | BigDecimal | all time exits in USD                         |
| `sushiHarvested`               | BigDecimal | amount of SUSHI harvested                     |
| `sushiHarvestedUSD`            | BigDecimal | amount of SUSHI harvested in USD              |
| `sushiHarvestedSinceLockup`    | BigDecimal | amount of SUSHI harvested since lockup        |
| `sushiHarvestedSinceLockupUSD` | BigDecimal | amount of SUSHI harvested since lockup in USD |
| `timestamp`                    | BigInt     | timestamp                                     |
| `block`                        | BigInt     | block                                         |
