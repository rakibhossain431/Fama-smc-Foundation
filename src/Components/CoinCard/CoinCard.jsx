import React from "react";

function CoinCard() {
  return (
    <>
      <section className="white-coin">
        <div className="container">
          <div className="col-11 m-auto white-coin-content">
            <div className="row justify-content-around">
              <div className="col-12 col-lg-5 w-coin-left">
                <h1>What is SMC Coin? </h1>
                <div className="w-coin-img d-lg-none d-block">
                  <img class="w-100" src="./images/Gallery/government.jpg" alt="logo" />
                </div>
                <p>
                  SMC is a digital currency like Bitcoin. It is designed to be a companion coin to our Wallet & NFT
                  products. We are planning to provide incentives for using SMC coin when transacting within the SMC
                  network.{" "}
                </p>
                <div className="w-coin-btn">
                  <button class="btn-full smc-btn primary">Send Now</button>
                </div>
              </div>
              <div className="col-5 w-coin-right d-none d-lg-block">
                <div className="w-coin-img">
                  <img src="./images/Gallery/government.jpg" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container">
          <div class="col-md-10 col-12 m-auto brand-card-content">
            <div class=" col-12 col-lg-9 pb-5">
              <h1 class="coin-card-title">How SMC Coin is Affecting the Crypto World </h1>
              <p className="coin-card-subTitle">
                SMC coin is still a new entrant to the crypto world. But as it is the only coin currently backed
                directly by the SMC foundation, it has the potential to create significant impact in the world. We
                envision that SMC will soon be the cryptocurrency of choice for shoppers looking trade/buy things with
                crypto.{" "}
              </p>
            </div>
            <div class="tz-gallery">
              <div class="row gap-3 gap-md-0">
                <div class="col-sm-12 col-md-4">
                  <a class="lightbox">
                    <img className="w-100" src="./images/Gallery/img (1).png" alt="logo" />
                  </a>
                </div>
                <div class="col-sm-12 col-md-4">
                  <a class="lightbox">
                    <img className="w-100" src="./images/Gallery/img (2).png" alt="logo" />
                  </a>
                </div>
                <div class="col-sm-12 col-md-4">
                  <a class="lightbox">
                    <img className="w-100" src="./images/Gallery/img (3).png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoinCard;
