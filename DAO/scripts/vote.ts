import { ethers, getChainId } from 'hardhat'
import path from 'path'
import fs from 'fs'
import { CustomGovernor } from './../typechain-types'
import { mineBlocks } from './utils/utils'

async function vote(proposalIndex: number) {
  const governor = await ethers.getContract<CustomGovernor>('CustomGovernor')

  const root = path.resolve(__dirname, '..')
  const json = path.join(root, '/', 'proposals.json')

  const proposals = JSON.parse(fs.readFileSync(json, 'utf8'))

  const proposalId = proposals[(await getChainId()).toString()][proposalIndex]

  const tx = await governor.castVoteWithReason(
    proposalId,
    1,
    'I like this proposal!'
  )
  await tx.wait()

  console.log(await governor.state(proposalId))

  await mineBlocks(7)
  console.log(await governor.state(proposalId))
}

vote(0)
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
