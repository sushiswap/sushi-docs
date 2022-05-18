# Kashi Lending

## What is Kashi?

Kashi is a lending and margin trading platform, built on the BentoBox, that allows for anyone to create customized and gas-efficient markets for lending, borrowing, and collateralizing a variety of DeFi tokens, stable coins, and synthetic assets. Kashi's broad diversity of tokens is supported through the use of a unique isolated market framework. Unlike traditional DeFi money markets where high-risk assets can introduce risk to the entire protocol, in Kashi each market is entirely separate (similar to the SushiSwap DEX), meaning the risk of assets within one lending market has no effect over the risk of another lending market.

Traditional lending projects have permitted users to add liquidity into a pool-based system. In these systems, if one of the assets were to drop in price faster than liquidators could react, every user and every asset would be negatively impacted. In this sense, the total risk of pool-based platforms is determined largely by the riskiest asset listed on the platform. This risk increases with every extra asset that is added, leading to a very limited choice in assets on most platforms. Kashi’s unique design enables a new kind of lending and borrowing. The ability to isolate risks into individual lending markets means that Kashi can permit users to add any token.

In addition, isolating the risks of the different lending markets enables users to achieve leverage in one click, without ever leaving the platform. In the past, users seeking leverage on an asset through direct lending and borrowing would have had to borrow on one platform in order to lend on another, and repeat. Because Kashi separates markets into pairs, lending and borrowing into the same market are composable, which means that Kashi can automate leverage in a single click.

## How is Kashi different from other lending platforms?

The main difference is that Kashi uses lending markets, and isolated risk markets, while other lending platforms calculate risks globally, such that the solvency of any token can affect the solvency of the whole platform. One important consequence of using isolated risk markets is that Kashi is able to allow any token to be listed (see [What are Isolated Risk Markets?](/docs/FAQ/Bentobox%20FAQ#what-are-isolated-risk-markets)).

Another important consequence is that an elastic interest rate is used to incentivize liquidity in a certain range (see [What is the Elastic Interest Rate?](/docs/FAQ/Bentobox%20FAQ#what-is-the-elastic-interest-rate)). Yet another consequence of lending pairs and isolated risk markets is that Kashi’s oracles need to be customizable to provide price feeds for infinitely many tokens.

| Feature       | Aave, Compound, etc                              | Kashi                                                  |
| ------------- | ------------------------------------------------ | ------------------------------------------------------ |
| Markets       | Large pool with a variety of tokens              | A market is one asset and one collateral token         |
| Risk          | Systemic risk, each token can cripple the system | Isolated risk in each market                           |
| Assets Listed | "Company"/DAO decides if/when assets get listed  | Users can create any markets they want                 |
| Interest Rate | Fixed curve that needs manual adjustment         | Elastic interest rates responding to supply and demand |
| Oracles       | Chosen/maintained by the "Company"/DAO           | Open to use any oracle, user decides                   |
| Liquidations  | Profits go to the liquidator                     | Liquidity providers can get the profits                |
