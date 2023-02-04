import React from 'react'
import Loginpage from '../../components/Auth/Loginpage'
import Register from '../../components/Auth/Register'
import './authpage.css'

export default function Authpage({isLogged,setIsLogged,hr,setHR,setEmail}) {
    return (
        <div className="auth-page">
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Loginpage isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} setEmail={setEmail}/>
                    </div>
                    <div className='col-6'>
                        <Register isLogged={isLogged} setIsLogged={setIsLogged} hr={hr} setHR={setHR} setEmail ={setEmail}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
