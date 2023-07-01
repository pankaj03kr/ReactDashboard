import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
const Default = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={9}>
            <Row>
            <Col md={4}>
              <Card>
                <Card.Header>Revenue</Card.Header>
                <Card.Body>
                  $2454{" "}
                  <span>
                    11.4 <FaArrowDown />
                  </span>
                </Card.Body>
                <Card.Footer>Compare to the last year (2019)</Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Header>Revenue</Card.Header>
                <Card.Body>
                  $2454{" "}
                  <span>
                    11.4 <FaArrowDown />
                  </span>
                </Card.Body>
                <Card.Footer>Compare to the last year (2019)</Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Header>Revenue</Card.Header>
                <Card.Body>
                  $2454{" "}
                  <span>
                    11.4 <FaArrowDown />
                  </span>
                </Card.Body>
                <Card.Footer>Compare to the last year (2019)</Card.Footer>
              </Card>
            </Col>
            </Row>
            <Row>
              <Col md={12}>Hello</Col>
            </Row>
          </Col>
          <Col md={3}>
            <Col>
              <Card>
                <Card.Header>Revenue</Card.Header>
                <Card.Body>
                  $2454{" "}
                  <span>
                    11.4 <FaArrowDown />
                  </span>
                </Card.Body>
                <Card.Footer>Compare to the last year (2019)</Card.Footer>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Default;
