import React, { useState, useContext } from "react";
import { Button, Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { createCompany } from "../../http/companyAPI";
import { fetchCompanies } from "../../http/companyAPI";
import { Context } from "../../index";


const CreateCompany = ({show, onHide}) => {
    const [name, setName] = useState("")
    const {truck} = useContext(Context)


    const addCompany = async () => {
        createCompany({name: name}).then(data => {
          fetchCompanies().then(data => truck.setCompanies(data))
          setName('')
          onHide()
          alert('Успешно!')
        })
    }
  
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
          Добавить компанию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
              placeholder={'Введите название компании'}            
              value={name} 
              onChange={e => setName(e.target.value)}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addCompany}>Добавить</Button>

      </Modal.Footer>
    </Modal>
  );
};

export default CreateCompany;