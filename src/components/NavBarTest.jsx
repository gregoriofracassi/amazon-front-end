import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, withRouter } from "react-router-dom";
import "./AmListPageStyle.css";

const MyNav = (props) => {
  return (
    <header>
      <Navbar class="MyTestNav">
        <Navbar.Brand id="MyNavBrand" href="#home">
          {props.title}
        </Navbar.Brand>
        <Nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>

          <Link to="/">
            <Nav.Link>Products List</Nav.Link>
          </Link>

          <Link to="/">
            <Nav.Link>Form</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default withRouter(MyNav);
