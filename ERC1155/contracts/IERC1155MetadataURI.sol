// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./IERC1155.sol";

interface IERC1155MetadataURI is IERC1155 {
    function uri(uint id) external view returns (string memory);
}
