import Myimg from './img2.jpeg'
import './App.css'
import { About,Help } from './About'
import Contect from './Contect'
import Service from './Service'
import Gallary from './Gallary'


function App() {
  let name ="Sachin Singh Chauhan "
  let age ="25"

  let internalCss = {
    color: "pink",
    backgroundColor: "green"
    
  }
  return (
    <>
<div className='navbar'>
  <ul>
    <li>home </li>
    <li>contect</li>
    <li>news</li>
    <li>logo</li>
  </ul>
</div>


      <h1>Welcome to React Class on 21FEB </h1>
      <h1>Today second Day on 22FEB</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, temporibus! Architecto nobis delectus ab odit? Quidem minima, impedit, commodi molestiae dolorem deleniti mollitia eos odio nulla assumenda omnis quod modi.</p>

  <button>Click Me</button>
  <br />
  <br />

  <img src={Myimg} alt="" />
  <hr />
    <img src="elephant.jpg" alt="" />

    <br />
    <h1 style={{backgroundColor:"red",color:"greenyellow"}}>My Name is {name}</h1>

    <br />

    <h1 style={internalCss}>My age is {age}</h1>

    <h1 className='ex'>use the external css </h1>

    <br />
    <h1 className='ex'>Use the Onother page here </h1>

<div className='ab'>
     < About/>
</div>
 
    <hr />
    <Help/>
    <hr />
    <Contect/>
    <hr />
    <Service/>
    <hr />
    <Gallary/>



    </>
  
  )
}

export default App
