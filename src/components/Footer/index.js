import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./style.css";

const Footers = () => {
  return (
    <div className="footer">
      <Row className="responsive">
        <Col xs lg="2" style={{ paddingTop: 40 }}>
          <img src={logo} style={{ width: 150, height: 170 }} />
        </Col>
        <Col xs lg="3" style={{ paddingTop: 80 }}>
          <p>
            Kantor Pusat <br />
            Midland Properti Office
            <br />
            Jl. Warakas 7 Gg.8 No.85 RT.01 RW.11, Tanjung Priok, <br />
            Jakarta Utara, Indonesia 14330 <br />
            Telp: 081322986243 <br />
            info@midlandproperti.com
          </p>
        </Col>
        <Col className="location" style={{ paddingTop: 10 }}>
          <h3 style={{ color: "white", paddingLeft: 0 }}>Lokasi Kantor</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.13992856781!2d106.88022361427815!3d-6.111856161640433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1fb850bb917d%3A0x12e2243c28da56e3!2sPT%20Midland%20Kreator%20Properti!5e0!3m2!1sid!2sid!4v1614655308786!5m2!1sid!2sid"
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
