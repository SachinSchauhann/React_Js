import axios from 'axios';
import React, { useState } from 'react'

function Insert() {
  let[frmdata, setfrmdata] =useState({
    uname:"",age:"",contect:"",city:""
    
    
  })
  function handleinpt(e){
    const {name,value}=e.target 
    setfrmdata({...frmdata,[name]:value})
  }

  function finalsubmit(e){
    e.preventDefault()
    console.log(frmdata);
    axios.post('http://localhost:3000/userdata',frmdata)
  }

  return (
    <>
      <form onSubmit={finalsubmit}>
        <lable htmlFor>Name</lable>
        <input type="text"onChange={handleinpt} name='uname' /> <br/><br/>

        <lable htmlFor>Age</lable>
        <input type="text" onChange={handleinpt} name='age'  /> <br/><br/>

        <lable htmlFor>Contect</lable>
        <input type="text" onChange={handleinpt} name='contect'  /> <br/><br/>

        <lable htmlFor>City</lable>
        <input type="text" onChange={handleinpt} name='city'  /> <br/><br/>

        <input type="submit"/>

      </form>
    </>
  )
}

export default Insert
