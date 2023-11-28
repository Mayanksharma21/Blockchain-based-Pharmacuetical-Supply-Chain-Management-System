const express = require('express');
const ABI  = require('./ABI.json');
const {Web3} = require('web3');

const app = express();

const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/-Kc0_fxn_1hz559HozdsQKnTNT2aJuUc'); // HTTP API Key for endpoint of Polygon Mumbai TestNet
const contractAddress = "0xc6e47b387bA6d4e3d421b085ed239Eb8328E0872"; // Deployed Address
const contract = new web3.eth.Contract(ABI, contractAddress); //instance of Smart Contract


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
})