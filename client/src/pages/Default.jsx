import React from "react";
import { Container, Row, Card, Col, } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import LineChart from "../components/LineChart";
import CircularProgressBar from "../components/CircularProgressBar";
import List from "../components/Table";
import Member from "../components/Member";

const Default = () => {
  const percentage = 80;

  return (
    <div id="default">
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
              <Col md={12}>
                <LineChart />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Col>
              <Card>
                <Card.Header>Monthly Target</Card.Header>
                <Card.Body>
                  <CircularProgressBar percentage={percentage} />
                </Card.Body>
                <Card.Footer>
                  You need abit more effort to hit monthly target
                </Card.Footer>
                <Button variant="info">Learn More</Button>{" "}
              </Card>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Row>
              <Member />
            </Row>
          </Col>

          <Col md={9}>
            <Row>
              <List />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Default;
