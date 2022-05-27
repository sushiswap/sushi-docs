---
sidebar_position: 4
---

# Interfaces

Below is a list of interfaces used in the aforementioned Trident and Constant Product Pool contracts.

## IBentoBoxMinimal

```
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
        address token,
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

    function totals(address token) external view returns (Rebase memory total);

    function setMasterContractApproval(
        address user,
        address masterContract,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    function harvest(
        address token,
        bool balance,
        uint256 maxChangeAmount
    ) external;
}
```

Minimal BentoBox vault interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IBentoBoxMinimal.sol).

## IERC20PermitAllowed

```
interface IERC20PermitAllowed {
    function permit(
        address holder,
        address spender,
        uint256 nonce,
        uint256 expiry,
        bool allowed,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;
}
```

IERC20 with permit interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IERC20PermitAllowed.sol).

## IMasterDeployer

```
interface IMasterDeployer {
    function barFee() external view returns (uint256);

    function barFeeTo() external view returns (address);

    function bento() external view returns (address);

    function migrator() external view returns (address);

    function pools(address pool) external view returns (bool);

    function deployPool(address factory, bytes calldata deployData) external returns (address);
}
```

Trident pool deployer interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IMasterDeployer.sol).

## IPool

```
interface IPool {
    function swap(bytes calldata data) external returns (uint256 finalAmountOut);

    function flashSwap(bytes calldata data) external returns (uint256 finalAmountOut);

    function mint(bytes calldata data) external returns (uint256 liquidity);

    function burn(bytes calldata data) external returns (TokenAmount[] memory withdrawnAmounts);

    function burnSingle(bytes calldata data) external returns (uint256 amountOut);

    function poolIdentifier() external pure returns (bytes32);

    function getAssets() external view returns (address[] memory);

    function getAmountOut(bytes calldata data) external view returns (uint256 finalAmountOut);

    function getAmountIn(bytes calldata data) external view returns (uint256 finalAmountIn);

    event Swap(address indexed recipient, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOut);

    struct TokenAmount {
        address token;
        uint256 amount;
    }
}
```

Trident pool interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IPool.sol).

## IPoolFactory

```
interface IPoolFactory {
    function deployPool(bytes calldata _deployData) external returns (address pool);

    function configAddress(bytes32 data) external returns (address pool);
}
```

Trident factory pool deployment interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IPoolFactory.sol).

## IConstantProductPool

```
interface IConstantProductPool is IPool, IERC20 {
    function getNativeReserves()
        external
        view
        returns (
            uint256 _nativeReserve0,
            uint256 _nativeReserve1,
            uint32
        );
}
```

Trident Constant Product Pool interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IConstantProductPool.sol).

## IConstantProductPoolFactory

```
interface IConstantProductPoolFactory {
    function getDeployData() external view returns (bytes memory, IMasterDeployer);
}
```

Trident Constant Product Pool factory interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IConstantProductPoolFactory.sol).

## ITridentCallee

```
interface ITridentCallee {
    function tridentSwapCallback(bytes calldata data) external;

    function tridentMintCallback(bytes calldata data) external;
}
```

Trident pool callback interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/ITridentCallee.sol).

## ITridentNFT

```
interface ITridentNFT {
    function ownerOf(uint256) external view returns (address);
}
```

Trident NFT interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/ITridentNFT.sol).

## ITridentRouter

```
interface ITridentRouter {
    struct Path {
        address pool;
        bytes data;
    }

    struct ExactInputSingleParams {
        uint256 amountIn;
        uint256 amountOutMinimum;
        address pool;
        address tokenIn;
        bytes data;
    }

    struct ExactInputParams {
        address tokenIn;
        uint256 amountIn;
        uint256 amountOutMinimum;
        Path[] path;
    }

    struct TokenInput {
        address token;
        bool native;
        uint256 amount;
    }

    struct InitialPath {
        address tokenIn;
        address pool;
        bool native;
        uint256 amount;
        bytes data;
    }

    struct PercentagePath {
        address tokenIn;
        address pool;
        uint64 balancePercentage;
        bytes data;
    }

    struct Output {
        address token;
        address to;
        bool unwrapBento;
        uint256 minAmount;
    }

    struct ComplexPathParams {
        InitialPath[] initialPath;
        PercentagePath[] percentagePath;
        Output[] output;
    }
}
```

Trident pool router interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/ITridentRouter.sol).

## IWETH9

```
interface IWETH9 is IERC20 {
    function deposit() external payable;
    function withdraw(uint256) external;
}
```

WETH interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IWETH9.sol).

## IWhiteListManager

```
interface IWhiteListManager {
    function whitelistedAccounts(address operator, address account) external returns (bool);
}
```

Trident franchised pool whitelist manager interface; source code can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/interfaces/IWhiteListManager.sol).
