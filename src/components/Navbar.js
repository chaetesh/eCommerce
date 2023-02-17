import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shopy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/ecommerce/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#" onClick={()=>{window.scrollBy(0,700)}}>Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Contact</Link>
        </li>
      </ul>
      <div class="d-flex">
        {!props.loginSuccess && !localStorage.getItem('token')?<Link to="/login" className='text-black'><i class="fa-solid fa-user mx-3"> Login</i></Link> : ""}
        
        <Link to="/cart" className='text-black'><i class="fa-solid fa-cart-shopping mx-3"> Cart</i></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar