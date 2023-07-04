import React from "react";
import { BsDot } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import data from "../data/data";
console.log(data)

const Region = () => {

  const countries = [
    { name: "United States of America", percentage: "37.61%" },
    { name: "Brazil", percentage: "16.79%" },
    { name: "India", percentage: "12.42%" },
    { name: "China", percentage: "9.85%" },
    { name: "Malaysia", percentage: "7.68%" },
    { name: "Thailand", percentage: "37.61%" },
  ];

  return (
    <>
      <Table>
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
      </Table>
    </>
  );
};

export default Region;
