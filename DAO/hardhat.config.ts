import { HardhatUserConfig } from 'hardhat/types'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.13',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKET_CAP_KEY,
    currency: 'USD',
  },
  namedAccounts: {
    deployer: 0,
  },
}

export default config
