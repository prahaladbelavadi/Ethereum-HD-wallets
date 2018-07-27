/* global describe, it */

const assert =  require('assert')
const bip39 = require('bip39')
const hdkey = require('./node_modules/hdkey/lib/hdkey.js')
const ethUtil = require('ethereumjs-util')
const ethTx = require('ethereumjs-tx')
var Web3 = require('web3');

// deterministic rng for testing only
function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')}

describe('Ethereum HD wallet', function(){
    it('can generate a mnemonic', function(){
        mnemonic = "torch accuse ring float position patch endless wire water primary yard desk"
        const genMnemonic = bip39.generateMnemonic({rng:rng})
        assert.strictEqual(mnemonic, genMnemonic);
    })

    it('should generate seed from mnemonic', function(){

        assert.strictEqual(seed,bip39.mnemonicToSeed(mnemonic))
    )}

    it('should generate master public key',function(){

        assert.strictEqual(MpubKey,root.root.publicKey)
    })

    it('should generate master private key', function(){

        assert.strictEqual(MprivKey,privateKey)
    })

    it('should generate pubkey for a specified path',function(){

        assert.strictEqual(pathPubKey)
    })

    it('should generate privatekey for a specified path',function(){

        assert.strictEqual(pathPrivKey)
    })

    it('should sign transaction with private key; validate signature',function(){

        assert.strictEqual(signTransaction)
    })

    it('must validate signature',function(){

        assert.strictEqual(signature)
    })

    it('must be able to split secrets',function(){

        assert.strictEqual(secretarr.length, x)
    })

    it('must be able to recreate secrets',function(){

        assert.strictEqual(secret, resecret)
    })

    it('must be able to verify secrets',function(){

        assert.strictEqual(secretHash,reSecretHash)
    })

    it('must be able to broadcast transaction to remote ethereum node',function(){

        assert.strictEqual()
    })

})

// const mnemonic = bip39.generateMnemonic(); //generates string
const mnemonic = "torch accuse ring float position patch endless wire water primary yard desk";
console.log("Mnemonic:",mnemonic);

const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer

const root = hdkey.fromMasterSeed(seed)

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

console.log('\n');
