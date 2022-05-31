# Queries

This page provides some sample query examples to help get you started with the SushiSwap MasterChef subgraph.

You can test any of the queries, or write your own, on the [SushiSwap MasterChef subgraph](https://thegraph.com/hosted-service/subgraph/sushiswap/master-chef).

## MasterChef

This query gets the first 5 MasterChefs that were deployed and returns their ID, bonus multiplier, end block for the multiplier, and the address of the user who deployed the pool.

```
{
  masterChefs(first: 5) {
    id
    bonusMultiplier
    bonusEndBlock
    devaddr
  }
```

## History

This query returns the first 100 history instances, with the ID (address of history) and owner ID (deployer address) as well as te SLP balances and age for each.

```
{
  histories(first: 100) {
    id
    owner {
      id
    }
    slpBalance
    slpAge
  }
}
```

## Pool

This query gets the first 100 pool instances and returns the ID, allocation point, and users of the pool along with their IDs (user addresses) for each pool.

```
{
  pools(first: 100) {
    id
    allocPoint
    users {
      id
    }
}
```

## Pool History

This query returns the pool histories ordered by their SLP balance and returns the history ID (address), the pool's ID and the address of the token pair in the pool, and the block at which the history was created.

```
{
  poolHistories(orderBy: slpBalance) {
    id
    pool {
      id
      pair
    }
    block
	}
}
```
