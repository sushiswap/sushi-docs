---
sidebar_position: 1
---

# Overview

Platforms like Compound and Aave allow users to deposit assets as collateral and borrow other assets against this. These protocols have attracted billions of dollars, but they suffer from some major limitations. Taking away these limitations could see much larger adoption; Kashi does just that.

We solve these issues by having a platform with:

-   Isolated lending pairs. Anyone can create a pair, it’s up to users which pairs they find safe enough. Risk is isolated to just that pair.

-   Flexible oracles, both on-chain and off-chain.

-   Liquid interest rates based on a specific target utilization range, such as 70-80%.

-   Flexible/composable contracts optimized for low gas.

-   Built on the BentoBox, so supplied assets can be used for flash loans and strategies, providing extra revenue for suppliers.

-   Benefits of liquidations can go to the liquidity provider instead of the liquidators.

## Isolated Lending Pairs

The current solutions allow users to supply a variety of collateral assets and borrow another set of assets. If one of the assets were to drop in price faster than liquidators can react, every user and every asset is affected by this. So the risk to the platform is based on the risk level of the riskiest asset listed on the platform. This risk increases with every extra asset that is added, leading to a very limited choice in assets on most platforms.

By isolating lending pairs, anyone can create a new pair similar to how anyone can create a SushiSwap pair. Some lending markets will be very stable and safe, others not so much if they include highly volatile assets with low liquidity. Because these are isolated pools, risk is limited to individual pools and interest rates will reflect that risk. Higher risk pools will attract less suppliers, pushing up the interest rate.

## Margin Shorting Any Token

This will allow for the creation of thousands of lending pairs for any token, creating the ability to go margin short on a large variety of tokens. This is something that is in high demand, but currently not available for most tokens.

Let’s say there’s a shiny new token called SHINY. We want to short this because we think it’s overvalued because it’s so shiny and new. We (or someone) create an ETH-SHINY lending pool, with a collateral rate of 80%.

We supply $1000 worth of ETH and borrow $750 worth of SHINY. We sell the SHINY for ETH and supply the ETH back to the pool. Now we have:

_Supply:_ $1750 ETH and Borrows: $750 SHINY

We borrow an extra $500 SHINY and sell it for ETH. We resupply the ETH and have:

_Supply:_ $2250 ETH and Borrows: $1250 SHINY

We can repeat this process a few more times, or we could have used a simple flash loan to get this done in 1 transaction. Depending on the collateral rate we can leverage 2–4x or more depending on our risk profile.

Now we are not only able to short this brand new token (which currently is often not possible) but we can even leverage the short. This will lead to a lot of volume on the associated swap pool, which we would encourage to of course be Sushiswap.

## Flexible Oracles

When a pool is created an oracle can be selected. We will provide 2 basic oracles, but the system can be extended and anyone could write a connector to an oracle. Some basic oracles provided are:

-   Chainlink Oracles

-   SushiSwap Time Weighted Average Price — every SushiSwap/Uniswap pool can be used to get a TWAP

-   [Open Oracle Price Feeds](https://compound.finance/docs/prices#price) — these are the feeds Compound uses

Anyone can create a new oracle!

## Elastic Interest Rates

Ideally you’d prefer a high, but not too high, supply to borrow ratio (e.g. around 75%). The current platforms try to achieve this by making the interest rate go up with increased utilization. The minimum and maximum rates are, however, fixed. So these platforms don’t optimize towards an ideal utilization; during very low or high demand, the rates have to be adjusted manually to get the utilization rate corrected. When utilization hits 100%, withdrawals are no longer possible. This problem has occurred on several of the platforms.

Each pool will optimize the interest rate to get to the ideal utilization. If the pool is underutilized, over time the interest rate will keep dropping until it reaches 0% or until enough supply has left/borrowers have arrived. As the utilization goes too high, the interest rate will start climbing until it’s back at the ideal utilization.

## Optimized For Low Gas Use

Most of the current implementations use quite a lot of gas, making them useless to users with smaller portfolios during high gas prices. One reason for this is that the contracts aren’t optimized for gas. A more fundamental reason is that having multiple assets supplied/borrowed requires more computation that gets worse the number of assets you enable. More recently, some platforms have integrated governance tokens. This adds even more gas usage to each interaction with the platform!

## Revenue Generation

-   10% of the interest proceeds will be sent to the SushiBar

-   10% of closed liquidations goes to the SushiBar
