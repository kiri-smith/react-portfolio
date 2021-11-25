import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#about" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>Kiri Smith<span class="sr-only"></span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#about" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me<span class="sr-only"></span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#showcase" onClick={() => handlePageChange('MyWork')} className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}>Portfolio of Work</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#contact" onClick={() => handlePageChange('ContactMe')} className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="https://docs.google.com/document/d/1SzBb4VCiBd2CpTjTw_3kWCL1-35twNHfK3aI_qe2C9A/edit?usp=sharing"
                target="_blank" rel="noreferrer">Resumé</a>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  );
}

export default Header;
