import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/dist/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre

  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy('Timelock', {
    from: deployer,
    log: true,
    args: [60 * 60, [], []],
  })
}

export default func
