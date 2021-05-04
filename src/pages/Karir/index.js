import React, { Component } from "react";
import Sidebars from "../../components/Sidebar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import {CardDeck, Card, Form, Button, Row, Col} from 'react-bootstrap';
import Footers from "../../components/Footer";
import './style.css';


import { makeStyles } from "@material-ui/core/styles";

// import image
import { build1, cardaw1, cardaw2, flowsej, imgProfil, invest1, invest2, investasi, market, misi, penghargaan, perum, perum2, perumahan, sejarah, sky3, visi } from "../../assets";

class Karir extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nama:'',
        domisili:'',
        email:'',
        usia:'',
    };

    this.onChangeDomisili = this.onChangeDomisili.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeUsia = this.onChangeUsia.bind(this);
  }

  onChangeNama(e) {
    this.setState({nama: e.target.value})
  };

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  };

  onChangeUsia(e) {
    this.setState({usia: e.target.value})
  };

  onChangeDomisili(e) {
    this.setState({domisili: e.target.value})
  };

  render() {
    return (
      <div>
        <Sidebars />
        <div class="main">
            <div className="center">
                <img
                    src={market}
                    alt="banner"
                    className="responsive-img"
                    // style={{ height: 660, width: "100%" }}
                />
            </div>
          
          <div style={{paddingTop:20, textAlign:'left', padding:20, backgroundColor:'white'}}>
              {/* <Row>
                <div className="gridline">
                    <Col>
                        <Form>
                                <Form.Group>
                                    <Form.Label>Nama :</Form.Label>
                                    <Form.Control type="text" placeholder="Nama" value={this.state.nama} onChange={this.onChangeNama} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Alamat :</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Alamat domisili" value={this.state.domisili} onChange={this.onChangeDomisili} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Usia :</Form.Label>
                                    <Form.Control type="text" placeholder="... tahun" value={this.state.usia} onChange={this.onChangeUsia} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control type="email" placeholder="name@domain.com" value={this.state.email} onChange={this.onChangeEmail} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Lowongan Tersedia :</Form.Label>
                                    <Form.Control as="select">
                                        <option></option>
                                        <option>Marketing</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" size="lg" block href="https://api.whatsapp.com/send?phone=6282122156316&text=Assalamualaikum Saya Lihat Dari Web Midlandproperti.com">
                                    Kirim Lamaran
                                </Button>
                        </Form>
                    </Col>
                    <Col>
                        <h4>Hello</h4>
                    </Col>
                    </div>
              </Row> */}

              <div className="gridline">
                <h2 style={{textAlign:'center   '}}>Lowongan Pekerjaan</h2>
                <br/>
                <h2>Marketing</h2>
                <h4>
                    Tugas & Tanggung jawab :<br/>
                    - Melakukan Penjualan Unit Rumah <br/>
                    - Memberikan Presentasi Produk Perusahaan Kepada Customer <br/>
                    - Melakukan Pemasaran Secara Online di Internet <br/>
                    - Membantu Customer Terkait Kelengkapan Administrasi yang Diperlukan Untuk Pembelian Unit <br/>
                    - Melakukan Survey Unit dengan Customer
                </h4>
                <h4>
                    Persyaratan : <br/>
                    - Memiliki KTP <br/>
                    - Minimal Usia 18 Tahun <br/>
                    - Diutamakan Domisili Jabodetabek <br/>
                    - Pendidikan Minimal SMA/SLTA <br/>
                    - Diutamakan Memiliki Pengalaman Sebagai Sales/Marketing Produk Properti <br/>
                    - Komunikatif <br/>
                </h4>
                <Button variant="primary" size="lg" block href="https://api.whatsapp.com/send?phone=6282122156316&text=Assalamualaikum Saya Ingin Melamar Menjadi Marketing di Midland Properti">
                    Bergabung Sekarang
                </Button>
              </div>
          </div>
          <Footers/>
        </div>
      </div>
    );
  }
}

export default Karir;
