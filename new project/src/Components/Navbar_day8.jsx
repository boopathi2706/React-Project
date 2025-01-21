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
                <li> <Link to='/navbar' className='link'> Home</Link></li>
                <li><Link  to='/about' className='link'> About</Link></li>
                <li><Link to='/gallery' className='link'>Gallery</Link></li>
                <li><Link to='' className='link'>Contact</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>
            </ol>
            </nav>
        </header>
    )
}
export default Navbar_day8;