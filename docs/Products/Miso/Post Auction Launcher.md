# Post Auction Launcher

Our Pool Liquidity contracts enable the creation and migration of liquidity pools to the SushiSwap exchange. They work by pairing two deposited tokens in a batch - typically this will be a project's own token and a pairing with ETH, allowing immediate uptake on the SushiSwap exchange.

As with all MISO ingredients, this works in Recipes - for example, using a batch of the funds raised from the Initial Token Sale covered in our Markets sections to pair with. Projects can pre-allocate a number of their minted tokens to the MISO Pool Liquidity contract. Upon a successful market auction, a portion of the proceeds are sent to the Pool Liquidity contract - and the pair is launched.

## Liquidity Options

### Token/Token Pairing

As described, project tokens are paired with token raised in equal amounts. A set amount of the project token will be sent to the contract and a total amount of token raised set to be collected. Once the contract receives the correct total of token, the pool is deployed on SushiSwap.
