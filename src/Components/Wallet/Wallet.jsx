import React from "react";

export default function Wallet() {
  return (
    <section class="wallet-section">
      <div class="container">
        <h2>What Makes SMC Wallet Special?</h2>
        <p>Learn why hundreds of thousands of users are choosing SMC Wallet</p>
        <div class="row gy-5 gy-lg-0 wallet-card">
          <div class="box col-md-6 col-lg-3">
            <img src="./images/Icon/easyToUse.svg" alt="Easy To Use" />
            <h4>Easy To Use</h4>
            <p>SMC Wallet has one of the simplest user interfaces of all digital wallets</p>
          </div>
          <div class="box col-md-6 col-lg-3">
            <img src="./images/Icon/secure.svg" alt="Easy To Use" />
            <h4>100% Secure</h4>
            <p>SMC Wallet is ranked as one of the most secure digital wallets out there</p>
          </div>
          <div class="box col-md-6 col-lg-3">
            <img src="./images/Icon/free.svg" alt="Easy To Use" />
            <h4>Free Forever</h4>
            <p>SMC Wallet is Free To Use and It’s core features will always remain free to use</p>
          </div>
          <div class="box col-md-6 col-lg-3">
            <img src="./images/Icon/dApp.svg" alt="Easy To Use" />
            <h4>DApps</h4>
            <p>SMC Wallet is integrated with your favorite DApps and we’re working on more integrations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
