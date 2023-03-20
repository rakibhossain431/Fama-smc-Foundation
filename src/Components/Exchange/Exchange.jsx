import React from "react";

export default function Exchange() {
  return (
    <section className="exchange-section">
      <div className="container">
        <div className="row exchange-body">
          <div className="col-md-6 d-flex align-items-center">
            <div className="exchange-details">
              <h2 className="hading-cus">Exchange Easily</h2>

              <img className="d-lg-none" src="./images/poster/exchange.png" alt="buy crypto" />

              <p>Buy, sell, exchange hundreds of digital currencies without ever leaving your wallet.</p>
            </div>
          </div>
          <div className="col-md-6 d-none d-lg-block">
            <img src="./images/poster/exchange.png" alt="buy crypto" />
          </div>
        </div>
      </div>
    </section>
  );
}
