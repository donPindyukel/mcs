import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/dist/types'
import { Timelock, Storage } from '../typechain-types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre

  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy('Storage', {
    from: deployer,
    log: true,
  })

  const timelock = await hre.ethers.getContract<Timelock>('Timelock', deployer)

  const storage = await hre.ethers.getContract<Storage>('Storage', deployer)

  const tx = await storage.transferOwnership(timelock.address)
  await tx.wait()
}

export default func
