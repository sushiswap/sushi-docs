---
sidebar_position: 1
---

# Entities

Entities for the DexCandles subgraph are all listed below.

## Pair

| Field    | Type  | Description  |
| :------- | :---- | :----------- |
| `id`     | ID    | pair address |
| `token0` | Bytes | half of pair |
| `token1` | Bytes | half of pair |

## Candle

| Field               | Type       | Description                                      |
| :------------------ | :--------- | :----------------------------------------------- |
| `id`                | ID         | concatenation of time + period + token0 + token1 |
| `time`              | Int        | timestamp                                        |
| `period`            | Int        | time period                                      |
| `lastBlock`         | Int        | last block                                       |
| `token0`            | Bytes      | half of pair for candle                          |
| `token1`            | Bytes      | half of pair for candle                          |
| `token0TotalAmount` | BigInt     | total amount of token0                           |
| `token1TotalAmount` | BigInt     | total amount of token1                           |
| `open`              | BigDecimal | open price                                       |
| `close`             | BigDecimal | close price                                      |
| `high`              | BigDecimal | high                                             |
| `low`               | BigDecimal | low                                              |
