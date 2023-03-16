import React from 'react'
import GovernmentUse from '../../Components/GovernmentUse/GovernmentUse'
import Banner from '../../Components/Shared/Banner/Banner'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import WhitePaper from '../../Components/WhitePaper/WhitePaper'

function Government() {
    return (
        <>
            <Navbar />
            <Banner />
            <GovernmentUse />
            <WhitePaper />
        </>
    )
}

export default Government
