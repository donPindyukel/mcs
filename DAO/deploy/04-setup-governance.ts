import { CustomGovernor, Timelock } from '../typechain-types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre

  const { deployer } = await getNamedAccounts()

  const governor = await hre.ethers.getContract<CustomGovernor>(
    'CustomGovernor',
    deployer
  )

  const timelock = await hre.ethers.getContract<Timelock>('Timelock', deployer)

  const proposer = await timelock.PROPOSER_ROLE()
  const proposerTx = await timelock.grantRole(proposer, governor.address)
  await proposerTx.wait()

  const executor = await timelock.EXECUTOR_ROLE()
  const executorTx = await timelock.grantRole(
    executor,
    hre.ethers.constants.AddressZero
  )
  await executorTx.wait()

  const admin = await timelock.TIMELOCK_ADMIN_ROLE()
  const adminTx = await timelock.revokeRole(admin, deployer)
  await adminTx.wait()
}

export default func
