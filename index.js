import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, description, author } = PKG;

console.log(`${name} v${version} ${description} ${author}`);

const block = new Block(Date.now(), 'pr3v10-h4sh', 'h4sh', 'd4t4');
console.log(block.toString());