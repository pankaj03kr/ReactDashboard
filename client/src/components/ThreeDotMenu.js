import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

// const ThreeDotMenu = () => {
//   return (
//     <div>
//       {/* <Dropdown bg ="transparent">
//         <Dropdown.Toggle bg ="transparent" variant="secondary" id="dropdown-basic">
//           <BsThreeDotsVertical bg ="transparent"/>
//         </Dropdown.Toggle>

//         <Dropdown.Menu bg ="transparent">
//           <Dropdown.Item bg ="transparent" href="#action1">View</Dropdown.Item>
//           <Dropdown.Item href="#action2">Delete</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown> */}

//     </div>
//   );
// };

// export default ThreeDotMenu;

import { useState } from "react";

const ThreeDotMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="three-dot-menu">
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <BsThreeDotsVertical
          className="threedot"
        
      
        />
      </div>

      {isOpen && (
        <div className="menu-items">
          <div>View Details</div>
          <div>Delete</div>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
