import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="flex-column bg-light" style={{ width: '260px', position: 'fixed', left: 0 }}>
      <Nav.Link href="#category1">Category 1</Nav.Link>
      <Nav.Link href="#category2">Category 2</Nav.Link>
      <Nav.Link href="#category3">Category 3</Nav.Link>
      {/* Additional options and filters */}
    </Nav>
  );
};

export default Sidebar;
