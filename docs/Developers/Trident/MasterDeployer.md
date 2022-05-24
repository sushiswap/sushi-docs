---
sidebar_position: 3
---

# MasterDeployer

MasterDeployer is the contract in charge of deploying Trident pools with a template factory whitelist.

The full contract can be found [here](https://github.com/sushiswap/trident/blob/master/contracts/deployer/MasterDeployer.sol).

## Functions

### deployPool

```
function deployPool(address _factory, bytes calldata _deployData) external returns (address pool)
```

Deploys a pool and returns the address of the newly deployed pool.

#### Parameters

| Name          | Type    | Description                  |
| :------------ | :------ | :--------------------------- |
| `_factory`    | address | address of factory contract  |
| `_deployData` | bytes   | data needed to deploy a pool |

#### Returns

| Name   | Type    | Description                    |
| :----- | :------ | :----------------------------- |
| `pool` | address | address of newly deployed pool |

### addToWhitelist

```
function addToWhitelist(address _factory) external onlyOwner
```

Adds an address to the whitelist. Can only be called by the owner of the contract.

#### Parameters

| Name       | Type    | Description          |
| :--------- | :------ | :------------------- |
| `_factory` | address | address to whitelist |

### removeFromWhitelist

```
function removeFromWhitelist(address _factory) external onlyOwner
```

Removes an address from the whitelist. Can only be called by the owner of the contract.

#### Parameters

| Name       | Type    | Description                      |
| :--------- | :------ | :------------------------------- |
| `_factory` | address | address to remove from whitelist |

### setBarFee

```
function setBarFee(uint256 _barFee) external onlyOwner
```

Sets the bar fee. Can only be called by the owner of the contract.

#### Parameters

| Name      | Type    | Description              |
| :-------- | :------ | :----------------------- |
| `_barFee` | uint256 | amount to set bar fee to |

### setBarFeeTo

```
function setBarFeeTo(address _barFeeTo) external onlyOwner
```

Sets the address for the recipient of the bar fee. Can only be called by the owner of the contract.

#### Parameters

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `_barFeeTo` | address | address of bar fee recipient |
