---
sidebar_position: 1
---

# Entities

Entities for the Maker V2 subgraph are all listed below.

## Maker

| Field           | Type       | Description              |
| :-------------- | :--------- | :----------------------- |
| `id`            | ID         | maker address            |
| `sushiServed`   | BigInt     | all time SUSHI served    |
| `totalServings` | BigDecimal | total amount of servings |
| `servings`      | [Serving]  | array of servings        |
| `block`         | BigInt     | block                    |
| `timestamp`     | BigInt     | timestamp                |

## Serving

| Field         | Type   | Description                                 |
| :------------ | :----- | :------------------------------------------ |
| `id`          | ID     | pair address concatenated with block number |
| `maker`       | Maker  | maker                                       |
| `tx`          | Bytes  | transaction                                 |
| `amountSushi` | BigInt | amount of SUSHI served                      |
| `block`       | BigInt | block                                       |
| `timestmap`   | BigInt | timestamp                                   |

## DayData

| Field           | Type       | Description            |
| :-------------- | :--------- | :--------------------- |
| `id`            | ID         | timestamp / 86,400     |
| `date`          | Int        | date                   |
| `servingsCount` | BigDecimal | amount of servings     |
| `amountSushi`   | BigInt     | amount of SUSHI served |
