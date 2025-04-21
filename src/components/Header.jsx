import React from 'react'
import '../assets/Header.css'

const Header = () => {

   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
               <a className="navbar-brand text-white" href="#">Navbar scroll</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                     <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-white" href="#">Link</a>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Link
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                           <li><a className="dropdown-item" href="#">Action</a></li>
                           <li><a className="dropdown-item" href="#">Another action</a></li>
                           <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link disabled text-white" href="#" tabIndex="-1" aria-disabled="true">Link</a>
                     </li>
                  </ul>
                  <a href="/login"><button className="btn btn-outline-light me-3" type="submit">candidate/Login</button></a>
                     <a href="/recruiterLogin"><button className="btn btn-outline-light" type="submit">Recruiter/Sign Up</button></a>
               </div>
            </div>
         </nav>

      </div>
   )
}

export default Header