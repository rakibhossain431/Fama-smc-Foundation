import React, { useEffect, useState } from "react";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

export default function Partners() {
  const [windowSize, setSize] = useState({
    x: window.innerWidth,
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <>
      <section className="banner banner_mix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title">
                    Tools To Do Anything <br /> and Everything
                  </h1>
                  <p className="entry-subtitle">We have partners almost in every service vertical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5 pb-5">
        <div className="row">
          <div className="col-md-5 col-lg-3 mt-3">
            <aside className="sidebar">
              <nav>
                <ul>
                  <li className="mb-3 mb-md-5">
                    <button
                      type="button"
                      className="category-btn"
                      data-bs-toggle="collapse"
                      data-bs-target="#financialServices"
                      aria-expanded="true"
                      aria-controls="financialServices"
                    >
                      Financial Services
                    </button>
                    <div class={windowSize.x <= 767 ? "collapse" : "collapse show"} id="financialServices">
                      <ul>
                        <li className="nav-item">
                          <a href="#">Wallets</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">De-Fi</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">NeoBanking</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Insurance</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Loans</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="category-btn"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                    >
                      Other Services
                    </button>
                    <div class={windowSize.x <= 767 ? "collapse" : "collapse show"} id="collapseExample">
                      <ul>
                        <li className="nav-item">
                          <a href="#">Aliquam ligula</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Lorem ipsum</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Vulputate</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Aliquam ligula</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Lorem ipsum</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Vulputate</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
          <div className="col-md-7 col-lg-9 mt-4">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
              <div class="col">
                <div class="card partners">
                  <div className="partners-image">
                    <img src="./images/Partners/logo-white.svg" class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title mb-0">Featured Partner 1</h5>
                    <p class="card-text">Curabitur quis eros tempus.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card partners">
                  <div className="partners-image">
                    <img src="./images/Partners/logo-white.svg" class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title mb-0">Featured Partner 2</h5>
                    <p class="card-text">Curabitur quis eros tempus</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card partners">
                  <div className="partners-image">
                    <img src="./images/Partners/logo-white.svg" class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title mb-0">Featured Partner 3</h5>
                    <p class="card-text">Curabitur quis eros tempus.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="services mt-5 pt-5">
              <div className="service-heading">
                <h3 className="mb-0">DeFi</h3>
                <button className="see-more-btn">See All</button>
              </div>
              <div className="mt-5">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-01.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Duis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-01.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Duis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-01.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Duis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services mt-5 pt-5">
              <div className="service-heading">
                <h3 className="mb-0">NFT</h3>
                <button className="see-more-btn">See All</button>
              </div>
              <div className="mt-5">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-02.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Quis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-02.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Quis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-02.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Quis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-02.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Quis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-02.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Quis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-02.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Quis</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services mt-5 pt-5">
              <div className="service-heading">
                <h3 className="mb-0">Wallets</h3>
                <button className="see-more-btn">See All</button>
              </div>
              <div className="mt-5">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-03.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Wallets</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-03.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Wallets</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-03.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Wallets</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-03.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Wallets</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-03.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Wallets</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-03.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Wallets</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services mt-5 pt-5">
              <div className="service-heading">
                <h3 className="mb-0">Staking</h3>
                <button className="see-more-btn">See All</button>
              </div>
              <div className="mt-5">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-04.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Staking</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-04.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Staking</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-04.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Staking</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-04.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Staking</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-04.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Staking</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-04.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Staking</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services mt-5 pt-5">
              <div className="service-heading">
                <h3 className="mb-0">Coins</h3>
                <button className="see-more-btn">See All</button>
              </div>
              <div className="mt-5">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-05.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Coins</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-05.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Coins</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-05.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Coins</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-05.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Coins</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="service-card">
                      <div className="row">
                        <div className="col-3 pe-0 service-image">
                          <img src="./images/Partners/service-05.svg" alt="" />
                        </div>
                        <div className="col-9 ps-0 service-details">
                          <h6 className="mb-1">Coins</h6>
                          <p className="mb-0">Curabitur tempor quis eros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container apply-for-partner-card">
          <div className="row">
            <div className="col-md-12">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./images/Partners/card.png" className="w-100" alt="smc" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body content-vertical-center">
                      <div>
                        <h2>
                          Apply To Become a <br /> Partner Today
                        </h2>
                        <div className="d-flex">
                          <button className="smc-btn primary">Get in Touch</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhitePaper />
    </>
  );
}
