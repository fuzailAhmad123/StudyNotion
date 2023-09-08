import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import Navbar from "./components/core/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Dashboard from "./pages/Dashboard";



function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
 <div className="w-screen min-h-screen h-fit  bg-richblack-900 flex flex-col">
 <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn ={setIsLoggedIn} />

<Routes>

<Route path="/" element = {<Home/>} />
<Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>} />
<Route path="/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>} />
<Route path="/dashboard" element = {
   <PrivateRoute isLoggedIn = {isLoggedIn}>
      <Dashboard/>
   </PrivateRoute>
} />
</Routes>

 </div>
   
  )
}

export default App;
