---
sidebar_position: 1
---

# Overview

MasterChefV2 is the second iteration of the MasterChef contract, and is also utilized by Sushi for yield farming.

The MasterChefV2 contract works in the same way as MasterChef, with the key difference being it's added functionality to include the ability to add secondary rewarders to distribute additional tokens alongside SUSHI. The contract uses a dummy token set on MasterChef to accumulate and distribute SUSHI to the lp tokens added to the contract.

To take part in the yield farming, users will again deposit or stake their lp tokens in the MasterChef contract, and in return over time can harvest a portion of the rewards relative to the ratio of their liquidity provided vs total liquidity staked. When harvesting from this contract, if a rewarder contract is set then the user will receive additional tokens to the SUSHI received.
