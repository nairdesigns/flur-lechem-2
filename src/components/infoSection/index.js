import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";
import { ButtonBasic } from "../ButtonElements";
import { Link } from "react-router-dom";

export const InfoSection = ({ id, title, subtitle, text, image, btnText }) => {
  return (
    <>
      <InfoContainer id={id} className="">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-black mb-5">{title}</Title>
              <p className="text-black mb-4">{text}</p>
              {/* <ButtonBasic to="" primary="true" dark="true" className="mx-auto">
                <Link to="/contact"> {btnText}</Link>
              </ButtonBasic> */}
              <a href="/contact" className="">
                contact us
              </a>
            </div>
            <div className="col-lg-6 col-sm-12 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
