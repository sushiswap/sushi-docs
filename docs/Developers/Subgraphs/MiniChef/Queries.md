# Queries

This page provides some sample query examples to help get you started with the SushiSwap MiniChef subgraph.

You can test any of the queries, or write your own, on any of the SushiSwap MiniChef subgraphs (see [here](/docs/Developers/Subgraphs/Overview#minichef) for a full list).

## MiniChef

```graphql
{
	miniChefs(first: 5) {
		id
		sushiPerSecond
		totalAllocPoint
	}
}
```

This query grabs the first 5 MiniChefs and returns each of their IDs, their $SUSHI per second and the total allocation points.

## Pool

```graphql
{
	pools(first: 100) {
		id
		pair
		miniChef {
			id
		}
	}
}
```

This query grabs the first 100 pools and returns each of their IDs, the token pair associated wiht each, as well as the MiniChef ID of the chefs serving for those pools.

## Rewarder

```graphql
{
	rewarder(id: "0xa3378ca78633b3b9b2255eaa26748770211163ae") {
		rewardToken
		rewardPerSecond
	}
}
```

This query returns the grabs the rewarder with the given ID and returns its reward token and rewards per second.
