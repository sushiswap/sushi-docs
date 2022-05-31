---
sidebar_position: 1
---

# Overview

The following pages contain everything you need to know about the SushiSwap suite of subgraphs. SushiSwap subgraphs are powered by [The Graph](https://thegraph.com/en/), a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.

If you are unfamiliar with GraphQL, we recommend taking a quick look through their docs first [here](https://graphql.org/learn/).

The SushiSwap subgraph works by listening for events emitted by one or more data sources (Smart Contracts) on the various chains. It handles the indexing and caching of data which can later be queried using an exposed GraphQL API, providing an excellent developer experience.

Each subgraph is broken into its own section and documented in two forms: by entity and by queries.

## Current Subgraph Locations

### Exchange

Includes all SushiSwap Exchange data with Price Data, Volume, Users, etc.

-   [Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/exchange)

-   [Binance](https://thegraph.com/explorer/subgraph/sushiswap/bsc-exchange)

-   [OKEx](https://q.hg.network/okex-exchange/oec)

-   [Gnosis](https://thegraph.com/explorer/subgraph/sushiswap/xdai-exchange)

-   [HECO](https://q.hg.network/heco-exchange/heco)

-   [Matic](https://thegraph.com/explorer/subgraph/sushiswap/matic-exchange)

-   [Fantom](https://thegraph.com/explorer/subgraph/sushiswap/fantom-exchange)

-   [Arbitrum](https://thegraph.com/explorer/subgraph/sushiswap/arbitrum-exchange)

-   [Celo](https://thegraph.com/explorer/subgraph/sushiswap/celo-exchange)

-   [Avalanche](https://thegraph.com/explorer/subgraph/sushiswap/avalanche-exchange)

-   [Harmony](https://sushi.graph.t.hmny.io/subgraphs/name/sushiswap/harmony-exchange)

-   [Moonriver](https://thegraph.com/hosted-service/subgraph/sushiswap/moonriver-exchange)

### MasterChef

Indexes all MasterChef staking data.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/master-chef)

### MasterChef V2

Indexes all MasterChef V2 staking data.

[Mainnet](https://thegraph.com/hosted-service/subgraph/sushiswap/master-chefv2)

### SushiMaker

Indexes the SushiMaker contract, which handles the serving of exchange fees to the SushiBar.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/sushi-maker)

### SushiMaker V2

Indexes the SushiMaker V2 contract, which handles the serving of exchange fees to the SushiBar.

[Mainnet](https://thegraph.com/hosted-service/subgraph/sushiswap/sushi-makerv2)

### Sushi Timelock

Includes all of the timelock transactions queried, executed and cancelled.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/sushi-timelock)

### SushiBar

Indexes the SushiBar, which includes all the data related to the bar.

[Mainnet](https://thegraph.com/explorer/subgraph/sushiswap/sushi-bar)

### SushiSwap-Subgraph-Fork

Indexes the SushiSwap Factory, and includes Price Data, Pricing, etc (on uniswap-fork branch).

[Mainnet](https://thegraph.com/explorer/subgraph/jiro-ono/sushiswap-v1-exchange)

### BentoBox

Indexes all BentoBox and Kashi Lending data.

[Mainnet](https://thegraph.com/hosted-service/subgraph/matthewlilley/bentobox-ethereum)

### MiniChef

Indexes the MiniChef contracts, which are used in place of MasterChefs for alternate networks.

- [Gnosis](https://thegraph.com/hosted-service/subgraph/sushiswap/xdai-minichef)

- [Matic](https://thegraph.com/explorer/subgraph/sushiswap/matic-minichef)

- [Fantom](https://thegraph.com/hosted-service/subgraph/sushiswap/fantom-minichef)

- [Arbitrum](https://thegraph.com/hosted-service/subgraph/sushiswap/arbitrum-minichef)

- [Celo](https://thegraph.com/hosted-service/subgraph/sushiswap/celo-minichef-v2)

- [Moonbeam](https://thegraph.com/hosted-service/subgraph/sushiswap/moonbeam-minichef)

- [Moonriver](https://thegraph.com/hosted-service/subgraph/sushiswap/moonriver-minichef)

- [Fuse](https://thegraph.com/hosted-service/subgraph/sushiswap/fuse-minichef)

### MISO

Indexes the MISO contracts, which includes auction data, participants, commitments, etc.

- [Mainnet](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-ethereum)

- [Binance](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-bsc)

- [Matic](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-polygon)

- [Fantom](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-fantom)

- [Arbitrum](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-arbitrum)

- [Avanlanche](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-avalanche)

- [Moonbeam](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-moonbeam)

- [Moonriver](https://thegraph.com/hosted-service/subgraph/sushiswap/miso-moonriver)

### Furo

Indexes the Furo contracts, which includes streaming data, vesting data and user data.

- [FuroStream - Mainnet](https://thegraph.com/hosted-service/subgraph/sushiswap/furo-stream-ethereum)

- [FuroVesting - Mainnet](https://thegraph.com/hosted-service/subgraph/sushiswap/furo-vesting-ethereum)

### Trident

Indexes the Trident contracts, which includes all kinds of information including data for the different pools, mint/burn/swaps, users, liquidity positions, snapshots, etc.

[Matic](https://thegraph.com/hosted-service/subgraph/sushiswap/trident-polygon)

## Resources

[SushiSwap Subgraph Explorer](https://thegraph.com/hosted-service/subgraph/sushiswap/exchange)

[SushiSwap Subgraph Source Code](https://github.com/sushiswap/sushiswap-subgraph)

[The Graph](https://thegraph.com/docs/en/)

[GraphQL](https://graphql.org/learn/)
