import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav>
            <h1>logo</h1>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li><Link to="/servises">Services</Link></li>
                <li><Link to="/contect">Contect</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
            
        </nav>
        
        
        
        </>
    )
}
export default Navbar