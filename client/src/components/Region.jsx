import React from "react";
import { BsDot } from "react-icons/bs";
import {Container,Row ,Card,Col} from "react-bootstrap"
import data from "../data/data";
console.log(data)

const Region = () => {

  const countries = [
    { name: "United States of America", percentage: "37.61%",color: "primary", },
    { name: "Brazil", percentage: "16.79%", color: "info", },
    { name: "India", percentage: "12.42%",color: "danger", },
    { name: "China", percentage: "9.85%", color: "success", },
    { name: "Malaysia", percentage: "7.68%" , color: "dark",},
    { name: "Thailand", percentage: "37.61%" , color: "warning",},
  ];

  return (
    <>
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
      
        <Row>
          <Col md={4}>
            <Card>
          <Card.Body>
          <Card.Title className="p-2">
            <h5>Entrance by Region</h5>
          </Card.Title>
          <Card.Subtitle>
            <div className="d-flex align-items-center p-2">
              <img src="https://emilus.themenate.net/img/flags/us.png" alt="" />
              <div>
                <h1 className="font-weight-bold mb-0 s-10"> 39.71%</h1>
              </div>
            </div>
            <h2 className="text-muted p-2 fs-6" >Top Entrance Region</h2>
           
          </Card.Subtitle>
          <ul>
          {
        countries.map((country,index)=>{
          return(
            <>
            <div className="d-flex align-items-center region p-1">
            <li className="name">{country.name}</li>
              <li className="dot ">{country.percentage}</li>
            </div>
              
            </>
          )
        })
      }
    

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
