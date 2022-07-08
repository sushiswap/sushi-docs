---
sidebar_position: 4
---

# MISOLauncher

MISOLauncher is a factory contract to conveniently deploy your _own_ liquidity contracts.

The full contract can be found [here](https://github.com/sushiswap/miso/blob/canary/contracts/MISOLauncher.sol).

## Functions

### initMISOLauncher

```solidity
function initMISOLauncher(address _accessControls, address _bentoBox) external
```

Single gateway to initialize the MISO Launcher with the proper addresses. Can only be initialized once.

#### Parameters

| Name             | Type    | Description                             |
| :--------------- | :------ | :-------------------------------------- |
| `accessControls` | address | address to get the access controls from |
| `_bentoBox`      | address | BentoBox address                        |

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

### hasLauncherMinterRole

```solidity
function hasLauncherMinterRole(address _address) public view returns (bool)
```

Used to check whether an address has the minter role, returns a boolean.

#### Parameters

| Name       | Type    | Description                                  |
| :--------- | :------ | :------------------------------------------- |
| `_address` | address | address of account or contract being checked |

### deployLauncher

```solidity
function deployLauncher(
        uint256 _templateId,
        address payable _integratorFeeAccount
    )
        public payable returns (address launcher)
```

Deploys a launcher corresponding to the `_templateId`.

#### Parameters

| Name                    | Type            | Description                           |
| :---------------------- | :-------------- | :------------------------------------ |
| `_templateId`           | uint256         | template ID of the launcher to create |
| `_integratorFeeAccount` | address payable | address to pay the fee to             |

#### Returns

| Name       | Type    | Description          |
| :--------- | :------ | :------------------- |
| `launcher` | address | new launcher address |

### createLauncher

```solidity
function createLauncher(
        uint256 _templateId,
        address _token,
        uint256 _tokenSupply,
        address payable _integratorFeeAccount,
        bytes calldata _data
    )
        external payable returns (address newLauncher)
```

Creates a new MISOLauncher using the \_templateId.

#### Parameters

| Name                    | Type            | Description                                   |
| :---------------------- | :-------------- | :-------------------------------------------- |
| `_templateId`           | uint256         | template ID of the auction template to create |
| `_token`                | address         | address of the token to be sold               |
| `_tokenSupply`          | uint256         | amount of tokens to be sold at market         |
| `_integratorFeeAccount` | address payable | address to send referral bonus to, if set     |
| `_data`                 | bytes           | data passed to the template for init          |

#### Returns

| Name          | Type    | Description          |
| :------------ | :------ | :------------------- |
| `newLauncher` | address | new launcher address |

### addLiquidityLauncherTemplate

```solidity
function addLiquidityLauncherTemplate(address _template) external
```

Adds a launcher template to create through factory. Must have operator access.

#### Parameters

| Name        | Type    | Description               |
| :---------- | :------ | :------------------------ |
| `_template` | address | launcher template address |

### removeLiquidityLauncherTemplate

```solidity
function removeLiquidityLauncherTemplate(uint256 _templateId) external
```

Removes a launcher template from factory. Must have operator access.

#### Parameters

| Name          | Type    | Description                           |
| :------------ | :------ | :------------------------------------ |
| `_templateId` | uint256 | id of launcher template to be deleted |

### getLiquidityLauncherTemplate

```solidity
function getLiquidityLauncherTemplate(uint256 _templateId) external view returns (address)
```

Returns the address of the launcher template given its ID.

#### Parameters

| Name          | Type    | Description                               |
| :------------ | :------ | :---------------------------------------- |
| `_templateId` | uint256 | id of launcher template to get address of |

### getTemplateId

```solidity
getTemplateId(address _launcherTemplate) external view returns (uint256)
```

Returns the template ID of a launcher template given its address.

#### Parameters

| Name                | Type    | Description                               |
| :------------------ | :------ | :---------------------------------------- |
| `_launcherTemplate` | address | address of launcher template to get ID of |

### numberOfLiquidityLauncherContracts

```solidity
function numberOfLiquidityLauncherContracts() external view returns (uint256)
```

View function that returns the total number of launchers in the contract.

### minimumFee

```solidity
function minimumFee() external view returns(uint128)
```

View function that returns the minimumFee of the launchers in the contract.

### getLauncherTemplateId

```solidity
function getLauncherTemplateId(address _launcher) external view returns(uint64)
```

View function that returns the launcher template ID from the launcher address.

#### Parameters

| Name        | Type    | Description                      |
| :---------- | :------ | :------------------------------- |
| `_launcher` | address | address of launcher to get ID of |

### getLaunchers

```solidity
function getLaunchers() external view returns(address[] memory)
```

View function that returns an array of all the addresses from all of the launchers in the contract.
