import React from 'react'

function CoinCard() {
    return (
        <section class="py-5">
    <div class="container">
        <div class="col-md-11 col-12 m-auto brand-card-content">
        <div class=" col-12 col-lg-9 pb-5">
            <h1 class="coin-card-title">How SMC Coin is Affecting the Crypto World </h1>
            <p className='coin-card-subTitle'>SMC coin is still a new entrant to the crypto world. But as it is the only coin currently backed directly by the SMC foundation, it has the potential to create significant impact in the world. We envision that SMC will soon be the cryptocurrency of choice for shoppers looking trade/buy things with crypto. </p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 cols-lg-3 g-5 home-card-gap">
            <div class="col">
            <div class="card-group">
                <div class="card all-brands-card">
                    <div className='position-relative'>
                        <img src="./images/Labs/image-1 (1).png" alt="img" />
                        <div className="smc-logo">
                            <img src="./images/Icon/smc.svg" alt="logo" />
                        </div>
                    </div>
                    {/* <div class="card-body all-brands-card-body">
                        <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                        <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                    </div> */}
                </div>
            </div>
            </div>
            <div class="col">
                <div class="card-group">
                    <div class="card all-brands-card">
                        <div className='position-relative'>
                                <img src="./images/Labs/image-1 (2).png" alt="img" />
                                <div className="smc-logo">
                                <img src="./images/Icon/smc.svg" alt="logo" />
                            </div>
                        </div>
                    {/* <div class="card-body all-brands-card-body">
                        <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                        <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                    </div> */}
                    </div>
            </div>
            </div>
            <div class="col">
                <div class="card-group">
                    <div class="card all-brands-card">
                        <div className='position-relative'>
                            <img src="./images/Labs/image-1 (3).png" alt="img" />
                            <div className="smc-logo">
                                <img src="./images/Icon/smc.svg" alt="logo" />
                            </div>
                        </div>
                        {/* <div class="card-body all-brands-card-body">
                            <h6 class="impact-card-title">Curabitur tempor quis eros tempus</h6>
                            <p class="card-text all-brands-card-text">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Curabitur tempor quis eros tempus lacinia.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
 </section>
    )
}

export default CoinCard
