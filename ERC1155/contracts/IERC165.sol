// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

interface IERC165 {
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
