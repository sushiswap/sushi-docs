# Queries

This page provides some sample query examples to help get you started with the SushiSwap Maker V2 subgraph.

You can test any of the queries, or write your own, on the [SushiSwap Maker V2 subgraph](https://thegraph.com/hosted-service/subgraph/sushiswap/sushi-makerv2).

## Maker

This query grabs the first 25 makers and returns their ID (maker address), amount of $SUSHI served and the total amount of $SUSHI served.

```
{
  makers(first: 25) {
    id
    sushiServed
    totalServings
  }
}
```

## Serving

This query grabs the first 50 servings and returns their IDs as well as the Maker's ID (address), the transaction hash and the amount of $SUSHI in the serving.

```
{
  servings(first: 50) {
    id
    maker {
      id
    }
    tx
    amountSushi
  }
}
```
