import React from "react";

export default function Crypto() {
  return (
    <section class="crypto-section">
      <div class="container">
        <div class="row crypto-body">
          <div class="col-lg-6 d-none d-lg-block">
            <img src="./images/poster/buyCoin.png" alt="buy crypto" />
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div class="crypto-details">
              <h2 class="hading-cus">Buy Crypto With a Click</h2>

              <img class="d-lg-none" src="./images/poster/buyCoin.png" alt="buy crypto" />

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
