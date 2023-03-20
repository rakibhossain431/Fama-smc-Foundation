import React from "react";
import GovernmentUse from "../../Components/GovernmentUse/GovernmentUse";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Government() {
  return (
    <>
      <section className="banner banner-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title">
                    Helping Goverments Scale <br /> Critical Services
                  </h1>
                  <p className="entry-subtitle">SMC is ready to help governments harness the power of blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GovernmentUse />
      <WhitePaper />
    </>
  );
}

export default Government;
