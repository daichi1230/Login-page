
import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Route/PrivateRoute';
import './index.css' ;
import PublicRoute from "./Route/PublicRoute";
import ResetPassword from "./components/ResetPassword";

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
                <Route path = "/reset-password" element= {<ResetPassword/>}/>
              </Route>
              <Route path = "/footer" element= {<Footer/>}/>
            </Routes>   
          </BrowserRouter>
        </div>
      </AuthProvider>
  );
}

export default App;
