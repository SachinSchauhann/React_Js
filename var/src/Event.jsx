const Event = () =>{
 function fun (){
    alert("Event is working")
 }
 function funD (){
    alert("Double Click is working")
 }

 function Danf (){
    alert("dangourse zone ")
 }
    return(
        <>
        <button onClick={fun}>Click</button>
        <button onDoubleClick={funD}>double Click</button>
        <button onMouseEnter={fun}>Mouse</button>
        <button onMouseLeave={fun}>Mouse right</button>
        <button onMouseMove={fun}>Mouse left</button>
        <button onMouseDown={fun}>Mouse</button>
        <button onMouseOut={Danf}>Mouse 3</button>
        </>
    )

}
export default Event