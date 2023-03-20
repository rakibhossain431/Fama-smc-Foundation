import React from "react";
import EnterpriseUse from "../../Components/EnterpriseUse/EnterpriseUse";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Enterprise() {
  return (
    <>
      <section className="banner banner_mix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title">
                    The Only Enterprise Ready <br /> Blockchain
                  </h1>
                  <p className="entry-subtitle">
                    The SMC Blockchain is ready to meet the scaling challenges <br />
                    of Enterprise Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnterpriseUse />
      <WhitePaper />
    </>
  );
}

export default Enterprise;
