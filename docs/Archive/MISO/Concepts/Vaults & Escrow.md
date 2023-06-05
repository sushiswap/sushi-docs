# Vaults & Escrow

There are many reasons a project may wish to store a supply of tokens in a vault, in addition to choosing the how, why and when of their eventual release. Our Fermentation selections make the locking away of tokens before and during a launch simple and manageable, working seamlessly with our Markets, Farms and Liquidity Migration contracts to ensure funds get to where they need to be - and stay there. On the other end, the management of token release from vaults can be set up, with timelock & multi signatory release options at launch.

At its simplest, MISO Fermentation options allow "Set and Forget" token unlocks - just send the amount to lock and set the duration. However, the _Vault_ and _Escrow_ options can be combined in many ways to create the exact flavor of trustless fund transfer and storage your project and community requires. Using open-source Vault contracts, as with all Ingredients in MISO, assures all participants in a token launch that they're getting what they were promised - and funds are safu.

## Vault & Escrow Options

All Vaults will be able to receive a batch of tokens - this can be from a batch of tokens minted in the MISO factory, sent from an outside address or set to receive a portion of funds collected during a project's market sale. Owners will set any additional addresses, such as admins and release wallet addresses, according to their needs.

### Timelock release

Timelock Vaults are set to release after a given amount of time. In addition to setting the time frame of the vault, an address must be assigned to receive released funds.

### Multi-Sig

A Vault with various controls and parameters governing the release and management of the funds inside. Namely, Multi-Sig vaults require the assigning of multiple administrator addresses and a quorum between them to be defined to allow interaction with the vault contract.
