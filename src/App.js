import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./pages/main/SideBar";
import Navbar from "./pages/main/Navbar";
import Footer from "./pages/main/Footer";
import {Login} from "./pages/LoginLogout";

function App() {
  const [sidebar, setSidebar] = useState("");
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const sidebarClass = localStorage.getItem("sidebar");
    if (sidebarClass) {
      setSidebar(sidebarClass);
    } else {
      localStorage.setItem("sidebar", "ps ps--active-y active");
      setSidebar("ps ps--active-y active");
    }
  }, []);

  useEffect(() => {
    const adminData = sessionStorage.getItem("admin");
    if (adminData) {
      setAdmin(adminData);
    }
  }, []);
  return (
    <>
      {admin ? (
        <div className="full_container">
          <div className="inner_container">
            <SideBar sidebar={sidebar} />
            <div id="content">
              <Navbar sidebar={sidebar} setSidebar={setSidebar} />
              <div className="midde_cont">
                <div className="container-fluid" style={{ minHeight: "70vh" }}>
                  <Router>
                    <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route path="/" element={<Home />} />
                    </Routes>
                  </Router>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
