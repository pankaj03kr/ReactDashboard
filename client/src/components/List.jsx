import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import ThreeDotMenu from "./ThreeDotMenu";
import Dropdown from "react-bootstrap/Dropdown";
import { items } from "../File/constant";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function List() {
  const [query, setQuery] = useState("");
console.log(query);
  const handleChnage = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <container>
        <h4>Product List</h4>
        <h6 className="text-muted mb-3">
          Authentivcation / Apps /E-commerce /Product List
        </h6>

        <Card className="p-4">
          <div className="d-flex search">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for items "
                // value={query}
                onChange={handleChnage}
              />
            </div>

            <div>
              <Dropdown>
                <Dropdown.Toggle
                  className=""
                  variant="light"
                  id="dropdown-basic"
                >
                  All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>All</Dropdown.Item>
                  <Dropdown.Item href="#action2">Clothes</Dropdown.Item>
                  <Dropdown.Item href="#action2">Watches</Dropdown.Item>
                  <Dropdown.Item href="#action2">Shoes</Dropdown.Item>
                  <Dropdown.Item href="#action2">Bags</Dropdown.Item>
                  <Dropdown.Item href="#action2">Devices</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Button className="addbtn" variant="success">
              <Link className="" to="/eccom/addproduct">
                Add
              </Link>
            </Button>
          </div>

          <Table>
            <thead>
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
              <th>Product</th>
              <th>category</th>
              <th>Price</th>
              <th>Stocks</th>
              <th>Status</th>
            </thead>
            <tbody>
              {items
                .filter((item) => item.Product.toLowerCase().includes(query))
                .map((product, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{product.checkbox}</td>
                        <td>{product.id}</td>
                        <td className="d-flex align-items-center mx-auto ">
                          <div>
                            <img
                              src={product.img}
                              lassName="rounded-circle"
                              width="65"
                              height="65"
                              alt={product.Product}
                            />
                          </div>
                          <div className="position">
                            <span>{product.Product}</span>
                          </div>
                        </td>
                        <td>{product.Category}</td>
                        <td>{product.Price}</td>
                        <td>{product.Stock}</td>

                        <td>{product.Status}</td>
                        <td>{product.dot}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </Table>
        </Card>
      </container>
    </>
  );
}

export default List;
