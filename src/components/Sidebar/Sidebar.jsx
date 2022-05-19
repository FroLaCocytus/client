import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import "./Sidebar.css"
import { SidebarData, SidebarDataAdmin } from "./SidebarData"
import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import { Button } from "react-bootstrap";

const Sidebar = ( {children} ) => {
  const {user} = useContext(Context)
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')

  }
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars/>
          </div>
        </div>  
        {
          SidebarData.map((item, index)=>{ return(
            <NavLink style={{ textDecoration: 'none' }} to={item.path} key={index} className="link" >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.title}</div>
            </NavLink>
          )
          })
        }
        {
          SidebarDataAdmin.map((item, index)=>{ return(
            <NavLink style={{ textDecoration: 'none' }} to={item.path} key={index} className="link" >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.title}</div>
            </NavLink>
          )
          })
        }
         <Button variant="primary" onClick={logOut}>Выйти</Button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
