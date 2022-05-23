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
import Icon2 from "../../images/menu2.jpg";
import Icon3 from "../../images/menu3.jpg";
import Icon4 from "../../images/menu4.jpg";

const api = "http://localhost:8080/api/messages/";

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        this.setState(data);
      });
  }

  render() {
    return (
      //Here is where the data from the API should be displayed
      <div className="newmessage">
        <p>User: </p>
        <p>Message:</p>
      </div>
    );
  }
}

const Menu = () => {
  return (
    <MenuContainer id="Menu">
      <MenuH1>Our Menu</MenuH1>
      {/* <MenuH2>Coming soon...</MenuH2> */}
      <div className="container text-center">
        <div className="row ">
          <div className="col Menu-card py-4">
            <img alt="menu" src={Icon1}></img>s
          </div>
          <div className="col Menu-card py-4">
            <img alt="menu" src={Icon2}></img>s
          </div>
        </div>
        <div className="row ">
          <div className="col Menu-card py-4">
            <img alt="menu" src={Icon3}></img>s
          </div>
          <div className="col Menu-card py-4">
            <img alt="menu" src={Icon4}></img>s
          </div>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
