// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernToken is ERC20Votes {
    constructor() ERC20("GovernToken", "GTK") ERC20Permit("GovernToken") {
        _mint(msg.sender, _maxSupply());
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint amount
    ) internal override(ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint amount) internal override(ERC20Votes) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        virtual
        override(ERC20Votes)
    {
        super._burn(account, amount);
    }
}
