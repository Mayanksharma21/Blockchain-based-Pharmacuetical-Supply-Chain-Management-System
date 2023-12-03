import PropTypes from "prop-types";
import Web3 from "web3";
import React from "react";
import ABI from "./ABI.json";
import { useNavigate } from "react-router-dom";

const Wallet = ({ saveState }) => {
  const navigateTo = useNavigate();
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const contractAddress = "0x565d638Ab077ce09aB825f43512b8EcC9abEDB97"; // Deployed Address
        const contract = new web3.eth.Contract(ABI, contractAddress); //instance of Smart Contract
        saveState({ web3: web3, contract: contract, account: accounts[0] });
        navigateTo("/get-batch-details");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header className="bg-purple-500 font-bold text-2xl text-white text-center p-5">
        <span>Welcome to Web 3.0 PharmaCure</span>
      </header>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="mb-20 font-extrabold text-gray-700 text-2xl">Please Connect your Metamask Wallet to access PharmaCure</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

Wallet.propTypes = {
  saveState: PropTypes.func.isRequired,
};

export default Wallet;

// <button onClick={connectWallet}>Connect Wallet</button>
