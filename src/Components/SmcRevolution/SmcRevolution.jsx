import React from "react";

function SmcRevolution() {
  return (
    <section className="revolution px-2 py-5">
      <div className="container">
        <h2 className="revolutionHeader py-4">How SMC is Revolutionary </h2>
        <div className="row d-flex">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="revolution-img">
              <img src="/images/Icon/secure.png" alt="" />
            </div>
            <h4>Secure </h4>
            <p className="r-text mt-0">
              The SMC Blockchain is as secure as bitcoin
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="revolution-img">
              <img src="/images/Icon/Fast.png" alt="" />
            </div>
            <h4>Fast</h4>
            <p className="r-text mt-0">
              The SMC Blockchain is as secure as bitcoin
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="revolution-img">
              <img src="/images/Icon/Scalable.png" alt="" />
            </div>
            <h4>Scalable</h4>
            <p className="r-text mt-0">
              Unlike any other, SMC Blockchain is infinitely scalable{" "}
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="revolution-img">
              <img src="/images/Icon/Reliable.png" alt="" />
            </div>
            <h4>Reliable</h4>
            <p className="r-text mt-0">
              Network failures are impossible in the SMC Blockchain{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmcRevolution;
