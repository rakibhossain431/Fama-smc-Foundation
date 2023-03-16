import React from "react";
import Banner from "../../Components/Shared/Banner/Banner";

export default function Nft() {
  return (
    <>
      <Banner />

      <section class="nft-about">
        <div class="container">
          <div class="row">
            <div class="col-md-6 nft-about-img">
              <img src="./images/poster/nft_about.svg" alt="nft" />
            </div>
            <div class="col-md-6 nft-about-box">
              <div class="nft-about-list">
                <h6>Fastest NFT Minting</h6>
                <p>SMC is the fastest when it comes to minting new NFT’s</p>
              </div>
              <div class="nft-about-list">
                <h6>Fastest NFT Minting</h6>
                <p>SMC is the fastest when it comes to minting new NFT’s</p>
              </div>
              <div class="nft-about-list">
                <h6>Fastest NFT Minting</h6>
                <p>SMC is the fastest when it comes to minting new NFT’s</p>
              </div>
              <button type="button" class="smc-btn mt-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="nft-wallet-section">
        <div class="container">
          <div class="row nft-wallet-body">
            <div class="col-lg-6 d-none d-lg-block text-center">
              <img src="./images/poster/nft_beautiful.svg" alt="buy crypto" />
            </div>
            <div
              class="col-lg-6 d-flex align-items-center nft-bg"
              // style="background-image: url('images/backgrounds/nftBackground.png')"
            >
              <div class="nft-wallet-details">
                <h3 class="hading-cus">Beautifully integrated into wallet</h3>

                <img class="d-lg-none" src="./images/poster/nft_beautiful.svg" alt="buy crypto" />

                <p>
                  Don’t keep unlisted NFT’s lying around in trading marketplaces. Move them all into the SMC Wallet.
                  Your NFT’s are safe and always ready to trade when you store them in the SMC Wallet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="exchange-section nft-wall">
        <div class="container">
          <div class="row exchange-body">
            <div class="col-md-6 d-flex align-items-center">
              <div class="exchange-details">
                <h3 class="hading-cus">Your Personal Wall of NFT’s</h3>

                <img class="d-lg-none" src="./images/poster/nft_personal.svg" alt="buy crypto" />

                <p>
                  See every NFT you own organized into an AI powered personalized wall just for you. This feature is
                  only available if you store your NFT’s into the SMC Wallet
                </p>
              </div>
            </div>
            <div class="col-md-6 d-none d-lg-block text-center">
              <img src="./images/poster/nft_personal.svg" alt="buy crypto" />
            </div>
          </div>
        </div>
      </section>

      <section class="nft-resource-section">
        <div class="container">
          <h3>Resources on NFT</h3>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="./images/poster/resource_1.svg" class="card-img-top" alt="resource" />
                <div class="card-body">
                  <h5 class="card-title">Learn More About NFT Minting</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="./images/poster/resource_2.svg" class="card-img-top" alt="resource" />
                <div class="card-body">
                  <h5 class="card-title">Learn More About Trading NFT’s</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="./images/poster/resource_3.svg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Learn More About Storing NFT’s</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="download-section">
        <div class="container download-body">
          <div class="row">
            <div class="col-md-6">
              <h4>Download our App</h4>
              <p>Over 100,000 Downloads and Rated 4.5++ on Average</p>
            </div>
            <div class="col-md-6 d-flex align-items-start justify-content-center gap-4">
              <a href="#">
                <img src="images/icons/appleStore.png" alt="apple store" />
              </a>
              <a href="#">
                <img src="images/icons/playStore.png" alt="play store" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="social-section">
        <div class="container">
          <div class="row">
            <ul class="social">
              <li class="social-link">
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                  Twitter
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <i class="fa-brands fa-telegram"></i>
                  Telegram
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <i class="fa-brands fa-discord"></i>
                  Discord
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                  GitHub
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <i class="fa-brands fa-reddit"></i>
                  Reddit
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}