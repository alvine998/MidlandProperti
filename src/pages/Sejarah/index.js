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
import { build1, flowsej, imgProfil, misi, perum, perum2, perumahan, sejarah, visi } from "../../assets";

class Sejarah extends Component {
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
            className="responsive-img"
            // style={{ height: 660, width: "100%" }}
          />
          <div style={{paddingTop:20, textAlign:'center', padding:20, backgroundColor:'white'}}>
                <h2>PT Midland Kreator Properti</h2>
                <img src={sejarah} className="responsive-logo"/>
                <div>
                  <img src={flowsej} className="imgSej"/>
                  <h2>Awal Mula</h2>
                  <div>
                    <h4 className="para1">
                      Pada tahun 2020 PT Karya Cipta Property didirikan sebagai perusahaan yang bergerak di bidang
                      pemasaran rumah.
                      Seiring berkembangnya proses pemasaran yang berjalan dengan pesat, maka pada tahun 2021
                      PT Karya Cipta Property berubah nama menjadi PT Midland Kreator Properti atau lebih dikenal
                      dengan nama Midland Properti.
                      Midland Properti yang semula hanya melakukan pemasaran rumah berkembang menjadi perusahaan
                      developer properti dan telah banyak membangun properti, tercatat sudah puluhan properti rumah 
                      dibangun dengan 12 project berbeda.
                    </h4>
                  </div>
                </div>
          </div>
          <Footers/>
        </div>
      </div>
    );
  }
}

export default Sejarah;
