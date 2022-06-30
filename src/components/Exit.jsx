import React, { useState, useContext } from "react";
import { Context } from '../index'

const Exit = () => {
    const [listVisible, setListVisible] = useState(false)
    const {user} = useContext(Context)
    const {truck} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setRole({})
        user.setCompany({})
        user.setLogin({})
        truck.setPage(1)
        localStorage.removeItem('token')
      }
    return (  
    <div style={{height: "auto"}}>
        <div onClick={() => setListVisible(!listVisible)} style = {{
            position: "absolute",
            top: "0",
            right: "0",
            marginTop: "2vh",
            marginRight: "1.56vw",
            width: "2.6vmax",
            height: "2.6vmax",
            background: "black",
            borderRadius: "50%"
        }}>
        </div>
        {listVisible &&             
            <ul className="list-group" style = {{
                height: "auto", 
                width: "5.2vw", 
                cursor: "pointer",
                position: "absolute",
                top: "0",
                right: "0",
                marginTop: "7.5vh",
                marginRight: "1.5vw"
            }}>
                <li style={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontWeight: "500", 
                    fontSize:"0.8vmax", 
                    textAlign: "center"
                    }} onClick={logOut} className="list-group-item">Выйти</li>
            </ul>
        }
    </div>
  );
};

export default Exit;
