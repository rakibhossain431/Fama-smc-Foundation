import React from "react";
import Consumers from "../../Components/Consumers/Consumers";
import FoundationCard from "../../Components/FoundationCard/FoundationCard";
import Banner from "../../Components/Shared/Banner/Banner";
import SmcRevolution from "../../Components/SmcRevolution/SmcRevolution";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Home() {
  return (
    <>
      <Banner />
      <SmcRevolution />
      <Consumers />
      <FoundationCard />
      <WhitePaper />
    </>
  );
}

export default Home;
