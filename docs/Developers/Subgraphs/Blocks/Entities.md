---
sidebar_position: 1
---

# Entities

The sole entity for the Blocks subgraph is below.

## Block

| Field              | Type   | Description                 |
| :----------------- | :----- | :-------------------------- |
| `id`               | ID     | id                          |
| `number`           | BigInt | block number                |
| `timestamp`        | BigInt | timestamp                   |
| `parentHash`       | String | parent hash                 |
| `author`           | String | author of block             |
| `difficulty`       | BigInt | difficulty                  |
| `totalDifficulty`  | BigInt | total difficulty            |
| `gasUsed`          | BigInt | amount of gas used in block |
| `gasLimit`         | BigInt | gas limit                   |
| `receiptsRoot`     | String | receipt root                |
| `transactionsRoot` | String | transaction root            |
| `stateRoot`        | String | state root                  |
| `size`             | BigInt | block size                  |
| `unclesHash`       | String | uncle block's hash          |
