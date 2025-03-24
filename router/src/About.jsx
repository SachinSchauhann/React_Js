import { useNavigate } from "react-router-dom"

function About(){
    let navigator = useNavigate()
    function service (){
        navigator ('/servises')
    }
    return(
        <>
        <h1>About Page</h1>
         <button onClick={service}> Services page 2</button>
        </>
    )
}
export default About