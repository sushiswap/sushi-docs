---
sidebar_position: 1
---

# Overview

MiniChef is similar to the other chef contracts, specifically MasterChefV2, but is solely used for yield farming on other networks besides ethereum where the MasterChefs live.

MiniChef works in the same way except needs to be pre-filled with SUSHI tokens that are then distributed over time following the sushiPerSecond that is set on the contract.

To take part in the yield farming, users will again deposit or stake their lp tokens in the MiniChef contract, and in return over time can harvest a portion of the rewards relative to the ratio of their liquidity provided vs total liquidity staked. When harvesting from this contract, if a rewarder contract is set then the user will receive additional tokens to the SUSHI received.
