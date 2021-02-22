import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./style.css";

const Footers = () => {
  return (
    <div className="footer">
      <Row className="responsive">
        <Col xs lg="2" style={{paddingTop:40}}>
          <img src={logo} style={{ width: 150, height: 170 }} />
        </Col>
        <Col xs lg="3" style={{ paddingTop: 80 }}>
          <p>
            Kantor Pusat <br />
            Midland Properti Office
            <br />
            Jl. Tenggiri No.17, Tanjung Priok, <br />
            Jakarta Utara, Indonesia 14330 <br />
            Telp: 081322986243 <br />
            info@midlandproperti.com
          </p>
        </Col>
        <Col className="location" style={{ paddingTop: 10 }}>
          <h3 style={{ color: "white", paddingLeft: 0 }}>Lokasi Kantor</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5701910154019!2d106.88127465781098!3d-6.111794998893612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1fb8c9588c45%3A0xf1d5e5a0cf24c929!2sPT.%20Putra%20Syandana%20Sentosa!5e0!3m2!1sid!2sid!4v1613981684258!5m2!1sid!2sid"
            width="400"
            height="200"
            style={{border:1}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Footers;
