import React, { useState } from "react";

const Navbar = () => {
  const [navbarToggler, setNavbarToggler] = useState(false);
  return (
    <nav class="navbar navbar-dark navbar-expand-lg smc-nav header1">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./images/SMClogo.png" alt="" />
        </a>
        <div>
          <button className="smc-nav-btn primary d-lg-none">Get In Touch</button>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavbarToggler((prevState) => !prevState)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover SMC
                <i class="fa fa-chevron-down ms-2"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                  Consumers 
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Enterprise
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Governments
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Developers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Partners
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SMC Solutions
                <i class="fa fa-chevron-down ms-2"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                  SMC NFT
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  SMC Wallet
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  SMC Coin
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About SMC Labs
                <i class="fa fa-chevron-down ms-2"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                  About Us
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Our Journey 
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Help Center
                <i class="fa fa-chevron-down ms-2"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                  Careers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button className="smc-nav-btn primary">Get In Touch</button>
        </div>

        <nav
          id="dropdown"
          class={
            navbarToggler
              ? "custom-scroll template-main-menu menu-text-dark nav-expand"
              : "template-main-menu menu-text-dark nav-collapse"
          }
        >
          <nav class="mainmenu-nav" id="mobilemenu-popup">
            <div class="close-btn">
              <i
                class="fal fa-times"
                onClick={() => setNavbarToggler((prevState) => !prevState)}
              ></i>
            </div>
            <ul class="mainmenu">
              <li class="nav-item">
                <a class="scroll" href="index.html">
                  Discover SMC
                </a>
                <ul class="sub-menu">
                  <li>
                    <a class="sub-menu-item" href="#">
                      Consumers
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Governments
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="scroll" href="index.html">
                  SMC Solutions
                </a>
                <ul class="sub-menu">
                  <li>
                    <a class="sub-menu-item" href="#">
                      Consumers
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Governments
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item full-width">
                <a class="scroll" href="index.html">
                  About SMC Labs
                </a>
                <ul class="sub-menu">
                  <li>
                    <a class="sub-menu-item" href="#">
                      Consumers
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Governments
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a class="sub-menu-item" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item full-width">
                <a class="scroll" href="tutorial-video.html">
                  Help Center
                </a>
              </li>
              <li class="nav-item">
                <a class="scroll" href="coming-soon.html">
                  Careers
                </a>
              </li>
            </ul>
            <div class="smc-mobile-btn">
              <a href="#" class="primary">
                Get Involved
              </a>
            </div>
          </nav>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
