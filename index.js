const bip39 = require('bip39')
const hdkey = require('./node_modules/hdkey/lib/hdkey.js')
const ethUtil = require('ethereumjs-util')
const mnemonic = bip39.generateMnemonic(); //generates string
console.log("Mnemonic:",mnemonic);
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
// console.log(seed);
const root = hdkey.fromMasterSeed(seed)
// console.log(root);
const masterPrivateKey = root.privateKey.toString('hex');
console.log("Master private Key:",masterPrivateKey);
var path = "m/44'/60'/0'/0/0";
const addrNode = root.derive(path)
console.log("path: ", path);
const pubKey = ethUtil.privateToPublic(addrNode._privateKey)
console.log("Pubkey as hex:",pubKey.toString('hex'));
const addr = ethUtil.publicToAddress(pubKey).toString('hex');
console.log("pubkey to Addr:",addr);
const address = ethUtil.toChecksumAddress(addr)
console.log("Address with Check sum:",address);
