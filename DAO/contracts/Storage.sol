// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract Storage is Ownable {
    uint myVal;

    event Stored(uint newVal);

    function store(uint _newVal) external onlyOwner {
        myVal = _newVal;
        emit Stored(myVal);
    }

    function read() external view returns (uint) {
        return myVal;
    }
}
