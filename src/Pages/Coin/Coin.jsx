import React from 'react'
import CoinCard from '../../Components/CoinCard/CoinCard'
import Banner from '../../Components/Shared/Banner/Banner'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'

function Coin() {
    return (
        <>
            <Navbar />
            <Banner />
            <CoinCard />
            <Footer />
         
        </>
    )
}

export default Coin
