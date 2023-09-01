// require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true, // Enable the Solidity optimizer (default: false)
        runs: 200, // Optimize for 200 runs (default: 200)
      },
    },
  },

  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },

    sepolia: {
      url: "https://mainnet.infura.io/v3/d6179b3ed6f64fc8826e8f346bccc1cb",
      accounts: ["7307637696a29243994bb381f27eae8cac9047cadf76a5084dc3ad41e9285d22"],
      chainId: 11155111,
    },

    // mumbai: {
    //   url: process.env.INFURA_MUMBAI_API_URL,
    //   accounts: [process.env.MAIN_ACCOUNT],
    //   chainIds: 80001, // mumbai testnet
    // },
  },

  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP,
    token: "eth",
    outputFile: "gasReports.txt",
    noColors: true,
  },
};
