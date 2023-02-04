import React ,{useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AllEmployees from "../../components/HR/HrData";
import HrContent from "../../components/HR/HrContent";
const Hrhome = ({isLogged,setIsLogged,hr,setHR}) => {
  const [search,setSearch] = useState("");
  const [Employees,setEmployees] = useState([]);
  useEffect(()=>{
    setEmployees(AllEmployees);
  },[])
  const handleChange = (e)=>{
    setSearch(e.target.value);
    const SE = Employees.filter((data) => {
      let str = data.id;
      let email = data.email;
      let name = data.name;
      if(str.startsWith(search) || email.startsWith(search) || name.startsWith(search)||search === ""){
        return data;
      }
    });
    setEmployees(SE);
  }
  console.log("Hr home ")
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light ms-3 ">
            <strong>Employee Manager </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 p-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/hrPanel" className="text-light">
                HR Panel
              </Nav.Link>
            </Nav>
            <Form className="d-flex align-items-end " style={{width:"35%"}}>
              <Form.Control
                type="search"
                placeholder="Search Employee"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HrContent isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} search={search} Employees={Employees} setEmployees={setEmployees} setSearch={setSearch}/>
    </div>
  );
};
export default Hrhome;
