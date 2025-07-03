import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SideBar from "./pages/main/SideBar";
import Navbar from "./pages/main/Navbar";
import Footer from "./pages/main/Footer";
import PrivateRoute from "./pages/main/PrivateRoute";
import Users from "./pages/users/Users";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/users/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/user/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
  );
}

function MainLayout() {
  const [sidebar, setSidebar] = React.useState("");

  return (
    <div className="full_container">
      <div className="inner_container">
        <SideBar sidebar={sidebar} />
        <div id="content">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="midde_cont">
            <div className="container-fluid" style={{ minHeight: "70vh" }}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
