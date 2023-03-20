import React from 'react'

function DevelopersCard() {
    return (
        <>
        <section>
            <div className="container my-5">
                <div className="cards col-11 m-auto">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 developers-card-item">
                        <div className="col">
                            <div className="card developers-card h-100">
                                <div className='h-100 py-3 px-md-2'>
                                    <img src="./images/Icon/dev-icon (1).png" alt="img" />
                                </div>
                                <div className="px-0 px-md-2 card-body">
                                    <h6 className="card-title">Documentation</h6>
                                    <p className="card-text">Robust Documentation that let’s you get started on the right foot </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card developers-card h-100">
                                <div className='h-100 py-3 px-md-2'>
                                    <img src="./images/Icon/dev-icon (5).png" alt="img" />
                                </div>
                                <div className="px-0 px-md-2 card-body">
                                    <h6 className="card-title">Open Source</h6>
                                    <p className="card-text">Countless open source resources to spark ideas and inspiration</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card developers-card h-100">
                                <div className='h-100 py-3 px-md-2'>
                                 <img src="./images/Icon/dev-icon (4).png" alt="img" />
                                </div>
                                <div className="px-0 px-md-2 card-body">
                                    <h6 className="card-title">Developer Tools</h6>
                                    <p className="card-text">User Friendly Developer Tools To Accelerate New Product Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card developers-card h-100">
                                <div className='h-100 py-3 px-md-2'>
                                      <img src="./images/Icon/dev-icon (3).png" alt="img" />
                                </div>
                                <div className="px-0 px-md-2 card-body">
                                    <h6 className="card-title">Community</h6>
                                    <p className="card-text">Thriving community of enthusiasts, developers, and enterprise supporters</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card developers-card h-100">
                                <div className='h-100 py-3 px-md-2'>
                                    <img src="./images/Icon/icon3.png" alt="img" />
                                </div>
                                <div className="px-0 px-md-2 card-body">
                                    <h6 className="card-title">Support</h6>
                                    <p className="card-text">Closely supported by the SMC foundation and its team of engineers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card developers-card h-100">
                                <div className='h-100 py-3 px-md-2'>
                                    <img src="./images/Icon/dev-icon (2).png" alt="img" />
                                </div>
                                <div className="px-0 px-md-2 card-body">
                                    <h6 className="card-title">Technology</h6>
                                    <p className="card-text">Working with SMC means working with state of the art blockchain tech that no one has</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
    </section>
    {/* // card */}
    <section class="py-5">
            <div class="container">
             <div class="col-md-11 col-12 m-auto brand-card-content">
                <div class=" col-12 col-lg-8 pb-5">
                    <h2 class="brand-card-title">Developer Resources </h2>
                    <p>Take a look at some of our developer resources. We have a separate website to host all the resources and documentation for developers like you.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-3 cols-lg-3 g-5 home-card-gap">
                    <div class="col">
                    <div class="card-group">
                        <div class="card all-brands-card">
                            <div className=''>
                             <img src="./images/Labs/image (4).png" alt="img" />
                            </div>
                            <div class="card-body all-brands-card-body">
                                <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                                <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div class="card-group">
                            <div class="card all-brands-card">
                                <div className=''>
                                     <img src="./images/Labs/image (6).png" alt="img" />
                                </div>
                            <div class="card-body all-brands-card-body">
                                <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                                <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                            </div>
                            </div>
                    </div>
                    </div>
                    <div class="col">
                        <div class="card-group">
                            <div class="card all-brands-card">
                                <div className=''>
                                   <img src="./images/Labs/image (5).png" alt="img" />
                                </div>
                                <div class="card-body all-brands-card-body">
                                    <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                                    <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       </section>
      </>
    )
}

export default DevelopersCard
