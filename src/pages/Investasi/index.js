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
import { build1, cardaw1, cardaw2, flowsej, imgProfil, invest1, invest2, investasi, misi, penghargaan, perum, perum2, perumahan, sejarah, sky3, visi } from "../../assets";

class Investasi extends Component {
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
            src={sky3}
            alt="banner"
            className="responsive-img"
            // style={{ height: 660, width: "100%" }}
          />
          <div style={{paddingTop:20, textAlign:'center', padding:20, backgroundColor:'white'}}>
                <img src={investasi} className="responsive-logo"/>
                <div style={{paddingBottom:50}}>
                  <img src={invest1} className="img1" />
                  <img src={invest2} className="img2" />
                </div>
          </div>
          <Footers/>
        </div>
      </div>
    );
  }
}

export default Investasi;
