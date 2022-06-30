import React from "react";
import "./Shell.css"
import { Image } from "react-bootstrap";

import { SidebarData } from "./SidebarData"
import { NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite";
import imageTruck from '../../img/promt.png';

import Exit from "../Exit";




const Shell = observer(( {selectedItem, children} ) => {
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
        {selectedItem != "none" && selectedItem &&
        <div style={{height: "auto"}}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500", fontSize: "1.6vmax", margin: "15.5vh 2.6vw 1vh" }}>{selectedItem.model}</div>
          <Image style={{ width: "26vw", height: "33vh", margin: "2.06vh auto 1vh" }} src={imageTruck}/>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500", fontSize: "1.6vmax", margin: "1vh 2.6vw 1vh" }}>{selectedItem.number}</div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "500",
            fontSize: "1.2vmax",
            margin: "3.1vh 2.6vw 1vh",
            color: "#6C92D7",
          }}>{selectedItem.enabled ? 'Запущена' : 'Не запущена'}</div> 
        </div>
        }
        <Exit/>
      </div>
      <main>{children}</main>
    </div>
    </>
  );
});

export default Shell;
