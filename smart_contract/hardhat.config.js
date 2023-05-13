/*require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.18",
};
*/

//https://eth-sepolia.g.alchemy.com/v2/ELhGiNnD3Dr7dGus_wRX0ZrVqtmi-tTd
//https://eth-sepolia.g.alchemy.com/v2/ELhGiNnD3Dr7dGus_wRX0ZrVqtmi-tTd

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ELhGiNnD3Dr7dGus_wRX0ZrVqtmi-tTd",
      accounts: [
        "0d1af844a85e06df9f7e0b5e654e99d9890600b2220c80af5dd0848efdf4d3aa",
      ],
    },
  },
};
