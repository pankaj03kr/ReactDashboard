import React from "react";

import Table from "react-bootstrap/Table";
import { Button, Card } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const Member = () => {
  const [persons, setPersons] = useState([]);



  

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      const personData = res.data.find(
        (obj) => obj.persons !== undefined
      ).persons;
      setPersons(personData);
      // console.log(personData);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <Card>
        <h3 className="fs-6 p-3">New Join Member</h3>
        <Table className="no-wrap mt-3 align-midlle p-2" responsive borderless>
          <tbody className="">
            {persons.map((person, index) => {
              console.log(person);
              return (
                <>
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-0">
                        <img
                          src={person.avatar}
                          className="rounded-circle"
                          width="45"
                          height="45"
                          alt=""
                        />
                        <div className="ms-1">
                          <h6 className="mb-0">{person.name}</h6>
                          <span className="text-muted">{person.desg}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-right ">
                      <Button
                        className="d-flex align-items-center gap-1"
                        variant="light"
                      >
                        <FaUserPlus />
                        Add
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Member;
