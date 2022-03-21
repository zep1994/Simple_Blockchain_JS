import { Outlet, Link } from "react-router-dom";
import {  Navbar, Nav } from 'react-bootstrap'

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add-employee">Create Employee</Nav.Link>
            <Nav.Link href="/employee">View Employee</Nav.Link>
            <Nav.Link href="/time-off">Time Off</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;