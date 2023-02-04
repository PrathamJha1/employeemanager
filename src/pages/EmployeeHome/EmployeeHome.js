import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import EmployeeList from '../../components/Employee/EmployeeList';
import EmployeeUpdate from '../../components/Employee/EmployeeUpdate';
function employeeHome({isLogged,setIsLogged,hr,setHR,email}) {
  return (
    <div>
    <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-light ms-3 ">
            <strong>Employee Manager </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 p-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
              >
              <Nav.Link href="/employeePanel" className="text-light">
                Employee Panel
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <EmployeeList email={email}/>
        <EmployeeUpdate email = {email}/>
    </div>
  );
}

export default employeeHome;