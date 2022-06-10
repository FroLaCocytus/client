import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { registration } from "../../http/userAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

import { fetchCompanies } from "../../http/companyAPI";



const CreateUser = observer(({show, onHide}) => {
    const [log, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("USER")

    const a = 0
    const {truck} = useContext(Context)


    const regIn = async () =>{
      const response = await registration(log, password, role, truck.selectedCompany.id).then(() => {
        setLogin('')
        setPassword('')
        setRole("USER")
        onHide()
        alert('Успешно!')
      })
    }

    useEffect(() => {
      fetchCompanies().then(data => truck.setCompanies(data))
    }, [])

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      style={{height: "auto"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить пользователя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
            placeholder={'Введите логин пользователя'}            
            value={log} 
            onChange={e => setLogin(e.target.value)}
            />
            <Form.Control 
            placeholder={'Введите пароль пользователя'}
            value={password} 
            onChange={e => setPassword(e.target.value)}
            type="password"
            />
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{truck.selectedCompany.name || "Выберите тип"}</Dropdown.Toggle>
                <Dropdown.Menu style={{height: "auto"}}>
                    {truck.companies.map(company =>
                        <Dropdown.Item
                            onClick={() => truck.setSelectedCompany(company)}
                            key={company.id}
                        >
                            {company.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Group className="mb-3" value={role} onChange={e => setRole(e.target.value)}>
                <Form.Select>
                <option>USER</option>
                <option>ADMIN</option>
                </Form.Select>
            </Form.Group>
            
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={regIn}>Добавить</Button>

      </Modal.Footer>
    </Modal>
  );
});

export default CreateUser;