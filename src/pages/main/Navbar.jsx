import React, { useEffect } from 'react'
import { Logout } from '../LoginLogout';

export default function Navbar({ sidebar, setSidebar }) {
  useEffect(() => {
    if (sidebar) {
      localStorage.setItem("sidebar", sidebar);
    }
  }, [sidebar]);
  return (
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="full">
          <button
            type="button"
            id="sidebarCollapse"
            className="sidebar_toggle"
            onClick={(e) => setSidebar(sidebar === 'ps ps--active-y active' ? 'ps ps--active-y' : 'ps ps--active-y active')}
          >
            <i className="fa fa-bars" />
          </button>
          <div className="logo_section">
            <a href="index.html">
              <img
                className="img-responsive"
                src="images/logo/logo_black.png"
                alt="#"
              />
            </a>
          </div>
          <div className="right_topbar">
            <div className="icon_info">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-bell-o" />
                    <span className="badge">2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-question-circle" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o" />
                    <span className="badge">3</span>
                  </a>
                </li>
              </ul>
              <ul className="user_profile_dd">
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown">
                    <img
                      className="img-responsive rounded-circle"
                      src="images/layout_img/user_img.jpg"
                      alt="#"
                    />
                    <span className="name_user">John David</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="profile.html">
                      My Profile
                    </a>
                    <a className="dropdown-item" href="settings.html">
                      Settings
                    </a>
                    <a className="dropdown-item" href="help.html">
                      Help
                    </a>
                    <a type='button' onClick={Logout} className="dropdown-item" >
                      <span>Log Out</span> <i className="fa fa-sign-out" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
