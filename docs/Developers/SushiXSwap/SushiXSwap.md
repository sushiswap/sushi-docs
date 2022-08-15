# SushiXSwap

SushiXSwap enables cross chain swaps for SushiSwap users, using Stargate as the bridge. It supports: BentoBox, Wallet, Trident, Legacy AMM.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/SushiXSwap.sol).

## Functions

### cook

```solidity
function cook(
        uint8[] memory actions,
        uint256[] memory values,
        bytes[] memory datas
    ) public payable override
```

Executes a set of actions and allows composability (contract calls) to other contracts.

#### Parameters

| Name      | Type      | Description                                                                         |
| :-------- | :-------- | :---------------------------------------------------------------------------------- |
| `actions` | uint8[]   | array with sequence of actions to execute                                           |
| `values`  | uint256[] | one-to-one mapped array to `actions`; native token amount to send along with action |
| `datas`   | bytes[]   | one-to-one mapped array to `actions`; abi encoded data of function arguments        |
