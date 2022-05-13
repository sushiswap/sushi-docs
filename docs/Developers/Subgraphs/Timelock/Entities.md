---
sidebar_position: 1
---

# Entities

The sole entity for the Timelock subgraph is below.

## Timelock

| Field           | Type   | Description                 |
| :-------------- | :----- | :-------------------------- |
| `id`            | ID     | id                          |
| `description`   | String | block number                |
| `value`         | BigInt | timestamp                   |
| `eta`           | BigInt | parent hash                 |
| `functionName`  | String | author of block             |
| `data`          | String | difficulty                  |
| `targetAddress` | String | total difficulty            |
| `isCanceled`    | BigInt | amount of gas used in block |
| `isExecuted`    | BigInt | gas limit                   |
| `createdBlock`  | BigInt | receipt root                |
| `createdTs`     | BigInt | transaction root            |
| `expiresTs`     | BigInt | state root                  |
| `canceledBlock` | BigInt | block size                  |
| `canceledTs`    | BigInt | uncle block's hash          |
| `executedBlock` | BigInt | receipt root                |
| `executedTs`    | BigInt | transaction root            |
| `createdTx`     | String | state root                  |
| `canceledTx`    | String | block size                  |
| `executedTx`    | String | uncle block's hash          |
