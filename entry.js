const bcrypt = require('bcrypt')

class Block {

    constructor(blockid, previousHash, data) {
        this.blockid = blockid
        this.timestamp = Date.now()
        this.blockhash = this.getHash()
        this.prevHash = previousHash
        this.data = data
    }

    getHash() {
        return bcrypt.hashSync(String(this.blockid + this.timestamp + this.previousHash + JSON.stringify(this.data)), 10)
    }
}

class BlockChain {
    constructor() {
        this.chain = []
    }

    addBlock(data) {
        let blockid = this.chain.length
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockhash : ''
        let block = new Block(blockid, previousHash, data)

        this.chain.push(block)
    }
}

const Ledger = new BlockChain()

Ledger.addBlock({sender: "Thomas", receiver: "Eric", amount: 2403})
Ledger.addBlock({sender: "Wes", receiver: "Tim", amount: 203})
Ledger.addBlock({sender: "Tom", receiver: "Jim", amount: 2099403})

console.log(JSON.stringify(Ledger, null, 6))
