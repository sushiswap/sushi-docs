---
sidebar_position: 6
---

# Interfaces

Below is a list of interfaces used in the aforementioned BentoBox contracts.

## IFlashLoan

```
interface IFlashBorrower {
    function onFlashLoan(
        address sender,
        IERC20 token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external;
}
```

```
interface IBatchFlashBorrower {
    function onBatchFlashLoan(
        address sender,
        IERC20[] calldata tokens,
        uint256[] calldata amounts,
        uint256[] calldata fees,
        bytes calldata data
    ) external;
}
```

Interfaces for both the FlashBorrower contract and the BatchFlashBorrower contract; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/bentobox/v1/contracts/interfaces/IFlashLoan.sol).

## IStrategy

```
interface IStrategy {
    function skim(uint256 amount) external;

    function harvest(uint256 balance, address sender) external returns (int256 amountAdded);

    function withdraw(uint256 amount) external returns (uint256 actualAmount);

    function exit(uint256 balance) external returns (int256 amountAdded);
}
```

Interface for the Strategy contract; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/bentobox/v1/contracts/interfaces/IStrategy.sol).

## IWETH

```
interface IWETH {
    function deposit() external payable;

    function withdraw(uint256) external;
}
```

Standard interface for wrapped ETH; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/bentobox/v1/contracts/interfaces/IWETH.sol).
