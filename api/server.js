const express = require("express");
const ABI = require("./ABI.json");
const cors = require("cors");
const { Web3 } = require("web3");

const app = express();
app.use(cors())
app.use(express.json())


const web3 = new Web3("https://polygon-mumbai.g.alchemy.com/v2/-Kc0_fxn_1hz559HozdsQKnTNT2aJuUc"); // HTTP API Key for endpoint of Polygon Mumbai TestNet
const contractAddress = "0x565d638Ab077ce09aB825f43512b8EcC9abEDB97"; // Deployed Address
const contract = new web3.eth.Contract(ABI, contractAddress); //instance of Smart Contract


app.get("/api/polygon/get-batch-details/:batchNum", async (req, res) => {
  try {
    const { batchNum } = req.params;
    const batchDetail = await contract.methods.getBatchDetails(batchNum).call();
    const {DrugName, ExpiryDate, MfdDate, BatchNumber, UniqueID} = batchDetail;
    const batchObj = {
        DrugName, ExpiryDate, MfdDate, BatchNumber, UniqueID
    };
    res.status(200).json({ status: 200, batchObj });
  } catch (error) {
    res.status(500).json({ status: 500, message: "Error Occured" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});