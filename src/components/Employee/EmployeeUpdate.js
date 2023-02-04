import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
const EmployeeUpdate = () => {
  const [update, setUpdate] = useState(false);

  
  return (
    <div>
      {!update && (
        <div className="d-flex justify-content-center">
        <Button className="btn-primary w-25 " style={{marginRight:"50px"}} onClick={() => setUpdate(!update)}>
          Edit
        </Button>
          </div>
      )}
      {update && (
        <Container fluid >

            <h1 className="text-center"> Update Employee </h1>
          <form  className="d-flex flex-column align-items-center justify-content-center" style={{marginLeft :"100px" , marginRight:"50px"}}>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100 p-4"
            style={{ columnGap: "5%" }}
            >
            <div className="flex-row align-items-center justify-content-center w-50 ps-4">
              <label>Name </label>
              <input
              className="form-control w-75"
              type="text"
              placeholder="Enter Name"
              unselectable="on"
              value="Pratham Jha"
              />
            </div>
            <div className="flex-row align-items-center justify-content-center w-50 pe-4">
              <label>Email </label>
              <input
                placeholder="Enter Name"
                type="email"
                value="prathamjha5683@gmail.com"
                unselectable="on"
                className="form-control w-75"
                />
            </div>
          </div>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100 p-4"
            style={{ columnGap: "5%" }}
            >
            <div className="flex-row align-items-center justify-content-center w-100 ps-4">
              <label>Phone Number </label>
              <input
              className="form-control w-75"
              type="tel"
              placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex-row align-items-center justify-content-center w-100 pe-4">
              <label>Address </label>
              <input
                placeholder="Enter Address"
                type="text"
                className="form-control w-75"
                />
            </div>
          </div>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100 p-4"
            style={{ columnGap: "5%" }}
          >
            <div className="flex-row align-items-center justify-content-center w-100 ps-4">
              <label>City </label>
              <input
              className="form-control w-75"
              type="text"
              placeholder="Enter City"
              />
            </div>
            <div className="flex-row align-items-center justify-content-center w-100 pe-4">
              <label>State </label>
              <input
                placeholder="Enter State"
                type="text"
                className="form-control w-75"
                />
            </div>
          </div>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100 p-4"
            style={{ columnGap: "5%" }}
            >
            <div className="flex-row align-items-center justify-content-center w-100 ps-4">
              <label>Occupation </label>
              <input
              className="form-control w-75"
              type="text"
              placeholder="Enter Occupation"
              />
            </div>
            <div className="flex-row align-items-center justify-content-center w-100 pe-4">
              <label>Post-Level </label>
              <input
                placeholder="Enter Post"
                type="text"
                className="form-control w-75"
                />
            </div>
          </div>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100 p-4"
            style={{ columnGap: "5%" }}
            >
            <div className="flex-row align-items-center justify-content-center w-100 ps-4">
              <label>Pin Code </label>
              <input
              className="form-control w-75"
              type="text"
              placeholder="Enter Pincode"
              />
            </div>
            <div className="flex-row align-items-center justify-content-center w-100 pe-4">
              <label>Desk Number </label>
              <input
                placeholder="Enter Desk Number"
                type="text"
                className="form-control w-75"
                />
            </div>
          </div>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100 p-4"
            style={{ columnGap: "5%" }}
            >
            <div className="flex-row align-items-center justify-content-center w-100 ps-4">
              <label>Ctc </label>
              <input
              className="form-control w-75"
              type="text"
              placeholder="Enter CTC"
              />
            </div>
            <div className="flex-row align-items-center justify-content-center w-100 pe-4">
              <label>Joining Date </label>
              <input
                placeholder="Enter Joining date"
                type="date"
                className="form-control w-75"
                />
            </div>
          </div>
          <div className="w-100 pt-4 me-5  d-flex justify-content-center" >
            <Button type="submit" style={{width:"23%"}} onClick={(e)=>setUpdate(!update)}> Submit </Button>
          </div>
        </form>
      </Container>
      )}
    </div>
  );
};
export default EmployeeUpdate;
