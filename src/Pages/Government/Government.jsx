import React from 'react'
import GovernmentUse from '../../Components/GovernmentUse/GovernmentUse'
import Banner from '../../Components/Shared/Banner/Banner'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import WhitePaper from '../../Components/WhitePaper/WhitePaper'

function Government() {
    return (
        <>
            <section class="banner banner-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="banner-content">
                <div class="entry-content">
                  <h1 class="entry-title">
                  Helping Goverments Scale <br/> Critical Services 
                  </h1>
                  <p class="entry-subtitle">
                  SMC is ready to help governments harness the power of blockchain 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <GovernmentUse />
            <WhitePaper />
        </>
    )
}

export default Government
