import React from 'react'
import './CSS/Header.css'
const Header = () => {
  return (
    
    <section class="header-sec">
<div class="container header-contain">
    <header>
        <nav>
            <img src="images/logo.png" alt = ''></img>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
        <a href="#" target="blank" class="contact-button">Contact</a> 
        </nav>
    </header>
</div>
    </section>

  )
}

export default Header