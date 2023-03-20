import React from "react";

export default function Crypto() {
  return (
    <section className="crypto-section">
      <div className="container">
        <div className="row crypto-body">
          <div className="col-lg-6 d-none d-lg-block">
            <img src="./images/poster/buyCoin.png" alt="buy crypto" />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="crypto-details">
              <h2 className="hading-cus">Buy Crypto With a Click</h2>

              <img className="d-lg-none" src="./images/poster/buyCoin.png" alt="buy crypto" />

              <p>
                Buying crypto becomes easier than ever in the SMC Wallet. Our interface makes every transaction
                intuitive and transparent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
