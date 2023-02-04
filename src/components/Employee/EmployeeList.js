import React, { createElement, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { EmployeeData } from "./EmployeeData";
import "../../App.css"
const EmployeeList = ({email}) => {
  const [CurrentEmployeeData,setCurrentEmployeeData] = useState([]);
  useEffect(()=>{
    setCurrentEmployeeData(EmployeeData);
  },[]) 


  return (
    <Container className="pt-5 pb-5">
    {CurrentEmployeeData.map((data) =>{
      if(data.email === email){
        return (
          <>
      <h1 className="mb-5">Employee Details</h1>
      <div
      className="d-flex flex-row align-items-center justify-content-center w-100 "
      style={{ columnGap: "5%" }}
      >
        <div className="flex-row align-items-center justify-content-center w-50 ps-4">
        <p>
        <strong>Name :</strong>
        {" " + CurrentEmployeeData[0].name}
        </p>
        </div>
        <div className="flex-row align-items-center justify-content-center w-50 pe-4">
          <p>
          <strong>Email :</strong>
            {" " + CurrentEmployeeData[0].email}
            </p>
            </div>
            </div>
            <div
            className="d-flex flex-row align-items-center justify-content-center w-100 "
            style={{ columnGap: "5%" }}
            >
            <div className="flex-row align-items-center justify-content-center w-100 ps-4">
          <p>
            <strong>Phone Number:</strong>
            {" " + CurrentEmployeeData[0].phone_number}
          </p>
        </div>
        <div className="flex-row align-items-center justify-content-center w-100 pe-4">
          <p>
            <strong>Address :</strong>
            {" " + CurrentEmployeeData[0].address}
          </p>
        </div>
      </div>
      <div
      className="d-flex flex-row align-items-center justify-content-center w-100"
      style={{ columnGap: "5%" }}
      >
        <div className="flex-row align-items-center justify-content-center w-100 ps-4">
          <p>
            <strong>City :</strong>
            {" " + CurrentEmployeeData[0].city}
          </p>
        </div>
        <div className="flex-row align-items-center justify-content-center w-100 pe-4">
          <p>
            <strong>State :</strong>
            {" " + CurrentEmployeeData[0].state}
          </p>
        </div>
      </div>
      <div
      className="d-flex flex-row align-items-center justify-content-center w-100"
      style={{ columnGap: "5%" }}
      >
        <div className="flex-row align-items-center justify-content-center w-100 ps-4">
          <p>
            <strong>Occupation :</strong>
            {" " + CurrentEmployeeData[0].occupation}
          </p>
        </div>
        <div className="flex-row align-items-center justify-content-center w-100 pe-4">
          <p>
            <strong>Post :</strong>
            {" " + CurrentEmployeeData[0].post}
          </p>
        </div>
      </div>
      <div
      className="d-flex flex-row align-items-center justify-content-center w-100 "
      style={{ columnGap: "5%" }}
      >
        <div className="flex-row align-items-center justify-content-center w-100 ps-4">
          <p>
            <strong>PinCode :</strong>
            {" " + CurrentEmployeeData[0].pin_code}
          </p>
        </div>
        <div className="flex-row align-items-center justify-content-center w-100 pe-4">
          <p>
            <strong>Desk Number :</strong>
            {" " + CurrentEmployeeData[0].desk_no}
          </p>
        </div>
      </div>
      <div
      className="d-flex flex-row align-items-center justify-content-center w-100"
      style={{ columnGap: "5%" }}
      >
        <div className="flex-row align-items-center justify-content-center w-100 ps-4">
          <p>
            <strong>CTC :</strong>
            {" " + CurrentEmployeeData[0].ctc}
          </p>
        </div>
        <div className="flex-row align-items-center justify-content-center w-100 pe-4">
          <p>
            <strong>Joining Date :</strong>
            {" " + CurrentEmployeeData[0].joining_date}
          </p>
        </div>
      </div>
  </>
    )}
  })}
  </Container>
  );
};
export default EmployeeList;
