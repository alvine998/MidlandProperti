import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import {CardDeck, Card} from 'react-bootstrap';
import Footers from "../../components/Footer";
import './style.css';


import { makeStyles } from "@material-ui/core/styles";

// import image
import { build1, imgProfil, perum, perum2, perumahan, profil } from "../../assets";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sidebars />
        <div class="main">
          <img
            className="responsive-img"
            src={build1}
            alt="banner"
            // style={{ height: 660, width: "100%" }}
          />
          <div style={{paddingTop:20, textAlign:'center', padding:20, backgroundColor:'white'}}>
                <img src={profil} className="profil" />
                <h2>PT Midland Kreator Properti</h2>
                <p>Kami adalah perusahaan yanag bergerak di bidang properti pembangunan
                    dengan membangun konsep syariah. 
                </p>
          </div>
          <Footers/>
        </div>
      </div>
    );
  }
}

export default Profil;
