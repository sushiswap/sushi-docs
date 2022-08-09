---
sidebar_position: 4
---

# FuroVesting

FuroVesting is the base contract for vesting tokens; it is not called directly, but instead utilized via the router.

**_Important:_** Use the `FuroVestingRouter` to create vestings; do **NOT** create vestings directly.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/furo/contracts/base/FuroVesting.sol).

## Functions

### setTokenURIFetcher

```solidity
function setTokenURIFetcher(address _fetcher) external onlyOwner
```

Sets the TokenURI fetcher address to the one given. Can only be called by the owner of the contract.

#### Parameters

| Name       | Type    | Description                         |
| :--------- | :------ | :---------------------------------- |
| `_fetcher` | address | address to set token URI fetcher to |

### tokenURI

```solidity
function tokenURI(uint256 id)
        public
        view
        override
        returns (string memory)
```

View function that returns the token URI.

#### Parameters

| Name | Type    | Description                     |
| :--- | :------ | :------------------------------ |
| `id` | uint256 | token ID to return the URI from |

### setBentoBoxApproval

```solidity
function setBentoBoxApproval(
        address user,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external payable override
```

Approves this contract for BentoBox.

#### Parameters

| Name       | Type    | Description                              |
| :--------- | :------ | :--------------------------------------- |
| `user`     | address | user address to set as owner in BentoBox |
| `approved` | bool    | boolean if approved or not by BentoBox   |
| `v`        | uint8   | recovery byte of the signature           |
| `r`        | bytes32 | half of the ECDSA signature pair         |
| `s`        | bytes32 | half of the ECDSA signature pair         |

### createVesting

```solidity
function createVesting(VestParams calldata vestParams)
        external
        payable
        override
        returns (
            uint256 depositedShares,
            uint256 vestId,
            uint128 stepShares,
            uint128 cliffShares
        )
```

Creates a vesting.

#### Parameters

| Name         | Type       | Description                                                        |
| :----------- | :--------- | :----------------------------------------------------------------- |
| `vestParams` | VestParams | info necessary to create a new vesting (start, cliff, steps, etc.) |

#### Returns

| Name              | Type    | Description                |
| :---------------- | :------ | :------------------------- |
| `depositedShares` | uint256 | amount of shares deposited |
| `vestId`          | uint256 | new vesting ID             |
| `stepShares`      | uint128 | amount of step shares      |
| `cliffShares`     | uint128 | amount of cliff shares     |

### withdraw

```solidity
 function withdraw(
        uint256 vestId,
        bytes calldata taskData,
        bool toBentoBox
    ) external override
```

Withdraws from the vesting.

#### Parameters

| Name         | Type    | Description                                |
| :----------- | :------ | :----------------------------------------- |
| `vestId`     | uint256 | the ID of the vestment to withdraw from    |
| `taskData`   | bytes   | data tasks                                 |
| `toBentoBox` | bool    | boolean for if coming from BentoBox or not |

### stopVesting

```solidity
function stopVesting(uint256 vestId, bool toBentoBox) external override
```

Stops a vesting.

#### Parameters

| Name         | Type    | Description                                |
| :----------- | :------ | :----------------------------------------- |
| `vestId`     | uint256 | vesting ID to stop                         |
| `toBentoBox` | bool    | boolean for if coming from BentoBox or not |

### vestBalance

```solidity
function vestBalance(uint256 vestId)
        external
        view
        override
        returns (uint256)
```

View function that returns the current balance of the vesting.

#### Parameters

| Name     | Type    | Description                    |
| :------- | :------ | :----------------------------- |
| `vestId` | uint256 | vesting ID to check balance of |

### \_balanceOf

```solidity
function _balanceOf(Vest memory vest)
        internal
        view
        returns (uint256 claimable)
```

Internal function that returns the amount of claimable tokens from a vesting, given the specific vestment object.

#### Parameters

| Name   | Type | Description                        |
| :----- | :--- | :--------------------------------- |
| `vest` | Vest | vesting object to check balance of |

#### Returns

| Name        | Type    | Description                             |
| :---------- | :------ | :-------------------------------------- |
| `claimable` | uint256 | amount of claimable tokens from vesting |

### updateOwner

```solidity
function updateOwner(uint256 vestId, address newOwner) external override
```

Sets the new owner of a vesting. Must be current owner to set.

#### Parameters

| Name       | Type    | Description                   |
| :--------- | :------ | :---------------------------- |
| `vestId`   | uint256 | vesting ID to change owner of |
| `newOwner` | address | address of new owner to set   |

### \_depositToken

```solidity
function _depositToken(
        address token,
        address from,
        address to,
        uint256 amount,
        bool fromBentoBox
    ) internal returns (uint256 depositedShares)
```

Internal function that deposits a token into a vesting.

#### Parameters

| Name           | Type    | Description                                              |
| :------------- | :------ | :------------------------------------------------------- |
| `token`        | address | address of token to deposit                              |
| `from`         | address | address of user depositing tokens                        |
| `to`           | address | address of token recipient                               |
| `amount`       | uint256 | amount of tokens to deposit                              |
| `fromBentoBox` | bool    | boolean of whether update is coming from BentoBox or not |

#### Returns

| Name              | Type    | Description                           |
| :---------------- | :------ | :------------------------------------ |
| `depositedShares` | uint256 | amount of shares deposited in vesting |

### \_transferToken

```solidity
function _transferToken(
        address token,
        address from,
        address to,
        uint256 amount,
        bool toBentoBox
    ) internal
```

Internal function used by others in the contract, it safely transfers tokens.

#### Parameters

| Name         | Type    | Description                                                 |
| :----------- | :------ | :---------------------------------------------------------- |
| `token`      | address | address of token to send                                    |
| `from`       | address | address of user sending the tokens                          |
| `to`         | address | address of token recipient                                  |
| `amount`     | uint256 | amount of tokens to send                                    |
| `toBentoBox` | bool    | boolean of whether the transfer is going to BentoBox or not |
