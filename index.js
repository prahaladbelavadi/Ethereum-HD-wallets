const bip39 = require('bip39')
const hdkey = require('./node_modules/hdkey/lib/hdkey.js')
const mnemonic = bip39.generateMnemonic(); //generates string
console.log(mnemonic);
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
console.log(seed);
const root = hdkey.fromMasterSeed(seed)
console.log(root);
const masterPrivateKey = root.privateKey.toString('hex');
console.log("Master private Key:",masterPrivateKey);
