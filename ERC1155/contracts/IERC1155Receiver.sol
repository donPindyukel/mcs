// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./IERC165.sol";

interface IERC1155Receiver is IERC165 {
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external view returns (bytes4);

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata id,
        uint256[] calldata value,
        bytes calldata data
    ) external view returns (bytes4);
}
