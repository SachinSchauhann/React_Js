import React, { useState } from 'react'

function App() {
  let [frmdata, setFrmdata] =useState()
  function Inputvalue(e){
    console.log(e.target.value);
    setFrmdata(e.target.value)
  }
    let [frmdata2, setFrmdata2] =useState()
    function Inputvalue2(e){
      console.log(e.target.value);
      setFrmdata2(e.target.value)
    }
      let [frmdata3, setFrmdata3] =useState()
      function Inputvalue3(e){
        console.log(e.target.value);
        setFrmdata3(e.target.value)
      }
        let [frmdata4, setFrmdata4] =useState()
        function Inputvalue4(e){
          console.log(e.target.value);
          setFrmdata4(e.target.value)
        }
          let [frmdata5, setFrmdata5] =useState()
        // usename: "", collage:" ",
          function Inputvalue5(e){
           // const {name,value} =e.target
            ///setFrmdata({...frmdata,[name]:value})
            console.log(e.target.value);
            setFrmdata5(e.target.value)
  }


  return (
    <>
    
     <form action="">
      <label htmlFor="">Name :</label>
      <input type="text" onChange={Inputvalue}/> <br /><br />
      <label htmlFor="">Collage :</label>
      <input type="text" onChange={Inputvalue2}/><br /><br />
      <label htmlFor="">Home :</label>
      <input type="text" onChange={Inputvalue3}/><br /><br />
      <label htmlFor="">Course :</label>
      <input type="text" onChange={Inputvalue4}/><br /><br />
      <label htmlFor="">State :</label>
      <input type="text" onChange={Inputvalue5}/><br /><br />
     </form>
      

     <h1>Hello : {frmdata}</h1>
    <h1>Your Collage : {frmdata2} </h1>
    <h1>Your Home  : {frmdata3}</h1>
    <h1>Your Course  : {frmdata4}</h1>
    <h1>Your State : {frmdata5}</h1>
    </>
  )
}

export default App
