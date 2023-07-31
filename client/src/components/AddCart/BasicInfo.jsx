import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Col, Row, Card } from "react-bootstrap";

const BasicInfo = () => {
  return (
    <div>
      <Card>
        <h4 className="p-3">Basic Info</h4>
        <Form className="p-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default BasicInfo;
