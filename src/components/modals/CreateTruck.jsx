import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { registration } from "../../http/userAPI";

const CreateTruck = ({show, onHide}) => {
    const [model, setModel] = useState("")
    const [number, setNumber] = useState("")
    const [regionNumber, setRegionNumber] = useState("")
    const [file, setFile] = useState("")


    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addTruck = async () =>{
      
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
          Добавить транспортное средство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
              placeholder={'Введите модель транспортного средства'}            
              value={model} 
              onChange={e => setModel(e.target.value)}
            />
            <Form.Control 
              placeholder={'Введите номер транспортного средства'}
              value={number} 
              onChange={e => setNumber(e.target.value)}
            />
            <Form.Control 
              placeholder={'Введите номер региона'}
              value={regionNumber} 
              onChange={e => setRegionNumber(e.target.value)}
            />
            <Form.Control
                className="mt-3"
                type="file"
                onChange={selectFile}
            />            
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addTruck}>Добавить</Button>

      </Modal.Footer>
    </Modal>
  );
};

export default CreateTruck;