/*Импорт*/
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from '../../index'
import "./RightColumn.css"

/*Компонент колонка справа*/
const RightColumn = ({children}) => {
  const {user} = useContext(Context)
  
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    user.setRole({})
    localStorage.removeItem('token')
  }

    return (  
      <>
        <div className="box"></div>
        <Button variant="primary" onClick={logOut}>Выйти</Button>
        <main>{children}</main>
      </>
    );
};

export default RightColumn;
