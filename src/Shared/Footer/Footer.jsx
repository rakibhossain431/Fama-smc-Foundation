import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="social-container">
        <div className="footerSocialMenu">
          <div className="gutter-reset row justify-content-evenly py-5">
            <div className="socialLink col-4 col-lg-2 ">
              <i className="fab fa-twitter"></i>
              <a href="#" className="socialList px-1">
                Twitter
              </a>
            </div>
            <div className="socialLink col-4 col-lg-2 ">
              <i className="fab fa-reddit"></i>
              <a href="#" className="socialList px-1">
                Reddit
              </a>
            </div>
            <div className="socialLink col-4 col-lg-2 ">
              <i className="fab fa-telegram"></i>
              <a href="#" className="socialList px-1">
                Telegram
              </a>
            </div>
            <div className="socialLink col-4 col-lg-2 ">
              <i className="fab fa-discord"></i>
              <a href="#" className="socialList px-1">
                Discord
              </a>
            </div>
            <div className="socialLink col-4 col-lg-2 ">
              <i className="fab fa-github"></i>
              <a href="#" className="socialList px-1">
                GitHub
              </a>
            </div>
            <div className="socialLink col-4 col-lg-2 ">
              <i className="fab fa-instagram"></i>
              <a href="#" className="socialList px-1">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footerMenu mb-5">
          <div className="row">
            <div className="footerLogo col-12 col-sm-6 col-md-6 col-lg-3  order-2 order-lg-1 pb-5">
              <a href="#">
                <img src="./images/FooterIcon.png" alt="" />
              </a>
              <div className="footerLan py-3">
                <span>English</span>
                <i className="footerArrowIcon fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div>
                <i className="footerCopyRightIcon fas fa-copyright"></i>
                <span>2022 SMC</span>
              </div>
            </div>
            <div className="footerNavMenu col-12 col-lg-9 order-1 order-lg-2 pb-md-5">
              <div className="row">
                <div className="footerMenuList col-12 col-sm-6 col-md-6 col-lg-3">
                  <h6 className="footerHeder">Discover SMC</h6>
                  <li>
                    <Link to="/enterprise">Enterprise</Link>
                  </li>
                  <li>
                    <Link to="/government">Governments</Link>
                  </li>
                </div>
                <div className="footerMenuList col-12 col-sm-6 col-md-6 col-lg-3">
                  <h6 className="footerHeder">SMC Solutions</h6>
                  <li>
                    <Link to="/nft">SMC NFT</Link>
                  </li>
                  <li>
                    <Link to="/wallet">SMC Wallet</Link>
                  </li>
                  <li>
                    <Link to="/coin">SMC Coin</Link>
                  </li>
                </div>
                <div className="footerMenuList col-12 col-sm-6 col-md-6 col-lg-3">
                  <h6 className="footerHeder">About SMC Labs</h6>
                  <li>
                    <Link to="/lab">About Us</Link>
                  </li>
                </div>
                <div className="footerMenuList col-12 col-sm-6 col-md-6 col-lg-3">
                  <h6 className="footerHeder">Help Center</h6>
                  <li>
                    <h6 className="footerHeder">Careers</h6>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
