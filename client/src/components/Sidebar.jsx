import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsHouse, BsGraphUp, BsCart4, BsEnvelope, BsChat, BsCalendar, BsFilePost, BsBag } from 'react-icons/bs';
// import Default from '../pages/Default';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-primary fs-5 text-white start-0 bottom-0"
      
    >
      <h5 className="py-3 px-3 text-uppercase">Dashboard</h5>
      <ul className='fs-5 d-flex flex-column'>
        <li><Link to="/" className='px-3 py-1'><BsHouse className="me-2" />Default</Link></li>
        <li><Link to="/analitics" className='px-3 py-1'><BsGraphUp className="me-2" />Analitics</Link></li>
        <li><Link to="/sales" className='px-3 py-1'><BsCart4 className="me-2" />Sales</Link></li>
      </ul>
      <Nav className="flex-column">

        <Nav.Link href="{<Default/>}" className="text-white">
        <BsHouse className="me-2" />
          Default
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
        <BsGraphUp className="me-2" />
          Analytics
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
        <BsCart4 className="me-2" />
          Sales
        </Nav.Link>

        <h5 className="py-3 px-3 text-uppercase">Apps</h5>
        <Nav.Link href="#" className="text-white">
          <BsEnvelope className="me-2" />
          Mail
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <BsChat className="me-2" />
          Chat
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <BsCalendar className="me-2" />
          Calendar
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <BsFilePost className="me-2" />
          Project
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <BsBag className="me-2" />
          Ecommerce
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;


// import React from 'react';
// import { Nav } from 'react-bootstrap';

// const Sidebar = () => {
//   return (
//     <Nav className="flex-column bg-primary-subtle gap-2 align-items-center fs-5" style={{ width: '260px', position: 'fixed', left: 0 }}>
//       <Nav.Link href="#category1">Category 1</Nav.Link>
//       <Nav.Link href="#category2">Category 2</Nav.Link>
//       <Nav.Link href="#category3">Category 3</Nav.Link>
//       {/* Additional options and filters */}
//     </Nav>
//   );
// };

// export default Sidebar;
