import React, { useState } from 'react'

function Login() {

    
let [frmdata , setFrmdata]=useState({
    email:"",password:""
})


function handleinput(e){
    const {name, value} =e.target
    setFrmdata ({...frmdata,[name]:value})
}
let localdata =JSON.parse(localStorage.getItem('signdata'))

function loginsubmit (e){
    e.preventDefault()
    if(frmdata.email != localdata.email || frmdata.password != localdata.password){
        alert("user not found")
    }
    else{
        alert("login Success")
    }
}
  return (
    <>

      <form action="" onSubmit={loginsubmit}>
    
        <label> Email</label>
        <input type="text" name= "email" onChange={handleinput}/><br/>
        <label> Password</label>
        <input type="text" name= "password" onChange={handleinput}/><br/><br/>

        <input type="submit" />
        



      </form>
    </>
  )
}

export default Login
