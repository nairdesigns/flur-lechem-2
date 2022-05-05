import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";
import { ButtonBasic } from "../ButtonElements";
import { Link } from "react-router-dom";

export const InfoSection = ({
  id,
  title,
  subtitle,
  text,
  image,
  btnText,
  text2,
  hidden,
}) => {
  return (
    <>
      <InfoContainer id={id} className="">
        <InfoWrapper>
          <div className="row expand-row gx-5 ">
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-black mb-5">{title}</Title>
              <p className="text-black mb-4">{text}</p>
              <h3 className="text-black mb-4">{text2}</h3>

              <ButtonBasic
                to=""
                primary="true"
                dark="true"
                className="mb-5"
                id={hidden}
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                {btnText}
              </ButtonBasic>
              {/* <a href="/contact" className="">
                contact us
              </a> */}
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
