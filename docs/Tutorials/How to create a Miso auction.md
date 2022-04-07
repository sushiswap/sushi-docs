# How to create a Miso Auction

_Please note that while the final form of the UI will continue to change, the primary functions, inputs and information can be expected to stay relatively similar. This page will be revised as we adapt our Auction pages._

_The Auction example used below is for explanatory purposes only. Token price, amount, auction duration, descriptors and the like are not indicative of any real auction._

Miso is currently available on Harmony and Ethereum network. When landing on the Miso home page you can see all the auctions currently live as well as the finished and upcoming ones. To create an auction click on "Create Auction" on top right of the page:

![](/img/tutimg/htcamo/htcamo1.png)

You will be redirected to the auction creation form, first you will be asked informations about your token. Miso currently has 3 different token template, choose the one that matchs your needs and fill in the informations.

![](/img/tutimg/htcamo/htcamo2.png)
_Choose your preferred template_

![](/img/tutimg/htcamo/htcamo3.png)
_Enter the name, symbol, total supply and amount of tokens for sale_

In the next step you will be asked to enter the auction payment currency and dates. The interface propose ETH, DAI, USDC and USDT by default but you can input a custom address of any ERC20. Note that the start date must be greater than current date.

![](/img/tutimg/htcamo/htcamo4.png)
_Select the payment currency and auction dates_

Now it's time to select the auction type, 3 templates are currently available with more to come. Take time to understand how they work and select the one you want. Then, enter the amount you want to raise and the price (start/end depending the auction type).

![](/img/tutimg/htcamo/htcamo5.png)
_Select your template_

![](/img/tutimg/htcamo/htcamo6.png)
_Enter the prices and determine the amount to raise_

Thanks to Sushi's AMM, Miso allows you to pre-allocate liquidity and lock it for any period of time. This will allow your users to buy and sell your token once the auction ended.

![](/img/tutimg/htcamo/htcamo7.png)
_Enter the percentage of proceeds to allocate to the initial liquidity_

Next step and last step is the whitelisting part, indeed you might want to make a private auction or give a better allocation to some users. Miso interface allows you to upload a simple CSV (address, token amount) as a whitelist.

If you need a more complicated/interactive whitelist, you can leave this empty and create your own whitelist contract that can be added later by editing the auction.

![](/img/tutimg/htcamo/htcamo8.png)
_Toggle on/off "use whitelist"_

![](/img/tutimg/htcamo/htcamo9.png)
_Example whitelist_

Congratulations, your auction is now ready! You can click on "Review" to validate everything and then finally create the auction.

![](/img/tutimg/htcamo/htcamo10.png)

_Review and create the auction_

Once the auction has been created, you can find it in the upcoming auction list. You will probably want to give some additional information to users about your project; to do that, on your auction page, click on edit on top right to add a description and links to your project's socials/details.

![](/img/tutimg/htcamo/htcamo11.png)

In this page you can add a ton of information, make sure to document your project as much as possible so users will feel confident to participate in your auction!

When done editing, make sure to save the changes at the bottom of the page, the data is saved on the blockchain so you will have to validate a transaction. Once the transaction mined, the changes will appear on auction page for everyone.
