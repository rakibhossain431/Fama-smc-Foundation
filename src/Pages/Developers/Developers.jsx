import React from "react";
import DevelopersCard from "../../Components/DevelopersCard/DevelopersCard";
import DevelopersResources from "../../Components/DevelopersResources/DevelopersResources";

function Developers() {
  return (
    <>
      <section class="banner banner-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="banner-content">
                <div class="entry-content">
                  <h1 class="entry-title">
                    The Power of Blockchain <br /> in Everyday Life
                  </h1>
                  <p class="entry-subtitle">
                    Blockchain is not just some obscure technology for hackers and purists, <br /> it has the power to
                    change your world in the near future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DevelopersCard />
      <DevelopersResources />
    </>
  );
}

export default Developers;
