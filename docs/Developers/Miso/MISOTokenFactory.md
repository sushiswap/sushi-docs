---
sidebar_position: 7
---

# MISOTokenFactory

MISOTokenFactory is a factory contract to deploy your very own, source code verified token contracts.

The full contract can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/MISOTokenFactory.sol).

## Functions

### initMISOTokenFactory

```solidity
function initMISOTokenFactory(address _accessControls) external
```

Single gateway to initialize the MISO Token Factory with the proper address. Can only be initialized once.

#### Parameters

| Name              | Type    | Description            |
| :---------------- | :------ | :--------------------- |
| `_accessControls` | address | access control address |

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

### deployToken

```solidity
function deployToken(
        uint256 _templateId,
        address payable _integratorFeeAccount
    )
        public payable returns (address token)
```

Creates a token corresponding to the given template ID and transfers fees.

#### Parameters

| Name                    | Type    | Description                    |
| :---------------------- | :------ | :----------------------------- |
| `_templateId`           | uint256 | template ID of token to create |
| `_integratorFeeAccount` | address | address to pay fee to          |

#### Returns

| Name    | Type    | Description               |
| :------ | :------ | :------------------------ |
| `token` | address | address of deployed token |

### createToken

```solidity
function createToken(
        uint256 _templateId,
        address payable _integratorFeeAccount,
        bytes calldata _data
    )
        external payable returns (address token)
```

Creates a token corresponding to the given template ID.

#### Parameters

| Name                    | Type    | Description                            |
| :---------------------- | :------ | :------------------------------------- |
| `_templateId`           | uint256 | template ID of token to create         |
| `_integratorFeeAccount` | address | address to pay fee to                  |
| `_data`                 | bytes   | data passed to token contract for init |

#### Returns

| Name    | Type    | Description               |
| :------ | :------ | :------------------------ |
| `token` | address | address of deployed token |

### addTokenTemplate

```solidity
function addTokenTemplate(address _template) external
```

Adds a token template to create through factory. Must have operator access.

#### Parameters

| Name        | Type    | Description                         |
| :---------- | :------ | :---------------------------------- |
| `_template` | address | address of token template to create |

### removeTokenTemplate

```solidity
function removeTokenTemplate(uint256 _templateId) external
```

Removes a token template. Must have operator access.

#### Parameters

| Name          | Type    | Description                     |
| :------------ | :------ | :------------------------------ |
| `_templateId` | uint256 | token template ID to be removed |

### numberOfTokens

```solidity
function numberOfTokens() external view returns (uint256)
```

View function that returns the total number of tokens in the factory.

### getTokens

```solidity
function getTokens() external view returns (address[] memory)
```

View function that returns an array of the addresses of the tokens in the factory.

### getTokenTemplate

```solidity
function getTokenTemplate(uint256 _templateId) external view returns (address)
```

View function that returns a token template address based on the ID.

#### Parameters

| Name          | Type    | Description                                |
| :------------ | :------ | :----------------------------------------- |
| `_templateId` | uint256 | token template ID that you want address of |

### getTemplateId

```solidity
function getTemplateId(address _tokenTemplate) external view returns (uint256)
```

View function that returns a template ID based on the address.

#### Parameters

| Name             | Type    | Description                                   |
| :--------------- | :------ | :-------------------------------------------- |
| `_tokenTemplate` | address | address of token template that you want ID of |
