import React, { useState } from 'react'

function RelationSkills() {
    return (
     <>
        <section className='relations-skills'>
            <div className="container">
                <div className="rel-com-content">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="rel-com-item">
                                <span>15.6M</span>
                                <small>Curabitur tempor eros</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rel-com-item">
                                <span>15.6M</span>
                                <small>Curabitur tempor eros</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rel-com-item">
                                <span>15.6M</span>
                                <small>Curabitur tempor eros</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rel-com-item">
                                <span>15.6M</span>
                                <small>Curabitur tempor eros</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='investor-convention py-5'>
            <div className="container">
                <div className="investor-convention-content">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="entry-title">
                                <h4>Press Release</h4>
                            </div>
                            <div className="investor-convention-content-item">
                                <span>July 15, 2022</span>
                               <p className='cutOfTex'>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis ...</p>
                            </div>
                            <div className="investor-convention-content-item">
                                <span>July 15, 2022</span>
                                <p className='cutOfTex'>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis ...</p>
                            </div>
                            <div className="investor-convention-content-item">
                                <span>July 15, 2022</span>
                                <p className='cutOfTex'>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis ...</p>
                            </div>
                            <div className="investor-convention-content-item">
                                <span>July 15, 2022</span>
                                <p className='cutOfTex'>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis ...</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 investor-convention-content-right">
                            <div className="entry-title">
                                <h4>Events</h4>
                            </div>
                            <div className="investor-convention-content-item">
                                <span className='event-date'>July 15, 2022</span>
                                <h5>Pellentesque quam a convallis</h5>
                                <p className='cutOfTex'>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis ...</p>
                            </div>
                            <div className="investor-convention-content-item">
                                <span className='event-date'>July 15, 2022</span>
                                <h5>Pellentesque quam a convallis</h5>
                                <p className='cutOfTex'>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis ...</p>
                            </div>
                            <div className="investor-convention-content-item">
                              <a Link="">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="investor-resources">
            <div className="container">
                <div className="investor-resources-content">
                    <h4>Investor Resources </h4>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="col d-flex flex-column align-items-center">
                            <div className="investor-resources-img">
                                <img src="images/Icon/investor (3).png" alt="NFT" />
                            </div>
                            <h6 className='investor-title'>2023 Market Outlook</h6>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <div className="investor-resources-img">
                                <img src="images/Icon/investor (2).png" alt="NFT" />
                            </div>
                            <h6 className='investor-title'>SMC Investor Pitch</h6>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <div className="investor-resources-img">
                                <img src="images/Icon/investor (3).png" alt="NFT" />
                            </div>
                            <h6 className='investor-title'>2022 Market Outlook</h6>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <div className="investor-resources-img">
                                <img src="images/Icon/investor (1).png" alt="NFT" />
                            </div>
                            <h6 className='investor-title'>SMC Keynote July, 2023</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
    )
}

export default RelationSkills
