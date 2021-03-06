import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./NavbarPortfolio.css"


const NavbarPortfolio = () => {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
        <Nav.Link href="#link">Resume</Nav.Link>
        <Nav.Link href="#link">Sandbox</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Router>
    )
}

export default NavbarPortfolio;