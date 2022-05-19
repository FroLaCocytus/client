import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { createCompany } from "../../http/companyAPI";

const CreateCompany = ({show, onHide}) => {
    const [name, setName] = useState("")


    const addCompany = async () => {
        createCompany({name: name}).then(data => {
          setName('')
          onHide()
        })
    }
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
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