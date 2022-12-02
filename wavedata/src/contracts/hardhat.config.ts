import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

module.exports = {
	//Specifing Evmos Testnet network for smart contract deploying
	networks: {
		evmos: {
			url: "https://eth.bd.evmos.dev:8545",
			accounts: [`fb57cdb52c16a26a9f54d37ce8f106bc4a334772d5c376c08f009e042cb0a7fe`],
			chainId: 9000,
			gasPrice: 500000000
		},
	},
	//Specifing Solidity compiler version
	solidity: {
		compilers: [
			{
				version: '0.7.6',
			},
			{
				version: '0.8.6',
			},
		],
	},
	//Specifing Account to choose for deploying
	namedAccounts: {
		deployer: 0,
	}
};