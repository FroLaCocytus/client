import React, {useState, useEffect, useContext} from "react";
import {useParams} from 'react-router-dom'
import {Button, Image} from "react-bootstrap";
import imageTruck from '../img/promt.png';
import {fetchOneTrucks} from "../http/truckAPI";
import {fetchOneDevice, fetchTemperature,fetchHumidity} from "../http/deviceAPI";


import { useNavigate } from 'react-router-dom'
import { AUTOPARK_ROUTE, HOME_ROUTE } from "../utils/consts";
import { Context } from "../index";
import UpdateKey from "../components/modals/UpdateKey";
import TemperatureGraph from "../components/graphs/TemperatureGraph";
import HumidityGraph from "../components/graphs/HumidityGraph";
import { observer } from "mobx-react-lite";


const TruckPage = observer(() => {
  const navigate = useNavigate()
  const [deviceConnected, setDeviceConnected] = useState(false)
  const [truckVisible, setTruckVisible] = useState(false)

  const [truckNow, setTruckNow] = useState({})
  const {id} = useParams()
  const {user} = useContext(Context)
  const {device} = useContext(Context)




  useEffect(() => {
    const current = new Date()
     
    fetchOneTrucks(id, user.company).then(data => {
      setTruckNow(data)
      if(!data) navigate(HOME_ROUTE)
    })
    fetchOneDevice(id).then(data => {
      if(data) {
        setDeviceConnected(true)
      }
    })
    fetchHumidity(1,current).then(data => {
      if(data) {
      }
    })

  }, [])

  return (
    <div style={{ display: "flex", fontFamily: "'Montserrat', sans-serif"}}>
      <div style={{height: "100%", width: "500px", backgroundColor: "#E9F1FB"}}>
        <div style={{height: "auto"}} >
          <Button style={{backgroundColor: "#6C92D7", border: "none", height: "auto"}} onClick={() => navigate(AUTOPARK_ROUTE)}>Назад</Button>

          <div style={{height: "auto", marginLeft: "30px", marginTop: "30px", fontSize: "50px"}}>{truckNow.model}</div>
          <Image width={500} height={500} style={{height: "auto",margin: "30px auto 10px" }} src={imageTruck}/>
          <div style={{height: "auto", marginLeft: "30px", marginTop: "30px",fontSize: "30px",}}>
            <div>
              {truckNow.number}
            </div>
            <div style={{color: "#6C92D7"}}>
              {truckNow.enabled ? 'Работает' : 'Не работает'}
            </div>
          </div>
        </div> 
      </div>
      { !deviceConnected ? 
      <div style={{ width: "100%", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div style={{height: "auto", display:"flex", flexDirection: "column", alignItems: "center"}} >
          <div  style={{fontSize: "120px", color: "rgba(0, 0, 0,0.2)"}} >Контроллер <br/>не привязан</div>
          <Button style={{backgroundColor: "#6C92D7", border: "none",}} onClick={()=>setTruckVisible(true)}>Привязать контроллер</Button>
        </div>
      </div> :
      <div style ={{height: "auto", width: "100%", marginTop: "20px", marginLeft: "20px", fontSize: "20px"}}>
        <div style ={{height: "auto",}}>Температура</div>
        <div style={{ height: "40%", width: "80%", }} >
        <TemperatureGraph />
        </div>
        <div style ={{height: "auto",}}>Влажность</div>
        <div style={{ height: "40%", width: "80%", }} >
        <HumidityGraph />
        </div>
      </div>
      
      }
      <UpdateKey setTruckNow={setTruckNow} show={truckVisible} onHide={()=> setTruckVisible(false)}/>
    </div>
  );
});

export default TruckPage;
