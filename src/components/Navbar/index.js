import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';

const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">KCProperty.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Beranda</Nav.Link>
          <Nav.Link href="#profil">Profil</Nav.Link>
          <Nav.Link href="#penjualan">Penjualan</Nav.Link>
          <Nav.Link href="#kontak">Kontak Kami</Nav.Link>
          <NavDropdown title="Galeri" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Foto</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Video
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Cari Disini" className="mr-sm-2" />
          <Button variant="outline-success">Cari</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
