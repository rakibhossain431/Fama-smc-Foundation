import React from "react";

const FoundationCard = () => {
  return (
    <>
      <div className="foundation-card">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
            <div>
              <h1 className="d-none d-md-block title">
                Partner with SMC Foundation
              </h1>
              <p className="mt-4 mt-md-0">
                Build the next big thing with SMC. Whether it’s a DApp, Web 3.0
                or Metaverse app, SMC can help.
              </p>
              <ul>
                <li className="d-flex gap-2 align-items-center">
                  <p>
                    <img
                      className="me-2"
                      src="./images/Icon/checkMark.png"
                      alt=""
                    />
                    Easy To Get Started
                  </p>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <p>
                    <img
                      className="me-2"
                      src="./images/Icon/checkMark.png"
                      alt=""
                    />
                    Easy To Integrative
                  </p>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <p>
                    <img
                      className="me-2"
                      src="./images/Icon/checkMark.png"
                      alt=""
                    />
                    Community + Support
                  </p>
                </li>
              </ul>
              <div className="d-flex">
                <button className="btn-full smc-btn secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column flex-md-row justify-content-md-end order-1 order-md-2">
            <h1 className="d-block d-md-none title-mb">
              Partner with SMC Foundation
            </h1>
            <img src="./images/Gallery/buildCard.png" alt="" />
          </div>
        </div>
      </div>

      <div className="build-card">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
            <div>
              <h1 className="d-none d-md-block text-white title">
                Build with the SMC Blockchain
              </h1>
              <p className="mt-4 mt-md-0">
                Building blockchain applications with SMC is easy, explore what
                you can do with SMC
              </p>
              <div className="d-flex">
                <button className="btn-full smc-btn primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column flex-md-row justify-content-md-end order-1 order-md-2">
            <h1 className="d-block d-md-none text-white title-mb">
              Build with the SMC Blockchain
            </h1>
            <img src="./images/Gallery/buildCard2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundationCard;
