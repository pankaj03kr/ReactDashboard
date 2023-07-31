import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Heading = () => {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Variation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Shipping</Nav.Link>
        </Nav.Item>

        <div className="headingBtn">
          <Button variant="light" >Discard</Button>{" "}
          <Button variant="primary">Save</Button>{" "}
        </div>
      </Nav>
    </div>
  );
};

export default Heading;
