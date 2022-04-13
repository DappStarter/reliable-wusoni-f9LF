require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind upgrade inflict kiwi olympic gift'; 
let testAccounts = [
"0xf020741155b14047aa7ebcf3bfcb9342e4b75595a3145799658f79b066dc186f",
"0xd85b79f69af2caa49c6bb8219e7e7310aa49fe8e9841f0e07715c6afdef6979f",
"0xeabbc03b17bec6696186841d3479c5808b5bd7593871f9b4e10d3bf02e67e499",
"0x3b027da84385f4c0f93ae9301724530aafcc7b28dbb0b4241c9fbe1a19c98c45",
"0xac1f845469e6eace078c8bf8d6a8634df84c06bc5f4d2614c6572469e0dbc963",
"0xd979e2fd88e82f1ca2d5181de0b1a8c617e7c4b4acc9a8dff8afa0d6cce29aa5",
"0xfe28d0e9c09d89cdcfb6335c5cfd5c6f9ec4f6b5bb1631ed21ce1ebda14d0b4e",
"0x65f99fc7055b4458f338fa76c164b7007443fb8ea2ff1b64fae0a4a8e88ba9ea",
"0xcc42e9c5134e1f58e8190648b86b3f16fffbc04c7a4a0122d493e3e01a74100b",
"0xbbe1e40077e5b19a6c9197f02444680fc03c73d042d22f8b92c1011dade6f72a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


