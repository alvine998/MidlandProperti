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
import { build1, imgProfil, misi, perum, perum2, perumahan, visi } from "../../assets";

class VisiMisi extends Component {
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
            src={build1}
            alt="banner"
            style={{ height: 660, width: "100%" }}
          />
          <div style={{paddingTop:20, textAlign:'center', padding:20, backgroundColor:'white'}}>
                <h2>PT Midland Kreator Properti</h2>
                <img className="responsive-img" src={visi}/>
                <p>Kami adalah perusahaan yanag bergerak di bidang properti pembangunan
                    dengan membangun konsep syariah. 
                </p>
                <img className="responsive-img" src={misi}/>
                <p>1. Ini adalah misi nomor satu</p>
                <p>2. Ini adalah misi nomor dua</p>
                <p>3. Ini adalah misi nomor tiga</p>
                <p>4. Ini adalah misi nomor empat</p>
          </div>
          <Footers/>
        </div>
      </div>
    );
  }
}

export default VisiMisi;
