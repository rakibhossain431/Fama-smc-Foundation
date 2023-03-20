import React from "react";

function GovernmentUse() {
  return (
    <>
      <section className="smc-cbds">
        <div className="container">
          <div className="row cbds">
            <div className="col-xl-10 col-lg-12 cbds-text">
              <div className="d-flex cbds-text gap-3 justify-content-around">
                <h2 className="cbds-title col-xl-4 cols-3">SMC CBDC </h2>
                <p className="cbds-subtitle ml-3 col-xl-8 cols-9 ">
                  Our team of experts work with governments to develop, test, launch, and manage digital FIAT
                  currencies. We have an end-to-end solution for launching CBDC.{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-sm-12 col-sm-12">
              <a className="cbds-link" href="#">
                Get in Touch{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="smc-service">
        <div className="container">
          <div className="row revolution p-5">
            <div className="col-lg-3 col-6 ">
              <div className="revolution-img mb-4">
                <img src="./images/Governments/develop.png" alt="icon" />
              </div>
              <h4 className="revolution-title">Develop </h4>
            </div>
            <div className="col-lg-3 col-6">
              <div className="revolution-img mb-4">
                <img src="./images/Governments/text.png" alt="icon" />
              </div>
              <h4 className="revolution-title">Test </h4>
            </div>
            <div className="col-lg-3 col-6">
              <div className="revolution-img mb-4">
                <img src="./images/Governments/Launch.png" alt="icon" />
              </div>
              <h4 className="revolution-title">Launch</h4>
            </div>
            <div className="col-lg-3 col-6">
              <div className="revolution-img mb-4">
                <img src="./images/Governments/Manage .png" alt="icon" />
              </div>
              <h4 className="revolution-title">Manage </h4>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="smc-information">
        <div className="container">
          <h2 className="info-title text-center"> More Government Use Cases </h2>
          <p className="info-subtitle">There are more ways we can help governments </p>
          <div className="info">
            <div className="info-box">
              <h6>Gov. ID Cards</h6>
              <p>We can help governments issue, re-issue, distribute, and manage Identification cards </p>
            </div>
            <div className="info-box">
              <h6>Identity Verification </h6>
              <p>
                We can help governments securely verify identity of citizens in addition to providing record keeping
                services{" "}
              </p>
            </div>
            <div className="info-box">
              <h6>Voting Solutions </h6>
              <p>We can help democratic governments build, test, and deploy error free voting solutions </p>
            </div>
            <div className="info-box">
              <h6>Vaccine Distribution </h6>
              <p>We can help governments deploy vaccine tracking and distribution systems </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="gov-choose">
        <div className="container">
          <h2 className="choose-title text-center">Why Governments Choose SMC</h2>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/icon4.png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Bulletproof Security </h5>
                  <p>
                    SMC is one of the most secure blockchain
                    <br /> networks ever built{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/Scalable.png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Limitless Scale </h5>
                  <p>
                    We have a team of dedicated professionals to
                    <br /> infinitely scalable{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/Fast.png" alt="icon" />
                </div>
                <div className="choose-text-box">
                  <h5>Faster To Market </h5>
                  <p>
                    Using SMC enables governments to build <br /> products faster and go to mass distribution{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 choose-box ">
                <div className="chose-icon mb-4">
                  <img src="./images/Icon/icon3.png" alt="icon" />
                </div>
                <div className="choose-text-box">
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

export default GovernmentUse;
