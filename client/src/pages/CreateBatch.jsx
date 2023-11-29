import React from 'react';
import Navigation from './Navigation';
// function generateUniqueId() {
//   // Generates a random UUID (Universally Unique Identifier)
//   const uniqueId = randomUUID();
//   return uniqueId;
// }

const CreateBatch = ({state}) => {

  const creatBatch = async(event)=>{
    event.preventDefault();
    const {contract, account} = state;

    const drugName = document.querySelector("#drugName").value;
    const expiryDate = document.querySelector("#expDate").value;
    const mfdDate = document.querySelector("#mfdDate").value;
    const batchNumber = document.querySelector("#batchNum").value;
    const uniqueID = "eKYH#$WDrb8^%mNH";
    try {
      console.log(account);
      if(contract && contract.methods) {
        await contract.methods.registerBatch(drugName, expiryDate, mfdDate, batchNumber, uniqueID).send({from: account})
        alert("Batch Is created");
      }
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <>
      <Navigation/>
      <form onSubmit={creatBatch}>
        <label>Drug Name: <input id='drugName'/></label> <br />
        <label>Manufactured Date: <input id='mfdDate'/></label> <br />
        <label>Expiry Date: <input id='expDate'/></label> <br />
        <label>Batch Number: <input id='batchNum'/></label> <br />
        <button type='submit'>Create Batch</button>
      </form>
    </>
  )
}

export default CreateBatch