import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/header-bg.jpg";

//reusable components
import Services from "../common/Services";
import Portfolio from "../common/Portfolio";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Dobrodošli u našu teretanu!"
          subtitle="Drago nam je da ste spremni da trenirate"
          bottomtext="Pogledaj više"
          link="/about"
          showbutton={true}
          image={image}
        />
        <Services />
        <Portfolio />
      </div>
    );
  }
}

export default Home;
