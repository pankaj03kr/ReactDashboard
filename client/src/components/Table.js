import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import {rows} from "../File/constant"

const List = () => {
  // const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/data.json")
  //     .then((res) => {
  //       const rowsData = res.data.find((obj) => obj.rows !== undefined).rows;
  //       setRows(rowsData);
  //       console.log(rowsData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <Card>
        <h1 style={{ fontSize: "20px" }} className="p-3">Latest Transaction</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              return (
                <>
                {console.log(row)}
                  <tr key={index}>
                    <td>
                      <div className="d-flex">
                        <div className="bg-success rounded-pill p-2">
                          {row.firstName[0]}
                          {row.lastName[0]}
                        </div>
                        <div>{row.customer}</div>
                      </div>
                    </td>
                    <td>{row.date}</td>
                    <td>{row.amount}</td>
                    <td>
                      {" "}
                      <Button variant="info">{row.status}</Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default List;
