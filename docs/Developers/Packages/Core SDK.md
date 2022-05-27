---
sidebar_position: 2
---

# Core SDK

The Core SDK contains many helper functions, types, constants and custom errors that are utilized throughout the entire ecosystem of SushiSwap products. It helps developers iterate faster and keeps them from wasting time writing new boilerplate functions for common actions and conversions.

## Entities

To start, let's talk about the entities in the Core SDK - these are the common classes that are used in everything we do on the frontend. As our entire codebase is written in TypeScript, they serve as an excellent typing measure for us to ensure the least amount of friction possible when working on the frontend. Each are constructed in a way as to be reusable across many use-cases, with real utility.

Let's take a look at an example below:

#### Currency

A currency is any fungible financial instrument, including Ether, all ERC-20 tokens, other chain-native currencies, etc.

First, you would need to import the entity like so: `import { Currency } from '@sushiswap/core-sdk'`

Then you may use the entity any way you like - that's it!

Here is how we use it in our codebase to type the parameters of a call to an oracle:

```
const getOracleData = useCallback(
    async (asset: Currency, collateral: Currency) => {
      const oracleData = ''
      const mapping = CHAINLINK_PRICE_FEED_MAP[chainId]

      for (const address in mapping) {
        mapping[address].address = address
      }

      let multiply = AddressZero
      let divide = AddressZero

      const multiplyMatches = Object.values(mapping).filter(
        (m) => m.from === asset.wrapped.address && m.to === collateral.wrapped.address
      )
```

You can see above that we're using the `Currency` entity to type both our `asset` and `collateral` parameters. This ensures that the data being passed to the function always follows the same shape, and that no breaking changes will be introduced with unintended behavior; this is extremely crucial, especially with something as important as retrieving data from an oracle!

## Constants

Another large reason that the Core SDK is so helpful for developers is that it contains a vast collection of constant variables, that are used very frequently throughout the entire codebase. These include an address map for all major tokens across all major chains, as well as a token map containing the relevant metadata for the major tokens and a chain ID map.

If you would like to take a look at all of the constants we currently have included in the Core SDK package you may do so [here](https://github.com/sushiswap/sdk/tree/canary/packages/core-sdk/src).

## Functions

There are a good bit of handy helper functions located in the Core SDK as well. Developers use these as a sort of middleman for everything from computing a pair address to converting variable types. Let's take a look at an example on the former from our own codebase; this is actually a simplified method from the `Router` class, also in the Core SDK!

```
public static swapCallParameters(
    trade: Trade<Currency, Currency, TradeType>,
    options: TradeOptions | TradeOptionsDeadline
  ): SwapParameters {
    const etherIn = trade.inputAmount.currency.isNative
    const etherOut = trade.outputAmount.currency.isNative
    invariant(!(etherIn && etherOut), 'ETHER_IN_OUT')
    invariant(!('ttl' in options) || options.ttl > 0, 'TTL')

    const to: string = validateAndParseAddress(options.recipient)
```

Above, we are parsing and validating an address being derived from the `TradeOptions` (also in Core SDK) interface, giving us the recipient's address without having to write and rewrite our own custom logic each time we want to parse a legitimate address.

## Use It!

These are but a few of the powerful and helpful things the Core SDK can provide developers. We encourage you to look through the package yourself and leverage it to build your own quality dapps!

The source code can be found [here](https://github.com/sushiswap/sdk/tree/canary/packages/core-sdk).
