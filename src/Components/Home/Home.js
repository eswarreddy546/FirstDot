import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'
export default function Home() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="nav-home-img" src="https://res.cloudinary.com/drw030kab/image/upload/v1714799347/F.-removebg-preview_ig4vgh.png" alt="logo.jpg" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link active" href="">AboutUs</a>
                        <a class="nav-link active" href="">SignUp</a>
                        <a class="nav-link active" href="">Login</a>
                        <a class="nav-link active" href="Contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}

