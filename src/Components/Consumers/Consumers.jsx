import React from "react";
import { Link } from "react-router-dom";

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
                  SMC is designed to build and enable consumer solutions. We are on a mission to build a fairer world.
                </p>

                <Link className="d-flex w-100" to="/consumers">
                  <button className="smc-btn bg-ore-btn secondary">Learn More</button>
                </Link>
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
                <h1 className="d-none d-md-block">Blockchain for Enterprise</h1>
                <p className="mt-4 mt-md-0">
                  SMC has various enterprise solutions and we’re always adding more based on requests.
                </p>

                <Link className="d-flex w-100" to="/enterprise">
                  <button className="smc-btn bg-white-btn secondary">Learn More</button>
                </Link>
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
          <h1 className="consumer-m-title ps-0">Blockchain for Governments</h1>
          <div className="row">
            <div className="col-12 col-md-6 consumer-img">
              <img src="./images/Gallery/government.jpg" alt="img" />
            </div>
            <div className="col-12 col-md-6 consumer-info">
              <div>
                <h1 className="d-none d-md-block">Blockchain for Governments</h1>
                <p className="mt-4 mt-md-0">
                  SMC is starting to rollout government solutions. We can help with identification and Gov. service
                  distribution among others.
                </p>

                <Link className="d-flex w-100" to="/government">
                  <button className="smc-btn bg-white-btn secondary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consumers;
