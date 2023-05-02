import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form/form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import View from "./pages/View/view";
import Modify from "./pages/Modify/modify";
import Landing from "./pages/Landing/landing";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            {/* {sessionStorage.getItem("isLoggedIn") ? 
              (<> */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/form' element={<Form />} /> 
                <Route path='/view' element ={<View />} />
                <Route path='/modify' element ={<Modify />} />
              {/* </>) :( <Route />)} */}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
