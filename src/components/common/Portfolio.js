import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import img1 from "../assets/portfolio/01-thumbnail.jpg";
import img2 from "../assets/portfolio/02-thumbnail.jpg";
import img3 from "../assets/portfolio/03-thumbnail.jpg";
import img4 from "../assets/portfolio/04-thumbnail.jpg";
import img5 from "../assets/portfolio/05-thumbnail.jpg";
import img6 from "../assets/portfolio/06-thumbnail.jpg";

const items = [
  { title: "Grupni treninzi", caption: "Teretana", image: img1 },
  { title: "Personalni treneri", caption: "Teretana", image: img2 },
  { title: "Kardio", caption: "Teretana", image: img3 },
  { title: "Benč", caption: "Teretana", image: img4 },
  { title: "Mašine", caption: "Teretana", image: img5 },
  { title: "Bicikli", caption: "Teretana", image: img6 },
];

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Naše usluge</h3>
            </div>
          </div>
          <div className="row">
            {items.map((item, index) => {
              return <PortfolioItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
