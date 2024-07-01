---
sidebar_position: 1
---

# SushiToken (Sushi)

The SushiToken contract implements all the ERC20 token functions. Governance is also baked into the token. ** Though there is a known vulnerability related to vote delegation, and it is advised not to use the governance in production / on-chain. **

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/master/contracts/SushiToken.sol).

## State-Changing Functions

Uses all of your usual openzeppelin ERC20 functionality through inheritance from the ERC20 standard.
