import { useEffect, useState } from "react"

import About from "../About"

function App() {
  let [valu , setValu] = useState(0)

  useEffect(()=>{alert("UseEffect is working")},[])
 let [name, setName] =useState("Sachin")
 let [age ,setAge] = useState(23)
 let [color,setColor] = useState("")
 function fun(){
  setName ("Rohit ")
 }

  return (
    <>

    <h1>{valu}</h1>
    <button onClick={()=>setValu(valu+1)}>increse</button>
    <button onClick={()=>setValu(valu-1)}>decrese</button>
 <div style={{height:"100vh", backgroundColor:color}}>

     <h1>My Name Is {name}</h1>
     <h1>My age {age} </h1>
     {/* <h1>My Village </h1>
     <h1>my city</h1> */}

     <button onClick={fun}>Change name</button>
     <button onClick={ ()=>setAge(25)}>change aage</button>
     {/* <button onClick={vil}></button>
     <button onClick={city}></button> */}
     <button onClick={()=>setColor('red')}>Red</button>
     <button onClick={()=>setColor('blue')}>Blue</button>
     <button onClick={()=>setColor('green')}>Green</button>
     
     {/* <button onClick={()=>setColor()}>set by user</button> */}

     <About/>
     </div>
    
    </>
  )
}
export default App
