import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
// import Icon1 from "../../images/space.svg";
import Icon1 from "../../images/menu1.jpg";
import Icon3 from "../../images/real-time.svg";
// const Icon1 =
//   "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      {/* <ServicesH2>Coming soon...</ServicesH2> */}
      <div className="container text-center">
        <div className="row ">
          <div className="col service-card py-4">
            <img src={Icon1}></img>s
          </div>
          <div className="col service-card py-4">
            <img src={Icon1}></img>s
          </div>
        </div>
        <div className="row ">
          <div className="col service-card py-4">
            <img src={Icon1}></img>s
          </div>
          <div className="col service-card py-4">
            <img src={Icon1}></img>s
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
