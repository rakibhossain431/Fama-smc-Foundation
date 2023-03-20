import React from "react";

function WhitePaper() {
  return (
    <section className="whitepaper">
      <div className="container">
        <div className="row whitepaper-box justify-content-evenly gx-5 gy-4 py-5 m-0">
          <div className="whitepaperLeft d-flex col-3">
            <img src="./images/Icon/SMC.png" alt="logo" />
            <p>Whitepaper </p>
          </div>
          <div className="whitepaperRight col-6 order-sm-2 p-0">
            <h2>Download Our Whitepaper </h2>
            <p>
              Read the whitepaper on SMC. We have carefully explained our
              technology and research for complete transparency.{" "}
            </p>
            <a href="#">Download</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhitePaper;
