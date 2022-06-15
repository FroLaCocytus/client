import React, { useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import { Button, Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { Context } from "../../index";
import { updateKey } from "../../http/truckAPI";
import { fetchOneTrucks } from "../../http/truckAPI";
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from "..//../utils/consts";



const UpdateKey = ({setTruckNow, show, onHide}) => {
    const [connect_key, setConnect_key] = useState("")
    const {id} = useParams()
    const {user} = useContext(Context)
    const navigate = useNavigate()


    const updateTruck = async () =>{
        const response = await updateKey(id, connect_key).then(() => {
        fetchOneTrucks(id, user.company).then(data => {
            setTruckNow(data)
            if(!data) navigate(HOME_ROUTE)
            })
        setConnect_key('')
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
          Связать с контроллером
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
              placeholder={'Введите секретный ключ'}            
              value={connect_key} 
              onChange={e => setConnect_key(e.target.value)}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={updateTruck}>Добавить</Button>

      </Modal.Footer>
    </Modal>
  );
};

export default UpdateKey;
