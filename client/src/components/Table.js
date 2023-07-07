import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const List = () => {
  const rows = [
    {
      customer: "Clayton Bates",
      firstName: "Clayton",
      lastName: "Bates",
      //   short: firstName[0] + lastName[0],
      date: "	8 May 2020",
      amount: "$137",
      status: "Approved",
    },
    {
      customer: "Gabriel Frazier",
      firstName: "Gabriel",
      lastName: "Frazier",
      //   short: firstName[0] + lastName[0],
      date: "6 May 2020",
      amount: "$146",
      status: "Approved",
    },
    {
      customer: "Debra Hamilton",
      firstName: "Debra",
      lastName: "Hamilton",
      //   short: firstName[0] + lastName[0],
      date: "1 May 2020",
      amount: "$355",
      status: "Pending",
    },
    {
      customer: "Stacey Ward",
      firstName: "Stacey",
      lastName: "Ward",
      //   short: firstName[0] + lastName[0],
      date: "	28 April 2020",
      amount: "$1375",
      status: "Rejected",
    },
    {
      customer: "Troy Alexander",
      firstName: "Troy",
      lastName: "Alexander",
      //   short: firstName[0] + lastName[0],
      date: "	28 April 2020",
      amount: "$137",
      status: "Approved",
    },
  ];

  return (
    <>
      <Card>
        <h1 style={{ fontSize: "20px" }}>Latest Transaction</h1>
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
            {rows.map((row,index) => {
              return (
                <>
                  <tr>
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
