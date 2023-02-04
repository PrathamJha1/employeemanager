import React, { useState } from "react";
import loginData from "./loginData";
import {  Routes , Route ,Navigate} from "react-router-dom";

export default function Register({ isLogged, setIsLogged, hr, setHR ,setEmail }) {
  const [signupEmail, setsignupEmail] = useState("");
  const [signupName, setsignupName] = useState("");
  const [signupPassword, setsignupPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setHR(hr);
    loginData.push({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      status: hr
    });
    setEmail(signupEmail);
    setIsLogged(!isLogged);
    setsignupEmail("");
    setsignupName("");
    setsignupPassword("");
    
  };

  return (
    <div className="row justify-content-center">
      <Routes>
        <Route path="/" element={isLogged && <Navigate to="/" replace />} />
      </Routes>
      <div className="col-md-10">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Sign Up</h3>
          </div>
          <div className="card-body">
            <form
              className="form"
              onSubmit={handleSignUp}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setsignupName(e.target.value);
                  }}
                  value={signupName}
                />
              </div>
              <div className = "form-group">
                <label>Email</label>
                <input
                  className = "form-control"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setsignupEmail(e.target.value);
                  }}
                  value={signupEmail}
                />
              </div>
              <div className = "form-group">
                <label>Password</label>
                <input
                  className = "form-control"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setsignupPassword(e.target.value);
                  }}
                  value={signupPassword}
                />
              </div>
              <br></br>
                <button
                  className = "btn btn-success btn-lg float-right"
                  type="submit"
                >
                  Register
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
