---
sidebar_position: 1
---

# Overview

Rewarders can be set on the MasterChefV2 and MiniChef contracts to distribute additional tokens to the pools that are receiving SUSHI rewards.

The rewarders utilize an IRewarder interface, and any new rewarders must follow this interface to be compatible with the chef contracts. The rewarders work through a hook, onSushiReward, that is called by the chef contracts and can only be called by those contracts. The rewarders then take in information from that call and distribute the secondary reward tokens to user's harvesting SUSHI.

There is two main variations of rewarder contracts used which are the: CloneRewarder and ComplexRewarder.

The CloneRewarder contract is used to distribute a single extra token, or the dual version can be used to distribute two extra tokens, to a single pool where the rewarder is set on the chef contract. The ComplexRewarder token distributes a single token, but can be used across multiple pools on the chef contracts and consists of allocations points to determine that distribution.
