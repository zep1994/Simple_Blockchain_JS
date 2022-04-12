const Block = require('./block')

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

//const Ledger = new BlockChain()

//Ledger.addBlock({FirstName: "Thomas", LasttName: "Eric", Amount: 2403})
//Ledger.addBlock({FirstName: "Wes", LasttName: "Tim", Amount: 203})
//Ledger.addBlock({FirstName: "Tom", LasttName: "Jim", Amount: 2099403})

//console.log(JSON.stringify(Ledger, null, 6))

module.exports = {BlockChain}