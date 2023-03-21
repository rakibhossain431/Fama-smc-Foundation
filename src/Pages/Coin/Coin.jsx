import React from "react";
import CoinCard from "../../Components/CoinCard/CoinCard";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Coin() {
  return (
    <>
      <section className="slider">
        <div className="wallet-header banner-coin">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-7 d-flex align-items-center">
                <div className="header-details banner-nft-entry-img">
                  <h1 className="banner-nft-entry-title">Meet The All New SMC Coin</h1>
                  <p>
                    SMC coin is a digital currency created <br /> using the SMC Blockchain Network
                  </p>
                  <img className="d-none d-lg-block" src="images/Icon/walletLogo.png" alt="wallet" />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 header-img">
                <div className="header-img banner-nft-entry-img">
                  <img src="images/Icon/coin.png" alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CoinCard />
      <WhitePaper />
    </>
  );
}

export default Coin;
