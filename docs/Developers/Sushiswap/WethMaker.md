---
sidebar_position: 9
---

# WethMaker

This is the contract for the WethMaker, deployed on secondary networks for selling received tokens into Weth.

The full contract can be found [here](https://github.com/sushiswap/unwindooor/blob/1657c857144ba8fd18d3eaf16895f702512057a6/contracts/WethMaker.sol).

## Functions

## setBridge

```solidity
function setBridge(address token, address bridge) external onlyOwner
```

## buyWeth

```solidity
function buyWeth(
        address[] calldata tokens,
        uint256[] calldata amountsIn,
        uint256[] calldata minimumOuts
    ) external onlyTrusted
```

Exchanges token for Weth or its bridge token, which gets converted into Weth on subsequent transactions.

#### Parameters

| Name          | Type      | Description                                                  |
| :------------ | :-------- | :----------------------------------------------------------- |
| `tokens`      | address[] | tokens to swap                                               |
| `amountsIn`   | uint256[] | amount of each token to swap                                 |
| `minimumOuts` | uint256[] | minimum amount for each token to receive from swap (in Weth) |

## \_swap

```solidity
function _swap(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        address to
    ) internal returns (uint256 outAmount)
```

Internal function used to make the swap.

#### Parameters

| Name       | Type    | Description                   |
| :--------- | :------ | :---------------------------- |
| `tokenIn`  | address | address of token to swap from |
| `tokenOut` | address | address of token to swap to   |
| `amountIn` | uint256 | amount of token to swap       |
| `to`       | address | address of receiver of funds  |

#### Returns

| Name        | Type    | Description             |
| :---------- | :------ | :---------------------- |
| `outAmount` | uint256 | amount of Weth received |

## withdraw

```solidity
 function withdraw(address token, address to, uint256 _value) onlyOwner external
```

Allows for withdrawal of funds and bridge them to mainnet. Can only be called by the owner of the contract.

#### Parameters

| Name     | Type    | Description                       |
| :------- | :------ | :-------------------------------- |
| `token`  | address | address of token to withdraw      |
| `to`     | address | address of receiver of withdrawal |
| `_value` | uint256 | amount of tokens to withdraw      |

## doAction

```solidity
function doAction(address to, uint256 _value, bytes memory data) onlyOwner external
```

Helper function used for execeuting calls safely. Can only be called by the owner of the contract.

#### Parameters

| Name     | Type    | Description                   |
| :------- | :------ | :---------------------------- |
| `to`     | address | address to target action      |
| `_value` | uint256 | value used during call        |
| `data`   | bytes   | data needed to execute action |
