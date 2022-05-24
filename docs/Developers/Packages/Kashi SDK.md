---
sidebar_position: 4
---

# Kashi SDK

The Kashi SDK contains helper functions, entities, interfaces and constants for interacting with Kashi on top of BentoBox. We use the assets in the SDK extensively when interacting with Kashi from our end, and we've designed it for users to just as easily work with Kashi too!

## Computing a Pair Address

One of the functions in the Kashi SDK involves computing a pair address from the given collateral and asset using the `CREATE2` opcode, known as `computePairAddress()`.

First, we need to import the function using `import { computePairAddress } from '@sushiswap/kashi-sdk'`

Next, let's use it to compute a new pair address (using the `Token` entity from the Core SDK):

```
const collateral = new Token(ChainId.ETHEREUM, WETH9_ADDRESS[ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ether')
const asset = new Token(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin')

const address = computePairAddress({
    collateral,
    asset,
    oracle: CHAINLINK_ORACLE_ADDRESS[ChainId.ETHEREUM],
    oracleData:
        '0x000000000000000000000000986b5e1e1755e3c2440e960477f25201b0a8bbd4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d3c21bcecceda1000000',
    })

    console.log({
      collateral: collateral.address,
      asset: asset.address,
      address,
    })
```

Above, we are using the `Token` entity from the Core SDK to create new instances of an asset and a collateral token. We then pass all the necessary data (including the Chainlink oracle address - also stored in the Core SDK!) to compute the pair address, then logging it out to ensure everything worked correctly. Easy!

# Use it

These is but one of the many powerful and helpful things the Kashi SDK can provide. We encourage you to look through the package yourself and leverage it to build your own quality dapps!

The source code can be found [here](https://github.com/sushiswap/sdk/tree/canary/packages/kashi-sdk).
