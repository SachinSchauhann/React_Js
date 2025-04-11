

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sign from './Sign'
import Login from './Login'

function App() {
  
  return (
    <>
    <Routes>
      <Route index element= {<Sign/>}  />
      <Route path='/Login' element= {<Login/>}  />
      
    </Routes>
    </>
  )
}

export default App
