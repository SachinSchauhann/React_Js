import React, { useEffect, useState } from 'react'
import Signup from './Signup'
import AuthForm from './AuthForm'

function App() {
  let [frmdata, setFrmdata] =useState({
    username:"",age:"",contect:"" 
  })

  let [userdata1,setUserdata] = useState({})

  function Inputvalue(e){
    const {name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
    
  }
  function finalsubmit(e){
    e.preventDefault()
    // console.log(frmdata)

    localStorage.setItem("userdata1",JSON.stringify(frmdata))
  }

  useEffect(()=>{
    let localdata =JSON.parse(localStorage.getItem('userdata1'))
    setUserdata(localdata)
  },[finalsubmit])
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
      

<h1>Preview</h1>
<h2>
Name: {userdata1.username}
<br />
Age: {userdata1.age}
<br />
Contect: {userdata1.contect}
</h2>
    {/* <h1>username: {frmdata.username}</h1>
    <h1>Your Age : {frmdata.age} </h1>
    <h1>Your Contect : {frmdata.contect}</h1> */}
   <br /><br /><br />
{/* <Signup/> */}
<AuthForm/>

    </>
  )
}

export default App
