
import Header from "./Header"
import SignUp from "./SignUp"
import { useState, useEffect } from "react";
import './index.css' ;

function App() {
  return (
    <div className="App">
      <Header title="ログイン画面"/>
      <LogIn/>
      <GoogleLogIn/>
      <div style={{margin: '2em'}}> 
        <a><SignUp/></a>   
      </div>
      <Footer/>
    </div>
  );
}

export default App;
