import React from "react";
// import nftBackground from "../../../public/images/Background/nftBackground.png";

export default function NFT() {
  return (
    <section class="nft-section">
      <div class="container">
        <div class="row nft-body">
          <div
            class="col-md-6 d-flex align-items-center nft-bg"
            // style={{ backgroundImage: "url(/images/Background/nftBackground.png)" }}
          >
            <div class="nft-details">
              <h3>A Home for Your NFT’s</h3>
              <p>
                SMC is the best platform for NFT’s. And our Wallet can store your NFT’s just as easily as other digital
                currencies. The SMC Wallet is one secure place to store all things crypto e.g. all your digital assets,
                crypto currencies, and NFT’s under one roof
              </p>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center nft-img">
            <img src="images/poster/NFT.png" alt="NFT" />
          </div>
        </div>
      </div>
    </section>
  );
}
