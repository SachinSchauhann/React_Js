import { useState } from "react"

function Neew(){
 let[st, setSt] = useState(true)
 let [count, setCount] =useState(0)

 function decrement(){
    if(count!=0){
        setCount(count-1)
    }
 }
    return(
        <>
        <h1>hide and show  </h1>
        { st ? <h1>Welcome </h1> : "" }
        
        <button onClick={()=>setSt(false)}>Hide</button>
        <button onClick={()=>setSt(true)}>show</button>
        <button onClick={()=>setSt(!st)}>toggle</button>
        <button onClick={()=>setSt(!st)}>
            { st ? "hidden" : "show the"}
        </button>

        <br /><br />
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>less zero</button>
        <button onClick={()=>setCount(count-count)}>Reset</button>
        </>
    )
}
export default Neew