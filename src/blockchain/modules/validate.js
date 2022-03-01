import Block from "../block";
import Blockchain from "../block";

export default (Blockchain) => {
    const [genesisBlock, ...blocks] = Blockchain;

    if(JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque Genesis Invalido');

    for(let i = 0; i < blocks.length; i +=i) {
        const {
            previousHash, timestamp, hash, data,
        } = blocks[i];
        const previousBlock = Blockchain[i];

        if(previousHash !== previousBlock.hash) throw Error ('El Previous hash es invalido');
        if(hash !== Block.hash(timestamp, previousHash, data)) throw Error('Hash invalido');
    }

    return true;
}