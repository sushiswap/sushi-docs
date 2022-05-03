---
sidebar_position: 1
---

# Overview

The following pages contain everything you need to know about the SushiSwap suite of subgraphs. SushiSwap subgraphs are powered by [The Graph](https://thegraph.com/en/), a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.

If unfamiliar with GraphQL, we recommend taking a quick look through their docs first [here](https://graphql.org/learn/).

The SushiSwap subgraph works by listening for events emitted by one or more data sources (Smart Contracts) on the various chains. It handles the indexing and caching of data which can later be queried using an exposed GraphQL API, providing an excellent developer experience.

Each subgraph is broken into its own section and documented in two forms: by entity and by queries.

## Current Subgraph Locations

### Exchange

Includes all SushiSwap Exchange data with Price Data, Volume, Users, etc.

- [Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/exchange)

- [Binance](https://thegraph.com/explorer/subgraph/sushiswap/bsc-exchange)

- [OKEx](https://q.hg.network/okex-exchange/oec)

- [Gnosis](https://thegraph.com/explorer/subgraph/sushiswap/xdai-exchange)

- [HECO](https://q.hg.network/heco-exchange/heco)

- [Matic](https://thegraph.com/explorer/subgraph/sushiswap/matic-exchange)

- [Fantom](https://thegraph.com/explorer/subgraph/sushiswap/fantom-exchange)

- [Arbitrum](https://thegraph.com/explorer/subgraph/sushiswap/arbitrum-exchange)

- [Celo](https://thegraph.com/explorer/subgraph/sushiswap/celo-exchange)

- [Avalanche](https://thegraph.com/explorer/subgraph/sushiswap/avalanche-exchange)

- [Harmony](https://sushi.graph.t.hmny.io/subgraphs/name/sushiswap/harmony-exchange)

- [Moonriver](https://thegraph.com/hosted-service/subgraph/sushiswap/moonriver-exchange)

### Master Chef

Indexes all MasterChef staking data.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/master-chef)

### Sushi Maker

Indexes the SushiMaker contract, which handles the serving of exchange fees to the SushiBar.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/sushi-maker)

### Sushi Timelock

Includes all of the timelock transactions queried, executed and cancelled.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/sushi-timelock)

### Sushi Bar

Indexes the SushiBar, which includes all the data related to the bar.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/sushi-bar)

### SushiSwap-Subgraph-Fork

Indexes the SushiSwap Factory, and includes Price Data, Pricing, etc (on uniswap-fork branch).

[Mainnet](https://thegraph.com/explorer/subgraph/jiro-ono/sushiswap-v1-exchange)

### BentoBox

Indexes all BentoBox and Kashi Lending data.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/bentobox)

### MiniChef

Indexes the MiniChef contracts, which are used in place of MasterChefs for alternate networks.

[Matic](https://thegraph.com/explorer/subgraph/sushiswap/matic-minichef)

## Resources

[SushiSwap Subgraph Explorer](https://thegraph.com/hosted-service/subgraph/zippoxer/sushiswap-subgraph-fork)

[SushiSwap Subgraph Source Code](https://github.com/sushiswap/sushiswap-subgraph)

[The Graph](https://thegraph.com/docs/en/)

[GraphQL](https://graphql.org/learn/)
