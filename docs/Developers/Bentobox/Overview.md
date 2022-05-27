---
sidebar_position: 1
---

# Overview

The BentoBox is a vault that holds tokens and generates yield from flash loans and strategies for any protocol built on top of it.

Building on top of Bentobox provides these benefits:

-   Extra yield from flash loans

-   Extra yield from strategies

-   Optimized deposit, withdraw and skim functions that auto convert ETH to WETH

-   Low gas (and fixed gas!) transfers of tokens within Bentobox

-   Simplified approval of tokens (no need to reapprove for each protocol)

-   Minimal proxy contract factory is built in; no need to roll your own!

### Single Vault

Placing your tokens in a single vault brings a range of benefits. As more protocols get added to the BentoBox, gas costs will come down, while composability, capital efficiency and flexibility will go up.

_Not all tokens are created equal._ Some have very high gas costs, some are not quite ERC-20 compliant. Once they are stored in the BentoBox, you can use your tokens in any BentoBox enabled protocols. These protocols don't have to worry about any token quirks or handle $ETH. The BentoBox takes care of all that. On top of that, tokens in the BentoBox will generate extra returns through flash loans and potentially a token strategy.

### Flash Loans

Tokens in the BentoBox can be flash loaned. The fee is 0.05% and this fee goes to the share owners in the BentoBox. Multiple assets can be flash loaned at the same time.

ERC-3156 wasn't final at release of the BentoBox and the BentoBox is not ERC-3156 compliant at this time. The BentoBox uses push instead of pull to get the returned funds. This is for flexibility and security reasons.

### Strategies

The BentoBox has a simple strategy system per token. A strategy is a contract that invests a single token for profit and returns the profit in that same token. The safest strategies would be those that:

-   Can only ever grow in token amount - principal is always safe

-   Can be deposited and withdrawn at will

Some examples of this would be:

- The SushiBar: $SUSHI can be invested and held as xSUSHI

-   Staking contracts, such as MasterChef and Onsen

It will be up to the community and the Sushi team to decide which strategies are safe enough to enable. The BentoBox has a hardcoded 2 week waiting period for enabling or changing strategies.

### Amounts and Shares

When you deposit token in the BentoBox, you receive a number of shares. This represents your shares of the total token amount in the BentoBox. As the amount of tokens grows due to flash loan fees and profit from strategies, you will get your share of that. Simply depositing tokens into the BentoBox can provide returns.

Because of limited precision in the accounting, there will be small rounding differences. For most tokens these will be incredibly small and have no useful value. In the top 100 tokens, currently $XAUT is worth the most for a single accounting unit, at about $0.00185. BentoBox is designed to never round in your favour, because that could be exploited by clever hackers. But because of this, when you deposit 100 tokens and withdraw it straight away, you may only receive for instance 99.9999.

### Batching

The batch function allows the batching of multiple BentoBox function calls in a single transaction.

### Supported Tokens

While most ERC-20 tokens are supported by the BentoBox, there are some tokens that should not be deposited into the BentoBox:

_Rebasing tokens are not directly supported._ Since rebasing is just a visual (psychological) trick rather than an actual feature, direct support was not added. However, most rebasing tokens could easily be wrapped exposing the underlying balances as an ERC-20 token. These could be deposited into the BentoBox without problem.

_Tokens where a single 'unit' has significant value._ Due to rounding and gas optimizations, it is possible to craft transactions that will give you 'free' units of a token. In case of a token, such as $SUSHI, with 18 decimals, this would be worth about $0.00000000000000001. As long as gas costs are more than this, it's safe. In the case of $WBTC, 1 unit is about $0.00033, which still has a safety margin of about 4 orders of magnitude. There may however be some tokens with low or no decimals and a high value that should not be added to the BentoBox.

_Tokens where the totalSupply in token units is greater than uint128, which is about 38 decimals._ With a maximum of 18 decimals normally used, this would still allow for a totalSupply of 100.000.000.000.000.000.000, which is more than enough. While ERC-20 supports uint256, this limit was added to save on gas.

### Minimum Token Balance

To prevent a far-fetched grieving attack on the amount to share ratio, a minimum of 1000 shares of each token have to remain in the BentoBox **OR** it has to be emptied completely. Normally this is an insignificant amount, and even in the case of $WBTC it's only $3.30. If you're the last user, you can fully withdraw your shares, so no funds are lost/inaccessible because of this.

### Multiple Protocols and Master Contracts

Any protocol can use BentoBox as its storage of funds; the contract just needs to implement the init function.

### Approval of Protocols (Master Contracts)

For every new master contract, each user manually approves the protocol. Once approved, functions of the protocol contract have access to all funds of the user that are not in other protocols. Because this is quite a powerful approval, users tricked into approving a malicious contract could lose a lot of funds. To mitigate this and improve usability, the approval is done through a signed typed data message. A wallet such as Metamask will display the typed data, which includes this message:

`Give FULL access to funds in (and approved to) BentoBox?`

This will prompt users to the potential effects of the approval. Because some hardware wallets are unable to sign typed data, such as the Ledger, a fallback is available. The Sushi team has the ability to white-list master contracts so they can be approved by a simple contract call.
