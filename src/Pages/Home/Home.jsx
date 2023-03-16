import React from "react";
import Consumers from "../../Components/Consumers/Consumers";
import FoundationCard from "../../Components/FoundationCard/FoundationCard";
import SmcRevolution from "../../Components/SmcRevolution/SmcRevolution";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Home() {
  return (
    <>
      <section class="banner banner-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="banner-content">
                <div class="entry-content">
                  <h1 class="entry-title">
                    The Fastest Blockchain <br />
                    in The Universe{" "}
                  </h1>
                  <p class="entry-subtitle">
                    SMC is the only infinitely scalable blockchain network which easily
                    <br /> outperforms all existing solutions in the market{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SmcRevolution />
      <Consumers />
      <FoundationCard />
      <WhitePaper />
    </>
  );
}

export default Home;
