import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/dist/types'
import { GovernToken, GovernToken__factory } from '../typechain-types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre

  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const governToken = await deploy('GovernToken', { from: deployer, log: true })

  await delegate(hre, governToken.address, deployer)
}

const delegate = async (
  hre: HardhatRuntimeEnvironment,
  governTokenAddr: string,
  delegatedAccount: string
) => {
  // const governToken = GovernToken__factory.connect(
  //   governTokenAddr,
  //   hre.ethers.provider.getSigner(0)
  // )
  const { deployments, getNamedAccounts } = hre

  const { deployer } = await getNamedAccounts()

  const governToken = await hre.ethers.getContract<GovernToken>(
    'GovernToken',
    deployer
  )

  const tx = await governToken.delegate(delegatedAccount)
  await tx.wait()
  console.log(
    `Checkpoints ${await governToken.numCheckpoints(delegatedAccount)}`
  )
}

export default func
