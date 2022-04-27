import React, { useState } from "react";
import Footer from "../components/footer";
import Contact from "../components/contact";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
