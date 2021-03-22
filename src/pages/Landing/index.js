import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { CardDeck, Card, CardGroup } from "react-bootstrap";
import "./style.css";
import Footers from "../../components/Footer";

import { makeStyles } from "@material-ui/core/styles";

// import image
import { home1, logo, perum, perum2, perumahan } from "../../assets";
import StickyWhatsapp from "../../components/Whatsapp";
import axios from "axios";
import ArtikelDataService from "../../services/artikel.service";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.retriveArtikel = this.retriveArtikel.bind(this);
  }

  retriveArtikel(){
    ArtikelDataService.getAll()
    .then(res => {
      this.setState({
        artikel: res.data
      });
      console.log(res.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  componentDidMount(){
    this.retriveArtikel();
  }
  render() {
    return (
      <div>
        <Sidebars />
        <div class="main">
          <StickyWhatsapp />
          <img
            className="responsive-img"
            src={home1}
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

          {/* Ini News */}
          <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            <h2 style={{ textAlign: "center" }}>BERITA</h2>
            <div style={{ padding: 20 }}>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={perumahan} />
                  <Card.Body>
                    <Card.Title>Grand Bekasi</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={perumahan} />
                  <Card.Body>
                    <Card.Title>Grand Bekasi</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={perumahan} />
                  <Card.Body>
                    <Card.Title>Grand Bekasi</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </div>
          </div>

          <div style={{paddingTop:20, paddingBottom:20}}>
            <h2 style={{textAlign:'center'}}>PROYEK KAMI</h2>
            <div style={{padding:20}}>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={perumahan}/>
                  <Card.Body>
                    <Card.Title>Swasembada</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={perumahan}/>
                  <Card.Body>
                    <Card.Title>Swasembada</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={perumahan}/>
                  <Card.Body>
                    <Card.Title>Swasembada</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </div>

          {/* Ini Footer */}
          <Footers />
        </div>
      </div>
    );
  }
}

export default Landing;
