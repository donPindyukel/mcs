// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract Timelock is TimelockController {
    constructor(
        uint _minDelay,
        address[] memory _proposers,
        address[] memory _executors
    ) TimelockController(_minDelay, _proposers, _executors) {}
}
