const bip39 = require('bip39')
const hdkey = require('./node_modules/hdkey/lib/hdkey.js')
const mnemonic = bip39.generateMnemonic(); //generates string
console.log("Mnemonic:",mnemonic);
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
// console.log(seed);
const root = hdkey.fromMasterSeed(seed)
// console.log(root);
const masterPrivateKey = root.privateKey.toString('hex');
console.log("Master private Key:",masterPrivateKey);

const addrNode = root.derive("m/44'/60'/0'/0/0")
const pubKey
