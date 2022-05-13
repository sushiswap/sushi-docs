---
sidebar_position: 1
---

# Entities

Entities for the Maker subgraph are all listed below.

## Maker

| Field           | Type       | Description              |
| :-------------- | :--------- | :----------------------- |
| `id`            | ID         | maker address            |
| `sushiServed`   | BigInt     | all time SUSHI served    |
| `totalServings` | BigDecimal | total amount of servings |
| `servers`       | [Server]   | array of servers         |
| `servings`      | [Serving]  | array of servings        |
| `block`         | BigInt     | block                    |
| `timestamp`     | BigInt     | timestamp                |

## Server

| Field           | Type       | Description              |
| :-------------- | :--------- | :----------------------- |
| `id`            | ID         | maker address            |
| `maker`         | Maker      | maker                    |
| `sushiServed`   | BigDecimal | SUSHI served             |
| `totalServings` | BigDecimal | total amount of servings |
| `servings`      | [Serving]  | array of servings        |
| `block`         | BigInt     | block                    |
| `timestamp`     | BigInt     | timestamp                |

## Serving

| Field         | Type    | Description                                 |
| :------------ | :------ | :------------------------------------------ |
| `id`          | ID      | pair address concatenated with block number |
| `maker`       | Maker   | maker                                       |
| `server`      | Server  | server                                      |
| `tx`          | Bytes   | transaction                                 |
| `token0`      | Bytes   | half of pair                                |
| `token1`      | Bytes   | half of pair                                |
| `amount0`     | BigInt  | amount of token0                            |
| `amount1`     | BigInt  | amount of token1                            |
| `amountSushi` | Big Int | amount of SUSHI served                      |
| `block`       | Big Int | block                                       |
| `timestmap`   | Big Int | timestamp                                   |
