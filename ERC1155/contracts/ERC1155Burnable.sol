// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./ERC1155.sol";

abstract contract ERC1155Burnable is ERC1155 {
    function burn(
        address account,
        uint256 id,
        uint256 value
    ) public virtual {
        require(account == msg.sender || isApprovedForAll(account, msg.sender));

        _burn(account, id, value);
    }

    function burnBatch(
        address account,
        uint256[] memory ids,
        uint256[] memory values
    ) public virtual {
        require(account == msg.sender || isApprovedForAll(account, msg.sender));

        _burnBatch(account, ids, values);
    }
}
