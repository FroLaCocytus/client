import React, { useContext } from "react";
import "./Sidebar.css"
import { SidebarData } from "./SidebarData"
import { NavLink } from "react-router-dom"

const Sidebar = ( {children} ) => {

  return (
    <>
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Termo<span>Top</span></h1>
        </div> 
        <div className="list">
          {
            SidebarData.map((item, index)=>{ return(
              <NavLink style={{ textDecoration: 'none' }} to={item.path} key={index} className="link" >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.title}</div>
              </NavLink>
            )
            })
          }
        </div>
      </div>
      <main>{children}</main>
    </div>
    </>
  );
};

export default Sidebar;
