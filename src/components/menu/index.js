import React from "react";
import {
  MenuContainer,
  MenuH1,
  MenuWrapper,
  MenuCard,
  MenuIcon,
  MenuH2,
  MenuP,
} from "./MenuElements";
// import Icon1 from "../../images/space.svg";
import Icon1 from "../../images/menu1.jpg";
import Icon3 from "../../images/real-time.svg";
// const Icon1 =
//   "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80";
const Menu = () => {
  return (
    <MenuContainer id="Menu">
      <MenuH1>Our Menu</MenuH1>
      {/* <MenuH2>Coming soon...</MenuH2> */}
      <div className="container text-center">
        <div className="row ">
          <div className="col Menu-card py-4">
            <img src={Icon1}></img>s
          </div>
          <div className="col Menu-card py-4">
            <img src={Icon1}></img>s
          </div>
        </div>
        <div className="row ">
          <div className="col Menu-card py-4">
            <img src={Icon1}></img>s
          </div>
          <div className="col Menu-card py-4">
            <img src={Icon1}></img>s
          </div>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
