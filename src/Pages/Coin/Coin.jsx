import React from "react";
import banner from "../../Background/banner3.png";
import CoinCard from "../../Components/CoinCard/CoinCard";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Coin() {
  return (
    <>
      <section className="slider">
        <div
          className="wallet-header"
          style={{ backgroundImage: `url(${banner})`, width: "100%", display: "inline-block" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-7 d-flex align-items-center">
                <div className="header-details">
                  <h1>The Most Secure Wallet for All Digital Assets</h1>
                  <p>
                    SMC coin is a digital currency created using the SMC <br /> Blockchain Network
                  </p>
                  <img className="d-none d-lg-block" src="images/Icon/walletLogo.png" alt="wallet" />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 header-img">
                <div className="header-img">
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
