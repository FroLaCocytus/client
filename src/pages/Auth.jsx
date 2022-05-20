import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate  } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { HOME_ROUTE } from "../utils/consts";


const Auth = observer(() => {
  const { user } = useContext(Context)

  const navigate = useNavigate ()
  const [log, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () =>{
    try {
      console.log("я зашёл")
      let data
      data = await login(log, password)
      user.setUser(user)
      user.setIsAuth(true)
      console.log("я Вышел")

      navigate(HOME_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center p-0 m-0" style={{height:window.innerHeight - 54}}>
      <Card style={{width:600}} className="p-5">
        <h2 className="m-auto">Вход на платформу</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
            className="mt-3" 
            placeholder="Введите ваш логин" 
            value={log} 
            onChange={e => setLogin(e.target.value)}
          />
          <Form.Control 
            className="mt-3" 
            placeholder="Введите ваш пароль" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 "  >
            <Button variant="primary" onClick={signIn}>Войти</Button>
            <div>
            Забыли логин или пароль?
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
