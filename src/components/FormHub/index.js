import React, { Component } from "react";
import {Button, Form} from 'react-bootstrap';

const FormHub = () => {
  return (
    <Form style={{paddingLeft:40, paddingRight:40}}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@domain.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Pesan</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" size="lg" block>
          Kirim
      </Button>
    </Form>
  );
};

export default FormHub;
