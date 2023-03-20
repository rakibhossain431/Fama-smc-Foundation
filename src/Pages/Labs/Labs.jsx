import React from "react";
import AboutLabs from "../../Components/AboutLabs/AboutLabs";

function Labs() {
  return (
    <>
      <section className="banner_common">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title text-start">
                    Becoming The Worlds Most <br /> Trusted Recordkeeper
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutLabs />
    </>
  );
}

export default Labs;
