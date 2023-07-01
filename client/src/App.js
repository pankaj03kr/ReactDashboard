import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Default from "./pages/Default";

function App() {
  // const [data, setData] = React.useState("hello data");
  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(res=>res.json())
  //   .then(data => setData(data.title));
  // }, []);

  return (
    <>
      {/* <Default/> */}
      <Container fluid>
      <NavigationBar />
        <Row>
          <Col md={2}>
            <Sidebar/>
          </Col>
          <Col md={10}>
            <Default/>
          </Col>
        </Row>
      </Container>
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </>
  );
}

export default App;
