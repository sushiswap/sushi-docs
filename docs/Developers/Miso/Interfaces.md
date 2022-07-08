---
sidebar_position: 8
---

# Interfaces

Listed below are all of the interfaces used in the aforementioned MISO contracts.

## IBentoBoxFactory

```solidity
interface IBentoBoxFactory {
    function deploy(address masterContract, bytes calldata data, bool useCreate2) external payable returns (address cloneAddress) ;
    function masterContractApproved(address, address) external view returns (bool);
    function masterContractOf(address) external view returns (address);
    function setMasterContractApproval(address user, address masterContract, bool approved, uint8 v, bytes32 r, bytes32 s) external;
}
```

Interface for BentoBoxFactory contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IBentoBoxFactory.sol).

## IERC20

```solidity
interface IERC20 {
  function totalSupply() external view returns (uint256);
  function balanceOf(address account) external view returns (uint256);
  function allowance(address owner, address spender) external view returns (uint256);
  function approve(address spender, uint256 amount) external returns (bool);
  function name() external view returns (string memory);
  function symbol() external view returns (string memory);
  function decimals() external view returns (uint8);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);

  function transferFrom(
    address from,
    address to,
    uint256 amount
  ) external returns (bool);

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

Standard ERC20 interface; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IERC20.sol).

## IGnosisProxyFactory

```solidity
interface IGnosisProxyFactory {
    function createProxy(
        ISafeGnosis masterCopy, bytes memory data) external returns(ISafeGnosis proxy);
}
```

Interface for GnosisProxyFactory contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IGnosisProxyFactory.sol).

## IMasterChef

```solidity
interface IMasterChef {
    using BoringERC20 for IERC20;
    struct UserInfo {
        uint256 amount;     // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
    }

    struct PoolInfo {
        IERC20 lpToken;           // Address of LP token contract.
        uint256 allocPoint;       // How many allocation points assigned to this pool. SUSHIs to distribute per block.
        uint256 lastRewardBlock;  // Last block number that SUSHIs distribution occurs.
        uint256 accSushiPerShare; // Accumulated SUSHIs per share, times 1e12. See below.
    }

    function poolInfo(uint256 pid) external view returns (IMasterChef.PoolInfo memory);
    function totalAllocPoint() external view returns (uint256);
    function deposit(uint256 _pid, uint256 _amount) external;
}
```

Interface for the MasterChef contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMasterChef.sol).

## IMasterContract

```solidity
interface IMasterContract {
    /// @notice Init function that gets called from `BoringFactory.deploy`.
    /// Also known as the constructor for cloned contracts.
    /// Any ETH send to `BoringFactory.deploy` ends up here.
    /// @param data Can be abi encoded arguments or anything else.
    function init(bytes calldata data) external payable;
}
```

Interface for the MasterContract that contains the `init` function called by the factory contracts; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMasterContract.sol).

## IMisoAuction

```solidity
interface IMisoAuction {
    function initAuction(
        address _funder,
        address _token,
        uint256 _tokenSupply,
        uint256 _startDate,
        uint256 _endDate,
        address _paymentCurrency,
        uint256 _startPrice,
        uint256 _minimumPrice,
        address _operator,
        address _pointList,
        address payable _wallet
    ) external;
    function auctionSuccessful() external view returns (bool);
    function finalized() external view returns (bool);
    function wallet() external view returns (address);
    function paymentCurrency() external view returns (address);
    function auctionToken() external view returns (address);

    function finalize() external;
    function tokenPrice() external view returns (uint256);
    function getTotalTokens() external view returns (uint256);
}
```

Interface for the MisoAuction contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoAuction.sol).

## IMisoCrowdsale

```solidity
interface IMisoCrowdsale {
    function initCrowdsale(
        address _funder,
        address _token,
        address _paymentCurrency,
        uint256 _tokenSupply,
        uint256 _startDate,
        uint256 _endDate,
        uint256 _rate,
        uint256 _goal,
        address _operator,
        address payable _wallet
    ) external;
}
```

Interface for the MisoCrowdsale contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoCrowdsale.sol).

## IMisoFarm

```solidity
interface IMisoFarm {
    function initFarm(
        bytes calldata data
    ) external;
    function farmTemplate() external view returns (uint256);

}
```

Interface for the MisoFarm contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoFarm.sol).

## IMisoFermenter

```solidity
interface IMisoFermenter {
    function initERC20Vault() external;
}
```

Interface for the MisoFermenter contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoFermenter.sol).

## IMisoLauncher

```solidity
interface IMisoLauncher {
    function createLauncher(
        uint256 _templateId,
        address _token,
        uint256 _tokenSupply,
        address payable _integratorFeeAccount,
        bytes calldata _data
    )
        external payable returns (address newLauncher);

    function currentTemplateId(uint256 tempalateType) external returns (uint256);
}
```

Interface for the MisoLauncher contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoLauncher.sol).

## IMisoLiquidity

```solidity
interface IMisoLiquidity {
    function initLauncher(
        bytes calldata data
    ) external;

    function getMarkets() external view returns(address[] memory);
    function liquidityTemplate() external view returns (uint256);
}
```

Interface for the MisoLiquidity contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoLiquidity.sol).

### IMisoMarket

```solidity
interface IMisoMarket {
    function init(bytes calldata data) external payable;
    function initMarket( bytes calldata data ) external;
    function marketTemplate() external view returns (uint256);
}
```

Interface for the MisoMarket contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoMarket.sol).

### IMisoTemplate

```solidity
interface IMisoTemplate {
    function initData(
        bytes calldata data
    ) external;
}
```

Interface for the MisoTemplate contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoTemplate.sol).

## IMisoToken

```solidity
interface IMisoToken {
    function init(bytes calldata data) external payable;
    function initToken( bytes calldata data ) external;
    function tokenTemplate() external view returns (uint256);
}
```

Interface for the MisoToken contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoToken.sol).

## IMisoTokenFactory

```solidity
interface IMisoTokenFactory {
    function numberOfTokens() external view returns (uint256);
    function getTokens() external view returns (address[] memory);
}
```

Interface for the MisoTokenFactory contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IMisoTokenFactory.sol).

## IPointList

```solidity
interface IPointList {
    function isInList(address account) external view returns (bool);
    function hasPoints(address account, uint256 amount) external view  returns (bool);
    function setPoints(
        address[] memory accounts,
        uint256[] memory amounts
    ) external;
    function initPointList(address accessControl) external ;
```

Interface for the PointList contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IPointList.sol).

## IRewarder

```solidity
interface IRewarder {
    using BoringERC20 for IERC20;
    function onSushiReward (uint256 pid, address user, uint256 sushiAmount) external;
    function pendingTokens(uint256 pid, address user, uint256 sushiAmount) external returns (IERC20[] memory , uint256[] memory);
}
```

Interface for the Rewarder contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IRewarder.sol).

## ISafeGnosis

```solidity
interface ISafeGnosis{
     function setup(
        address[] calldata _owners,
        uint256 _threshold,
        address to,
        bytes calldata data,
        address fallbackHandler,
        address paymentToken,
        uint256 payment,
        address payable paymentReceiver
    )
        external;

    function execTransaction(
        address to,
        uint256 value,
        bytes calldata data,
        uint256 operation,
        uint256 safeTxGas,
        uint256 baseGas,
        uint256 gasPrice,
        address gasToken,
        address payable refundReceiver,
        bytes calldata signatures
    )
        external
        payable
        returns (bool success);
}
```

Interface for the SafeGnosis contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/ISafeGnosis.sol).

## ISushiToken

```solidity
interface ISushiToken  {
    function mint(address owner, uint256 amount) external;
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint256);
    function balanceOf(address owner) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(address indexed owner, address indexed spender, uint256 amount);
}
```

Interface for the SushiToken; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/ISushiToken.sol).

## IWETH9

```solidity
interface IWETH is IERC20 {
    function deposit() external payable;
    function withdraw(uint) external;
    function transfer(address, uint) external returns (bool);
}
```

Standard interface for wrapped ETH; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IWETH9.sol).

## IWhitelist

```solidity
interface IWhiteList {
    function isInWhiteList(address account) external view returns (bool);
    function addWhiteList(address[] calldata accounts) external ;
    function removeWhiteList(address[] calldata accounts) external ;
    function initWhiteList(address accessControl) external ;

}
```

Interface for the Whitelist contract; source code can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/interfaces/IWhiteList.sol).
