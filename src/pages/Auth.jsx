import React, { useContext, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate  } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context)

  const navigate = useNavigate ()
  const [log, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const signIn = async () =>{
    try {
      let data
      data = await login(log, password).then((data) => {
        user.setUser(user)
        user.setIsAuth(true)
        user.setRole(data.role)
        user.setCompany(data.companyId)
        user.setLogin(data.login)
      })
      navigate('/')
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container className="h-100 d-flex justify-content-center align-items-center p-0 m-0" style={{height:window.innerHeight - 54}}>
      <Card style={{height:300, width:500}}  className="p-5">
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "25px"}} className="m-auto">Вход на платформу</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500"}}
            className="mt-3" 
            placeholder="Введите ваш логин" 
            value={log} 
            onChange={e => setLogin(e.target.value)}
          />
          <Form.Control 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500"}}
            className="mt-3" 
            placeholder="Введите ваш пароль" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 "  >
            <Button style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500"}} variant="primary" onClick={signIn}>Войти</Button>
            <div style={{ marginTop: "10px", fontFamily: "'Montserrat', sans-serif", fontWeight: "500", fontSize: "15px"}}>
            Забыли логин или пароль?
            </div>
          </Row>
        </Form>
      </Card>
      
    </Container>
  );
});

export default Auth;
