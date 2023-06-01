---
sidebar_position: 1
---

# StargateAdapter

The StargateAdapter is an abstract contract that is inherited to provide functions required by the SushiXSwap contract to interact with the Stargate Bridge.

The full contract can be found here [here](https://github.com/sushiswap/sushiswap/blob/master/protocols/sushixswap/contracts/adapters/StargateAdapter.sol).

## Read-Only Functions

## State-Changing Functions

### \_stargateTeleport

```solidity
function _stargateTeleport(
    StargateTeleportParams memory params,
    uint8[] memory actions,
    uint256[] memory values,
    bytes[] memory datas
) internal;
```

This function is used to bridge tokens to a destination chain using the Stargate Router. It requires a `params` struct which contains various parameters like the destination chain ID, the token to be bridged, the source and destination pool IDs, the amount to be bridged, the minimum amount to be bridged, the native token to be received on the destination chain, the receiver's address, and extra gas for operations on the destination chain.

The `actions` array contains a sequence of actions to be executed, and `values` and `datas` arrays are one-to-one mapped to `actions`. The `values` array contains the native token amount to send along with each action, and the `datas` array contains ABI encoded data of function arguments.

The function first encodes the payload and checks if the gas provided is sufficient. If the gas is less than 100,000, it reverts the transaction.

Then, the function calls the `swap` function of the Stargate Router, passing in the various parameters, including the payload. It uses all the contract's balance as the value for the swap operation.

After the swap operation, it calls the `partnerSwap` function of the Stargate Widget with a hardcoded parameter.

Finally, it emits the `StargateSushiXSwapSrc` event.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `params` | StargateTeleportParams | Struct containing the parameters required by the Stargate. |
| `actions` | uint8[] | An array with a sequence of actions to execute. |
| `values` | uint256[] | A one-to-one mapped array to `actions`. Represents native token amount to send along with action. |
| `datas` | bytes[] | A one-to-one mapped array to `actions`. Contains ABI encoded data of function arguments. |

#### StargateTeleportParams

```solidity
struct StargateTeleportParams {
  uint16 dstChainId; // stargate dst chain id
  address token; // token getting bridged
  uint256 srcPoolId; // stargate src pool id
  uint256 dstPoolId; // stargate dst pool id
  uint256 amount; // amount to bridge
  uint256 amountMin; // amount to bridge minimum
  uint256 dustAmount; // native token to be received on dst chain
  address receiver; // sushiXswap on dst chain
  address to; // receiver bridge token incase of transaction reverts on dst chain
  uint256 gas; // extra gas to be sent for dst chain operations
  bytes32 srcContext; // random bytes32 as source context
}
```

#### Reverts

-   If `params.gas` is less than 100,000, the function reverts with the message "InsufficientGas".
-   The function may also revert if the Stargate Router's `swap` operation fails.

#### Modifiers

This function doesn't use any modifiers.

#### Events

This function emits the `StargateSushiXSwapSrc` event.

#### Functions called

This function calls the `swap` function of the Stargate Router and the `partnerSwap` function of the Stargate Widget. It also calls the `balanceOf` function of the ERC20 token specified in `params.token`.

#### Security Considerations

This function is marked as `internal`, which means it can only be called from within the contract or from contracts that inherit from this contract. It should be ensured that the parameters passed in the `params` struct are accurate and safe to use. The function uses all of the contract's balance for the swap operation, so it should be ensured that this is intended and safe. It also requires the contract to have a sufficient balance of the native token for the `swap` operation to succeed.
