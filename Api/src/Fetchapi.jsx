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
     <table border="2px">  
      <th>
      <td>id</td>
      <td>Name</td>
      <td>Age</td>
      <td>Contect</td>
      <td>City</td>
     </th>
     </table>

{apidata.map((e) =>(
  <tr>
      <td>{e.id}</td>
      <td>{e.uname}</td>
      <td>{e.age}</td>
      <td>{e.contect}</td>
      <td>{e.city}</td>
     </tr>
))}
     


     
     

    </>
  )
}
