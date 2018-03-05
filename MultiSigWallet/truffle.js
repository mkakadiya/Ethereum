module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  
  networks: {
    development: {
    host: "localhost",
    port: 8545,
    network_id: "*", // Match any network id
    gas: 9000000 // Gas limit used for deploys
   }
  }
  ,
  rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x00", // default address to use for any transaction Truffle makes during migrations
      network_id: 4, // Rinkeby ID 4
      gas: 6712390 // Gas limit used for deploys
    }
	
};
