---
sidebar_position: 7
---

# Trident SDK

The Trident SDK contains all of the entities, constants, functions, interfaces and enums necessary to interact with the Trident protocol. Trident is an AMM framework that is capable of launching many other types of pools than the standard AMM, by anyone and for anyone.

Let's walk through deploying a new Constant Product Pool together!

#### Deploying a Constant Product Pool

A Constant Product Pool is one of the many types of pools that can be launched with Trident, hassle-free. Before doing anything else, let's first import the class from the SDK using `import { ConstantProductPool } from '@sushiswap/trident-sdk'`

Then, let's instantiate a new pool with some help from the Core SDK:

```
const tokenA = new Token(ChainId.KOVAN, USDC_ADDRESS[ChainId.KOVAN], 6, 'USDC', 'USD Coin')
const tokenB = new Token(ChainId.KOVAN, WETH9_ADDRESS[ChainId.KOVAN], 18, 'WETH', 'Wrapped Ether')

const pool = new ConstantProductPool(
    CurrencyAmount.fromRawAmount(tokenA, '100'),
    CurrencyAmount.fromRawAmount(tokenB, '100')
)

const tokenAPrice = pool.token0Price()
```

Above, we instantiate two `Token` instances and then simply create the Constant Product Pool by passing them into its constructor. Once our pool is deployed, we can do all kinds of things with it, such as query for the current price of the first token (`tokenA` above) in the pool.

## Use It!

This is but one of the powerful and helpful things the Trident SDK can provide developers. We encourage you to look through the package yourself and leverage it to build your own quality dapps!

The source code can be found [here](https://github.com/sushiswap/sdk/tree/canary/packages/trident-sdk).
