import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/about.jpg";
import one from "../assets/portfolio/01-full.jpg";
import two from "../assets/portfolio/02-full.jpg";
import three from "../assets/portfolio/03-full.jpg";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="O nama"
          subtitle="Istinita priča"
          showbutton={false}
          image={image}
        />
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Teretana Žarkovo
                </h2>
                <h3 className="section-subheading text-muted">
                  Pre dve godine smo otvorili teretanu sa ciljem da svi žitelji 
                  Žarkova imaju priliku da treniraju i uživaju u našoj zajednici.
                
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={one}
                        style={{ height: 160, width: 160 }}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2019-2021</h4>
                        <h4 className="subheading">Naš cilj</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Verujemo da se uspeh u postiže samo radom,
                          kako na poslu tako i sa našim telom, da bi postigli
                          naše željeno telo moramo raditi na njemu. Ovo postižemo
                          redovnim treninzima i ishranom. 
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={two}
                        style={{ height: 160, width: 160 }}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2020</h4>
                        <h4 className="subheading">Ponosni na</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Posebno smo ponosni na rast broja članova i naše zajednice.
                          Sada sa preko 200 članova i 12 personalnih trenera i pristupačnim cenama
                          možemo još više ljudi pružiti priliku da treniraju.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={three}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2020</h4>
                        <h4 className="subheading">Zaposlenje</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          U procesu nadogradnje našeg prostora sa novim spratom
                          i novim mašinama.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>
                        Budi deo
                        <br />
                        naše
                        <br />
                        zajednice!
                      </h4>
                      <Link className="btn btn-primary" to="/contact">
                        Prijavi se
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
