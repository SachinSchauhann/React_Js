import React, { useState } from 'react'
import img1 from './assets/react.svg'


function Product() {
    
 function decrement(){
    if(count!=0){
        setCount(count-1)
    }
 }
  return (
    <>
      <h2>View Cart</h2>

      <img src="" alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam suscipit dolorem iste quo beatae vero libero? Atque, vero perferendis?</p>


      <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>less zero</button>
        <button onClick={()=>setCount(count-count)}>delete</button>
    </>
  )
}

export default Product


