import React from "react";
import BasicInfo from "../../components/AddCart/BasicInfo";
import Pricing from "../../components/AddCart/Pricing";

import { Container, Col, Row, Card } from "react-bootstrap";
import Heading from "../../components/AddCart/Heading";
import UploadFileEdit from "../../components/editproduct/UploadFileEdit";

const EditProduct = () => {
  return (
    <div>
      <h4 className="mt-2">Edit Product</h4>
      <Heading />
      <Container>
        <Row>
          <Col md={9}>
            <BasicInfo />
          </Col>

          <Col md={3}>
            <Card>
              <UploadFileEdit />
            </Card>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={9}>
            <Pricing />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditProduct;
