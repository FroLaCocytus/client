import React, { useContext } from "react";
import "./Shell.css"
import { SidebarData } from "./SidebarData"
import { NavLink } from "react-router-dom"
import { Button } from "react-bootstrap";
import { Context } from '../../index'


const Shell = ( {children} ) => {
  const {user} = useContext(Context)
  
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    user.setRole({})
    localStorage.removeItem('token')
  }

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
      <div className="box">
        <Button variant="primary" onClick={logOut}>Выйти</Button>
      </div>
      <main>{children}</main>
    </div>
    </>
  );
};

export default Shell;
