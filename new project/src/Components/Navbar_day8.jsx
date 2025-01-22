import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useState } from 'react';

const Navbar_day8=()=>{
    // var styling={
    //      color:"black"
    // }
    
    var [dropdown,ShowDropdown]=useState(false);
    return(
        <header>
            <nav>
            {/* <ol style={{textDecoration:"none"}}> */}
            {/* <ol style={styling}> */}
            <ol>
                <li> <Link to='/' className='link'> Home</Link></li>
                <li><Link  to='/about' className='link'> About</Link></li>
                <li><Link to='/gallery' className='link'>Gallery</Link></li>
                <li><Link to='/use-state' className='link'>UseState</Link></li>
                <div className='dropdown'>
                    <span onMouseEnter={()=>{ShowDropdown(true)}} >HOOKS</span> 
                    {dropdown && <ul id='links' className='dropdownItem' onMouseLeave={()=>{ShowDropdown(false)}}>
                        <li><Link className='link1' to={'/usestate'}>UseState</Link></li>
                        <li><Link className='link1' to={'/use-effect-api'}>UseEffectAPI</Link></li>
                        <li><Link className='link1' to={'/use-reducer'}>UseReducer</Link></li>
                    </ul>}
                    
                </div>
                <li><Link to='/use-effect' className='link'>UseEffect</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>
            </ol>
            </nav>
        </header>
    )
}
export default Navbar_day8;