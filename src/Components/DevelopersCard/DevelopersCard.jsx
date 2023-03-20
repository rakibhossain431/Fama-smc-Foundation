import React from 'react'

function DevelopersCard() {
    return (
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
    )
}

export default DevelopersCard
