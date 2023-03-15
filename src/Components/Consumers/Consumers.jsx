import React from "react";

const Consumers = () => {
  return (
    <>
      <h1 className="consumer-m-title">Blockchain for Consumers</h1>
      <div className="consumer consumer-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 consumer-img">
              <img src="./images/Gallery/consumer.jpg" alt="img" />
            </div>
            <div className="col-12 col-md-6 consumer-info">
              <div>
                <h1 className="d-none d-md-block">Blockchain for Consumers</h1>
                <p className="mt-4 mt-md-0">
                  SMC is designed to build and enable consumer solutions. We are
                  on a mission to build a fairer world.
                </p>
                <div className="d-flex">
                  <button className="smc-btn secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="enterprise">
        <div className="container">
          <h1 className="consumer-m-title ps-0">Blockchain for Enterprise</h1>
          <div className="row">
            <div className="col-12 col-md-6 consumer-info order-2 order-md-1">
              <div>
                <h1 className="d-none d-md-block">Blockchain for Consumers</h1>
                <p className="mt-4 mt-md-0">
                  SMC is designed to build and enable consumer solutions. We are
                  on a mission to build a fairer world.
                </p>
                <div className="d-flex">
                  <button className="smc-btn secondary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 consumer-img order-1 order-md-2">
              <img src="./images/Gallery/enterprise.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="governments">
        <div className="container">
          <h1 className="consumer-m-title ps-0">Blockchain for Enterprise</h1>
          <div className="row">
            <div className="col-12 col-md-6 consumer-img">
              <img src="./images/Gallery/government.jpg" alt="img" />
            </div>
            <div className="col-12 col-md-6 consumer-info">
              <div>
                <h1 className="d-none d-md-block">Blockchain for Consumers</h1>
                <p className="mt-4 mt-md-0">
                  SMC is designed to build and enable consumer solutions. We are
                  on a mission to build a fairer world.
                </p>
                <div className="d-flex">
                  <button className="smc-btn secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consumers;
