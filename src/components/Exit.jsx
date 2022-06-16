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
            marginTop: "10px",
            marginRight: "30px",
            width: "50px",
            height: "50px",
            background: "black",
            borderRadius: "50%"
        }}>
        </div>
        {listVisible &&             
            <ul className="list-group" style = {{
                height: "auto", 
                width: "100px", 
                cursor: "pointer",
                position: "absolute",
                top: "0",
                right: "0",
                marginTop: "60px",
                marginRight: "30px"
            }}>
                <li onClick={logOut} className="list-group-item">Выйти</li>
            </ul>
        }
    </div>
  );
};

export default Exit;
