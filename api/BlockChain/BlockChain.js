const bcrypt = require('bcrypt')

const Block = require('./block')
const Chain = require('../chain')

function BlockChain (data) {
    console.log(Chain)
    let blockid = Chain.length
    let blockhash = getHash()
    let previousHash = Chain.length !== 0 ? Chain[Chain.length - 1].blockhash : ''
    let block = new Block(blockid, previousHash, data)

    Chain.push(block)    
    //console.log(JSON.stringify(Chain, null, 6))
}

function getHash() {
    return bcrypt.hashSync(String(this.blockid + this.timestamp + this.previousHash + JSON.stringify(this.data)), 10)
}

module.exports = { BlockChain, Chain}