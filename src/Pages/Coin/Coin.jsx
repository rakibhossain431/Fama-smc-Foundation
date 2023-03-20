import React from "react";
import CoinCard from "../../Components/CoinCard/CoinCard";
import banner from "../../Background/banner3.png";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Coin() {
  return (
    <>
      <section class="slider">
        <div
          class="wallet-header"
          style={{ backgroundImage: `url(${banner})`, width: "100%", display: "inline-block" }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-7 d-flex align-items-center">
                <div class="header-details">
                  <h1>The Most Secure Wallet for All Digital Assets</h1>
                  <p>
                  SMC coin is a digital currency created using the SMC <br/> Blockchain Network 
                  </p>
                  <img class="d-none d-lg-block" src="images/Icon/walletLogo.png" alt="wallet" />
                </div>
              </div>
              <div class="col-md-12 col-lg-3 header-img">
                <div class="header-img">
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
