---
sidebar_position: 2
---

# Interfaces

Listed below are all of the interfaces used in the aforementioned core contract.

## ISushiXSwap

```solidity
interface ISushiXSwap {
    function cook(
        uint8[] memory actions,
        uint256[] memory values,
        bytes[] memory datas
    ) external payable;
}
```

SushiXSwap interface; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/interfaces/ISushiXSwap.sol).

## IBentoBoxMinimal

```solidity
interface IBentoBoxMinimal {
    function balanceOf(address, address) external view returns (uint256);

    function toShare(
        address token,
        uint256 amount,
        bool roundUp
    ) external view returns (uint256 share);

    function toAmount(
        address token,
        uint256 share,
        bool roundUp
    ) external view returns (uint256 amount);

    function registerProtocol() external;

    function deposit(
        address token_,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) external payable returns (uint256 amountOut, uint256 shareOut);

    function withdraw(
        address token_,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) external returns (uint256 amountOut, uint256 shareOut);

    function transfer(
        address token,
        address from,
        address to,
        uint256 share
    ) external;

    function setMasterContractApproval(
        address user,
        address masterContract,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;
}
```

Interface for a minimal version of the BentoBox contract; source code can be found [here](https://github.com/sushiswap/furo/blob/master/contracts/interfaces/IBentoBoxMinimal.sol).

## IImmutableState

```solidity
interface IImmutableState {
    function bentoBox() external view returns (IBentoBoxMinimal);
    function stargateRouter() external view returns (IStargateRouter);
    function stargateWidget() external view returns (IStargateWidget);
    function factory() external view returns (address);
    function pairCodeHash() external view returns (bytes32);
}
```

Interface for using BentoBox and Stargate; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/interfaces/IImmutableState.sol).

## IERC20Permit

```solidity
interface IERC20Permit {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;
}
```

Standard interface for ERC20Permit; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/interfaces/IERC20Permit.sol).

## IWETH

```solidity
interface IWETH {
    function deposit() external payable;
    function transfer(address to, uint256 value) external returns (bool);
    function withdraw(uint256) external;
}
```

Standard interface for wrapped ETH; source code can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/interfaces/IWETH.sol).
