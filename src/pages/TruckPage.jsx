import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const TruckPage = () => {
  const truck =  {id: 1, model: 'Газель', number: 'ОД890Д', enabled: false, img: 'https://1avtocran.ru/img/a1/gazel.png'}
  const isEnabled = truck.enabled
  return (
    <Container className="mt-3">
      <Col md={4}>
        <Image width={300} height={300} src={truck.img}/>
      </Col>
      <Col>
        <Row>
          <h2>{truck.number}</h2>
          <div>
            {truck.model}
          </div>
          <div>
            {isEnabled ? 'Работает' : 'Не работает'}
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default TruckPage;
