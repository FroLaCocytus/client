import React, { useState, useContext } from "react";
import { Container, Button, Card } from "react-bootstrap";
import CreateUser from "../components/modals/CreateUser";
import CreateCompany from "../components/modals/CreateCompany";
import { Context } from '../index'
import "./pages.css"


const Admin = () => {
  const [userVisible, setUserVisible] = useState(false)
  const [companyVisible, setCompanyVisible] = useState(false)

  const {user} = useContext(Context)
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    user.setRole({})
    user.setCompany({})
    user.setLogin({})
    localStorage.removeItem('token')
  }

  return (
    <Container className="h-100 d-flex justify-content-center align-items-center p-0 m-0" style={{height:window.innerHeight - 54}}>
      <Card style={{height:400, width:700}}  className="admin">
      <h2 className="title">Админ</h2>
        <Button className="b-user" onClick = {()=>setUserVisible(true)}>Добавить пользователя</Button>
        <Button className="b-company" onClick = {()=>setCompanyVisible(true)}>Добавить компанию</Button>

        <CreateUser show={userVisible} onHide={()=> setUserVisible(false)}/>
        <CreateCompany show={companyVisible} onHide={()=> setCompanyVisible(false)}/> 
        <Button className="b-logout" variant="dark" onClick={logOut}>Выйти</Button>
      </Card>
    </Container>
  );
};

export default Admin;
