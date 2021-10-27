import "./style.css";
import { withRouter } from "react-router";
//
import { Col, Container, Form,  Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {
  SearchQuery: string;
  setQuery: (val: string) => void;
}
//

const Navbar = ({ history, match, SearchQuery, setQuery }: Props) => {
  const switchSearch = async (val: string) => {
    setQuery(val);
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
            <Link to="/" className="mr-3 navIcon" onClick={() => setQuery("")}>
              <AiFillHome size="1.8rem" className="" />
            </Link>
            <div className="navSearch">
              <BsSearch className="mx-1" size="1.5rem" />
              <Form.Control
                value={SearchQuery}
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
              onClick={() => setQuery("")}
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
