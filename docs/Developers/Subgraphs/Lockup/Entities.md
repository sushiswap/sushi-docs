---
sidebar_position: 1
---

# Entities

Entities for the Lockup subgraph are all listed below.

## Lockup

| Field             | Type   | Description            |
| :---------------- | :----- | :--------------------- |
| `id`              | ID     | id                     |
| `pools`           | [Pool] | array of pools         |
| `totalAllocPoint` | BigInt | total allocation point |
| `poolLength`      | BigInt | pool length            |

## Pool

| Field              | Type   | Description                 |
| :----------------- | :----- | :-------------------------- |
| `id`               | ID     | id                          |
| `lockup`           | Lockup | lockup                      |
| `allocPoint`       | BigInt | allocation point            |
| `accSushiPerShare` | BigInt | accumulated SUSHI per share |

## User

| Field                          | Type       | Description                         |
| :----------------------------- | :--------- | :---------------------------------- |
| `id`                           | ID         | id                                  |
| `lockup`                       | Lockup     | lockup                              |
| `pool`                         | Pool       | pool                                |
| `address`                      | Bytes      | user address                        |
| `amount`                       | BigInt     | amount                              |
| `rewardDebt`                   | BigInt     | reward debt                         |
| `sushiHarvestedSinceLockup`    | BigDecimal | SUSHI harvested since lockup        |
| `sushiHarvestedSinceLockupUSD` | BigDecimal | SUSHI harvested since lockup in USD |
