// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract BatchRegistration {
    // Define a structure to hold details about a medicine batch.
    struct Batch {
        string drugName;      // Name of the drug.
        string expiryDate;    // Expiry date of the drug.
        string mfdDate;       // Manufacturing date of the drug.
        string batchNumber;   // Unique batch number.
        string uniqueID;      // A unique identifier for the batch.
        bool isRegistered;    // Flag to check if the batch is registered.
    }

    // A mapping to store batches with their batch number as the key.
    mapping(string => Batch) private batches;

    // An event that is emitted when a new batch is registered.
    event BatchRegistered(string batchNumber, string uniqueID);

    // Function to register a new batch. It's callable externally.
    function registerBatch(string calldata _drugName, string calldata _expiryDate, string calldata _mfdDate, string calldata _batchNumber, string calldata _uniqueID) external {
        // Ensure the batch is not already registered.
        require(!batches[_batchNumber].isRegistered, "Batch already registered.");

        // Create a new batch and store it in the mapping.
        Batch storage newBatch = batches[_batchNumber];
        newBatch.drugName = _drugName;
        newBatch.expiryDate = _expiryDate;
        newBatch.mfdDate = _mfdDate;
        newBatch.batchNumber = _batchNumber;
        newBatch.uniqueID = _uniqueID;
        newBatch.isRegistered = true;

        // Emit the event to signal that a new batch has been registered.
        emit BatchRegistered(_batchNumber, _uniqueID);
    }

    // Function to retrieve details of a batch. It's a view function and callable externally.
    function getBatchDetails(string calldata _batchNumber) external view returns (string memory DrugName, string memory ExpiryDate, string memory MfdDate, string memory BatchNumber, string memory UniqueID) {
        // Ensure the batch is registered before providing its details.
        require(batches[_batchNumber].isRegistered, "Batch not registered.");

        // Retrieve the batch details and return them.
        Batch storage batch = batches[_batchNumber];
        return (batch.drugName, batch.expiryDate, batch.mfdDate, batch.batchNumber, batch.uniqueID);
    }
}