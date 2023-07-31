import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytic from "./pages/Analytic";
import { FaFacebookSquare } from "react-icons/fa";
import ProductList from "./pages/Ecommerce/ProductList";
import EditProduct from "./pages/Ecommerce/EditProduct";
import AddProduct from "./pages/Ecommerce/AddProduct";
import Order from "./pages/Ecommerce/Order";

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
        <Router>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/analitics" element={<Analytic />} />
                <Route path="/eccom" >
                <Route path="/eccom/productlist" element={<ProductList />} />
                  <Route path="editproduct" element={<EditProduct />} />
                  <Route path="/eccom/addproduct" element={<AddProduct />} />
                  <Route path="/eccom/order" element={<Order />} />
                </Route>
              </Routes>
            </Col>
          </Row>
        </Router>
      </Container>
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </>
  );
}

export default App;
