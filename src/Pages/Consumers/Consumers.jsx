import React from "react";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

export default function Consumers() {
  return (
    <>
      <section className="banner banner_mix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title">
                    The Power of Blockchain <br /> in Everyday Life
                  </h1>
                  <p className="entry-subtitle">
                    Blockchain is not just some obscure technology for hackers and purists, <br /> it has the power to
                    change your world in the near future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="governments">
          <div className="container">
            <h1 className="consumer-m-title ps-0">What is SMC and How Can It Change Your World? </h1>
            <div className="row">
              <div className="col-12 col-md-6 consumer-img d-none d-md-block">
                <img src="./images/Consumer/w-is-smc.png" alt="img" />
              </div>
              <div className="col-12 col-md-6 content-vertical-center">
                <div>
                  <h1 className="d-none d-md-block">Blockchain for Consumers</h1>
                  <div className="consumer-img d-block d-md-none">
                    <img src="./images/Consumer/w-is-smc.png" alt="img" />
                  </div>
                  <p className="mt-4 mt-md-0">
                    SMC is a revolutionary blockchain platform that will soon influence everything from finance to
                    gaming to transporation & agriculture. SMC will make it possible for anyone to securely store and
                    process trillions of data points at a fraction of the cost of existing blockchain platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="consumer consumer-bg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 content-vertical-center">
                <div>
                  <h1>Journey To Metaverse, NFT, Web 3.0 and Beyond</h1>
                  <div className="consumer-img d-block d-md-none">
                    <img src="./images/Consumer/metaverse.png" alt="img" />
                  </div>
                  <p className="mt-4 mt-md-0">
                    Due to the scalability and reliability of SMC, our blockchain technology will accelerate the
                    adoption of Metaverse, Web 3.0 and NFT’s. These new technologies are currently something most people
                    can only dream about, but we’re about to make these dreams very real.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 consumer-img d-none d-md-block">
                <img src="./images/Consumer/metaverse.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="enterprise">
          <div className="container">
            <h1 className="consumer-m-title ps-0">Blockchain for Enterprise</h1>
            <div className="row">
              <div className="col-12 col-md-6 consumer-img">
                <img src="./images/Consumer/payment.png" alt="img" />
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <h1 className="d-none d-md-block">Blockchain for Consumers</h1>
                  <p className="mt-4 mt-md-0">
                    SMC is designed to build and enable consumer solutions. We are on a mission to build a fairer world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smc-wallet-section">
        <div className="container">
          <h1 className="consumer-m-title ps-0">Meet the SMC Wallet </h1>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="my-5 my-lg-0">
                <h1 className="d-none d-md-block">Meet the SMC Wallet</h1>
                <p className="mt-4 mt-md-0">We have designed a unique digital wallet.</p>
                <div className="d-block d-lg-none smc-wallet-poster text-center text-lg-end">
                  <img src="./images/Consumer/smc-wallet.png" alt="smc wallet" />
                </div>
                <div className="my-5 py-4">
                  <div className="row mx-0 mb-5">
                    <div className="col-2 d-flex align-items-center">
                      <img src="./images/Icon/easyToUse.svg" alt="easy to use" />
                    </div>
                    <div className="col-7">
                      <h4 className="mb-0">Easy To Use</h4>
                      <p className="mb-0">SMC Wallet has one of the simplest user interfaces of all digital wallets </p>
                    </div>
                  </div>

                  <div className="row mx-0 mb-5">
                    <div className="col-2 d-flex align-items-center">
                      <img src="./images/Icon/secure.svg" alt="built in security" />
                    </div>
                    <div className="col-7 col-">
                      <h4 className="mb-0">Built-in Security</h4>
                      <p className="mb-0">SMC Wallet is ranked as one of the most secure digital wallets out there</p>
                    </div>
                  </div>

                  <div className="row mx-0">
                    <div className="col-2 d-flex align-items-center">
                      <img src="./images/Icon/free.svg" alt="free forever" />
                    </div>
                    <div className="col-7 col-">
                      <h4 className="mb-0">Free Forever</h4>
                      <p className="mb-0">
                        SMC Wallet is Free To Use and It’s core features will always remain free to use{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn-full smc-btn primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-none d-lg-block smc-wallet-poster text-center text-lg-end">
              <img src="./images/Consumer/smc-wallet.png" alt="smc wallet" />
            </div>
          </div>
        </div>
      </section>

      <WhitePaper />
    </>
  );
}
