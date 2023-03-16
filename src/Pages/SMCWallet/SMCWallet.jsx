import React from "react";
import Crypto from "../../Components/Crypto/Crypto";
import Exchange from "../../Components/Exchange/Exchange";
import GettingStart from "../../Components/GettingStart/GettingStart";
import NFT from "../../Components/NFT/NFT";
import PrivacyAndSecurity from "../../Components/PrivacyAndSecurity/PrivacyAndSecurity.jsx";
import Banner from "../../Components/Shared/Banner/Banner";
import Tools from "../../Components/Tools/Tools";
import Wallet from "../../Components/Wallet/Wallet";

export default function SMCWallet() {
  return (
    <>
      <Banner />
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
