import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
//import Button from '../../components/Button/Button'
import './Navbar.css'


const Navbar = () => {
  var User = null

  return (

    <nav>
        <div className='navbar'>
          
          {/* stack overflow logo */}
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
            </Link>

            {/* navbar  */}
            <Link to = '/' className='nav-item nav-btn'>About</Link>
            <Link to = '/' className='nav-item nav-btn'>Products</Link>
            <Link to = '/' className='nav-item nav-btn'>For Teams</Link>

            {/* search bar  in nav*/}
            <form>
                <input type="text" placeholder='Search...' />
                <img src = {search} alt='search' className='search-icon' width='18' />

            </form>

            {/* Login button */}
          {  User === null ?
            <Link to='/auth' className='nav-item nav-links'>Log in</Link>:
             <>
            
            <Avatar backgroundColor="#009dff" px="10px" py="6px" borderRadius="50px" color='white'><Link to='/User' style={{color:"white", textDecoration:"none"}}> M </Link></Avatar>
             <button className='nav-item nav-links'>Log out</button>
            </>

            
           } 
           </div>
      </nav>
      
   
  )
}

export default Navbar 
