import "./style.css";
import { useState } from "react";
import { withRouter } from "react-router";
//
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RouteComponentProps } from "react-router-dom";

//

const Navbar = ({ history, match }: RouteComponentProps) => {
  const switchSearch = async (val: string) => {
    if (val.length > 2) {
      history.push(`/search/${val}`);
    }
    if (val.length === 0) {
      history.push("/");
    }
  };
  //
  return (
    <div className="navContainer">
      <Container>
        <Row className="navBar">
          <Col xs="12" md="4" className="d-flex align-items-center my-1">
            <Link to="/" className="mr-3 navIcon">
              <AiFillHome size="1.8rem" className="" />
            </Link>
            <div className="navSearch">
              <BsSearch className="mx-1" size="1.5rem" />
              <Form.Control
                type="text"
                placeholder="...search"
                onChange={(e) => {
                  switchSearch(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col
            xs="12"
            md="8"
            className="d-flex align-items-center justify-content-end my-1"
          >
            {" "}
            <NavLink
              className="d-flex align-items-center navBtn font-weight-bold mr-2"
              exact
              to="/"
              activeClassName="selectedNavb"
            >
              <span className="text-dropdown">Home</span>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Navbar);