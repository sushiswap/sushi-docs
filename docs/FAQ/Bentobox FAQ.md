---
sidebar_position: 2
---

# BentoBox/Kashi FAQ

### What are isolated risk markets?

An isolated risk market is a market in which risk is not shared collectively. Whereas platforms like Compound and Aave have to limit their accepted collaterals to a select group of tokens because risk is shared collectively on their platforms, the BentoBox — because it uses isolated risk markets — is able to allow users to provide liquidity for any token. If one token pair is added on the BentoBox and goes bottom up, it only affects that pair, and not the entire platform.

### How do I lend in a market and earn interest?

If you add liquidity to the BentoBox, other users can use that liquidity for flash lending, strategies and fixed, low-gas transfers among integrated dapps, like Kashi markets, which you earn interest from when they do.

### How do I borrow?

To borrow on Kashi, you need to add liquidity for the token that is paired with the token you want to borrow. If you want to borrow $LINK, and the only token that is paired with $LINK is $ETH, then you have to add $ETH.

### How do I create a market?

To create a market, you need to add a new pair. If you want to add, say $DEUS and $DEA, or $ETH and $INV, you can do that through the UI, by clicking _+Create a new market_, and finding the tokens you want to pair. Although you don’t have to add liquidity to create the pair, someone will need to add liquidity to borrow from the pair. Because of the elastic interest rate, markets that are underutilized will be less liquid, and vice versa.

### What is the elastic interest rate?

The elastic interest rate is a means of incentivizing liquidity to hover within an ideal range (70 - 80%). The elastic interest rate optimizes for utilization (borrowed assets / total assets). If the utilization is below the minimum target utilization, the interest rate halves every 8 hours. It is capped at a minimum utilization. If the utilization goes above the maximum target utilization, the interest rate doubles every eight hours. At 100%, utilization it doubles every 8 hours. At 90% it's much slower, and at 80% it's stable. Below 70%, it starts dropping, and at 0% it drops by halving every 8 hours. That is, the elastic interest rate is not linear. Rather, the closer utilization gets to the extremes, the faster it goes.

<img src='/img/faqimg/bb1.png' alt="" width="75%" />

### Why is the borrowing rate more than the supply rate?

The borrowing rate is more than the supply rate because collaterals are never maximally used, so the borrowing rate will always be slightly higher. There is also a fee on borrowing, which is generated into the reserve and makes the borrowing rate slightly higher.

### Can I use xSUSHI as collateral? Can I use XYZ as collateral? Can I use LP tokens as collateral?

In the future you will be able to use these as collaterals, but currently the BentoBox does not support these tokens.

### Does Kashi support rebasing tokens?

Currently, Kashi does not support rebasing tokens.

### What is the difference between my Bentobox balance and my wallet balance?

Your BentoBox balance grows with the utilization of your underlying capital in the BentoBox, and with the APY of the strategies that the community approves. The tokens in your wallet represent your shares of the tokens in the BentoBox.

### What are the benefits of using token markets?

The benefits of using token markets are similar to the benefits of using Automated Market Makers (AMMs). Token markets create a more open market that is customizable. More specifically, the use of token markets gives users the ability to calculate and undertake risk for themselves. The ability to calculate and undertake these risks opens up a new space of game theory to be explored; a user can, for instance, increase their borrow rate if they add newer tokens, because token markets containing newer tokens will generally be borrowed more, but when they do this, they also increase their risk, because newer tokens have a higher rate of default. On the other hand, if a user lends more battle-tested forms of collateral, the interest rate will be lower, but less risky.

### How is Kashi different from Compound and Aave?

The main difference is that Kashi uses lending markets, and isolated risk markets, while Aave and Compound both calculate risks globally, such that the solvency of any token can affect the solvency of the whole platform. One important consequence of using isolated risk markets is that Kashi is able to allow any token to be listed. Another important consequence is that an elastic interest rate is used to incentivize liquidity in a certain range. Yet another consequence of lending markets and isolated risk markets is that Kashi’s oracles need to be customizable to provide price feeds for infinitely many tokens.

### Below is a list of the ostensible differences between Kashi and Aave, Compound, etc.

| Feature | Aave, Compound, etc | Kashi |
| --- | --- | --- |
| Markets | Large pool with a variety of tokens | A market is one asset and one collateral token |
| Risk | Systemic risk, each token can cripple the system | Isolated risk in each market |
| Assets Listed | "Company"/DAO decides if/when assets get listed | Users can create any markets they want |
| Interest Rate | Fixed curve that needs manual adjustment | Elastic interest rates responding to supply and demand |
| Oracles | Chosen/maintained by the "Company"/DAO | Open to use any oracle, user decides |
| Liquidations | Profits go to the liquidator | Liquidity providers can get the profits |

### Are there any fees for using the Bentobox?

Yes, 10% of the earned interest and 10% of closed liquidations are paid to the SushiBar.

### Why is my interest rate going down or going up?

Interest rates move up and down relative to the market utilization. If the utilization is below 70%, the interest rate will drop, which will incentivize borrower utilization. If it is above 80%, the interest rate will go up, which will incentivize supplier utilization, and disincentivize borrowing. The purpose for this is to incentivize liquidity within ideal range, so that liquidity isn't overused (unmet demand) or underused (oversupplied).

### What are the $KMP tokens and how do I use them?

The $KMP tokens are an asset that users receive after they add tokens to Kashi. These tokens represent your right to your coins, and they can also be staked to return yield in $SUSHI. _The $KMP token effectively makes Sushi the only place where a user can earn three types of yield natively on the same liquidity._

### What is one-click leverage? How do I use it?

Leveraging short/long is one of the best use cases of a money market protocol. In the past, if you wanted to obtain leverage through borrowing, it would be time consuming and capital inefficient. You would have to go on a lending protocol like CREAM, borrow an asset against your collateral, go to SushiSwap, swap the borrowed asset for collateral, go back to CREAM, and borrow again to “leverage up.” Kashi does it differently: _one click leverage._ You can click “Swap borrowed token X for token Y collateral” to leverage up from 0.25x to 2.0x. In the example below, we are adding $ETH as collateral, and shorting $USDT. By using leverage short, we are swapping $USDT (borrowed asset) back to collateral ($ETH) for a leveraged up borrowing position—thus shorting $USDT and longing $ETH.

<img src='/img/faqimg/bb2.png' alt="" width="75%" />
