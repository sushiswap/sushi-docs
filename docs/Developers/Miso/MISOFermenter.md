---
sidebar_position: 3
---

# MISOFermenter

MISOFermenter is a factory to conveniently deploy your own token vault contracts.

The full contract can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/MISOFermenter.sol).

## Functions

### initMISOFermenter

```solidity
function initMISOFermenter(address _accessControls) external
```

Single gateway to initialize the MISO Market with the proper address. Can only be initialized once.

#### Parameters

| Name             | Type    | Description                             |
| :--------------- | :------ | :-------------------------------------- |
| `accessControls` | address | address to get the access controls from |

### setLocked

```solidity
function setLocked(bool _locked) external
```

Sets the factory to be locked or unlocked.

#### Parameters

| Name      | Type | Description                       |
| :-------- | :--- | :-------------------------------- |
| `_locked` | bool | true if locked, false if unlocked |

### hasVaultMinterRole

```solidity
function hasVaultMinterRole(address _address) public view returns (bool)
```

Used to check whether an address has the minter role and returns a boolean.

#### Parameters

| Name      | Type    | Description                                  |
| :-------- | :------ | :------------------------------------------- |
| `address` | address | address of account or contract being checked |

### createEscrow

```solidity
function createEscrow(uint256 _templateId) external returns (address newEscrow)
```

Creates a new escrow corresponding to the given template ID. If the contract is locked, only admin and minters can deploy.

#### Parameters

| Name          | Type    | Description                     |
| :------------ | :------ | :------------------------------ |
| `_templateId` | uint256 | template ID of escrow to create |

#### Returns

| Name        | Type    | Description        |
| :---------- | :------ | :----------------- |
| `newEscrow` | address | new escrow address |

### addEscrowTemplate

```solidity
function addEscrowTemplate(address _escrowTemplate) external
```

Adds an escrow template to create through factory. Must have operator access.

#### Parameters

| Name              | Type    | Description                                  |
| :---------------- | :------ | :------------------------------------------- |
| `_escrowTemplate` | address | address of escrow template to create a token |

### removeEscrowTemplate

```solidity
function removeEscrowTemplate(uint256 _templateId) external
```

Removes an escrow template. Must have operator access.

#### Parameters

| Name          | Type    | Description                     |
| :------------ | :------ | :------------------------------ |
| `_templateId` | uint256 | template ID of escrow to delete |

### getEscrowTemplate

```solidity
getEscrowTemplate(uint256 _templateId) external view returns (address)
```

View function that returns the address of the escrow template based on the template ID.

#### Parameters

| Name          | Type    | Description                             |
| :------------ | :------ | :-------------------------------------- |
| `_templateId` | uint256 | template ID of escrow to get address of |

### getTemplateId

```solidity
function getTemplateId(address _escrowTemplate) external view returns (uint256 templateId)
```

View function that returns the template ID based on the template address.

#### Parameters

| Name              | Type    | Description                             |
| :---------------- | :------ | :-------------------------------------- |
| `_escrowTemplate` | address | template address of escrow to get ID of |

#### Returns

| Name          | Type    | Description                                  |
| :------------ | :------ | :------------------------------------------- |
| `_templateId` | uint256 | escrow template ID of given template address |

### numberOfTokens

```solidity
numberOfTokens() external view returns (uint256)
```

View function that returns the total number of escrows in the factory.
