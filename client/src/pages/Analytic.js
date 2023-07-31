import React from "react";
import Region from "../components/Region";
import { Link } from "react-router-dom";
import Dounut from "../components/Dounut";
import Visited from "../components/Visited";
import { FaFacebookSquare } from "react-icons/fa";

const Analytic = () => {
  return (
    <div>
      {/* <Link to="/analytic"></Link> */}
      <Region />
      <Dounut/>
      <Visited/>
    </div>
  );
};

export default Analytic;
