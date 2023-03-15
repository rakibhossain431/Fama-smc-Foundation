import React from "react";
import Banner from "../../Components/Shared/Banner/Banner";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import Consumers from "../../Components/Consumers/Consumers";
import FoundationCard from "../../Components/FoundationCard/FoundationCard";
import SmcRevolution from "../../Components/SmcRevolution/SmcRevolution";
import WhitePaper from "../../Components/WhitePaper/WhitePaper";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SmcRevolution/>
      <Consumers />
      <FoundationCard />
      <WhitePaper/>
      <Footer />
    </>
  );
}

export default Home;
