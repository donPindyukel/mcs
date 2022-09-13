// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./IERC165.sol";

interface IERC1155 is IERC165 {
    event TransferSingle(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint id,
        uint value
    );

    event TransferBatch(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint[] id,
        uint[] value
    );

    event ApprovalForAll(
        address indexed account,
        address indexed operator,
        bool approved
    );

    event URI(string value, uint256 indexed id);

    function balanceOf(address account, uint id) external view returns (uint);

    function balanceOfBatch(address[] calldata accounts, uint[] calldata ids)
        external
        view
        returns (uint[] memory);

    function setApprovalForAll(address operator, bool approved) external;

    function isApprovedForAll(address account, address opeator)
        external
        returns (bool);

    function safeTranserFrom(
        address from,
        address to,
        uint id,
        uint amount,
        bytes calldata data
    ) external;

    function safeBatchTranserFrom(
        address from,
        address to,
        uint[] calldata id,
        uint[] calldata amount,
        bytes calldata data
    ) external;
}
