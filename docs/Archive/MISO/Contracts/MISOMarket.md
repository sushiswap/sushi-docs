---
sidebar_position: 5
---

# MISOMarket

MISOMarket is a factory contract to help you conveniently deploy your own source code verified auctions.

The full contract can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/MISOMarket.sol).

## Functions

### initMISOMarket

```solidity
function initMISOMarket(address _accessControls, address _bentoBox, address[] memory _templates) external
```

Initializes the market with a list of auction templates. Can only be initialized once.

#### Parameters

| Name             | Type      | Description                             |
| :--------------- | :-------- | :-------------------------------------- |
| `accessControls` | address   | address to get the access controls from |
| `_bentoBox`      | address   | BentoBox address                        |
| `_templates`     | address[] | initial array of MISOMarket templates   |

### setMinimumFee

```solidity
function setMinimumFee(uint256 _amount) external
```

Sets the minimum fee. Must have operator access.

#### Parameters

| Name     | Type    | Description       |
| :------- | :------ | :---------------- |
| `amount` | uint256 | fee amount to set |

### setIntegratorFeePct

```solidity
function setIntegratorFeePct(uint256 _amount) external
```

Sets the integrator fee percentage. Must have operator access.

#### Parameters

| Name     | Type    | Description           |
| :------- | :------ | :-------------------- |
| `amount` | uint256 | fee percentage to set |

### setDividends

```solidity
function setDividends(address payable _divaddr) external
```

Sets the dividend address. Must have operator access.

#### Parameters

| Name       | Type            | Description             |
| :--------- | :-------------- | :---------------------- |
| `_divaddr` | address payable | dividend address to set |

### setLocked

```solidity
function setLocked(bool _locked) external
```

Sets the factory to be locked or unlocked.

#### Parameters

| Name      | Type | Description                       |
| :-------- | :--- | :-------------------------------- |
| `_locked` | bool | true if locked, false if unlocked |

### setCurrentTemplateId

```solidity
function setCurrentTemplateId(uint256 _templateType, uint256 _templateId) external
```

Sets the current template ID for any type. Must have operator access.

#### Parameters

| Name            | Type    | Description                              |
| :-------------- | :------ | :--------------------------------------- |
| `_templateType` | uint256 | type of template                         |
| `_templateId`   | uint256 | ID of the current template for that type |

### hasMarketMinterRole

```solidity
function hasMarketMinterRole(address _address) public view returns (bool)
```

Used to check whether an address has the minter role, returns a boolean.

#### Parameters

| Name       | Type    | Description                                  |
| :--------- | :------ | :------------------------------------------- |
| `_address` | address | address of account or contract being checked |

### deployMarket

```solidity
function deployMarket(
        uint256 _templateId,
        address payable _integratorFeeAccount
    )
        public payable returns (address newMarket)
```

Creates a new MISOMarket from `_templateId` and transfers fees.

#### Parameters

| Name                    | Type            | Description                                     |
| :---------------------- | :-------------- | :---------------------------------------------- |
| `_templateId`           | uint256         | template ID of the crowdsale template to create |
| `_integratorFeeAccount` | address payable | address to pay the fee to                       |

#### Returns

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `newMarket` | address | new market address |

### createMarket

```solidity
function createMarket(
        uint256 _templateId,
        address _token,
        uint256 _tokenSupply,
        address payable _integratorFeeAccount,
        bytes calldata _data
    )
        external payable returns (address newMarket)
```

Creates a new MISOMarket from `_templateId`.

#### Parameters

| Name                    | Type            | Description                                   |
| :---------------------- | :-------------- | :-------------------------------------------- |
| `_templateId`           | uint256         | template ID of the auction template to create |
| `_token`                | address         | address of the token to be sold               |
| `_tokenSupply`          | uint256         | amount of tokens to be sold at market         |
| `_integratorFeeAccount` | address payable | address to send referral bonus to, if set     |
| `_data`                 | bytes           | data passed to the template for init          |

#### Returns

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `newMarket` | address | new market address |

### addAuctionTemplate

```solidity
function addAuctionTemplate(address _template) external
```

Calls `_addAuctionTemplate`, which adds an auction template to create through factory. Must have operator access.

#### Parameters

| Name        | Type    | Description              |
| :---------- | :------ | :----------------------- |
| `_template` | address | auction template address |

### \_addAuctionTemplate

```solidity
function _addAuctionTemplate(address _template) internal
```

Internal function called by `addAuctionTemplate`, it adds an auction template to create through factory. Must have operator access.

#### Parameters

| Name        | Type    | Description              |
| :---------- | :------ | :----------------------- |
| `_template` | address | auction template address |

### removeAuctionTemplate

```solidity
function removeAuctionTemplate(uint256 _templateId) external
```

Removes an auction template. Must have operator access.

#### Parameters

| Name          | Type    | Description                  |
| :------------ | :------ | :--------------------------- |
| `_templateId` | uint256 | ID of template to be deleted |

### getAuctionTemplate

```solidity
function getAuctionTemplate(uint256 _templateId) external view returns (address)
```

View function that returns a template address based on the ID.

#### Parameters

| Name          | Type    | Description                      |
| :------------ | :------ | :------------------------------- |
| `_templateId` | uint256 | ID of template to get address of |

### getTemplateId

```solidity
function getTemplateId(address _auctionTemplate) external view returns (uint256)
```

View function that returns a template ID based on the address.

#### Parameters

| Name               | Type    | Description                      |
| :----------------- | :------ | :------------------------------- |
| `_auctionTemplate` | address | address of template to get ID of |

### numberOfAuctions

```solidity
function numberOfAuctions() external view returns (uint)
```

View function that returns the total number of auctions in the factory.

### minimumFee

```solidity
function minimumFee() external view returns(uint128)
```

View function that returns the minimumFee of the auctions in the contract.

### getMarkets

```solidity
function getMarkets() external view returns(address[] memory)
```

View function that returns an array of all the addresses of all the auctions in the contract.

### getMarketTemplateId

```solidity
function getMarketTemplateId(address _auction) external view returns(uint64)
```

View function that returns the Market Template ID for a given auction address.

#### Parameters

| Name       | Type    | Description                     |
| :--------- | :------ | :------------------------------ |
| `_auction` | address | address of auction to get ID of |
