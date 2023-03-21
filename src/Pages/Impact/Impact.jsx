import React from "react";
import ImpactDetails from "../../Components/ImpactDetails/ImpactDetails";

function Impact() {
  return (
    <>
      <section className="banner_common">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-10 m-auto">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title text-start">
                    We Are Excited To Create a <br /> Better World
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactDetails />
    </>
  );
}

export default Impact;
