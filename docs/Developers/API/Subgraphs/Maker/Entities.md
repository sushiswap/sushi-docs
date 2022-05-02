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
