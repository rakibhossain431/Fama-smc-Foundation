import React from "react";
import { Link } from "react-router-dom";
import EnterpriseCard from "../EnterpriseCard/EnterpriseCard";

function EnterpriseUse() {
  return (
    <>
      <section className="about-labs">
        <div className="container">
          <div className="about-content">
            <div className="row about-content-item justify-content-around gap-3">
              <div className="col-3 about-content-left d-lg-block d-none">
                <div className="about-content-left-img">
                  <img src="./images/Enterprise/image (3).png" alt="img" />
                </div>
              </div>
              <div className="col-12 col-lg-7 about-content-right">
                <div className="about-content-right-text">
                  <h3>SMC for The Financial Sector</h3>
                  <div className="about-content-left-img d-lg-none d-block py-3">
                    <img src="./images/Enterprise/image (3).png" alt="img" />
                  </div>
                  <p>
                    Blockchain technology has been promising big changes in the financial sector for more than a decade.
                    But due to limitations of existing blockchain networks, real ground breaking progress is yet to
                    become a reality. SMC will change that. We are ready & capable of integrating complex financial
                    applications and processes into the SMC Blockchain Network.{" "}
                  </p>
                  <div className="contact-btn">
                    <Link to="/get-in-touch">
                      <button class="btn-full smc-btn primary">Get in Touch</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row about-content-item justify-content-around gap-3">
              <div className="col-3 about-content-left d-lg-block d-none">
                <div className="about-content-left-img">
                  <img src="./images/Enterprise/image (2).png" alt="img" />
                </div>
              </div>
              <div className="col-12 col-lg-7 about-content-right">
                <div className="about-content-right-text">
                  <h3>SMC for The Education Sector</h3>
                  <div className="about-content-left-img d-lg-none d-block py-3">
                    <img src="./images/Enterprise/image (2).png" alt="img" />
                  </div>
                  <p>
                    Blockchain technology can do wonders for the education sector. Using SMC Blockchain network,
                    educators and institutions can find new ways to empower their students. It is now possible to
                    automate the issuance, verification, maintenance of certifications/diplomas using a simple
                    blockchain application. Talk to our team to see how we can make it happen.
                  </p>
                  <div className="contact-btn">
                    <Link to="/get-in-touch">
                      <button class="btn-full smc-btn primary">Get in Touch</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row about-content-item justify-content-around gap-3">
              <div className="col-3 about-content-left d-lg-block d-none">
                <div className="about-content-left-img">
                  <img src="./images/Enterprise/image (1).png" alt="img" />
                </div>
              </div>
              <div className="col-12 col-lg-7 about-content-right">
                <div className="about-content-right-text">
                  <h3>SMC for The Healthcare Sector </h3>
                  <div className="about-content-left-img d-lg-none d-block py-3">
                    <img src="./images/Enterprise/image (1).png" alt="img" />
                  </div>
                  <p>
                    Using SMC Blockchain, it is possible turn many laborious quality assurance and telemedicine
                    workflows into simple secure applications. For example, SMC can be used to deploy applications that
                    detect counterfeit, outdated, or sub-standard medication. SMC can also be used safely store & verify
                    patient & hospital records among other things.
                  </p>
                  <div className="contact-btn">
                    <Link to="/get-in-touch">
                      <button class="btn-full smc-btn primary">Get in Touch</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <EnterpriseCard />
      <section class="enterprise-choose">
        <div class="container">
          <h2 class="choose-title text-center">Why Governments Choose SMC</h2>
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="d-flex gap-3 choose-box ">
                <div class="chose-icon mb-4">
                  <img src="./images/Icon/icon4.png" alt="icon" />
                </div>
                <div class="choose-text-box">
                  <h5>Bulletproof Security </h5>
                  <p>
                    SMC is one of the most secure blockchain
                    <br /> networks ever built{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="d-flex gap-3 choose-box ">
                <div class="chose-icon mb-4">
                  <img src="./images/Icon/Scalable.png" alt="icon" />
                </div>
                <div class="choose-text-box">
                  <h5>Limitless Scale </h5>
                  <p>
                    We have a team of dedicated professionals to
                    <br /> infinitely scalable{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="d-flex gap-3 choose-box ">
                <div class="chose-icon mb-4">
                  <img src="./images/Icon/Fast.png" alt="icon" />
                </div>
                <div class="choose-text-box">
                  <h5>Faster To Market </h5>
                  <p>
                    Using SMC enables governments to build <br /> products faster and go to mass distribution{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="d-flex gap-3 choose-box ">
                <div class="chose-icon mb-4">
                  <img src="./images/Icon/icon3.png" alt="icon" />
                </div>
                <div class="choose-text-box">
                  <h5>24/7 Support </h5>
                  <p>
                    We have a team of dedicated professionals to <br /> support our government partners{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnterpriseUse;
