import React from "react";
import banner from "../../Background/bgWallet.png";
import Crypto from "../../Components/Crypto/Crypto";
import Exchange from "../../Components/Exchange/Exchange";
import GettingStart from "../../Components/GettingStart/GettingStart";
import NFT from "../../Components/NFT/NFT";
import PrivacyAndSecurity from "../../Components/PrivacyAndSecurity/PrivacyAndSecurity.jsx";
import Tools from "../../Components/Tools/Tools";
import Wallet from "../../Components/Wallet/Wallet";

export default function SMCWallet() {
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
                  <h1>The Most Secure Wallet for All Digital Assets</h1>
                  <p>
                    SMC Wallet is a consumer digital product for designed to store crypto, NFT’s and other digital
                    assets
                  </p>
                  <img className="d-none d-lg-block" src="images/Icon/walletLogo.png" alt="wallet" />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 header-img">
                <div className="header-img">
                  <img src="images/poster/wallet.svg" alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Wallet />
      <Crypto />
      <Exchange />
      <Tools />
      <NFT />
      <PrivacyAndSecurity />
      <GettingStart />
    </>
  );
}
