import React from 'react'
import Footer from '../../Components/Shared/Footer/Footer';
import Banner from "../../Components/Shared/Banner/Banner";
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';

function GetInTouch() {
    return (
        <>
            <Navbar />
            <Banner />
            <Contact />
            <Footer />
        </>
    )
}

export default GetInTouch
