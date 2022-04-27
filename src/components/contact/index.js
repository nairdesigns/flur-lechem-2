import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactP,
  ContactInput,
} from "./ContactElements";
import { Button } from "../ButtonElements";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Contact Us!</h3>
          <form>
            <ContactP>Email</ContactP>
            <ContactInput type="text" placeholder="Enter your email..." />
            <ContactP>Password</ContactP>
            <ContactInput
              type="password"
              placeholder="Enter your password..."
            />
            <Button className="mt-5 mb-3">Continue</Button>
          </form>
          <p className="center-align">
            Forgot your password? <a href="/">Reset here</a>
          </p>
        </div>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
