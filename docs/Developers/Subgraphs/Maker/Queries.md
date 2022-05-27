# Queries

This page provides some sample query examples to help get you started with the SushiSwap Maker subgraph.

You can test any of the queries, or write your own, on the [SushiSwap Maker subgraph](https://thegraph.com/hosted-service/subgraph/sushiswap/sushi-maker).

## Maker

This query grabs the first 25 makers and returns their ID, amount of SUSHI served, total amount of SUSHI served, and the servers along with their IDs (user addresses).

```
{
  makers(first: 25) {
    id
    sushiServed
    totalServings
    servers {
      id
    }
  }
}
```

## Server

This query grabs the first 50 servers and returns their ID (address) as well as the Maker's ID (address), amount of SUSHI they've served and the total amount of SUSHI they've served.

```
{
  servers(first: 50) {
    id
    maker {
      id
    }
    sushiServed
    totalServings
  }
}
```

## Serving

This query grabs the first 100 servings and returns their ID, amount of SUSHI, the txn data and the server who served that specific serving and their ID (address).

```
{
  servings(first: 100) {
    id
    amountSushi
    tx
    server {
      id
    }
  }
}
```
