import axios from 'axios'
import React, { useEffect } from 'react'



export default function Fetchapi() {
    useEffect(()=>{
        
        axios.get('http://localhost:3000/userdata')
        .then(res=>console.log(res.data))
    })
  return (
    <>
     <h1>Get data from  Api</h1> 
    </>
  )
}
