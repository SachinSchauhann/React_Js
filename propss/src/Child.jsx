import Child2 from "./Child2"

function Child1(props){
  
    
    return(
        <>
        
        <h1> ----My Name is {name}</h1>
         <Child2 collage="TIT"/>
         {/* <Child2 lname ={props.name} /> */}
         {/* <Child2 district="Bhopal"/> */}
        </>
    )
}
export default Child1