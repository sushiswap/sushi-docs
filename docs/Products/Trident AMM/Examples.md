---
sidebar_position: 2
---

# Examples

## Example of interacting with Pool contracts

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import '@sushiswap/trident/contracts/interfaces/Ipool.sol'
import '@sushiswap/bentobox/contracts/interfaces/IBentoBoxV1.sol'
import 'solmate/src/tokens/ERC20.sol'

contract SimpleSwap {
  // using Optimism addresses as example
  IBentoBoxV1 public constant bentobox = IBentoBoxV1(0xc35DADB65012eC5796536bD9864eD8773aBc74C4);
  IPool public constant constant_product_pair = IPool(0x7086622E6Db990385B102D79CB1218947fb549a9); // ETH-USDC (0.05%)
  IPool public constant stable_product_pair = IPool(0xB059CF6320B29780C39817c42aF1a032bf821D90); // USDC-USDT (0.01%)
  ERC20 public constant ETH = ERC20(0x4200000000000000000000000000000000000006);
  ERC20 public constant USDC = ERC20(0x7F5c764cBc14f9669B88837ca1490cCa17c31607);
  ERC20 public constant USDT = ERC20(0x94b008aA00579c1307B0EF2c499aD98a8ce58e58);

  error SlippageProtection();

  contructor() {}

  // Example swapping between tokens on a constant-product pool
  function swapETHForUSDC(uint256 amount) external returns (uint256 amountOut) {
    // Transfer the specified amount of ETH to BentoBox
    ETH.transferFrom(msg.sender, address(bentobox), amount);

    // Deposit the specified amount of ETH into BentoBox
    bentobox.deposit(address(ETH), address(bentobox), address(constant_product_pair), amount, 0);

    // Encode call data to make the swap
    bytes memory swapData = abi.encode(address(ETH), msg.sender, true);

    uint256 minOut = /* Calculate min output */ 0;

    // Execute the Swap
    amountOut = constant_product_pair.swap(swapData);

    // Check minOut to prevent slippage (example of using 0 for minOut has no slippage protection)
    if (amountOut < minOut) revert SlippageProtection();
  }

  // Example of swapping between tokens on a stable-product pool (same process as constant product)
  function swapUSDCForUSDT(uint256 amount) external returns (uint256 amountOut) {
    // Transfer the specified amount of USDC to BentoBox
    USDC.transferFrom(msg.sender, address(bentobox), amount);

    // Deposit the specified amount of USDC into BentoBox
    bentobox.deposit(address(USDC), address(bentobox), address(stable_product_pair), amount, 0);

    // Encode call data to make the swap
    bytes memory swapData = abi.encode(address(USDC), msg.sender, true);

    uint256 minOut = /* Calculate min output */ 0;

    // Execute the Swap
    amountOut = constant_product_pair.swap(swapData);

    // Check minOut to prevent slippage (example of using 0 for minOut has no slippage protection)
    if (amountOut < minOut) revert SlippageProtection();
  }

  // Example of minting an LP position or adding liquidity to an existing LP position
  function mintConstantProductPool(uint256 ethAmount, uint256 usdcAmount) external returns (uint256 liquidity) {
    // Transfer the specified amount of ETH & USDC to BentoBox
    ETH.transferFrom(msg.sender, address(bentobox), ethAmount);
    USDC.transferFrom(msg.sender, address(bentobox), usdcAmount);

    // Deposit the specified amount of ETH & USDC into BentoBox
    bentobox.deposit(address(ETH), address(bentobox), address(constant_product_pair), ethAmount, 0);
    bentobox.deposit(address(USDC), address(bentobox), address(constant_product_pair), usdcAmount, 0);

    // Encode call data to perform the mint
    bytes memory mintData = abi.encode(msg.sender)

    uint256 minLiquidity = /* Calculate min liquidity */ 0;

    // Execute the mint
    liquidity = constant_product_pair.mint(mintData);

    // Check minLiquidity to prevent slippage, mints will automatically rebalance the mint
    if (liquidity < minLiquidity) revert SlippageProtection();
  }

  // Example of burning ETH-USDC liquidity position into ETH
  function burnSingleConstantProductPool(uint256 liquidity) external returns (uint256 amountOut) {
    // Transfer the specified amount of constant product pool tokens to the pair contract
    constant_product_pair.transferFrom(msg.sender, address(constant_product_pair), liquidity);

    // Encode call data to perform the burnSingle keeping ETH
    bytes memory burnSingleData = abi.encode(address(ETH), msg.sender, true);

    uint256 minETHOut = /* Calculate min ETH to receive */ 0;

    // Execute the burnSingle
    amountOut = constant_product_pair.burnSingle(burnSingleData);

    // Check minETHOut to prevent slippage
    if (amountOut < minETHOut) revert SlippageProtection();
  }

  // Example of burning ETH-USDC liquidity into ETH & USDC
  function burnConstantProductPool(uint256 liquidity) external returns (IPool.TokenAmount[] memory withdrawnAmounts) {
    // Transfer the specified amount of constant product pool tokens to the pair contract
    constant_product_pair.transferFrom(msg.sender, address(constant_product_pair), liquidity);

    // Encode call data to perform the burn keeping ETH & USDC
    bytes memory burnData = abi.encode(msg.sender, true);

    uint256 minOut0 = /* Calculate min token0 out */ 0;
    uint256 minOut1 = /* Calculate min token1 out */ 0;

    // Execute the burn
    withdrawnAmounts = constant_product_pair.burn(burnData);

    // Check minOuts to prevent slippage
    if (withdrawnAmounts[0].amount < minOut0) reverts SlippageProtection();
    if (withdrawnAmounts[1].amount < minOut1) reverts SlippageProtection();
  }
}
```
