---
sidebar_position: 1
---

# Overview

Concentrated Liquidity Pools are a generalization of the traditional `xy = k` pool. With the traditional model, all users provide liquidity on a `(0, inf)` price range, where as in concentrated liquidity pools each user can pick their own range to provide liquidity on. This allows users to narrow down the liquidity provision range which amplifies their liquidity - meaning traders experience lesser price impact and liquidity providers accrue _more_ fees. The biggest tradeoff here is that liquidity providers experience _greater_ impermanent loss.

![](/img/clp.png)
![](/img/clp2.png)

If you would like to know more about the technical aspects of the Concentrated Liquidity Pools, you can find those details [here](https://github.com/sushiswap/trident/tree/master/contracts/pool/concentrated).
