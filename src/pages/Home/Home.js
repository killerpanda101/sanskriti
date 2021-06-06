import React from "react";
import { InfoSection } from "../../components";
import {
  homeOjbFive,
  homeOjbFour,
  homeOjbOne,
  homeOjbSix,
  homeOjbThree,
  homeOjbTwo,
} from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeOjbOne} />
      <InfoSection {...homeOjbTwo} />
      <InfoSection {...homeOjbThree} />
      <InfoSection {...homeOjbFour} />
      <InfoSection {...homeOjbFive} />
      <InfoSection {...homeOjbSix} />
    </>
  );
};

export default Home;
