import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { BsDot } from "react-icons/bs";
import { Container, Row, Card, Col } from "react-bootstrap";
import axios from "axios";

const Region = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data.json")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    console.log(data)
      {/* <Table>
        <tbody>
          {countries.map((country, index) => {
            return (
              <>
                <tr key={index}>
                  <td>
                    <div>
                      <BsDot />
                      <div>{country.name}</div>
                    </div>
                  </td>
                  <span>
                    {" "}
                    <td>{country.percentage}</td>
                  </span>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table> */}
      <Container>
        <Row className="mb-3">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="p-2">
                  <h5>Entrance by Region</h5>
                </Card.Title>
                <Card.Subtitle>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src="https://emilus.themenate.net/img/flags/us.png"
                      alt=""
                    />
                    <div>
                      <h1 className="font-weight-bold mb-0 s-10"> 39.71%</h1>
                    </div>
                  </div>
                  <h2 className="text-muted p-2 fs-6">Top Entrance Region</h2>
                </Card.Subtitle>
                <ul>
                  {data.map((country, index) => {
                    return (
                      <>
                        <div className="d-flex align-items-center region p-1">
                          <li className="name">{country.name}</li>
                          <li className="dot ">{country.percentage}</li>
                        </div>
                      </>
                    );
                  })}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Region;
