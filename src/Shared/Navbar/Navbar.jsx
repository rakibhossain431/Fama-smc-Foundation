import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarToggler, setNavbarToggler] = useState(false);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg smc-nav header1">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./images/SMClogo.png" alt="" />
        </Link>
        <div>
          <Link to="/get-in-touch">
            <button className="d-lg-none smc-nav-btn primary">Get In Touch</button>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavbarToggler((prevState) => !prevState)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover SMC
                <i className="fa fa-chevron-down ms-2"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/consumers ">
                    Consumers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/enterprise">
                    Enterprise
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/government">
                    Governments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/developers">
                    Developers
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SMC Solutions
                <i className="fa fa-chevron-down ms-2"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/nft">
                    SMC NFT
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/wallet">
                    SMC Wallet
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/coin">
                    SMC Coin
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About SMC Labs
                <i className="fa fa-chevron-down ms-2"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/lab">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/journey">
                    Our Journey
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/impact">
                    Impact
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
               <NavLink className="nav-link" to="/investor-relations">
                   Investor Relations
                </NavLink>
              </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Help Center
                <i className="fa fa-chevron-down ms-2"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          <Link to="/get-in-touch">
            <button className="smc-nav-btn bg-ore-btn primary">Get In Touch</button>
          </Link>
        </div>

        <nav
          id="dropdown"
          className={
            navbarToggler
              ? "custom-scroll template-main-menu menu-text-dark nav-expand"
              : "template-main-menu menu-text-dark nav-collapse"
          }
        >
          <nav className="mainmenu-nav" id="mobilemenu-popup">
            <div className="close-btn">
              <i className="fal fa-times" onClick={() => setNavbarToggler((prevState) => !prevState)}></i>
            </div>
            <ul className="mainmenu">
              <li className="nav-item">
                <a className="scroll" href="index.html">
                  Discover SMC
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className="sub-menu-item" href="#">
                      Consumers
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Governments
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="scroll" href="index.html">
                  SMC Solutions
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className="sub-menu-item" href="#">
                      Consumers
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Governments
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item full-width">
                <a className="scroll" href="index.html">
                  About SMC Labs
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className="sub-menu-item" href="#">
                      Consumers
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Governments
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu-item" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item full-width">
                <a className="scroll" href="tutorial-video.html">
                  Help Center
                </a>
              </li>
              <li className="nav-item">
                <a className="scroll" href="coming-soon.html">
                  Careers
                </a>
              </li>
            </ul>
            <div className="smc-mobile-btn">
              <a href="#" className="primary">
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
