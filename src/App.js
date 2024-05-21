
import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./LogIn";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './index.css' ;
import PublicRoute from "./components/PrivateRoute";

function App() {


  return (
      <AuthProvider>
        <div style={{margin: '2em'}}> 
          <BrowserRouter>
            <Routes>
              <Route path = "/" element= {<PrivateRoute><Home/></PrivateRoute>}/>
              {/* </PrivateRoute>で囲むことによりアクセス制限がかかる */}
              <Route path = "/header" element= {<Header/>}/>
              <Route element= {<PublicRoute/>}>
                <Route path = "/signup" element= {<SignUp/>}/>
                <Route path = "/login" element= {<Login/>}/>
              </Route>
            </Routes>   
          </BrowserRouter>
        </div>
      </AuthProvider>
  );
}

export default App;
