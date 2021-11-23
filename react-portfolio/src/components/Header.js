import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav class="navbar nav-custom">
        <div class="nav-wrapper nav-deets nav-specs">
          <a href="https://docs.google.com/document/d/1ZheW1hS7MNjaeBhSnr3-krOhUXSlYMewwBU9NKeDZeA/edit?usp=sharing"
            class="left my-name mid-place">Kiri Smith</a>
          <ul class="right nav-links">
            <li><a href="#showcase" class="mid-place">My Work</a></li>
            <li><a href="https://github.com/kiri-smith" target="_blank" class="mid-place">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kiri-lynne-smith/" target="_blank"
              class="mid-place">LinkedIn</a></li>
            <li><a href="https://medium.com/@kirilynne" target="_blank" class="mid-place">Blog</a></li>
            <li><a href="https://docs.google.com/document/d/1SzBb4VCiBd2CpTjTw_3kWCL1-35twNHfK3aI_qe2C9A/edit?usp=sharing"
              target="_blank" class="mid-place">Resumé</a></li>
            <li><a href="https://docs.google.com/document/d/1ZheW1hS7MNjaeBhSnr3-krOhUXSlYMewwBU9NKeDZeA/edit?usp=sharing"
              target="_blank" class="mid-place">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
