import React from "react";
import banner from "../../Background/banner2.png";

export default function Nft() {
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
                  <h1 className="banner-nft-entry-title">
                    NFT’s are FAST on the <br /> SMC Network
                  </h1>
                  <p>SMC was specifically designed to make it faster than ever to mint & trade NFT’s</p>
                  <img className="d-none d-lg-block" src="./images/Icon/smc.svg" alt="wallet" />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 header-img">
                <div className="header-img banner-nft-entry-img">
                  <img className="" src="./images/poster/wallet.svg" alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nft-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 nft-about-img">
              <img src="./images/poster/nft_about.svg" alt="nft" />
            </div>
            <div className="col-md-6 mt-5 mt-md-0 nft-about-box">
              <div className="nft-about-list">
                <h6>Fastest NFT Minting</h6>
                <p>SMC is the fastest when it comes to minting new NFT’s</p>
              </div>
              <div className="nft-about-list">
                <h6>Fastest NFT Minting</h6>
                <p>SMC is the fastest when it comes to minting new NFT’s</p>
              </div>
              <div className="nft-about-list">
                <h6>Fastest NFT Minting</h6>
                <p>SMC is the fastest when it comes to minting new NFT’s</p>
              </div>
              <div className="d-flex">
                <button type="button" className="smc-nav-btn btn-full bg-white-btn primary mt-5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nft-wallet-section">
        <div className="container">
          <div className="row nft-wallet-body">
            <div className="col-lg-6 d-none d-lg-block text-center">
              <img src="./images/poster/nft_beautiful.svg" alt="buy crypto" />
            </div>
            <div
              className="col-lg-6 d-flex align-items-center nft-bg"
              // style="background-image: url('images/backgrounds/nftBackground.png')"
            >
              <div className="nft-wallet-details">
                <h3 className="hading-cus">Beautifully integrated into wallet</h3>

                <img className="d-lg-none" src="./images/poster/nft_beautiful.svg" alt="buy crypto" />

                <p>
                  Don’t keep unlisted NFT’s lying around in trading marketplaces. Move them all into the SMC Wallet.
                  Your NFT’s are safe and always ready to trade when you store them in the SMC Wallet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exchange-section nft-wall">
        <div className="container">
          <div className="row exchange-body">
            <div className="col-md-6 d-flex align-items-center">
              <div className="exchange-details">
                <h3 className="hading-cus">Your Personal Wall of NFT’s</h3>

                <img className="d-lg-none" src="./images/poster/nft_personal.svg" alt="buy crypto" />

                <p>
                  See every NFT you own organized into an AI powered personalized wall just for you. This feature is
                  only available if you store your NFT’s into the SMC Wallet
                </p>
              </div>
            </div>
            <div className="col-md-6 d-none d-lg-block text-center">
              <img src="./images/poster/nft_personal.svg" alt="buy crypto" />
            </div>
          </div>
        </div>
      </section>

      <section className="nft-resource-section">
        <div className="container">
          <h3>Resources on NFT</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="./images/poster/resource_1.svg" className="card-img-top" alt="resource" />
                <div className="card-body">
                  <h5 className="card-title">Learn More About NFT Minting</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./images/poster/resource_2.svg" className="card-img-top" alt="resource" />
                <div className="card-body">
                  <h5 className="card-title">Learn More About Trading NFT’s</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="./images/poster/resource_3.svg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Learn More About Storing NFT’s</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="container download-body">
          <div className="align-items-center row">
            <div className="col-md-6">
              <h4>Download our App</h4>
              <p>Over 100,000 Downloads and Rated 4.5++ on Average</p>
            </div>
            <div className="col-md-6 d-flex align-items-start justify-content-center gap-4">
              <a href="#">
                <img src="./images/Icon/appleStore.png" alt="apple store" />
              </a>
              <a href="#">
                <img src="./images/Icon/playStore.png" alt="play store" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
