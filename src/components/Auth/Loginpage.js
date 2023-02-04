import React ,{useState} from 'react'
import {  Routes , Route ,Navigate} from "react-router-dom";
import { toast } from 'react-toastify';

import loginData from './loginData';
export default function Loginpage({isLogged,setIsLogged,hr,setHR,setEmail}) {
  const [loginEmail,setloginEmail] = useState('');
  const [loginPassword,setloginPassword] = useState('');

  const handleLogin=(e)=>{
    e.preventDefault();
    const check = loginData.filter((data)=>{
        if(loginEmail===data.email && loginPassword === data.password){
            if(data.status === 'hr'){
                setHR(true);
            }
            return data;
        }
    })
    if(check.length === 0 ){
        toast.error('Invalid Credentials !', {
          position: toast.POSITION.TOP_CENTER
      });
      
    }
    else{
        setIsLogged(!isLogged);
        setEmail(loginEmail);
        setloginEmail('');
        setloginPassword('');
        toast.success("Successfully Logged In",{
          position: toast.POSITION.TOP_CENTER
          
        }) 
    }
}

  return (
    <div className="row justify-content-center">
      <Routes>
            <Route path = "/login" element ={isLogged && <Navigate to="/hrPanel" replace/>}/>
            
      </Routes>
      <div className="col-md-10">
        <span className="anchor" id="formLogin"></span>
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Login</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Registered Email</label>
                <input className="form-control" required placeholder="Enter Email" onChange={(e)=>{setloginEmail(e.target.value)}} value={loginEmail}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input autoComplete='new-password' required className="form-control" type ="password" placeholder="Enter Password" onChange={(e)=>{setloginPassword(e.target.value)}} value={loginPassword} />
              </div>
              <br />
              
              <button
                  className = "btn btn-success btn-lg float-right"
                  type="submit"
                >
                  Login
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
