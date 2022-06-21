---
sidebar_position: 2
---

# Sushi Guard

> MEV, Front running, and arbitrage Protection for Sushi users

Sushi Guard protects you from ‘MEV’ - Maximal Extractable Value.

It is built using a service called OpenMEV from Manifold Finance.

MEV is the crypto-version of arbitrage trading / high-frequency trading that you typically see on Wall Street. Arbitrage bots are used to monitor the network, and when you submit a transaction, they will submit a transaction of their own and "bribe" the miner to place their transaction before yours and ten after your transaction. **This is called "Sandwiching"**. This has the effect of manipulating price and volume and is used to make a profit from your trades.

Sushi Guard mitigates this type of malicious MEV by leveraging the power of Flashbots, Eden Network, and Manifold Finance's OpenMEV network.

[OpenMEV](https://docs.openmev.org) [Flashbots](https://docs.flashbots.net) [Eden Network](https://edennetwork.io)

> ✅ Sushi Guard protects traders from MEV: Maximal Extracted Value. MEV occurs when arbitrage bots see your transaction and use it to arbitrage against other users to _extract_ value from it.

## What does Sushi Guard do?

<aside>
✅  **Sushi Guard RPC: [https://api.sushirealy.com/v1](https://api.sushirealy.com/v1)**

**Status Page for Sushi Guard**

[Manifold Finance status](https://status.manifoldfinance.com/)

</aside>

## Why use Sushi Guard?

<aside>

> Summary in meme form:

⛔ **MEV** sucks. MEV attacs

🍣 use Sushi. Sushi Guard protec. Sushi Guard no attacs.

</aside>

# Tutorial: How to configure how Sushi Guard works

When you access the Sushi DApp online, you can control the settings for Sushi Guard by accessing the settings panel. (`https://app.sushi.com`)

**Remember**: Never, ever, share any private keys or send anyone money, even for a test transaction! Support will never ask you to do these things, no exceptions!

<aside>
⚙ **Settings

How to configure Sushi Guard\*\*

If you don't know if Sushi Guard is enabled or disabled, you can easily check directly from the swap page!

_Check the settings by clicking the toggle button in the top right corner_

</aside>

![001.png](/img/tutimg/sushiguard/001.png)

![002.png](/img/tutimg/sushiguard/002.png)

<aside>

✅ **Sushi Guard Protector**

**"Interface Settings"** By default**,** the **Sushi Guard Protector is enabled.** We can click the toggle and enable or disable it instantly!

</aside>

### Toggle to disable or enable Sushi Guard

![003.png](/img/tutimg/sushiguard/003.png)

<aside>

⛩️ **Samurai is here to help:** Having an issue? Reach out to the Sushi Samurai\*\*

</aside>

---

## Trading using Sushi Guard

Sushi Guard works with any token that is available on SushiSwap! Below we have an example of a trade with $FOLD. Any supported token will work!

<aside>

🔑 **Confirm Swap**

**Confirm your swap and sign the transaction.**

When you click to ‘Confirm Swap’ you can also open up a more detailed view of the transaction you are about to sign.

</aside>

![](/img/tutimg/sushiguard/swap.png)

![Sushiswap - Confirm Swap Detailed View](/img/tutimg/sushiguard/004.png)

_SushiSwap - Confirm Swap Detailed View_

---

## Signing your transaction

> In this example, we are using MetaMask wallet.

<aside>

🟠 **Is this Signature Request Dangerous?**

**"Signing this message can be dangerous?"**

**You can safely sign the transaction request.**

</aside>

<aside>

✅ This **Signature Request is safe and secure**

**"You are safe to use this"**

**This signature method is safe** because we are only using it to sign a specific subset of transactions, sushi swap trades.

_You can also verify that you are signing the transaction by comparing the message Message Hash’s as seen below._

</aside>

![Signature Request Confirmation](/img/tutimg/sushiguard/005.png)

_Signature Request Confirmation_

<aside>

🫂 **I do not want to use this signing method, can I still use Sushi Guard?**

**"You can use Sushi Guard without this signing method by configuring your wallet’s RPC Provider"**

(`https://api.susirelay.com/v1`)

</aside>

![questions.png](/img/tutimg/sushiguard/questions.png)

<aside>

🚧 **Some Configuration Required for certain Wallets**

> Configure your RPC Connection manually using the official RPC Endpoint

-   **Coinbase Wallet** (latest)
-   Older **Ledger** Wallets

In your wallet's _Network Settings_, add a 'new network' and call it _Sushi Guard_. After you have created a _new network_, add the following settings:

<pre>
CHAIN_ID: `1`
RPC_URL: `https://api.sushirelay.com/v1`
NATIVE SYMBOL: ETH
Block Explorer: `https://etherscan.io`
</pre>

**https://api.securerpc.com/v1**

**Remember**: Never, ever, share any private keys or send anyone money, even for a test transaction! Support will never ask you to do these things, no exceptions!

</aside>

**Links**

-   [OpenMEV Documentation](https://docs.openmev.org)
-   [SushiSwap Documentation](https://github.com/sushiswap/sushi-docs)
-   [Sushi Samurai Help](https://toshokan.samurais.io/)
-   [Manifold Finance Helpdesk](https://github.com/manifoldfinance/support)

**Steps to report issues:** Just follow the steps below; otherwise, send a support ticket: [https://github.com/manifoldfinance/support](https://github.com/manifoldfinance/support)

<aside>

☎️ **Manifold Finance Security**

</aside>

```ini
**Contact**: mailto:sam@manifoldfinance.com
Expires: 2024-02-15T08:01:00.000Z
Encryption: https://manifoldfinance.com/.well-known/pgp-key.txt
Encryption: https://manifoldfinance.com/.well-known/pgp-key.asc
```

<aside>

👉 **Sushi Discourse Forums:** [forums.sushi.com](https://forums.sushi.com)

</aside>
