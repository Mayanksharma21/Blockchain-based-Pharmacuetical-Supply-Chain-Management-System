import { useState } from "react";
import React from "react";
import Navigation from "./Navigation";

const GetBatchDetails = () => {
  const [batchDetails, setBatchDetails] = useState({
    BatchNumber: null,
    DrugName: null,
    ExpiryDate: null,
    MfdDate: null,
    UniqueID: null,
  });
  const [errorMessage, setErrorMessage] = useState(""); 

  const getBatch = async (event) => {
    try {
      event.preventDefault();
      setErrorMessage("");
      const batchNumber = document.querySelector("#batchNumber").value;
      const res = await fetch(
        `http://localhost:3000/api/polygon/get-batch-details/${batchNumber}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.status === 200) {
        setBatchDetails(data.batchObj);
      } else {
        throw new Error(data.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message); // Set error message
    }
  };

  const hasDetails = Object.values(batchDetails).some(detail => detail != null);

  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div>
          <form
            onSubmit={getBatch}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="batchNumber"
              >
                Batch Number:
              </label>
              <input
                id="batchNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                View Batch Details
              </button>
            </div>
          </form>
          {errorMessage && (
            <div className="text-red-500 text-center">
              {errorMessage}
            </div>
          )}
          {hasDetails && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h3 className="text-xl mb-4 font-bold text-gray-700">Batch Details</h3>
              <p>Batch Number: {batchDetails.BatchNumber}</p>
              <p>Drug Name: {batchDetails.DrugName}</p>
              <p>Expiry Date: {batchDetails.ExpiryDate}</p>
              <p>Manufacturing Date: {batchDetails.MfdDate}</p>
              <p>Unique ID: {batchDetails.UniqueID}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetBatchDetails;