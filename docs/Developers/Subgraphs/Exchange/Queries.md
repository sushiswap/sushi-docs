# Queries

This page provides some sample query examples to help get you started with the SushiSwap Exchange subgraph.

You can test any of the queries, or write your own, on the [SushiSwap Subgraph Explorer](https://thegraph.com/hosted-service/subgraph/zippoxer/sushiswap-subgraph-fork).

## Factory

### All Time Liquidity, Volume and Transactions

This query gets a factory by its id (factory address), which in this case is the SushiSwap Factory contract address.

```
{
 factory(
  id: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac"
 ) {
  volumeUSD
  liquidityUSD
  txCount
 }
}
```

## Bundle

### Ethereum Price

This query gets a bundle by its id, which in this case is simply "1".

```
{
 bundle(
  id: "1"
 ) {
  ethPrice
 }
}
```

## Pair

### Pair By ID

This query gets a pair by its id (contract address), which in this case is the SUSHI/ETH pair contract address.

```
{
 pair(
  id: "0x795065dcc9f64b5614c407a6efdc400da6221fb0"
 ) {
  id
  token0 {
   id
   symbol
  }
  token1 {
   id
   symbol
  }
 }
}
```

### Pairs

This query lists the first 1,000 pairs.

```
{
 pairs(
  first: 1000
 ) {
  id
 }
}
```

### Pairs Ordered by Liquidity

This query lists the first 1,000 pairs, ordered by liquidity in descending order.

```
{
 pairs(
  first: 1000,
  orderBy: reserveUSD,
  orderDirection: desc
 ) {
  id
 }
}
```

### Subset of Pairs

This query gets a subset of pairs where ID is in an array of ID's (pair contract addresses), which in this case is the addresses of the SUSHI/ETH and SUSHI/USDT pairs.

```
{
 pairs(
  where: {
   id_in: [
    "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
    "0x680a025da7b1be2c204d7745e809919bce074026"
   ]
  }
 ) {
  id
  token0 {
   id
   symbol
  }
  token1 {
   id
   symbol
  }
 }
}
```

## Pair Day Data

This query lists pair day data, where the pairAddress is the SUSHI/ETH pair contract address, ordered by date in ascending direction.

```
{
 pairDayDatas(
  orderBy: date,
  orderDirection: asc,
  where: {
   pairAddress: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
 ) {
  id
  date
  volumeUSD
 }
}
```

## Token

### Token by ID

This query gets a token by its ID (contract address), which in this case is the SUSHI token contract address.

```
{
 token(
  id: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
 ) {
  name
  symbol
  decimals
  derivedETH
  volumeUSD
  liquidity
 }
}
```

### Tokens

This query lists the first 1,000 tokens.

```
{
 tokens(
  first: 1000
 ) {
  id
 }
}
```

### Tokens Ordered by Volume

This query lusts the first 1,000 tokens, order by volume in descending order.

```
{
 tokens(
  first: 1000,
  orderBy: tradeVolumeUSD,
  orderDirection: desc
 ) {
  id
 }
}
```

### Subset of Tokens

This query gets a subset of tokens where ID is an array of IDs (token contract addresses), which in this case is the addresses of the Sushi and Ethereum tokens.

```
{
 tokens(
  where: {
   id_in: [
    "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
   ]
  }
 ) {
  id
  symbol
 }
}
```

## Token Day Data

This query lists token day data, where the token is the SUSHI token cotract address, ordered by date in ascending direction.

```
{
 tokenDayDatas(
  orderBy: date,
  orderDirection: asc,
  where: {
   token: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
  }
 ) {
  id
  date
  volumeToken
  volumeETH
  volumeUSD
  txCount
  liquidityToken
  liquidityETH
  liquidityUSD
  priceUSD
 }
}
```

## User

### User by ID

This query gets a user by their ID (user address).

```
{
 user(
  id: "..."
 ) {
  id
 }
}
```

### Users

This query lists the first 1,000 users.

```
{
 users(
  first: 1000
 ) {
  id
 }
}
```

### Subset of Users

This query gets a subset of users where ID is an array of IDs (user addresses).

```
{
 users(
  where: { id_in: [ "one", "two", "three" ] }
 ) {
  id
 }
}
```
