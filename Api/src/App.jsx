import React from "react"
import Fetchapi from "./Fetchapi"
import Insert from "./Insert"
import{Route, Routes} from 'react-router-dom'



function App() {
  

  return (
    <>
     <Routes>
      <Route index element={<Insert/>}/>
      <Route path='/fetchapi' element={<Fetchapi/>}/>
     </Routes>



      
    </>
  )
}

export default App
