import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext, } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { useRef } from 'react'

const Navbar = () => {

  const [menu,setMenu] = useState("all");
     const {getTotalCartItems} = useContext (ShopContext);
const menuRef = useRef();

const dropdown_toggle = (e) =>{
 menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
}


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
         <p>SMART SHOP</p>

      </div>
     <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""  height="28px" width="28px"/>

      <ul ref={menuRef} className="nav-menu">
      <li onClick={()=>{setMenu("all")}}><Link style= {{ textDecoration:'none'}} to='/'>All</Link>{menu==="all"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("gents")}}><Link style= {{ textDecoration:'none'}} to='/gents'>Gents</Link>{menu==="gents"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("ladies")}}><Link style= {{ textDecoration:'none'}} to='/ladies'>Ladies</Link>{menu==="ladies"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style= {{ textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      
<div className="nav-login-cart">
  {localStorage.getItem('auth-token')
  ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}

<Link to='/cart'><img src={cart_icon} alt="" width="27px" height="27px"/></Link>
<div className="nav-cart-count">{getTotalCartItems()}</div>
</div>

    </div>

  )
}

export default Navbar;
