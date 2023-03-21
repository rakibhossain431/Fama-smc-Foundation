import React from "react";

export default function Journey() {
  return (
    <>
      <section className="banner_common">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title text-start">
                    A Quick Look At The Journey <br /> of SMC Labs
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <h1>Our Journey / Roadmap</h1>
              <ul className="events my-5 pt-5 ms-0 ms-md-5">
                <li>
                  <time dateTime="Mar, 2023">Mar, 2023</time>
                  <span>
                    <strong>Exchange Beta</strong> Limited Beta of our Exchange Product
                  </span>
                </li>

                <li>
                  <time dateTime="Feb, 2023">Feb, 2023</time>
                  <span>
                    <strong>NFT Support</strong> NFT support added to Wallet product
                  </span>
                </li>

                <li>
                  <time dateTime="Dec, 2022">Dec, 2022</time>
                  <span>
                    <strong>Wallet Launch</strong> The launch of SMC Wallet
                  </span>
                </li>

                <li>
                  <time dateTime="Nov, 2022">Nov, 2022</time>
                  <span>
                    <strong>Full Commercial Launch</strong> Worldwide launch of SMC blockchain
                  </span>
                </li>

                <li>
                  <time dateTime="Oct, 2022">Oct, 2022</time>
                  <span>
                    <strong>Limited Product Launch</strong> Limited rollout of SMC blockchain product
                  </span>
                </li>

                <li>
                  <time dateTime="Sep, 2022">Sep, 2022</time>
                  <span>
                    <strong>Beta Launch</strong> The first beta of SMC blockchain
                  </span>
                </li>

                <li>
                  <time dateTime="Mar, 2022">Mar, 2022</time>
                  <span>
                    <strong>First Recruit</strong> The first engineer was onboarded to test hypothesis
                  </span>
                </li>

                <li>
                  <time dateTime="Dec, 2021">Dec, 2021</time>
                  <span className="last-event">
                    <strong>Idea</strong> The first time SMC was conceptualized
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container explore-section">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Explore what SMC <br /> has to offer.
                <br /> Join our journey.
              </h2>
            </div>
            <div className="col-md-6 content-vertical-center">
              <div>
                <p>
                  SMC is a once in a lifetime opportunity in technology. Be a part of its journey as a developer,
                  enthusiast, enterprise partner, or investor. We are excited to take you along as we make breakthrough
                  after breakthrough.
                </p>
                <div className="d-flex">
                  <button className="smc-btn secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
