import React from 'react';
import '../styles/App.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

function Footer() {
    return (
        <footer>
            <div class="contact-content">
                <nav class="nav-wrapper nav-deets">
                    <ul class="right">
                        <li><a href="https://www.linkedin.com/in/kiri-lynne-smith/" target="_blank" rel="noreferrer"
                            class="mid-place">LinkedIn</a></li>
                        <li><a href="https://github.com/kiri-smith" target="_blank" rel="noreferrer" class="mid-place">GitHub</a></li>
                        <li><a href="https://medium.com/@kirilynne" target="_blank" rel="noreferrer" class="mid-place">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;