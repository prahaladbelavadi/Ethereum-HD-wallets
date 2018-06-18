const bip39 = require('./node_modules/bip39/index.js')
const HDkey = require('hdkey')
const mnemonic = bip39.generateMnemonic(); //generates string
console.log(mnemonic);
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
console.log(seed);
const root = hdkey.fromMasterSeed(seed)
console.log(root);
const masterPrivateKey = root.privateKey.toString('hex');
console.log(masterPrivateKey);
