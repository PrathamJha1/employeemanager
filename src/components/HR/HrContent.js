import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import AllEmployees from "./HrData";
import Table from "react-bootstrap/Table";
const HrContent = ({ isLogged, setIsLogged, hr, setHR, search,setSearch}) => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  
  const [employees,setEmployees] = useState([]);

  
  useEffect(()=>{
    setEmployees(AllEmployees);
    console.log(employees);
    
  },[])
  
    //Function to handle the creation of new employees.

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = AllEmployees.filter((data) => {
      if (data.email === employeeEmail || data.id === employeeId) {
        return data;
      }
    });
    if (check.length === 0) {
      employees.push({
        id: employeeId,
        name: employeeName,
        email: employeeEmail,
      });
      setEmployees(AllEmployees);
      setEmployeeEmail("");
      setEmployeeId("");
      setEmployeeName("");
    } else {
      alert("Alloted Id / Email already taken");
      return;
    }
  };

  const handleClick = (e,key)=>{
    e.preventDefault();
    const remaining = employees.filter((data)=>{
      if(data.id !== key)return data;
    })
    setEmployees(remaining);
    // setSearchedEmployees(employees);
    // setSearch("");
  }
  
  return (
    <div>
      <div className="container-fluid ">
        <form
          className="d-flex flex-row justify-content-center align-items-center p-4 mt-3 w-100"
          style={{ columnGap: "2rem" }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="form-group d-flex flex-column justify-content-start align-items-start w-25">
            <h5>Employee Id</h5>
            <input
              className="form-control"
              type="number"
              placeholder="Enter Employee Id"
              min={0}
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="form-group d-flex flex-column justify-content-start align-items-start w-25">
            <h5>Employee Name</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </div>
          <div className="form-group d-flex flex-column justify-content-start align-items-start w-25">
            <h5>Employee Email</h5>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Employee Email"
              value={employeeEmail}
              onChange={(e) => setEmployeeEmail(e.target.value)}
            />
          </div>
          <button className="btn btn btn-success" type="submit">
            Add Employee
          </button>
        </form>
      </div>
      <Card className="w-100 container-fluid mt-5">
        <Card.Header className="text-center">
          <h3>Employee List</h3>
        </Card.Header>
          <Container fluid>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Employee Email</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((row) => {
                    let name = row.name;
                    let email = row.email;
                    let id = row.id;
                    if(email.startsWith(search) || id.startsWith(search) || name.startsWith(search)){
                      return (
                        <tr key={row.id} className="pt-3">
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.email}</td>
                          <td className="text-center">
                            <Button className="btn-danger" onClick ={(e)=>{handleClick(e,row.id)}}>Delete</Button>
                          </td>
                        </tr>
                      );
                      
                    }
                })}
              </tbody>
            </Table>
          </Container>
       
      </Card>
    </div>
  );
};

export default HrContent;
