import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonR } from "../ButtonElements";
// import Video from "../../videos/bgvideo.mp4";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">What does Flur-Lechem mean?</h1>
        <p className="hero-text">
          Hebrew; /lehem/ <br></br> n. meaning bread, food
          <br></br>
          <br></br>
          Because we supply the{" "}
          <b>freshest bread, pastries, and baking ingredients!</b>
        </p>
        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
