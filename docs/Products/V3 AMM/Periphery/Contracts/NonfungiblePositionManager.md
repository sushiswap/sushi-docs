---
sidebar_position: 1
---

# NonfungiblePositionManager

`NonfungiblePositionManager` is a smart contract that manages liquidity positions in Sushi V3 pools as non-fungible tokens (NFTs). It provides a user-friendly interface for interacting with the Sushi V3 AMM, allowing users to perform common tasks such as minting, increasing, and decreasing liquidity, collecting fees, and managing approvals with ease.

### Key Features

1. **Minting NFT Positions**: The `mint` function allows users to create a new NFT position in a Sushi V3 pool, adding liquidity and receiving a unique NFT representing their position.

2. **Increasing Liquidity**: Users can increase the liquidity of their existing NFT position using the `increaseLiquidity` function, which adjusts the position's liquidity according to the specified parameters.

3. **Decreasing Liquidity**: The `decreaseLiquidity` function enables users to decrease the liquidity of an existing NFT position, potentially removing a portion of their assets from the pool and adjusting the position's liquidity.

4. **Collecting Fees**: The `collect` function allows users to collect the fees accrued by their NFT position in a Sushi V3 pool.

5. **Batched Calls**: The `multicall` function enables users to perform multiple contract calls within a single transaction, reducing gas costs and simplifying interactions with the contract.

6. **Permission Management**: The contract includes built-in permission management functions, such as `approve`, `setApprovalForAll`, and `permit`, making it easy to manage approvals for NFT positions.

7. **Position Information**: The `positions` function provides detailed information about a specific NFT position, including the tokens, fees, ticks, liquidity, and accrued fees.

8. **ERC721 Compliant**: The contract is ERC721 compliant, meaning that each NFT position can be managed and transferred using standard ERC721 functions like `transferFrom` and `safeTransferFrom`.

By leveraging the NonfungiblePositionManager contract, users can interact with Sushi V3 pools in a more intuitive and convenient way, easily managing their NFT positions and liquidity in the protocol.

The full contract can be found [here](https://github.com/sushiswap/v3-periphery/blob/master/contracts/NonfungiblePositionManager.sol).

## Read-Only Functions

### positions

```solidity
function positions(uint256 tokenId)
    external
    view
    override
    returns (
        uint96 nonce,
        address operator,
        address token0,
        address token1,
        uint24 fee,
        int24 tickLower,
        int24 tickUpper,
        uint128 liquidity,
        uint256 feeGrowthInside0LastX128,
        uint256 feeGrowthInside1LastX128,
        uint128 tokensOwed0,
        uint128 tokensOwed1
    );
```

Retrieves the details of a position associated with the given `tokenId`.

-   The `tokenId` parameter is used to look up the position data.
-   Returns all relevant position data in the form of multiple values.

#### Parameters

| Name      | Type    | Description                      |
| :-------- | :------ | :------------------------------- |
| `tokenId` | uint256 | ID of the token for the position |

#### Returns

| Name                       | Type    | Description                                                            |
| :------------------------- | :------ | :--------------------------------------------------------------------- |
| `nonce`                    | uint96  | nonce of the position                                                  |
| `operator`                 | address | address of the position operator                                       |
| `token0`                   | address | address of the first token in the pair                                 |
| `token1`                   | address | address of the second token in the pair                                |
| `fee`                      | uint24  | the pool's fee tier                                                    |
| `tickLower`                | int24   | lower tick boundary of the position                                    |
| `tickUpper`                | int24   | upper tick boundary of the position                                    |
| `liquidity`                | uint128 | position's liquidity                                                   |
| `feeGrowthInside0LastX128` | uint256 | fee growth of token0 inside the position's tick range, scaled by 2^128 |
| `feeGrowthInside1LastX128` | uint256 | fee growth of token1 inside the position's tick range, scaled by 2^128 |
| `tokensOwed0`              | uint128 | amount of token0 owed to the position in fees                          |
| `tokensOwed1`              | uint128 | amount of token1 owed to the position in fees                          |

#### Reverts

This function throws an error if the `tokenId` is invalid (i.e., not associated with a position).

#### Events

No events are emitted by this function.

#### Modifiers

No modifiers are used by this function.

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view override(ERC721, IERC721Metadata) returns (string memory);
```

Returns the URI for a given token ID.

#### Parameters

| Name      | Type    | Description                         |
| :-------- | :------ | :---------------------------------- |
| `tokenId` | uint256 | the unique identifier for the token |

#### Returns

| Name  | Type   | Description                                                    |
| :---- | :----- | :------------------------------------------------------------- |
| `uri` | string | the URI for the token, typically a JSON file hosted at the URI |

#### Reverts

This function reverts if the specified token ID does not exist.

### State-Changing Functions

### mint

```solidity
function mint(MintParams calldata params)
    external
    payable
    override
    checkDeadline(params.deadline)
    returns (
        uint256 tokenId,
        uint128 liquidity,
        uint256 amount0,
        uint256 amount1
    );
```

Mints an NFT representing a position in a Sushi V3 pool and adds liquidity to the position.

-   The `params` parameter contains the details of the position and liquidity to be added.
-   The function first adds liquidity to the pool and then mints an NFT representing the position.
-   The `_mint` function is called to mint the NFT with the given `recipient` address and increment the `_nextId`.
-   Stores the position details in the `_positions` mapping.
-   Emits an `IncreaseLiquidity` event.

#### Parameters

| Name     | Type                | Description                                                   |
| :------- | :------------------ | :------------------------------------------------------------ |
| `params` | MintParams calldata | struct containing parameters for minting and adding liquidity |

```solidity
struct MintParams {
  address token0;
  address token1;
  uint24 fee;
  int24 tickLower;
  int24 tickUpper;
  uint256 amount0Desired;
  uint256 amount1Desired;
  uint256 amount0Min;
  uint256 amount1Min;
  address recipient;
  uint256 deadline;
}
```

#### Returns

| Name        | Type    | Description                                    |
| :---------- | :------ | :--------------------------------------------- |
| `tokenId`   | uint256 | ID of the minted NFT representing the position |
| `liquidity` | uint128 | amount of liquidity added to the position      |
| `amount0`   | uint256 | amount of token0 added to the pool             |
| `amount1`   | uint256 | amount of token1 added to the pool             |

#### Reverts

This function throws an error if the deadline for the operation has passed.

#### Events

```solidity
event IncreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```

#### Modifiers

-   `checkDeadline`: Ensures the deadline for the operation has not passed.

### increaseLiquidity

```solidity
function increaseLiquidity(IncreaseLiquidityParams calldata params)
    external
    payable
    override
    checkDeadline(params.deadline)
    returns (
        uint128 liquidity,
        uint256 amount0,
        uint256 amount1
    );
```

Increases the liquidity of an existing position in a Sushi V3 pool.

-   The `params` parameter contains the details of the position and liquidity to be added.
-   Retrieves the existing position from the `_positions` mapping using `params.tokenId`.
-   Retrieves the `poolKey` using the `position.poolId`.
-   Adds liquidity to the pool with the given parameters and updates the position.
-   Returns the increased liquidity and the amounts of the two tokens added to the pool.

#### Parameters

| Name     | Type                             | Description                                           |
| :------- | :------------------------------- | :---------------------------------------------------- |
| `params` | IncreaseLiquidityParams calldata | struct containing parameters for increasing liquidity |

#### Returns

| Name        | Type    | Description                               |
| :---------- | :------ | :---------------------------------------- |
| `liquidity` | uint128 | amount of liquidity added to the position |
| `amount0`   | uint256 | amount of token0 added to the pool        |
| `amount1`   | uint256 | amount of token1 added to the pool        |

#### Reverts

This function throws an error if the deadline for the operation has passed.

#### Events

```solidity
event IncreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```

#### Modifiers

-   `checkDeadline`: Ensures the deadline for the operation has not passed.

### decreaseLiquidity

```solidity
function decreaseLiquidity(DecreaseLiquidityParams calldata params)
    external
    payable
    override
    isAuthorizedForToken(params.tokenId)
    checkDeadline(params.deadline)
    returns (uint256 amount0, uint256 amount1);
```

Decreases the liquidity of an existing position in a Sushi V3 pool.

-   The `params` parameter contains the details of the position and liquidity to be removed.
-   Retrieves the existing position from the `_positions` mapping using `params.tokenId`.
-   Retrieves the `poolKey` using the `position.poolId`.
-   Removes liquidity from the pool with the given parameters and updates the position.
-   Returns the amounts of the two tokens removed from the pool.

#### Parameters

| Name     | Type                             | Description                                           |
| :------- | :------------------------------- | :---------------------------------------------------- |
| `params` | DecreaseLiquidityParams calldata | struct containing parameters for decreasing liquidity |

```solidity
struct DecreaseLiquidityParams {
  uint256 tokenId;
  uint128 liquidity;
  uint256 amount0Min;
  uint256 amount1Min;
  uint256 deadline;
}
```

#### Returns

| Name      | Type    | Description                            |
| :-------- | :------ | :------------------------------------- |
| `amount0` | uint256 | amount of token0 removed from the pool |
| `amount1` | uint256 | amount of token1 removed from the pool |

#### Reverts

This function throws an error if the deadline for the operation has passed or the price slippage check fails.

#### Events

```solidity
event DecreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```

#### Modifiers

-   `isAuthorizedForToken`: Ensures the caller is authorized for the specified token.
-   `checkDeadline`: Ensures the deadline for the operation has not passed.

### collect

```solidity
function collect(CollectParams calldata params)
    external
    payable
    override
    isAuthorizedForToken(params.tokenId)
    returns (uint256 amount0, uint256 amount1);
```

Collects the fees accrued by a position in a Sushi V3 pool.

-   The `params` parameter contains the details of the position and fees to be collected.
-   Retrieves the existing position from the `_positions` mapping using `params.tokenId`.
-   Retrieves the `poolKey` using the `position.poolId`.
-   Calculates the accrued fees and collects the specified amounts from the pool.
-   Updates the position's tokensOwed balances.
-   Emits the `Collect` event.
-   Returns the amounts of the two tokens collected.

#### Parameters

| Name     | Type                   | Description                                      |
| :------- | :--------------------- | :----------------------------------------------- |
| `params` | CollectParams calldata | struct containing parameters for collecting fees |

```solidity
struct CollectParams {
    uint256 tokenId;
    address recipient;
    uint128 amount0Max;
    uint128 amount1Max;
}
```

#### Returns

| Name      | Type    | Description                        |
| :-------- | :------ | :--------------------------------- |
| `amount0` | uint256 | amount of token0 collected as fees |
| `amount1` | uint256 | amount of token1 collected as fees |

#### Events

```solidity
event Collect(uint256 indexed tokenId, address recipient, uint256 amount0, uint256 amount1);
```

#### Modifiers

-   `isAuthorizedForToken`: Ensures the caller is authorized for the specified token.

### burn

```solidity
function burn(uint256 tokenId) external payable override isAuthorizedForToken(tokenId);
```

Burns a non-fungible token (NFT) representing a Sushi V3 liquidity position, effectively destroying the NFT and removing it from the contract. The function can only be called by an address that is authorized for the specific `tokenId`.

-   The position's liquidity must be 0 and no outstanding tokens should be owed to the position (`tokensOwed0` and `tokensOwed1` must be 0).
-   The NFT associated with the `tokenId` will be destroyed and removed from the contract.

#### Parameters

| Name      | Type    | Description                                         |
| :-------- | :------ | :-------------------------------------------------- |
| `tokenId` | uint256 | ID of the token representing the liquidity position |

#### Events

None

#### Modifiers

```solidity
modifier isAuthorizedForToken(uint256 tokenId);
```

The `isAuthorizedForToken` modifier checks if the `msg.sender` is the owner or an approved spender for the token with the given `tokenId`. If not, the function will revert.

### getApproved

```solidity
function getApproved(uint256 tokenId) public view override(ERC721, IERC721) returns (address);
```

This function returns the address that has been approved to transfer the ownership of a particular token ID.

#### Parameters

| Name      | Type    | Description                               |
| :-------- | :------ | :---------------------------------------- |
| `tokenId` | uint256 | ID of the token to query the approval of. |

#### Returns

| Name       | Type    | Description                                                            |
| :--------- | :------ | :--------------------------------------------------------------------- |
| `approved` | address | The address of the currently approved owner of the specified token ID. |

#### Throws

| Error message                                  | Reason                                    |
| :--------------------------------------------- | :---------------------------------------- |
| `ERC721: approved query for nonexistent token` | If the specified token ID does not exist. |

### multicall

Inherited from Multicall.sol

```solidity
function multicall(bytes[] calldata data) public payable override returns (bytes[] memory results);
```

Executes multiple delegate calls on the same contract in a single transaction.

-   The `data` parameter contains an array of encoded function calls to be executed.
-   Results of each call are stored in the `results` array.
-   If a call fails, the function reverts with the error message returned from the failed call.

#### Parameters

| Name   | Type             | Description                                    |
| :----- | :--------------- | :--------------------------------------------- |
| `data` | bytes[] calldata | array of encoded function calls to be executed |

#### Returns

| Name      | Type           | Description                           |
| :-------- | :------------- | :------------------------------------ |
| `results` | bytes[] memory | array containing results of each call |

#### Reverts

This function throws an error if any of the delegate calls fail, reverting with the error message returned from the failed call.

#### Events

No events are emitted by this function.

#### Modifiers

No modifiers are used by this function.

### permit

Inherited from ERC721Permit.sol

```solidity
function permit(
    address spender,
    uint256 tokenId,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external payable override;
```

Performs an off-chain approval of the specified `tokenId` to the `spender` using EIP-712 typed data and an ECDSA signature.

-   The `deadline` parameter is used to set a time restriction on the permit.
-   `v`, `r`, and `s` are the components of the ECDSA signature.
-   The owner's signature is checked, and if it's valid, the `spender` is approved to operate on the `tokenId`.

#### Parameters

| Name       | Type    | Description                          |
| :--------- | :------ | :----------------------------------- |
| `spender`  | address | address that will be approved        |
| `tokenId`  | uint256 | ID of the token to be approved       |
| `deadline` | uint256 | unix timestamp for permit expiry     |
| `v`        | uint8   | `v` component of the ECDSA signature |
| `r`        | bytes32 | `r` component of the ECDSA signature |
| `s`        | bytes32 | `s` component of the ECDSA signature |

#### Reverts

This function throws an error if the permit has expired, the signature is invalid, the recovered address is the zero address, or the recovered address is not the owner of the `tokenId`.

#### Events

This function emits the standard ERC-721 `Approval` event.

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
```

#### Modifiers

No modifiers are used by this function.

### createAndInitializePoolIfNecessary

Inherited from PoolInitializer.sol

```solidity
function createAndInitializePoolIfNecessary(
    address token0,
    address token1,
    uint24 fee,
    uint160 sqrtPriceX96
) external payable override returns (address pool);
```

Creates and initializes a Sushi V3 pool if it doesn't exist, or initializes an existing pool if it hasn't been initialized yet.

-   `token0` and `token1` should be different ERC-20 tokens, with `token0` having a lower address than `token1`.
-   The `fee` parameter represents the pool's fee tier.
-   The `sqrtPriceX96` parameter represents the initial square root price of the pool.

#### Parameters

| Name           | Type    | Description                                               |
| :------------- | :------ | :-------------------------------------------------------- |
| `token0`       | address | address of the first token in the pair                    |
| `token1`       | address | address of the second token in the pair                   |
| `fee`          | uint24  | the pool's fee tier                                       |
| `sqrtPriceX96` | uint160 | the initial square root price of the pool, scaled by 2^96 |

#### Returns

| Name   | Type    | Description                                    |
| :----- | :------ | :--------------------------------------------- |
| `pool` | address | the address of the created or initialized pool |

#### Reverts

This function throws an error if `token0` has a higher or equal address to `token1`, or if there is an issue with pool creation or initialization.

#### Events

No events are emitted by this function.

#### Modifiers

No modifiers are used by this function.

### uniswapV3MintCallback

```solidity
function uniswapV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes calldata data
) external override;
```

This function is a callback from Sushi V3's pool contract when a new liquidity position is being minted. It handles the transfer of the owed amounts of the two tokens in the pool.

-   This function should only be called by the Sushi V3 pool.
-   It uses the `data` parameter to decode the required information for the transfer.
-   The tokens are transferred from the `payer` to the pool.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `amount0Owed` | uint256 | Amount of token0 owed to the pool |
| `amount1Owed` | uint256 | Amount of token1 owed to the pool |
| `data` | bytes | Encoded data containing the `MintCallbackData` struct with the pool key, payer, and other necessary information |

```solidity
struct MintCallbackData {
  PoolAddress.PoolKey poolKey;
  address payer;
}
```

#### Events

None

#### Modifiers

None
