# `near-hello-world` 

This repo is a simple example for a smart contract built for [NEAR Protocol](https://near.org). It uses AssemblyScript programming language. 

The contract contains only one function `sayHello` that returns the string "hello from blockchain world!"


## Usage

### Getting started
1. clone this repo to a local folder and navigate to it
2. run `yarn`  //this should install the dependencies required
3. run `yarn build:release` to build a release version from the code. 
You should see the `helloworld.wasm` created in your `build\release` directory 

5. run `near dev-deploy .\build\release\helloworld.wasm`  to deploy the contract on the test net with a dev url (you must be logged in with your near test account)

You should see the dev-XXXXXX-XXXXXXX url that the contracg has been deployed to. 

This is a sample output
`Transaction Id EtdLuXkhT5eex1ubT1pRKhETZNv8AoAMzadHiJMdGH9z
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/EtdLuXkhT5eex1ubT1pRKhETZNv8AoAMzadHiJMdGH9z
Done deploying to dev-1643380555927-18139425398700
`
4. run `near call dev-1643380555927-18139425398700 sayHello '{}' --accountId=EXAMPLE.testnet`  to call the method `sayHello` 

You should see the output message `hello from blockchain world!` printed on your console.
