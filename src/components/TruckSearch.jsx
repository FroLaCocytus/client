import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "../index";

const TruckSearch = observer(() => {
    const {truck} = useContext(Context)
  return (
    <div style={{height: "auto", width: "100%"}}>
        <Form.Control
            placeholder={'Введите номер автомобиля'} 
            style={{
                marginLeft: "1.56vw",
                marginTop: "3.09vh",
                width: "26vw",
                height: "5.15vh",
                backgroundColor: "#E9F1FB",
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                borderRadius: "10px",
                fontSize: "0.83vmax"
            }}
        />
    </div>
  );
});

export default TruckSearch;

