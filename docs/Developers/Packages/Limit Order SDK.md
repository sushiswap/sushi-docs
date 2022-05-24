---
sidebar_position: 5
---

# Limit Order SDK

The Limit Order SDK is an exciting one - it not only contains all of the constants, types and enums needed for interacting with the limit order function of SushiSwap, but it also contains the code for the limit orders themselves!

Let's dive into creating a new limit order:

#### Creating a Limit Order

First, we need to import the class from the SDK using `import { LimitOrder } from '@sushiswap/limit-order-sdk'`

Next, let's create a new Limit Order using some help from the Core SDK as well:

```
let tokenA = new Token(ChainId.MATIC, '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', 18, 'DAI')
let tokenB = new Token(ChainId.MATIC, '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', 18, 'SUSHI')

const amountIn = CurrencyAmount.fromRawAmount(tokenA, '9000000000000000000')
const amountOut = CurrencyAmount.fromRawAmount(tokenB, '8000000000000000000')
const stopPrice = '100000000000000000'

const limitOrder = new LimitOrder(
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    amountIn,
    amountOut,
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    '0',
    '4078384250',
    stopPrice,
    '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    '0x00000000000000000000000000000000000000000000000000000000000000'
)

const carol = '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
const { v, r, s } = limitOrder.signdOrderWithPrivatekey(ChainId.MATIC, carol)
```

Above, we start by creating two instances of a token with the `Token` entity from the Core SDK. We then create variables to hold some data (arbitrary in this example) that we will need to create a limit order. Once we have all of the pieces together, we can instantiate a new limit order from the `LimitOrder` class in the SDK. Congratulations, you've just created a limit order! From here, we can do whatever we need to do with the order (if anything at all) - above, we showcase how a user named Carol could then sign her limit order (calling the `signdOrderWithPrivateKey` method on `LimitOrder`) and pull out the pieces needed from the signature for verification elsewhere.

# Use it

This is but one of the powerful and helpful things the Limit Order SDK can provide developers. We encourage you to look through the package yourself and leverage it to build your own quality dapps!

The source code can be found [here](https://github.com/sushiswap/sdk/tree/canary/packages/limit-order-sdk).
