import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

import UploadFile from "./UploadFile";
import BasicInfo from "./BasicInfo";
import Pricing from "./Pricing";
import Heading from "./Heading";

const AddCart = () => {
  return (
    <>
    <h4 className="mt-2">Add Product</h4>
    <Heading/>
      <Container>
        <Row>
          <Col md={9}>
            <BasicInfo/>
          </Col>
         
          
           <Col md={3}>
            <Card>
            <UploadFile/>
            </Card>
          </Col>
         
        </Row>
        <Row className="mt-2">
            <Col md={9}>
             <Pricing/>
            </Col>
          </Row>
      </Container>
    </>
  );
};

export default AddCart;
