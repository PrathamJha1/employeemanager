import React from "react";
import {Route,Routes,Navigate} from "react-router-dom";

const Home =({isLogged,setIsLogged,hr,setHR})=>{
    console.log(isLogged,hr);
    console.log("home");
    return (<div>
        <Routes>
            {!isLogged && <Route path="*" element={<Navigate to="/login" replace/>}/>}
            {isLogged && !hr && <Route path="*" element={<Navigate to="/employeePanel" replace/>}/>}
            {isLogged && hr && <Route path="*" element={<Navigate to="/hrPanel" replace/>}/>}
        </Routes>
    </div>)

}
export default Home;