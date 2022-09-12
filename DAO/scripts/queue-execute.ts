import { ethers } from 'hardhat'
import { CustomGovernor, Storage } from './../typechain-types'
import { mineBlocks, timeTravel } from './utils/utils'

async function queueExecute(args: number[], func: string, description: string) {
  const governor = await ethers.getContract<CustomGovernor>('CustomGovernor')
  const storage = await ethers.getContract<Storage>('Storage')

  const encFuncCall = (storage.interface as any).encodeFunctionData(func, args)

  const descHash = ethers.utils.solidityKeccak256(['string'], [description])

  const queueTx = await governor.queue(
    [storage.address],
    [0],
    [encFuncCall],
    descHash
  )

  await queueTx.wait()

  await timeTravel(3601)
  await mineBlocks(1)

  const executeTx = await governor.execute(
    [storage.address],
    [0],
    [encFuncCall],
    descHash
  )
  await executeTx.wait()

  console.log(await (await storage.read()).toString())
}

queueExecute([42], 'store', "Let's store 42!")
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
