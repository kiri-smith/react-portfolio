import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import ContactMe from './ContactMe';
import Footer from './Footer';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'


function Portfolio() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'MyWork') {
            return <MyWork />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer currentPage={currentPage} />
        </div>
    );
}

export default Portfolio;