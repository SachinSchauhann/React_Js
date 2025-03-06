import { useState } from "react";

function About(){
    let [ar,setAr] = useState({
        name :"Rohit", contect: 1223
    })
    let[data,setData]=useState(["Aman",13,"bhopal"])
    let [color,setColor] = useState("")
function change (){
    setAr({name : "Raju", contect : 741652})
}
    return(
        <>
        <h1>About {ar.name} and {ar.contect}</h1>
        <h1>Address: {data[2]} and his nikename is {data[0]}</h1>
        <button onClick={change}>change object </button>
      {/* <button onClick={()=>}>change name </button> */}

      <div style={{height:"200px", backgroundColor:color}}>
      <button onClick={()=>setColor('black')}>Dark Mode </button>
      <button onClick={()=>setColor('white')}  >Light Mode</button>
      <h1 >hide and seek </h1>
      <button onClick={()=>('')}  >hide</button>
      <button onClick={()=>('')}  >show</button>
      
      


      </div>
        </>
    )
}
export default About