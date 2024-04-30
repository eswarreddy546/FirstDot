import React from 'react'
import './Navbar.css'; // Import your CSS file

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid"> 
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="Home">Home</a>
        <a class="nav-link" href="About Us">About Us</a>
        <a class="nav-link" href="Sign up">Sign up</a>
        <a class="nav-link" href="Login">Login </a>
        <a class="nav-link" href="Contact Details">Contact Details</a>
        
      
      </div>
      
    </div>
</nav>
  )
}
