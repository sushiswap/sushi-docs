# Fees & Rewards

Fees and rewards are interwoven throughout most aspects of the protocol to encourage continued growth and development as well as attract liquidity to the platform.

Fees and rewards are closely related, as they both contribute to attracting and keeping users and liquidity on the protocol, but in slightly different ways.

## Fees

Fees are charged on every swap conducted that utilizes a Sushi smart contract. These fees are then broken down into two parts, with one portion going to liquidity providers (LPs) and the other portion going to the Sushi treasury to fund continued growth and further initiatives. The fee breakdown is as follows:

-   0.3% is taken on every swap made on Sushi - 0.25% of this fee is immediately redistributed to users in the form of LP rewards (more on these below) - 0.05% of this fee is sent to the Sushi treasury **Note:** _The 0.05% portion used to go to users who staked their $SUSHI for $xSUSHI, but this fee is currently being directed towards the treasury for one calendar year (until December 2023) as per the passed [Kanpai 2.0 implementation](https://snapshot.org/#/sushigov.eth/proposal/0x64c5c6cdb74a1ebafe8e808ba69bd51ff70938b7db791ca8a05b37736541d147)_

## Rewards

Rewards are given out to LPs as an incentive for them to provide their liquidity on Sushi. Total reward amounts are pre-determined and are awarded in equal amounts daily. The amount of rewards an LP stands to receive is entirely based upon how many SLP tokens they have, and their specific percentage of the pool.

For example, if an LP had SLP tokens amounting to 3% of the SUSHI/ETH pool, they would be entitled to claim 3% of the daily SUSHI/ETH rewards in the pool. Though just an example, one can see how these rewards could add up very quickly if they were to stay vigilant. It’s important to note that one’s percentage of a pool is not fixed by any means; if another user came by and deposited more liquidity into the SUSHI/ETH pool, the first user’s percentage share of the pool would be diluted to a lower percentage, as there’s now more money in the pool.

Rewards are funded via swap fees (as noted above) and oftentimes also subsidized by individual teams in DeFi that are looking to drive more liquidity and action to their token. When a user decides to deposit their SLP tokens into a farm and they see that they stand to earn two types of rewards ($SUSHI and one other token), this other token is supplied by the individual team in charge of it while Sushi provides all of the $SUSHI rewards; these “double reward” farms are also known as _Onsen farms_.

The MasterChefv2 contract is in charge of handling all rewards on Ethereum Mainnet; individual, dedicated MiniChef contracts handle rewards on each of the L2 chains Sushi is deployed on.
