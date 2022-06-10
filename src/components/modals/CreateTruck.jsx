import React, { useState, useContext } from "react";
import { Button, Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { createTruck } from "../../http/truckAPI";
import { Context } from "../../index";
import { fetchTrucks } from "../../http/truckAPI";


const CreateTruck = ({show, onHide, setSelectedItem}) => {
  const [model, setModel] = useState("")
  const [number, setNumber] = useState("")
  const [regionNumber, setRegionNumber] = useState("")
  const {user} = useContext(Context)
  const {truck} = useContext(Context)




  const addTruck = async () =>{
    const response = await createTruck(model, number, regionNumber, user.company).then(() => {
      fetchTrucks(truck.page, 6, user.company).then(data => {
        truck.setTrucks(data.rows)
        truck.setTotalCount(data.count)
        if (truck.trucks.length > 0) setSelectedItem(truck.trucks[0])
      })
      setModel('')
      setNumber('')
      setRegionNumber('')
      onHide()
      alert('Успешно!')
    })
  }



  return (
    <Modal
      style={{height: "auto"}}
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
              style={{textTransform: "uppercase"}}
            />
            <Form.Control 
              placeholder={'Введите номер региона'}
              value={regionNumber} 
              onChange={e => setRegionNumber(e.target.value)}
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