import PropTypes from 'prop-types';
import Web3 from 'web3';
import React from "react";
import ABI from './ABI.json';
import { useNavigate } from 'react-router-dom';

const Wallet = ({saveState}) => {
    const navigateTo = useNavigate();
    const connectWallet = async()=>{
        try{
            if(window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                })
                const contractAddress = "0x565d638Ab077ce09aB825f43512b8EcC9abEDB97"; // Deployed Address
                const contract = new web3.eth.Contract(ABI, contractAddress); //instance of Smart Contract
                saveState({web3: web3, contract: contract, account: accounts[0]})
                navigateTo("/get-batch-details")
            }else {
                throw new Error
            }
        }catch (error) {
            console.error(error)
        }
    }

    return <><button onClick={connectWallet}>Connect Wallet</button></>;
};

Wallet.propTypes = {
    saveState: PropTypes.func.isRequired,
}

export default Wallet;
