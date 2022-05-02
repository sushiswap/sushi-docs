# Queries

This page provides some sample query examples to help get you started with the SushiSwap SushiBar subgraph.

You can test any of the queries, or write your own, on the [SushiSwap Subgraph Explorer](https://thegraph.com/hosted-service/subgraph/zippoxer/sushiswap-subgraph-fork).

## Bar

This query returns the ID (contract address), decimal count and name of the SushiBar, as well as the contract address of SUSHI.

```
{
  bars(first: 5) {
    id
    decimals
    name
    sushi
  }
}
```

## User

This query grabs the first 15 users of the SushiBar and returns the user ID (user's address), the SushiBar address, the user's total amount of xSUSHI and how much (if any) xSUSHi they deposited.

```
{
  users(first: 5) {
    id
    bar {
      id
    }
    xSushi
    xSushiIn
  }
}
```
