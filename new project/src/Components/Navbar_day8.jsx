import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar_day8=()=>{
    // var styling={
    //      color:"black"
    // }
    return(
        <header>
            <nav>
            {/* <ol style={{textDecoration:"none"}}> */}
            {/* <ol style={styling}> */}
            <ol>
                <li> <Link to='/navbar'> Home</Link></li>
                <li><Link  to='/about'> About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to=''>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ol>
            </nav>
        </header>
    )
}
export default Navbar_day8;