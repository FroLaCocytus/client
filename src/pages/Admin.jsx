import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateUser from "../components/modals/CreateUser";
import CreateCompany from "../components/modals/CreateCompany";
import Sidebar from "../components/Sidebar/Sidebar";

const Admin = () => {
  const [userVisible, setUserVisible] = useState(false)
  const [companyVisible, setCompanyVisible] = useState(false)

  return (
    <Sidebar>
      <Container className="d-flex flex-column">
        <Button className="mt-4 p-2" onClick = {()=>setUserVisible(true)}>Добавить пользователя</Button>
        <Button className="mt-4 p-2" onClick = {()=>setCompanyVisible(true)}>Добавить компанию</Button>

        <CreateUser show={userVisible} onHide={()=> setUserVisible(false)}/>
        <CreateCompany show={companyVisible} onHide={()=> setCompanyVisible(false)}/>        
      </Container>
    </Sidebar>
  );
};

export default Admin;
