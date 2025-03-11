import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Help from "./Help"
import Contect from "./Contect"
import Services from "./Services"

function App() {
  
  return (
    <>
 
    <Navbar/>
      <Routes>

  {/* <Route path="/"element={<Navbar />}> */}
  
  <Route index element= {<Home /> }/>
        <Route path="/About" element={<About />} />
        <Route path="/servises" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contect" element={<Contect />} />
  {/* </Route> */}
      
{/* <Outlet /> */}
      </Routes>

    </>
  )
}

export default App
