import React, { useContext } from 'react'
import { senddata } from './main'

const Contect = () => {
    let acceptdata = useContext(senddata)
  return (
    <>
      <h1>Contect : {acceptdata.contect}, <br /> Name: {acceptdata.name} <br /> Age : {acceptdata.age} </h1>
      {/* <senddata.Consumer>
        {
            (appdata)=>{return <h1>{appdata}</h1>}
        }


      </senddata.Consumer> */}
    </>
  )
}

export default Contect
