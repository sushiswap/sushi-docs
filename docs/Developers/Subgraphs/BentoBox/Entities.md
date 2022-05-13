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

| Field       | Type     | Description               |
| :---------- | :------- | :------------------------ |
| `id`        | ID       | id                        |
| `bentoBox`  | BentoBox | BentoBox                  |
| `borrower`  | Bytes    | borrower's address        |
| `receiver`  | Bytes    | receiver's address        |
| `token`     | Token    | token being borrowed      |
| `amount`    | BigInt   | amount of token to borrow |
| `feeAmount` | BigInt   | fee for loan              |
| `block`     | BigInt   | block loan was taken on   |
| `timestamp` | BigInt   | timestamp                 |

## MasterContract

| Field                     | Type                     | Description                      |
| :------------------------ | :----------------------- | :------------------------------- |
| `id`                      | ID                       | id                               |
| `bentoBox`                | BentoBox                 | BentoBox                         |
| `clones`                  | [Clone]                  | array of clones                  |
| `masterContractApprovals` | [MasterContractApproval] | array of masterContractApprovals |

## Clone

| Field            | Type           | Description                |
| :--------------- | :------------- | :------------------------- |
| `id`             | ID             | id                         |
| `bentoBox`       | BentoBox       | BentoBox                   |
| `masterContract` | MasterContract | MasterContract             |
| `data`           | String         | data needed to build clone |
| `block`          | BigInt         | block clone was created on |
| `timestamp`      | BigInt         | timestamp                  |

## MasterContractApproval

| Field            | Type           | Description                                    |
| :--------------- | :------------- | :--------------------------------------------- |
| `id`             | ID             | concantenated user address with MasterContract |
| `masterContract` | MasterContract | MasterContract                                 |
| `user`           | User           | user                                           |
| `approved`       | Boolean        | MasterContract approved or not                 |

## Protocol

| Field | Type | Description |
| :---- | :--- | :---------- |
| `id`  | ID   | id          |

## Token

| Field                      | Type     | Description                                      |
| :------------------------- | :------- | :----------------------------------------------- |
| `id`                       | ID       | id                                               |
| `bentoBox`                 | BentoBox | BentoBox                                         |
| `name`                     | String   | token's name                                     |
| `symbol`                   | String   | token's symbol                                   |
| `decimals`                 | BigInt   | token's amount of decimals                       |
| `totalSupplyElastic`       | BigInt   | total amount of elastic supply                   |
| `totalSupplyBase`          | BigInt   | total amount of base supply                      |
| `strategy`                 | Strategy | strategy                                         |
| `strategyTargetPercentage` | BigInt   | target percentage to set for the strategy chosen |
| `block`                    | BigInt   | block                                            |
| `timestamp`                | BigInt   | timestamp                                        |

## User

| Field                     | Type                     | Description                                         |
| :------------------------ | :----------------------- | :-------------------------------------------------- |
| `id`                      | ID                       | id                                                  |
| `bentoBox`                | BentoBox                 | BentoBox                                            |
| `masterContractApprovals` | [MasterContractApproval] | array of MasterContractApprovals                    |
| `tokens`                  | [UserToken]              | array of tokens user owns                           |
| `kashiPairs`              | [UserKashiPair]          | array of Kashi Pairs user owns                      |
| `withdrawals`             | [BentoBoxAction]         | array containing all the withdrawals owner has made |
| `deposits`                | [BentoBoxAction]         | array containing all the deposits owner has made    |
| `block`                   | BigInt                   | block user was created on                           |
| `timestamp`               | BigInt                   | timestamp                                           |

## UserToken

| Field       | Type   | Description                                  |
| :---------- | :----- | :------------------------------------------- |
| `id`        | ID     | concatenated user address with token address |
| `user`      | User   | user                                         |
| `token`     | Token  | token                                        |
| `share`     | BigInt | amount of shares user owns                   |
| `block`     | BigInt | block user token was created on              |
| `timestamp` | BigInt | timestamp                                    |

## KashiPair

| Field                     | Type              | Description                            |
| :------------------------ | :---------------- | :------------------------------------- |
| `id`                      | ID                | id                                     |
| `bentoBox`                | BentoBox          | BentoBox                               |
| `type`                    | KashiPairType     | Kashi Pair type                        |
| `masterContract`          | MasterContract    | MasterContract                         |
| `owner`                   | Bytes             | owner address                          |
| `feeTo`                   | Bytes             | receiver address                       |
| `name`                    | String            | pair name                              |
| `symbol`                  | String            | pair symbol                            |
| `oracle`                  | Bytes             | oracle address                         |
| `asset`                   | Token             | half of pair                           |
| `collateral`              | Token             | other half of pair                     |
| `exchangeRate`            | BigInt            | exchange rate                          |
| `totalAssetElastic`       | BigInt            | elastic supply of pair                 |
| `totalAssetBase`          | BigInt            | base supply of pair                    |
| `totalCollateralShare`    | BigInt            | amount of collateral in shares         |
| `totalBorrowElastic`      | BigInt            | elastic supply of borrow amount        |
| `totalBorrowBase`         | BigInt            | base supply of borrow amount           |
| `interestPerSecond`       | BigInt            | interest rate                          |
| `utilization`             | BigInt            | utilization rate                       |
| `feesEarnedFraction`      | BigInt            | fees earned in shares                  |
| `totalFeesEarnedFraction` | BigInt            | total fees earned in shares            |
| `lastAccrued`             | BigInt            | most recent amount of fees earned      |
| `supplyAPR`               | BigInt            | supply APR                             |
| `borrowAPR`               | BigInt            | borrow APR                             |
| `transactions`            | [KashiPairAction] | array of transactions made on the pair |
| `users`                   | [UserKashiPair]   | total number of users using the pair   |
| `block`                   | BigInt            | block pair was created on              |
| `timestamp`               | BigInt            | timestamp                              |

## KashiPairAction

| Field            | Type                | Description                 |
| :--------------- | :------------------ | :-------------------------- |
| `id`             | ID                  | id                          |
| `type`           | KashiPairActionType | type of Kashi Pair          |
| `pair`           | KashiPair           | Kashi Pair                  |
| `root`           | UserKashiPair       | UserKashiPair               |
| `token`          | Token               | token being used            |
| `amount`         | BigInt              | amount of token being used  |
| `share`          | BigInt              | amount of shares to receive |
| `feeAmount`      | BigInt              | fee amount                  |
| `fraction`       | BigInt              | ...                         |
| `part`           | BigInt              | ...                         |
| `poolPercentage` | BigInt              | percentage of pool          |
| `block`          | BigInt              | block action was taken on   |
| `timestamp`      | BigInt              | timestamp                   |

## UserKashiPair

| Field             | Type              | Description                   |
| :---------------- | :---------------- | :---------------------------- |
| `id`              | ID                | id                            |
| `user`            | User              | user                          |
| `pair`            | KashiPair         | Kashi Pair                    |
| `assetFraction`   | BigInt            | user's pair amount            |
| `collateralShare` | BigInt            | collateral amount in shares   |
| `borrowPart`      | BigInt            | amount user has borrowed      |
| `transactions`    | [KashiPairAction] | user's transactions with pair |
| `block`           | BigInt            | block                         |
| `timestamp`       | BigInt            | timestamp                     |

## KashiPairHourData

| Field                  | Type      | Description                              |
| :--------------------- | :-------- | :--------------------------------------- |
| `id`                   | ID        | id                                       |
| `hourStartUnix`        | Int       | unix timestamp                           |
| `pair`                 | KashiPair | Kashi Pair                               |
| `totalAssetElastic`    | BigInt    | pair's total elastic supply              |
| `totalAssetBase`       | BigInt    | pair's total base supply                 |
| `totalCollateralShare` | BigInt    | pair's total collateral amount in shares |
| `totalBorrowElastic`   | BigInt    | pair's total elastic borrowing rate      |
| `totalBorrowBase`      | BigInt    | pair's total base borrowing rate         |
| `avgExchangeRate`      | BigInt    | average exchange rate                    |
| `avgUtilization`       | BigInt    | average utilization rate                 |
| `avgInterestPerSecond` | BigInt    | average amount of interest per second    |

## KashiPairDayData

| Field                  | Type      | Description                              |
| :--------------------- | :-------- | :--------------------------------------- |
| `id`                   | ID        | day start timestamp                      |
| `date`                 | Int       | hour start timestamp                     |
| `pair`                 | KashiPair | Kashi Pair                               |
| `totalAssetElastic`    | BigInt    | pair's total elastic supply              |
| `totalAssetBase`       | BigInt    | pair's total base supply                 |
| `totalCollateralShare` | BigInt    | pair's total collateral amount in shares |
| `totalBorrowElastic`   | BigInt    | pair's total elastic borrowing rate      |
| `totalBorrowBase`      | BigInt    | pair's total base borrowing rate         |
| `avgExchangeRate`      | BigInt    | average exchange rate                    |
| `avgUtilization`       | BigInt    | average utilization rate                 |
| `avgInterestPerSecond` | BigInt    | average amount of interest per second    |

## Strategy

| Field         | Type              | Description                     |
| :------------ | :---------------- | :------------------------------ |
| `id`          | ID                | id                              |
| `token`       | Token             | token                           |
| `balance`     | BigInt            | token balance                   |
| `totalProfit` | BigInt            | strategy's total profit accrued |
| `harvests`    | [StrategyHarvest] | array of harvests               |
| `timestamp`   | BigInt            | timestamp                       |
| `block`       | BigInt            | block                           |

## StrategyHarvest

| Field          | Type     | Description                         |
| :------------- | :------- | :---------------------------------- |
| `id`           | ID       | id                                  |
| `strategy`     | Strategy | strategy                            |
| `profit`       | BigInt   | amount of profit accrued in harvest |
| `tokenElastic` | BigInt   | elastic supply of token             |
| `timestamp`    | BigInt   | timestamp                           |
| `block`        | BigInt   | block harvest was called on         |
