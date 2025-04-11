import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sign() {
    let[frmdata, setFrmdata]=useState({
        name:"",email:"",password:""
    })
    let navigator=useNavigate()
    function Inputhandle (e){
        const {name,value}=e.target 
        setFrmdata({...frmdata,[name]:value})
    }
    function finalSubmit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('signdata',JSON.stringify(frmdata))
        navigator('/login')
    }
  return (
    <>
      <form action="" onSubmit={finalSubmit}>
        <label> Name</label>
        <input type="text" name= "name" onChange={Inputhandle}/>   <br/>
        <label> Email</label>
        <input type="text" name= "email" onChange={Inputhandle}/><br/>
        <label> Password</label>
        <input type="text" name= "password" onChange={Inputhandle}/><br/><br/>

        <input type="submit" />
        



      </form>
    </>
  )
}

export default Sign
