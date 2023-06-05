---
sidebar_position: 2
---

# MISOFarmFactory

MISOFarmFactory is a factory contract to conveniently deploy your own token farming contracts.

The full contract can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/MISOFarmFactory.sol).

## Functions

### initMISOFarmFactory

```solidity
function initMISOFarmFactory(
        address _accessControls,
        address payable _misoDiv,
        uint256 _minimumFee,
        uint256 _integratorFeePct
    )
        external
```

Single gateway to initialize the MISO Farm Factory with proper addresses. Can only be initialized once.

#### Parameters

| Name                | Type            | Description                                    |
| :------------------ | :-------------- | :--------------------------------------------- |
| `accessControls`    | address         | address to get the access controls from        |
| `_misoDiv`          | address payable | address to send dividends to                   |
| `_minimumFee`       | uint256         | minimum fee for creating a farm in the factory |
| `_integratorFeePct` | uint256         | fee to UI integration                          |

### setMinimumFee

```solidity
function setMinimumFee(uint256 _amount) external
```

Sets the minimum fee.

#### Parameters

| Name      | Type    | Description       |
| :-------- | :------ | :---------------- |
| `_amount` | uint256 | fee amount to set |

### setIntegratorFeePct

```solidity
function setIntegratorFeePct(uint256 _amount) external
```

Sets the integrator fee percentage.

#### Parameters

| Name      | Type    | Description              |
| :-------- | :------ | :----------------------- |
| `_amount` | uint256 | percentage amount to set |

### setDividends

```solidity
function setDividends(address payable _divaddr) external
```

Sets the dividend address.

#### Parameters

| Name       | Type    | Description             |
| :--------- | :------ | :---------------------- |
| `_divaddr` | address | dividend address to set |

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

### hasFarmMinterRole

```solidity
function hasFarmMinterRole(address _address) public view returns (bool)
```

Used to check whether an address has the minter role, returns a boolean.

#### Parameters

| Name       | Type    | Description                                  |
| :--------- | :------ | :------------------------------------------- |
| `_address` | address | address of account or contract being checked |

### deployFarm

```solidity
function deployFarm(
        uint256 _templateId,
        address payable _integratorFeeAccount
    )
        public payable returns (address farm)
```

Deploys a farm corresponding to the `_templateId` and transfers fees.

#### Parameters

| Name                    | Type            | Description                       |
| :---------------------- | :-------------- | :-------------------------------- |
| `_templateId`           | uint256         | template ID of the farm to create |
| `_integratorFeeAccount` | address payable | address to pay the fee to         |

#### Returns

| Name   | Type    | Description      |
| :----- | :------ | :--------------- |
| `farm` | address | new farm address |

### createFarm

```solidity
function createFarm(
        uint256 _templateId,
        address payable _integratorFeeAccount,
        bytes calldata _data
    )
        external payable returns (address farm)
```

Creates a farm corresponding to the `_templateId`.

#### Parameters

| Name                    | Type            | Description                               |
| :---------------------- | :-------------- | :---------------------------------------- |
| `_templateId`           | uint256         | template ID of the farm to create         |
| `_integratorFeeAccount` | address payable | address to pay the fee to                 |
| `_data`                 | bytes           | data passed to the farm contract for init |

#### Returns

| Name   | Type    | Description      |
| :----- | :------ | :--------------- |
| `farm` | address | new farm address |

### addFarmTemplate

```solidity
function addFarmTemplate(address _template) external
```

Adds a farm template to create through factory. Must have operator access.

#### Parameters

| Name        | Type    | Description                            |
| :---------- | :------ | :------------------------------------- |
| `_template` | address | farm template address to create a farm |

### removeFarmTemplate

```solidity
function removeFarmTemplate(uint256 _templateId) external
```

Removes a farm template. Must have operator access.

#### Parameters

| Name          | Type    | Description               |
| :------------ | :------ | :------------------------ |
| `_templateId` | uint256 | template ID to be deleted |

### getFarmTemplate

```solidity
function getFarmTemplate(uint256 _farmTemplate) external view returns (address)
```

View function to get the template address based on the template ID.

#### Parameters

| Name            | Type    | Description |
| :-------------- | :------ | :---------- |
| `_farmTemplate` | uint256 | template ID |

### getTemplateId

```solidity
function getTemplateId(address _farmTemplate) external view returns (uint256)
```

View function to get the template ID based on the template address.

#### Parameters

| Name            | Type    | Description      |
| :-------------- | :------ | :--------------- |
| `_farmTemplate` | address | template address |

### numberOfFarms

```solidity
function numberOfFarms() external view returns (uint256)
```

View function that returns total number of farms in the factory.

### getFarms

```solidity
function getFarms() external view returns(address[] memory)
```

View function that returns all of the farm addresses created in the factory.
