---
sidebar_position: 1
---

# Entities

Entities for the Maker subgraph are all listed below.

## Maker

| Field         | Type       | Description           |
| :------------ | :--------- | :-------------------- |
| `id`          | ID         | maker address         |
| `sushiServed` | BigDecimal | all time SUSHI served |
| `servers`     | [Server]   | array of servers      |
| `servings`    | [Serving]  | array of servings     |

## Server

| Field         | Type       | Description       |
| :------------ | :--------- | :---------------- |
| `id`          | ID         | maker address     |
| `maker`       | Maker      | maker             |
| `sushiServed` | BigDecimal | SUSHI served      |
| `servings`    | [Serving]  | array of servings |

## Serving

| Field         | Type    | Description   |
| :------------ | :------ | :------------ |
| `id`          | ID      | maker address |
| `maker`       | Maker   | maker         |
| `server`      | Server  | server        |
| `tx`          | Bytes   | ...           |
| `token0`      | Bytes   | ...           |
| `token1`      | Bytes   | ...           |
| `amount0`     | BigInt  | ...           |
| `amount1`     | BigInt  | ...           |
| `amountSushi` | Big Int | ...           |
| `block`       | Big Int | ...           |
| `timestmap`   | Big Int | ...           |
