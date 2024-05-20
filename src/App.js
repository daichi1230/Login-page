
import Header from "./Header";
import SignUp from "./SignUp";
import Login from "./LogIn";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css' ;

function App() {


  return (
      <AuthProvider>
        <div style={{margin: '2em'}}> 
          <BrowserRouter>
            <Routes>
              <Route path = "/" element= {<Header/>}/>
              <Route path = "/SignUp" element= {<SignUp/>}/>
              <Route path = "/Login" element = {<Login/>}/>
            </Routes>   
          </BrowserRouter>
        </div>
      </AuthProvider>
  );
}

export default App;
