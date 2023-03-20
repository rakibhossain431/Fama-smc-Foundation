import React from "react";
import Consumers from "../../Components/Consumers/Consumers";
import FoundationCard from "../../Components/FoundationCard/FoundationCard";
import SmcRevolution from "../../Components/SmcRevolution/SmcRevolution";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Home() {
  return (
    <>
      <section className="banner banner-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content">
                <div className="entry-content">
                  <h1 className="entry-title">
                    The Fastest Blockchain <br />
                    in The Universe
                  </h1>
                  <p className="entry-subtitle">
                    SMC is the only infinitely scalable blockchain network which easily
                    <br /> outperforms all existing solutions in the market
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
