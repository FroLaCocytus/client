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
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500", fontSize: "30px", margin: "150px 50px 10px" }}>{selectedItem.model}</div>
          <Image width={500} height={500} style={{ margin: "20px auto 10px" }} src={imageTruck}/>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500", fontSize: "30px", margin: "10px 50px 10px" }}>{selectedItem.number}</div>
          {
          selectedItem.enabled 
          ? 
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "500",
            fontSize: "22px",
            margin: "30px 50px 10px",
            color: "#6C92D7",
          }}>Запущена</div> 
          :
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "500",
            fontSize: "22px",
            margin: "30px 50px 10px",
            color: "#6C92D7",
          }}>Не запущена</div> 
          }
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
