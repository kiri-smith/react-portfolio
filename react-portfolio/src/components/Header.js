import React from 'react';
import '../styles/App.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

function Header(currentPage, handlePageChange) {
  return (
    <header>
      <nav class="navbar nav-custom">
        <div class="nav-wrapper nav-deets nav-specs">
          <h3 class="left my-name mid-place">Kiri Smith</h3>
          <ul class="right nav-links">
            <li><a href="#about" onClick={() => handlePageChange('AboutMe')} class="mid-place" className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a></li>

            <li><a href="#showcase" onClick={() => handlePageChange('MyWork')}
              class="mid-place" className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>

            <li><a href="#contact" onClick={() => handlePageChange('ContactMe')} class="mid-place" className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
            <li><a href="https://docs.google.com/document/d/1SzBb4VCiBd2CpTjTw_3kWCL1-35twNHfK3aI_qe2C9A/edit?usp=sharing"
              target="_blank" rel="noreferrer" class="mid-place">Resumé</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
