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
import axios from "axios";

class VisiMisi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles:[]
    };
  }

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
        <div className="main">
          <img
            src={build1}
            alt="banner"
            className="responsive-img"
            // style={{ height: 660, width: "100%" }}
          />
          <div style={{paddingTop:20, textAlign:'center', padding:20, backgroundColor:'white'}}>
                <h2>PT Midland Kreator Properti</h2>
                <div>
                  <img className="responsive-visi" src={visi}/>
                  <h4 className="para1">
                    Menjadi salah satu dari 10 pengembang terbaik dan terpercaya di Indonesia dengan menerapkan konsep
                    syariah, serta mengedepankan kualitas, inovasi, dan ketepatan waktu demi memberikan pelayanan
                    maksimal baik bagi investor maupun konsumen.
                  </h4>
                </div>
                {/* {profiles && profiles.map((datas) => (
                  <p>{datas.visi}</p>
                ))} */}
                <div>
                  <img className="responsive-visi" src={misi}/>
                  <h4 className="para2">
                    - Menghadirkan properti dengan harga terjangkau dan berkualitas <br/>
                    - Menjadi solusi dalam mengatasi masalah sulitnya masyarakat dalam memiliki hunian <br/>
                    - Mengedepankan nilai amanah dan jujur dalam memberikan pelayanan kepada investor dan konsumen
                  </h4>
                </div>

                {/* {profiles && profiles.map((datas) => (
                  <p>{datas.misi}</p>
                ))} */}
          </div>
          <Footers/>
        </div>
      </div>
    );
  }
}

export default VisiMisi;
