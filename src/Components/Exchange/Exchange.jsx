import React from "react";

export default function Exchange() {
  return (
    <section class="exchange-section">
      <div class="container">
        <div class="row exchange-body">
          <div class="col-md-6 d-flex align-items-center">
            <div class="exchange-details">
              <h2 class="hading-cus">Exchange Easily</h2>

              <img class="d-lg-none" src="./images/poster/exchange.png" alt="buy crypto" />

              <p>Buy, sell, exchange hundreds of digital currencies without ever leaving your wallet.</p>
            </div>
          </div>
          <div class="col-md-6 d-none d-lg-block">
            <img src="./images/poster/exchange.png" alt="buy crypto" />
          </div>
        </div>
      </div>
    </section>
  );
}
