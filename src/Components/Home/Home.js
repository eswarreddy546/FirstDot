import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="nav-home-img" src="https://res.cloudinary.com/drw030kab/image/upload/v1714799347/F.-removebg-preview_ig4vgh.png" alt="logo.jpg" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active mr-1 " href="#">Home</a> 
            <a className="nav-link active mr-1 " href="#">AboutUs</a> 
            <a className="nav-link active mr-3 " href="#">SignUp</a> 
            <a className="nav-link active mr-3" href="Logins">Login</a>
            <a className="nav-link active" href="Contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
