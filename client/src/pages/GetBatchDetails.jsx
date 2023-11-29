import { useState } from 'react';
import React from 'react';
import Navigation from './Navigation';

const GetBatchDetails = () => {
  const [batchDetails, setBatchDetails] = useState([]);

  const getBatch = async(event)=>{
    try{
      event.preventDefault();
      const batchNumber = document.querySelector("#batchNumber").value;
      const res = await fetch(`http://localhost:3000/api/polygon/get-batch-details/${batchNumber}`, {
        method: "GET", 
        headers: {
          "content-type": "application/json",
        }
      });
      const data = await res.json();
      if(data.status == 200) {
        setBatchDetails(data.batchObj);
        console.log(data.batchObj);
      }else {
        throw new Error;
      }
    }catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <Navigation/>
      <form onSubmit={getBatch}>
        <label>
          Batch Number:
          <input id='batchNumber'/>
        </label>
        <button type='submit'>View Batch Details</button>
      </form>
    </>
  )
}

export default GetBatchDetails