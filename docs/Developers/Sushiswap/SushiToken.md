---
sidebar_position: 8
---

# SushiToken

This is the contract for the Sushi Token with governance.

The full contract can be found [here](https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/SushiToken.sol).

## Functions

### mint

```
function mint(address _to, uint256 _amount) public onlyOwner
```

Creates `_amount` token to `_to`. Can only be called by the owner of the contract.

#### Parameters

| Name      | Type    | Description               |
| :-------- | :------ | :------------------------ |
| `_to`     | address | address to push tokens to |
| `_amount` | uint256 | amount of tokens to mint  |

### delegates

```
function delegates(address delegator)
        external
        view
        returns (address)
```

View function to return the delegatee for the given delegate address.

#### Parameters

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `delegator` | address | address to get delegatee for |

### delegate

```
function delegate(address delegatee) external
```

Calls the internal `_delegate` function, which delegates votes from `msg.sender` to `delegatee`.

#### Parameters

| Name        | Type    | Description                  |
| :---------- | :------ | :--------------------------- |
| `delegatee` | address | address to delegate votes to |

### delegateBySig

```
function delegateBySig(
        address delegatee,
        uint nonce,
        uint expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        external
```

Delegates votes from signatory to `delegatee`.

#### Parameters

| Name        | Type    | Description                                    |
| :---------- | :------ | :--------------------------------------------- |
| `delegatee` | address | address to delegate votes to                   |
| `nonce`     | uint256 | contract state required to match the signature |
| `expiry`    | uint256 | time at which to expire the signature          |
| `v`         | uint8   | recovery byte of the signature                 |
| `r`         | bytes32 | half of the ECDSA signature pair               |
| `s`         | bytes32 | half of the ECDSA signature pair               |

### getCurrentVotes

```
function getCurrentVotes(address account)
        external
        view
        returns (uint256)
```

View function that returns the current votes balance for given account.

#### Parameters

| Name      | Type    | Description                  |
| :-------- | :------ | :--------------------------- |
| `account` | address | address to get votes balance |

### getPriorVotes

```
function getPriorVotes(address account, uint blockNumber)
        external
        view
        returns (uint256)
```

Determines the prior number of votes for an account as of a block number.

#### Parameters

| Name          | Type    | Description                             |
| :------------ | :------ | :-------------------------------------- |
| `account`     | address | address of account to check             |
| `blockNumber` | uint256 | block number to get the vote balance at |

### \_delegate

```
function _delegate(address delegator, address delegatee)
        internal
```

Internal function called by `delegate`, which delegates votes from `msg.sender` to `delegatee`.

#### Parameters

| Name        | Type    | Description                    |
| :---------- | :------ | :----------------------------- |
| `delegator` | address | address to delegate votes from |
| `delegatee` | address | address to delegate votes to   |

### \_moveDelegates

```
function _moveDelegates(address srcRep, address dstRep, uint256 amount) internal
```

Internal function called by `_delegate`, it allows one to move their delegate votes from one delegatee to another. !!

#### Parameters

| Name     | Type    | Description                        |
| :------- | :------ | :--------------------------------- |
| `srcRep` | address | delegatee you're moving votes from |
| `dstRep` | address | delegatee you're moving votes to   |
| `amount` | uint256 | amount of votes to move            |

### \_writeCheckpoint

```
function _writeCheckpoint(
        address delegatee,
        uint32 nCheckpoints,
        uint256 oldVotes,
        uint256 newVotes
    )
        internal
```

Internal function called by `_moveDelegates`, it writes a new checkpoint. !!

#### Parameters

| Name           | Type    | Description                                 |
| :------------- | :------ | :------------------------------------------ |
| `delegatee`    | address | delegatee to write the checkpoint for       |
| `nCheckpoints` | uint32  | number of checkpoints used for calculations |
| `oldVotes`     | uint256 | amount of previous votes for delegatee      |
| `newVotes`     | uint256 | amount of new votes for delegatee           |
