import React from 'react';
import '../styles/App.css';

function Header() {
  return (
    <header>
      <nav class="navbar nav-custom">
        <div class="nav-wrapper nav-deets nav-specs">
          <a href="https://docs.google.com/document/d/1ZheW1hS7MNjaeBhSnr3-krOhUXSlYMewwBU9NKeDZeA/edit?usp=sharing"
            class="left my-name mid-place">Kiri Smith</a>
          <ul class="right nav-links">
            <li><a href="#about" class="mid-place">About Me</a></li>
            <li><a href="#showcase" class="mid-place">Portfolio</a></li>
            <li><a href="#contact" class="mid-place">Contact</a></li>
            <li><a href="https://docs.google.com/document/d/1SzBb4VCiBd2CpTjTw_3kWCL1-35twNHfK3aI_qe2C9A/edit?usp=sharing"
              target="_blank" class="mid-place">Resumé</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
