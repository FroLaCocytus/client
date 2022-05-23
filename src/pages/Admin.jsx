import React, { useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import CreateUser from "../components/modals/CreateUser";
import CreateCompany from "../components/modals/CreateCompany";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from '../index'


const Admin = () => {
  const [userVisible, setUserVisible] = useState(false)
  const [companyVisible, setCompanyVisible] = useState(false)

  const {user} = useContext(Context)
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    user.setIsAdmin(false)
    localStorage.removeItem('token')
  }

  return (
    <Container className="d-flex flex-column">
      <Button className="mt-4 p-2" onClick = {()=>setUserVisible(true)}>Добавить пользователя</Button>
      <Button className="mt-4 p-2" onClick = {()=>setCompanyVisible(true)}>Добавить компанию</Button>

      <CreateUser show={userVisible} onHide={()=> setUserVisible(false)}/>
      <CreateCompany show={companyVisible} onHide={()=> setCompanyVisible(false)}/> 
      <Button variant="primary" onClick={logOut}>Выйти</Button>
    </Container>
  );
};

export default Admin;
