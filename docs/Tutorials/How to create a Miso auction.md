# How to Create a MISO Auction

_Please note that while the final form of the UI will continue to change, the primary functions, inputs and information can be expected to stay relatively similar. This page will be revised as we adapt our Auction pages._

_The Auction example used below is for explanatory purposes only. Token price, amount, auction duration, descriptors and the like are not indicative of any real auction._

MISO is currently available on both the Harmony and Ethereum networks. When landing on the MISO home page, you can see all the auctions currently live as well as the finished and upcoming ones. To create an auction, click on _Create Auction_ in the top right of the page:

![](/img/tutimg/htcamo/htcamo1.png)

You will then be redirected to the auction creation form where you will first be asked various details about your token. MISO currently has 3 different token templates, choose the one that matches your needs best and fill 'er out.

![](/img/tutimg/htcamo/htcamo2.png)
_Choose your preferred template_

![](/img/tutimg/htcamo/htcamo3.png)
_Enter the name, symbol, total supply and amount of tokens for sale_

In the next step, you will be asked to enter the auction payment currency and the auction dates. The interface proposes $ETH, $DAI, $USDC and $USDT by default, but you can input a custom address of any ERC-20 token as well. Please note that the start date must be greater (later) than the current date.

![](/img/tutimg/htcamo/htcamo4.png)
_Select the payment currency and auction dates_

Now, it's time to select the auction type: 3 templates are currently available, with more in the pipeline (soon!). Take your time to understand how each template works, then select the one you want. Afterwards, enter the amount you want to raise and the price (start/end depending on the auction type).

![](/img/tutimg/htcamo/htcamo5.png)
_Choose your fighter_

![](/img/tutimg/htcamo/htcamo6.png)
_Enter the prices and determine the amount to raise_

Thanks to Sushi's AMM, MISO allows you to pre-allocate liquidity and lock it for any period of time. This will allow your users to buy and sell your token once the auction has ended.

![](/img/tutimg/htcamo/htcamo7.png)
_Enter the percentage of proceeds to allocate to the initial liquidity_

The last and final step is the whitelisting section; indeed, you might want to make a private auction or give a better allocation to some users. This is where you can do that - the MISO interface allows you to upload a simple CSV (address, token amount) as a whitelist!

If you need a more complicated/interactive whitelist, you can leave this empty and create your own whitelist contract that can be added later by editing the auction.

![](/img/tutimg/htcamo/htcamo8.png)
_Toggle on/off "use whitelist"_

![](/img/tutimg/htcamo/htcamo9.png)
_Example whitelist_

Congratulations, your auction is now ready! Click on _Review_ to validate that all of the information is correct, and once you're sure everything checks out - you can finally create the auction!

![](/img/tutimg/htcamo/htcamo10.png)

_Review and create the auction_

Once the auction has been created, you can find it in the upcoming auction list. You will likely want to give some additional information to users about your project; to do that, on your auction page, click on _Edit Auction_ in the top right corner of your screen to add a description and links to your project's socials/details.

![](/img/tutimg/htcamo/htcamo11.png)

On this page you can add a ton of information - it's a good idea to make sure to document your project as much as possible so users will feel confident to participate in your auction!

When done editing, make sure to save the changes at the bottom of the page; since this is an onchain action, you will have to sign a transaction. Once the transaction has gone through, the changes will appear on the auction page for all.
