import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar({sidebar}) {
  return (
      <nav id="sidebar" className={sidebar}>
      <div className="sidebar_blog_1">
        <div className="sidebar-header">
          <div className="logo_section">
            <a href="index.html">
              <img
                className="logo_icon img-responsive"
                src="images/logo/logo_icon.png"
                alt="#"
              />
            </a>
          </div>
        </div>
        <div className="sidebar_user_info">
          <div className="icon_setting" />
          <div className="user_profle_side">
            <div className="user_img">
              <img
                className="img-responsive"
                src="images/layout_img/user_img.jpg"
                alt="#"
              />
            </div>
            <div className="user_info">
              <h6>John David</h6>
              <p>
                <span className="online_animation" /> Online
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_blog_2">
        <h4>General</h4>
        <ul className="list-unstyled components">
          <li>
            <Link to={'/'}>
              <i className="fa fa-dashboard yellow_color" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={'/users'}>
              <i className="fa fa-users orange_color" /> <span>Users</span>
            </Link>
          </li>
          <li>
            <a
              href="#element"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-diamond purple_color" /> <span>Elements</span>
            </a>
            <ul className="collapse list-unstyled" id="element">
              <li>
                <a href="general_elements.html">
                  &gt; <span>General Elements</span>
                </a>
              </li>
              <li>
                <a href="media_gallery.html">
                  &gt; <span>Media Gallery</span>
                </a>
              </li>
              <li>
                <a href="icons.html">
                  &gt; <span>Icons</span>
                </a>
              </li>
              <li>
                <a href="invoice.html">
                  &gt; <span>Invoice</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="tables.html">
              <i className="fa fa-table purple_color2" /> <span>Tables</span>
            </a>
          </li>
          <li>
            <a
              href="#apps"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-object-group blue2_color" /> <span>Apps</span>
            </a>
            <ul className="collapse list-unstyled" id="apps">
              <li>
                <a href="email.html">
                  &gt; <span>Email</span>
                </a>
              </li>
              <li>
                <a href="calendar.html">
                  &gt; <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="media_gallery.html">
                  &gt; <span>Media Gallery</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="price.html">
              <i className="fa fa-briefcase blue1_color" />{" "}
              <span>Pricing Tables</span>
            </a>
          </li>
          <li>
            <a href="contact.html">
              <i className="fa fa-paper-plane red_color" /> <span>Contact</span>
            </a>
          </li>
          <li className="active">
            <a
              href="#additional_page"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-clone yellow_color" />{" "}
              <span>Additional Pages</span>
            </a>
            <ul className="collapse list-unstyled" id="additional_page">
              <li>
                <a href="profile.html">
                  &gt; <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="project.html">
                  &gt; <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="login.html">
                  &gt; <span>Login</span>
                </a>
              </li>
              <li>
                <a href="404_error.html">
                  &gt; <span>404 Error</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="map.html">
              <i className="fa fa-map purple_color2" /> <span>Map</span>
            </a>
          </li>
          <li>
            <a href="charts.html">
              <i className="fa fa-bar-chart-o green_color" />{" "}
              <span>Charts</span>
            </a>
          </li>
          <li>
            <a href="settings.html">
              <i className="fa fa-cog yellow_color" /> <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
