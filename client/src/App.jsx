import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateBatch from './pages/CreateBatch';
import Wallet from './pages/Wallet';
import GetBatchDetails from './pages/GetBatchDetails';
import './App.css';

function App() {
  const [state, setState] = useState({web3: null, contract: null, account: null})

  const saveState = ({web3, contract, account})=> {
    setState({web3: web3, contract: contract, account: account})    
  }

  const router = createBrowserRouter([
    {path: '/', element:<Wallet saveState={saveState}/>},
    {path: '/create-batch', element:<CreateBatch state={state}/>},
    {path: '/get-batch-details', element:<GetBatchDetails state={state}/>},
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
