module.exports = {
  NETWORKS: {
    mainnet: {
      messagePrefix: '\x19Dash Signed Message:\n',
      bech32: 'ds',
      bip44: 5,
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc
    },
    testnet: {
      messagePrefix: '\x19Dash Signed Message:\n',
      bech32: 'tds',
      bip44: 5,
      bip32: {
        public: 0x043587cf,
        private: 0x04358394
      },
      pubKeyHash: 0x8c,
      scriptHash: 0x13,
      wif: 0xef
    }
  }
}
