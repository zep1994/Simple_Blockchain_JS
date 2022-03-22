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

module.exports = Block