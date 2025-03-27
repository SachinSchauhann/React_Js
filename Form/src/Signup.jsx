import React, { useState } from 'react'

function Signup() {
let [frmdata, setFrmdata] =useState({
    name:"",age:"",pan:"" ,mobile:"", email:""
  })
  function Inputvalue(e){
    const {name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
    
  }
  function finalsubmit(e){
    e.preventDefault()
    console.log(frmdata)
    localStorage.setItem("userdata2",JSON.stringify(frmdata))
  }

  return (
    <>
      
    <form onSubmit={finalsubmit}>
      <label htmlFor="">Name :</label>
      <input type="text" name='username' onChange={Inputvalue}/> <br /><br />
      <label htmlFor="">Age :</label>
      <input type="text" name='age' onChange={Inputvalue}/><br /><br />
      <label htmlFor="">Contect :</label>
      <input type="text" name='mobile' onChange={Inputvalue}/><br /><br />
      <label htmlFor="">Email :</label>
      <input type="text" name='email' onChange={Inputvalue}/><br /><br />
      <label htmlFor="">Pan No :</label>
      <input type="text" name='pan' onChange={Inputvalue}/><br /><br />
      <input type="submit" />
     </form>
      
{/* 
    <h1>Name: {frmdata.username}</h1>
    <h1>Your Age : {frmdata.age} </h1>
    <h1>Your Contect : {frmdata.mobile}</h1>
    <h1>Your Email : {frmdata.email}</h1>
    <h1>Your  Pan No: {frmdata.pan}</h1>
     */}
   
    </>
  )
}

export default Signup
