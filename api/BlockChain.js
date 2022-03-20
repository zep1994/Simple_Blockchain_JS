const Block = require('./block')

const chain = []

function BlockChain (data) {

    let blockid = chain.length
    let previousHash = chain.length !== 0 ? chain[chain.length - 1].blockhash : ''
    let block = new Block(blockid, previousHash, data)

    chain.push(block)
    console.log(JSON.stringify(block, null, 6))
}

module.exports = { BlockChain}