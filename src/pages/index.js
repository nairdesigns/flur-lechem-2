import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

// import Image1 from "../images/design-notes.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Menu from "../components/menu";
import Footer from "../components/footer";
import ImageLocation from "../images/location.jpg";
import Content from "../components/fb-posts";

const Image1 =
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle=""
        title="A Bakery Like None Other"
        text="Flur-Lechem is your one-stop shop & supplier with a wide range of fresh & tasty baked goods for every occasion. 🇵🇭 💯 Trusted quality pastries! In every thing give thanks: for this is the will of God in Christ Jesus concerning you."
        btnText="Contact Us"
        text2="-1 Thess 5:18"
      />
      {/* <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Morbi iaculis enim"
        title="In hac habitasse"
        text="Phasellus porta sagittis sapien. Nam quis odio eu libero tempus rutrum. Suspendisse nec eros eget ex cursus rhoncus. Proin at velit quis ante pretium porta. Quisque pulvinar, elit et tincidunt ultricies, mauris odio luctus risus, vitae auctor elit risus a tortor. Nunc pulvinar purus id est rutrum vulputate. Mauris venenatis lectus vel nisi semper scelerisque."
        btnText="Explore" */}

      <Menu />
      <Content />
      <InfoSection
        id="location"
        image={ImageLocation}
        title="Our Location"
        text=""
        hidden="hidden"
      />
      {/* <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Duis et lectus accumsan"
        title="Quisque dui justo"
        text="Cras et ligula eget neque ornare tempor et vitae est. Duis et lectus accumsan, mollis dui a, finibus metus. Quisque dui justo, ullamcorper eget luctus id, consectetur eget nunc. In quis arcu erat. Morbi consequat imperdiet lorem, porta porta erat hendrerit vel. Aliquam dignissim purus at dolor posuere euismod."
        btnText="Read more"
      /> */}
      <Footer />
    </>
  );
};
