import React from 'react'
import Zone1 from './components/Zone1'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Zone1 />
    </div>
  )
}

export default App

