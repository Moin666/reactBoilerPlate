import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/login";
import SignUp from "../../pages/singup";
import Home from "../../pages/home";
import Dashboard from "../../pages/dashboar";

import InstituteForm from "../../pages/institue";
import InstituteData from "../../pages/DashboardComponents/institutedata";




function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/home/:id" element={<Home />}></Route> */}
        <Route path="/dash/*" element={<Dashboard />}></Route>
        <Route path="/institute" element={<InstituteForm />}></Route>
        {/* <Route path="/instituteData" element={<InstituteData />}></Route>  */}
      </Routes>
    </Router>
  );
}

export default Routing;
