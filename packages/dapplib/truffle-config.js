require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture struggle rebel noble minute harvest flower army genius'; 
let testAccounts = [
"0x5bba03ec895fcac5b55da71892e63b629fba15c23116dc67b9a98e6ebb7b926e",
"0x25690593e56b0c74d4ce88a6f5270d153165aa3dd31e0a6ab0075d4967cf57cd",
"0x065ead69907ba48ebd8693fc323e1e0273a6ba32d5ad73359f62704ff6d92fe8",
"0x4a7da26bdbfb093f7254a0131d317ab810f38f403eb64854962092b75564ef0a",
"0x66280729b1f20ad6d1d7406e2c7c5abf6b17a7358b3db543f813070991af4a01",
"0x48767272f1e58e829f992dcb6200c34c5a98afd5cb00fd165a5621bab42dbc74",
"0x2f3cdb0d538dfce98d6caea2c68c75d284d45f41aa18380c369a58db5cbd76d3",
"0x7b66e0c8fbdf0bc47b039858b95b084fb020004959e5c80c7f5449b43e12b8e2",
"0x0993c28a22069b82cc734d3a0b4f72474d1d6d37ca3af63ebb89c8996b642150",
"0xf8e1d9a8be9649513ac7fb2f4e1797222c7cc930705c5c81a45fca93400274f5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

