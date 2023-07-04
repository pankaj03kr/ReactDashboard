import React from "react";
import user1 from "../assets/photos/user1.jpg";
import user2 from "../assets/photos/user2.jpg";
import user3 from "../assets/photos/user3.jpg";
import user4 from "../assets/photos/user4.jpg";
import user5 from "../assets/photos/user5.jpg";
import Table from "react-bootstrap/Table";
import { Button, Card } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";

const Member = () => {
  const persons = [
    {
      avatar: user1,
      name: "Terrance Moreno",
      desg: "Software Engineer",
    },
    {
      avatar: user2,
      name: "Ron Vargas",
      desg: "UI/UX Designerr",
    },
    {
      avatar: user3,
      name: "Luke Cook",
      desg: "HR Executive",
    },
    {
      avatar: user4,
      name: "Joyce Freeman",
      desg: "Frontend Developer",
    },
    {
      avatar: user5,
      name: "Samantha Phillips",
      desg: "Compliance Managerr",
    },
  ];

  return (
    <div>
      <Card>
        <h3 className="fs-6">New Join Member</h3>
        <Table className="no-wrap mt-3 align-midlle" responsive borderless>
          <tbody className="">
            {persons.map((person, index) => {
              return (
                <>
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
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
                      <Button className="d-flex align-items-center gap-1" variant="light">
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
