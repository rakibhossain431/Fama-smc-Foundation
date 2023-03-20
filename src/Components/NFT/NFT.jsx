import React from "react";
// import nftBackground from "../../../public/images/Background/nftBackground.png";

export default function NFT() {
  return (
    <section className="nft-section">
      <div className="container">
        <div className="row nft-body">
          <div
            className="col-md-6 d-flex align-items-center nft-bg"
            // style={{ backgroundImage: "url(/images/Background/nftBackground.png)" }}
          >
            <div className="nft-details">
              <h3>A Home for Your NFT’s</h3>
              <p>
                SMC is the best platform for NFT’s. And our Wallet can store your NFT’s just as easily as other digital
                currencies. The SMC Wallet is one secure place to store all things crypto e.g. all your digital assets,
                crypto currencies, and NFT’s under one roof
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center nft-img">
            <img src="images/poster/NFT.png" alt="NFT" />
          </div>
        </div>
      </div>
    </section>
  );
}
