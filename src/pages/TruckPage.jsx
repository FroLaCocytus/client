import React, {useState, useEffect, useContext} from "react";
import {useParams} from 'react-router-dom'
import {Button, Image} from "react-bootstrap";
import imageTruck from '../img/promt.png';
import {fetchOneTrucks} from "../http/truckAPI";
import { useNavigate } from 'react-router-dom'
import { AUTOPARK_ROUTE, HOME_ROUTE } from "../utils/consts";
import { Context } from "../index";


const TruckPage = () => {
  const navigate = useNavigate()

  const [truck, setTruck] = useState({})
  const {id} = useParams()
  const {user} = useContext(Context)

  useEffect(() => {
    fetchOneTrucks(id, user.company).then(data => {
      setTruck(data)
      if(!data) navigate(HOME_ROUTE)
    })
  }, [])

  return (
    <div style={{ display: "flex", fontFamily: "'Montserrat', sans-serif"}}>
      <div style={{height: "100%", width: "500px", backgroundColor: "#E9F1FB"}}>
        <div style={{height: "auto"}} >
          <Button style={{height: "auto"}} onClick={() => navigate(AUTOPARK_ROUTE)}>Назад</Button>

          <div style={{height: "auto", marginTop: "50px", marginLeft: "30px", marginTop: "30px", fontSize: "50px"}}>{truck.model}</div>
          <Image width={500} height={500} style={{height: "auto",margin: "30px auto 10px" }} src={imageTruck}/>
          <div style={{height: "auto", marginLeft: "30px", marginTop: "30px",}}>
            <div>
              {truck.number}
            </div>
            <div>
              {truck.enabled ? 'Работает' : 'Не работает'}
            </div>
          </div>
        </div> 
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div style={{height: "auto", display:"flex", flexDirection: "column", alignItems: "center"}} >
          <Image src={"https://c.tenor.com/RLJuEoj8ppwAAAAC/want-me.gif"}/>
          <div  style={{fontSize: "120px", color: "rgba(0, 0, 0,0.2)"}} >Контроллер <br/>не привязан</div>
          <Button style={{color: ""}} onClick={() => console.log("ghbdzpfy")}>Привязать контроллер</Button>
        </div>

      </div>
    </div>
  );
};

export default TruckPage;
