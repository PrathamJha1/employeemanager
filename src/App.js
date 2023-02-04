import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
// import Home from './pages/home/home';
import 'react-toastify/dist/ReactToastify.css';

import Hrhome from './pages/HRHome/Hrhome';
import Authpage from "./pages/Auth/Authpage"
import EmployeeHome from './pages/EmployeeHome/EmployeeHome';
import { ToastContainer , toast } from 'react-toastify';
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [hr, setHR] = useState(false);
  const [email, setEmail] = useState('');
  //console.log(isLogged,"App",window.location.search);
  console.log(email);
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path = "/" element={< Authpage isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} setEmail={setEmail} />}></Route>
        <Route path = "/employeePanel" element ={<EmployeeHome isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} email={email} />}/>
        <Route path="/hrPanel/*" element={<Hrhome isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} email={email} />} /> 
        {/* {!isLogged && <Route path="*" element={<Navigate to="/login" replace />} />}
        {isLogged && !hr && <Route path="*" element={<Navigate to="/employeePanel" replace />} />}
        {isLogged && hr && <Route path="*" element={<Navigate to="/hrPanel" replace />} />}
        <Route path="/login/*" element={<Authpage isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} setEmail={setEmail} />} />
        <Route path="/hrPanel/*" element={<Hrhome isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} email={email} />} />
        <Route path="/employeePanel/*" element={<EmployeeHome isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} email={email} />} /> */}

      </Routes>
    </div>
  );
}

export default App;
