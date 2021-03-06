import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { CardDeck, Card, Row, Col } from "react-bootstrap";
import Footers from "../../components/Footer";
import "./style.css";

import { makeStyles } from "@material-ui/core/styles";

// import image
import {
  build1,
  imgProfil,
  lgoo2,
  logo,
  perum,
  perum2,
  perumahan,
  profil,
} from "../../assets";
import axios from "axios";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {

      profiles:[],
    };
  }

      // componentDidMount(){
    //     axios({
    //         method:"GET",
    //         url:"http://localhost:8000/pesan/",
    //         data: this.state
    //     })
    //     .then(res => {
    //         this.setState({
    //             email: res.data,
    //         });
    //         console.log(res.data);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     });

    // }

  componentDidMount(){
    axios({
      method:"GET",
      url:"http://localhost:8000/profil/",
      data:this.state
    })
    .then(res => {
      this.setState({
        profiles: res.data,
      });
      console.log(res.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const {profiles} = this.state;
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
          <div
            style={{
              paddingTop: 20,
              textAlign: "center",
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <img src={profil} className="profil" />
            <h2>PT Midland Kreator Properti</h2>
            {/* {profiles && profiles.map((datas) => (
              <h4 style={{textAlign:'justify', paddingLeft:100, paddingRight:100, lineHeight:1.8}}>
                {datas.profile}
              </h4>
            ))}  */}
            <div className="leftok">
              <Row>
                <Col xs lg="2" style={{paddingBottom:50}}>
                  <img src={lgoo2} className="logoimg"/>
                </Col>
                <Col xs lg="10" style={{paddingTop:50}}>
                  <h4 className="paragraph">
                    PT Midland Kreator Properti adalah sebuah perusahaan yang bergerak di bidang developer properti khususnya
                    real estate dengan mengutamakan kualitas, ketepatan waktu, dan harga yang terjangkau dengan sistem
                    dan konsep syariah.
                  </h4>
                </Col>
              </Row>
            </div>
          </div>
          <Footers />
        </div>
      </div>
    );
  }
}

export default Profil;
