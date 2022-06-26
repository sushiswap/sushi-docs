# TwoStepOwnable

_Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions. This module is used through inheritance. It will make available the modifier `onlyOwner`, which can be aplied to your functions to restrict their use to the owner. In order to transfer ownership, a recipient must be specified, at which point the specified recipient can call `acceptOwnership` and take ownership._

## Methods

### acceptOwnership

```solidity
function acceptOwnership() external nonpayable
```

_Transfers ownership of the contract to the caller. Can only be called by a new potential owner set by the current owner._

### cancelOwnershipTransfer

```solidity
function cancelOwnershipTransfer() external payable
```

_Cancel a transfer of ownership to a new account. Can only be called by the current owner._

### isOwner

```solidity
function isOwner() external view returns (bool)
```

_Returns true if the caller is the current owner._

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external payable
```

_Allows a new account (`newOwner`) to accept ownership. Can only be called by the current owner._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| newOwner | address | undefined   |

## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |

## Errors

### Unauthorized

```solidity
error Unauthorized()
```

### ZeroAddress

```solidity
error ZeroAddress()
```
