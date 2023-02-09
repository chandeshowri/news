import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './../pages/Home';
import Business from './../pages/Business';
import Entertainment from './../pages/Entertainment';
import Health from './../pages/Health';
import Science from './../pages/Science';
import Technology from './../pages/Technology';
import Sports from './../pages/Sports';
import India from './../countries/India';
import China from './../countries/China'
import Detail from './../component/Detail';




function Header() {
  return (
    <div className='container py-4'>
            <div className='row  text-dark'>
            <div className='col-lg-3 text-start'>
              <Link to='/'>  <img src={require('../images/logo.png')}  class='logo'/></Link> 
              
                </div>
                <div className='col-lg-4 text-center'>
                           <form class="d-flex" role="search">
        <input class="form-control me-5 searchform" type="search" placeholder="Search news" aria-label="Search"/>
        <i className="search bi bi-search"></i>
      </form>
                </div>

            <div className='col-lg-5 text-end' >
                <ul className='socialmedia d-flex gap-3 justify-content-end' >
                    <li><i class="media bi bi-facebook"></i></li> |
                    <li><i class="bi bi-whatsapp"></i></li> |
                    <li><i class="bi bi-twitter"></i></li> |
                    <li><i class="bi bi-youtube"></i></li>
                  </ul>
                 <p><i class="bi bi-envelope"> </i>  info@example.com | <i class="bi bi-telephone"></i>  00249 123 333 719</p> 
            </div>
        </div>
      
    <div className='row'>
    <nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2 ">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="business">Business </Link>
        </li> 
        
        <li class="nav-item">
          <Link className="nav-link" to="health">Health </Link>
        </li>
       <li class="nav-item">
          <Link className="nav-link" to="entertainment"> Entertainment</Link>
        </li>
       <li class="nav-item">
          <Link className="nav-link" to="science"> Science </Link>
        </li>
       <li class="nav-item">
          <Link className="nav-link" to="sports"> Sports </Link>
        </li>
         <li class="nav-item">
          <Link className="nav-link" to="technology"> Technology </Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Countries
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="in">India</Link></li>
            <li><Link class="dropdown-item" to="cn">China</Link></li>
     
          </ul>
        </li>
      </ul>
      
    
      <button className='btn-lan'>Nepali</button>
    </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="business" element={<Business/>} />
        <Route path="health" element={<Health/>} />
        <Route path="entertainment" element={<Entertainment/>} />
        <Route path="science" element={<Science/>} />
        <Route path="sports" element={<Sports/>} />
        <Route path="technology" element={<Technology/>} />
        <Route path="in" element={<India/>} />
        <Route path="cn" element={<China/>} />
        <Route path="detail" element={<Detail/>} /> 
      </Routes>
    </div>
    </div>
    
    
  )
}

export default Header
