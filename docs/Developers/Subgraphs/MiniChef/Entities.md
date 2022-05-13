---
sidebar_position: 1
---

# Entities

Entities for the MiniChef subgraph are all listed below.

## MiniChef

| Field             | Type    | Description                  |
| :---------------- | :------ | :--------------------------- |
| `id`              | ID      | chef address                 |
| `sushi`           | BigInt  | total SUSHI allocation point |
| `sushiPerSecond`  | [Pools] | SUSHI served per second      |
| `totalAllocPoint` | BigInt  | total allocation point       |
| `pools`           | [Pool]  | array of pools               |
| `timestamp`       | BigInt  | timestamp                    |
| `block`           | BigInt  | block                        |

## Pool

| Field              | Type       | Description                 |
| :----------------- | :--------- | :-------------------------- |
| `id`               | ID         | index of pool               |
| `miniChef`         | MiniChef   | MiniChef                    |
| `pair`             | Bytes      | pair address                |
| `rewarder`         | Rewarder   | rewarder                    |
| `allocPoint`       | BigInt     | allocation point            |
| `lastRewardBlock`  | BigInt     | last reward block           |
| `accSushiPerShare` | BigInt     | accumulated SUSHI per share |
| `users`            | [User]     | array of users              |
| `userCount`        | BigInt     | number of users             |
| `slpBalance`       | BigDecimal | SLP balance                 |
| `timestamp`        | BigInt     | timestamp                   |
| `block`            | BigInt     | block                       |

## NativeRewarderPool

| Field             | Type   | Description            |
| :---------------- | :----- | :--------------------- |
| `id`              | ID     | rewarder address       |
| `rewardToken`     | Bytes  | reward token address   |
| `rewardPerSecond` | Bytes  | rewards per second     |
| `totalAllocPoint` | BigInt | total allocation point |
| `timestamp`       | BigInt | timestamp              |
| `block`           | BigInt | block                  |

## User

| Field            | Type       | Description                            |
| :--------------- | :--------- | :------------------------------------- |
| `id`             | ID         | pool ID concatenated with user address |
| `address`        | Bytes      | user address                           |
| `pool`           | Pool       | pool                                   |
| `amount`         | BigInt     | amount                                 |
| `rewardDebt`     | BigInt     | amount of reward debt                  |
| `sushiHarvested` | BigDecimal | amount of SUSHI harvested              |
| `timestamp`      | BigInt     | timestamp                              |
| `block`          | BigInt     | block                                  |
