# Queries

This page provides some sample query examples to help get you started with the SushiSwap MasterChef V2 subgraph.

You can test any of the queries, or write your own, on the [SushiSwap MasterChef V2 subgraph](https://thegraph.com/hosted-service/subgraph/sushiswap/master-chefv2).

## MasterChef

This query gets the first 10 MasterChefs and returns their ID, total allocation point, and the pools within in them and their IDs.

```
{
  masterChefs(first: 10) {
    id
    totalAllocPoint
    pools {
      id
    }
  }
}
```

## Pool

This query gets the first 5 pools deployed and returns their ID, the MasterChef that launched them and its ID, the pair in the pool, and the rewarder and its ID.

```
{
  pools(first: 5) {
    id
    masterChef {
      id
    }
    pair
    rewarder {
      id
    }
  }
}
```