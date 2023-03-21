import React from 'react'

function DevelopersResources() {
    return (
        <>
        <section class="py-5">
            <div class="container">
             <div class="col-md-11 col-12 m-auto developer-resources">
                <div class=" col-12 col-lg-8 pb-5">
                    <h2 class="brand-card-title">Developer Resources </h2>
                    <p>Take a look at some of our developer resources. We have a separate website to host all the resources and documentation for developers like you.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 developer-resources-item home-card-gap">
                    <div class="col">
                    <div class="card-group">
                        <div class="card developer-resources-card">
                            <div className=''>
                             <img className='w-100' src="./images/Labs/image (4).png" alt="img" />
                            </div>
                            <div class="card-body">
                                <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                                <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                                <div class="developer-re-btn">
                                    <button class="btn-full smc-btn primary">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div class="card-group">
                            <div class="card developer-resources-card">
                                <div className=''>
                                     <img className='w-100' src="./images/Labs/image (6).png" alt="img" />
                                </div>
                            <div class="card-body">
                                <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                                <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                                <div class="developer-re-btn">
                                    <button class="btn-full smc-btn primary">Learn More</button>
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                    <div class="col">
                        <div class="card-group">
                            <div class="card developer-resources-card">
                                <div className=''>
                                   <img className='w-100' src="./images/Labs/image (5).png" alt="img" />
                                </div>
                                <div class="card-body">
                                    <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                                    <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                                    <div class="developer-re-btn">
                                        <button class="btn-full smc-btn primary">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       </section>
      {/*  */}
    <section className="gov-choose">
        <div className="container">
          <h2 className="choose-title text-center">Why Developers Choose SMC</h2>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/res-icon (2).png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Future Proof</h5>
                  <p>
                  SMC is future proof tech. It is the most cutting <br/>edge of all blockchain networks 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/res-icon.png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Easy To Implement</h5>
                  <p>
                  SMC can be integrated to almost any codebase,<br/> plugin, or DApp 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/res-icon (1).png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Bug Free</h5>
                  <p>
                  SMC is built with love and care. We are on the <br/> most part bug free. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/res-icon-4.png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Community</h5>
                  <p>
                  SMC is loved and supported by a large community.<br/> Become a part of it. 
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                 <img src="./images/Icon/res-icon-4.png" alt="icon"/>
                </div>
                <div className="choose-text-box">
                  <h5>Community</h5>
                  <p>SMC is loved and supported by a large<br/> community. Become a part of it.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
    )
}

export default DevelopersResources
