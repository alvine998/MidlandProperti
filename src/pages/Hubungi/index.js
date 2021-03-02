import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { CardDeck, Card } from "react-bootstrap";
import "./style.css";
import Footers from "../../components/Footer";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { makeStyles } from "@material-ui/core/styles";

// import image
import {
  callcenter,
  hubungi,
  logo,
  perum,
  perum2,
  perumahan,
} from "../../assets";
import StickyWhatsapp from "../../components/Whatsapp";
import InputWithIcon from "../../components/FormHub";
import FormHub from "../../components/FormHub";

class Hubungi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sidebars />
        <div class="main">
          {/* Whatsapp */}
          <StickyWhatsapp />
          <img
            className="responsive-img"
            src={callcenter}
            alt="banner"
            // style={{ height: 660, width: "100%" }}
          />
          <div
            style={{
              paddingTop: 20,
              textAlign: "center",
              padding: 20,
              backgroundColor: "white",
            }}
          >
              <FormHub/>
          </div>

          {/* Ini Footer */}
          <Footers />
        </div>
      </div>
    );
  }
}

export default Hubungi;
