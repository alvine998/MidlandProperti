import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { CardDeck, Card } from "react-bootstrap";
import "./style.css";
import Footers from "../../components/Footer";

import { makeStyles } from "@material-ui/core/styles";

// import image
import { logo, perum, perum2, perumahan } from "../../assets";
import StickyWhatsapp from "../../components/Whatsapp";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sidebars />
        <div class="main">
          <StickyWhatsapp/>
          <img
            className="responsive-img"
            src={perum2}
            alt="banner"
            // style={{ height: 660, width: "100%" }}
          />
          <h2 style={{ textAlign: "center" }}>PROMO</h2>
          <div className="padd">
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={perumahan} />
                <Card.Body>
                  <Card.Title>Swasembada Residence</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={perumahan} />
                <Card.Body>
                  <Card.Title>Priok Permai</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={perumahan} />
                <Card.Body>
                  <Card.Title>Grand Bekasi</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
          {/* Ini Footer */}
          <Footers />
        </div>
      </div>
    );
  }
}

export default Landing;
