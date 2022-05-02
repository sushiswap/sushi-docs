---
sidebar_position: 1
---

# Entities

Entities for the BentoBox subgraph are all listed below.

## BentoBox

| Field             | Type             | Description                             |
| :---------------- | :--------------- | :-------------------------------------- |
| `id`              | ID               | id                                      |
| `users`           | [User]           | array of users                          |
| `tokens`          | [Token]          | array of tokens                         |
| `kashiPairs`      | [KashiPair]      | array of Kashi Pairs                    |
| `transactions`    | [BentoBoxAction] | array containing all the transactions   |
| `flashLoans`      | [FlashLoan]      | array of Flash Loans                    |
| `masterContracts` | [MasterContract] | array of MasterContracts                |
| `totalTokens`     | BigInt           | total number of tokens in BentoBox      |
| `totalKashiPairs` | BigInt           | total number of Kashi Pairs in BentoBox |
| `totalUsers`      | BigInt           | total number of users                   |
| `block`           | BigInt           | block                                   |
| `timestamp`       | BigInt           | timestamp                               |

## BentoBoxAction

| Field       | Type               | Description                |
| :---------- | :----------------- | :------------------------- |
| `id`        | ID                 | id                         |
| `bentoBox`  | BentoBox           | BentoBox                   |
| `type`      | BentoBoxActionType | BentoBoxActionType type    |
| `from`      | User               | user initiating the action |
| `to`        | User               | user receiving the action  |
| `token`     | Token              | token being used           |
| `amount`    | BigInt             | amount of token to use     |
| `share`     | BigInt             | amount of BentoBox shares  |
| `block`     | BigInt             | block action was taken on  |
| `timestamp` | BigInt             | timestamp                  |

## FlashLoan

## MasterContract

## Clone

## MasterContractApproval

## Protocol

## Token

## User

## UserToken

## KashiPair

## KashiPairAction

## UserKashiPair

## KashiPairHourData

## KashiPairDayData

## Strategy

## StrategyHarvest
