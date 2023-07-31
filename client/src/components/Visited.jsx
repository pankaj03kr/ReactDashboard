import React from "react";
import Table from "react-bootstrap/Table";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";



import axios from "axios";
import {pages} from "../File/constant"



const Visited = () => {
  // const [pages, setPages] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/data.json")
  //     .then((res) => {
  //       const pagesData = res.data.find((obj) => obj.pages !== undefined).pages;
  //       setPages(pagesData);
  //       // console.log(pagesData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

 

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Card>
              <h6 className="p-2">Most Visited Pages</h6>
              <Table>
                <tbody>
                  {pages.map((page, index) => {
                    return (
                      <>
                        <tr
                          key={index}
                          className="d-flex align-item-center justify-content-between"
                        >
                          <div>
                            <td className="">{page.home}</td>
                            <span>
                              {" "}
                              <td className="text-muted">
                                {page.file}
                              </td>
                            </span>
                          </div>

                          <td>
                            <Button variant="info">{page.number}</Button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <h5 className="p-2">Social media refferals</h5>
              <Table>
                <tbody>
                  {pages.map((page, index) => {
              
                    return (
                      <>
                        <tr
                          key={index}
                          className="d-flex align-item-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                           
                            <span className="fs-2 text-info">{page.logo}</span>
                            <div>
                              <td className="">{page.social}</td>
                              <span>
                                {" "}
                                <td className="text-muted">{page.count}</td>
                              </span>
                            </div>
                          </div>

                          <td>
                            <Button variant="info">{page.growth}</Button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Visited;
