import React from "react";
import EnterpriseUse from "../../Components/EnterpriseUse/EnterpriseUse";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Enterprise() {
  return (
    <>
      <section class="banner banner_mix">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="banner-content">
                <div class="entry-content">
                  <h1 class="entry-title">
                    The Only Enterprise Ready <br /> Blockchain
                  </h1>
                  <p class="entry-subtitle">
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
