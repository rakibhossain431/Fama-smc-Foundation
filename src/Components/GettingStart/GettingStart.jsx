import React from "react";
import nftBackground from "../../Background/nftBackground.png";

export default function GettingStart() {
  return (
    <section class="getting-start-section">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 d-flex align-items-center getting-start-bg"
            style={{ backgroundImage: `url(${nftBackground}` }}
          >
            <div class="getting-start-details">
              <h3>Getting Started is Easy</h3>
              <p>
                SMC Wallet is designed to be intuitive at every step. Sign up and see how easy it is to buy/sell/hold
                crypto, NFT’s, and other digital assets with the SMC Wallet.
              </p>
            </div>
          </div>
          <div class="col-md-6 nft-img">
            <img src="images/poster/gettingStart.png" alt="NFT" />
          </div>
        </div>
      </div>
    </section>
  );
}
