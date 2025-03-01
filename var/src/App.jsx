import Event from "./Event"

function App() {
  let name ="Sachin Singh Chauhan"
  // let collage =prompt("Enter your collage name ")
let emp = {
  fname : "Raj",
  lname : "Singh",
  sal : 32000,
  office : "bhopal",
  contect : 7529541,
  dept : "HR"

}

let arr = [ "sachin", 4512, "bhopal", 25 ]

  return (
    <>
    
      <h1>Hello {name}</h1>
      {/* <h1>Collage {collage}</h1> */}
      <h1> Empolyee Fisrt Name :{emp.fname}</h1>
      <h1> Empolyee list Name :{emp.lname}</h1>
      <h1> Empolyee Salary :{emp.sal}</h1>
      <h1> Empolyee office location :{emp.office}</h1>
      <h1> Empolyee Contect No :{emp.contect}</h1>
      <h1> Empolyee Department  Name :{emp.dept}</h1>

  <h1>Name : {arr[0]}</h1>
  <h1>contect :{arr[1]}</h1>
  <h1>location : {arr[2]}</h1>
  <h1>Age : {arr[3]}</h1>
  <h1></h1>
  <Event/>

    </>
  )
}

export default App
