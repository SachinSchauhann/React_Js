import React, { useState } from 'react'
import Signup from './Signup'

function App() {
  let [frmdata, setFrmdata] =useState({
    username:"",age:"",contect:"" 
  })
  function Inputvalue(e){
    const {name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
    
  }
  function finalsubmit(e){
    e.preventDefault()
    console.log(frmdata)
    localStorage.setItem("userdata1",JSON.stringify(frmdata))
  }
  return (
    <>
    

    <form onSubmit={finalsubmit}>
      <label htmlFor="">Name :</label>
      <input type="text" name='username' onChange={Inputvalue}/> <br /><br />
      <label htmlFor="">Age :</label>
      <input type="text" name='age' onChange={Inputvalue}/><br /><br />
      <label htmlFor="">Contect :</label>
      <input type="text" name='contect' onChange={Inputvalue}/><br /><br />
      <input type="submit" />
     </form>
      

    {/* <h1>username: {frmdata.username}</h1>
    <h1>Your Age : {frmdata.age} </h1>
    <h1>Your Contect : {frmdata.contect}</h1> */}
   <br /><br /><br />
<Signup/>
    </>
  )
}

export default App
