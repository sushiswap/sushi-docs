# Liquidity Pools

Liquidity pools are a novel concept that originated in DeFi and have since become essential to the workings of the overall system. Liquidity pools are what enable _Automated Market Makers_ (AMMs), such as Sushi, to create liquid markets around all kinds of assets, allowing for them to be traded without the need for a counterparty or order book (as it is in traditional finance).

Liquidity pools work by holding an amount of certain assets (determined by the pool’s pair) that anyone can trade against, at any time. A small, variable fee is charged each time a user makes a swap using that pair. Users can lend their unused assets to a liquidity pool for a portion of the fees generated and become what is known as a _Liquidity Provider_, or LP. It is accurate to think of providing liquidity as spiritually similar to someone making a bank deposit in the real world and earning interest (fees) on their deposit.

## Types Of Liquidity Pools

There are several types of pools available on Sushi for users to participate in, including:

### Constant Product Pools

Constant Product (CP) pools were the first liquidity pool type to debut and utilize the now-classic formula **x \* y = k**, where _x_ and _y_ are the assets in a given pool and _k_ is the constant. This means these pools must enforce a 50/50 equal weighting between the two assets in the pool. When providing liquidity, LPs will be forced to add equal amount of both assets so that k remains constant, always.

### Stable Pools

Stable pools are a type of liquidity pool best suited for trading like-kind assets, such as stablecoins. Assets that are closely correlated in price (like stablecoins) get their own pool type where it is much more cost-effective to trade against, with minimal volatility and slippage. Though most common for stable pairs (such as USDC/USDT, etc.), they can be viable for any like-kind asset, such as ETH/stETH for example.

### Concentrated Liquidity Pools

Concentrated Liquidity (CL) pools are the newest addition to the Sushi suite and provide the best possible chances for ROI if they are created and managed correctly. CL works by “concentrating” an LP’s position around a pre-defined price range that the LP themself sets, essentially providing liquidity for only this range of prices (as opposed to a CP or Stable pool, where liquidity is applied equally across 100% of the price curve); if the price of the pair is within the range, the LP is making fees, and potentially more of them with less capital; if the price of the pair is out of range, the LP’s liquidity goes unused and generates zero fees for them. CL is far more capital-efficient than its colleagues due to the way liquidity is utilized within the position - as mentioned, CL positions are concentrated around a single price range, and not the entire price curve (which runs from zero to infinity), allowing the savvy user to earn _more_ yield than they might in one of the other pool types, with _less_ liquidity to play with.

Concentrated Liquidity pools do require a more hands-on approach and management than the other pool types, and as such are recommened for users with a more active investment style.
