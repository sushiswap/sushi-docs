# Queries

This page provides some sample query examples to help get you started with the SushiSwap BentoBox subgraph.

You can test any of the queries, or write your own, on the [SushiSwap BentoBox subgraph](https://thegraph.com/hosted-service/subgraph/matthewlilley/bentobox-ethereum).

## BentoBox

```
{
  bentoBoxes(first: 10) {
    id
    users {
      id
    }
    tokens {
      id
    }
    kashiPairs {
      id
    }
  }
}
```

This query grabs the first 10 BentoBoxes and returns each of their IDs as well as the users, tokens and Kashi Pairs associated with the given BentoBox, all with their IDs.

## FlashLoan

```
{
  flashLoans(first: 25) {
    id
    borrower
    receiver
    token {
      id
    }
    block
  }
}
```

This query grabs the first 25 Flash Loans and returns the ID for each, the addresses of the borrower and and receiver, as well as the token being loaned and its address, along with the block number the loan happened on.

## KashiPairHourData

```
{
  kashiPairHourDatas(first: 5) {
    id
    totalAssetElastic
    totalCollateralShare
    avgUtilization
    avgExchangeRate
  }
}
```

This query grabs the first 5 Kashi Pair Hour Datas and returns each of their IDs, elastic supply, collateral share, and the avergage utilization and exchange rates for that time period.

## KashiPairDayData

```
{
  kashiPairDayDatas(orderDirection: desc) {
    id
    totalAssetElastic
    totalCollateralShare
    avgUtilization
    avgExchangeRate
  }
}
```

Almost the same query as the Kashi Hour Data one, this query grabs the Kashi Pair Day Datas in descending order and returns each of their IDs, elastic supply, collateral share, and the avergage utilization and exchange rates for that time period.
