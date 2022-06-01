---
sidebar_position: 5
---

# MasterContractManager

The MasterContractManager contract is in charge of approving or revoking a `masterContract` access to user funds.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/bentobox/v1/contracts/MasterContractManager.sol).

## Functions

### \_calculateDomainSeparator

```
function _calculateDomainSeparator(uint256 chainId) private view returns (bytes32)
```

#### Parameters

| Name      | Type    | Description                                    |
| :-------- | :------ | :--------------------------------------------- |
| `chainId` | uint256 | ID of chain to calculate domain separator from |

Private function called by `DOMAIN_SEPARATOR` that calculates and returns the domain separator based on the given `chainId`.

### DOMAIN_SEPARATOR

```
function DOMAIN_SEPARATOR() public view returns (bytes32)
```

Function that calls `_calculateDomainSeparator`, which returns the domain separator.

### registerProtocol

```
function registerProtocol() public
```

Function used by other contracts to register with this master contract, so that user can approve them for BentoBox.

### whitelistMasterContract

```
function whitelistMasterContract(address masterContract, bool approved) public onlyOwner
```

Function that enables or disables a contract for approval without signed message.

#### Parameters

| Name             | Type    | Description                                                              |
| :--------------- | :------ | :----------------------------------------------------------------------- |
| `masterContract` | address | address of the master contract to enable/disable approval for            |
| `approved`       | boolean | boolean set to true if function call is successful, false revokes access |

### setMasterContractApproval

```
function setMasterContractApproval(
        address user,
        address masterContract,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public
```

Function that approves or revokes a `masterContract` access to `user` funds.

#### Parameters

| Name             | Type    | Description                                                              |
| :--------------- | :------ | :----------------------------------------------------------------------- |
| `user`           | address | address of user that approves or revokes access                          |
| `masterContract` | address | address of master contract to enable/disable approval for                |
| `approved`       | boolean | boolean set to true if function call is successful, false revokes access |
| `v`              | uint8   | recovery byte of the signature                                           |
| `r`              | bytes32 | half of the ECDSA signature pair                                         |
| `s`              | bytes32 | half of the ECDSA signature pair                                         |
