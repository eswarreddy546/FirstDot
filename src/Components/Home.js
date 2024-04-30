import React from 'react';
import Navbar from './Navbar';
import './Navbar.css'; // Import your CSS file

export default function Home() {
  return (
    <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ptg4zHr3Cosgo2-vY1iav9fZZBvsASyIHrb6-x-VdQ&s" alt="Bootstrap" width="180" height="120" border-radius=""></img>
    </a>
  </div>
  <Navbar></Navbar>
</nav>


  );
}
