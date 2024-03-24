import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../photos/logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo} rounded style={{ width: "200px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Services</Nav.Link>
            <Nav.Link href="#action4">FAQs</Nav.Link>
            <Nav.Link href="#action5">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Button variant="outline-secondary">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
