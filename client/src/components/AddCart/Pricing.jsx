import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Col, Row, Card } from "react-bootstrap";

const Pricing = () => {
  return (
    <div>
      <Card>
        <h5 className="p-4"> Pricing</h5>
        <Form className="container mt-4 p-4">
          <Row>
            <Col md={6}>
              <Form.Group controlId="inputField1">
                <Form.Label>Input Field 1</Form.Label>
                <Form.Control type="text" placeholder="Enter Input Field 1" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="inputField2">
                <Form.Label>Input Field 2</Form.Label>
                <Form.Control type="text" placeholder="Enter Input Field 2" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="inputField3">
                <Form.Label>Input Field 3</Form.Label>
                <Form.Control type="text" placeholder="Enter Input Field 3" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="inputField4">
                <Form.Label>Input Field 4</Form.Label>
                <Form.Control type="text" placeholder="Enter Input Field 4" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Pricing;
