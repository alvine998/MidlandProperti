import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import Footers from "../../components/Footer";

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
import axios from "axios";

class Hubungi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:'',
      email:'',
      pesan:'',
    };
    this.handleNama = this.handleNama.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePesan = this.handlePesan.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNama = (event) => {
    this.setState({nama: event.target.value})
  }
  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }
  handlePesan = (event) => {
    this.setState({pesan: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method:"POST",
      url:"http://localhost:8000/pesan/",
      data: this.state
    }).then((response) => {
      if(response.data.status === 'success'){
        alert("Message sent");
        this.resetForm()
      } else if(response.data.status === 'fail'){
        alert("Message failed to sent");
      }
    });
  }
  resetForm() {
    this.setState({
      nama:'',
      email:'',
      pesan:'',
    })
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
              paddingBottom: 50
            }}
          >
              {/* <Form style={{paddingLeft:200, paddingRight:200}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="Nama" value={this.state.nama} onChange={this.handleNama} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@domain.com" value={this.state.email} onChange={this.handleEmail} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control as="textarea" rows={3} value={this.state.pesan} onChange={this.handlePesan} />
                </Form.Group>
                <Button onClick={this.handleSubmit} variant="primary" size="lg" block>
                    Kirim
                </Button>
              </Form> */}
              <h2>Silahkan Menghubungi Nomor Dibawah ini:</h2>
              <h3>Ikhna Abdul Kholik : 082122156316</h3>
              <h3>Sigit Muhammad : 082121951421</h3>
              <hr/>
              <h2>Atau Hubungi Email Dibawah ini:</h2>
              <h3>info@midlandproperti.com</h3>
              <h3>ikhnakholik@midlandproperti.com</h3>
              <h3>customer-care@midlandproperti.com</h3>
          </div>

          {/* Ini Footer */}
          <Footers />
        </div>
      </div>
    );
  }
}

export default Hubungi;
