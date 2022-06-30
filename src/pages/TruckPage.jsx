import React, {useState, useEffect, useContext} from "react";
import {useParams} from 'react-router-dom'
import {Button, Image} from "react-bootstrap";
import imageTruck from '../img/promt.png';
import {fetchOneTrucks} from "../http/truckAPI";
import {fetchOneDevice, fetchHumidity} from "../http/deviceAPI";


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
  const [refresh, setRefresh] = useState(false)
  const [en, setEn] = useState(false)


  const [truckNow, setTruckNow] = useState({})
  const {id} = useParams()
  const {user} = useContext(Context)




  useEffect(() => {
    const current = new Date()
     
    fetchOneTrucks(id, user.company).then(data => {
        setTruckNow(data)
        if(!data) navigate(HOME_ROUTE)
      })
      fetchOneDevice(id).then(data => {
        if(data) {
          setDeviceConnected(true)
          setEn(true)
        }
      })
      fetchHumidity(1,current).then(data => {
        if(data) {
        }
      })
    }, [])

  return (
    <div style={{ display: "flex", fontFamily: "'Montserrat', sans-serif"}}>
      <div style={{height: "100%", width: "26.04vw", backgroundColor: "#E9F1FB"}}>
        <div style={{height: "auto"}} >
          <Button style={{backgroundColor: "#6C92D7", border: "none", fontSize: "0.8vmax"}} onClick={() => navigate(AUTOPARK_ROUTE)}>Назад</Button>

          <div style={{height: "auto", marginLeft: "1.56vw", marginTop: "8vh", marginBottom: "3vh", fontSize: "2vmax"}}>{truckNow.model}</div>
          <Image style={{height: "35vh", width:"26vw", margin: "3.09vh auto 1.03vhs" }} src={imageTruck}/>
          <div style={{height: "auto", marginLeft: "1.56vw", marginTop: "3.09vh",fontSize: "1.6vmax",}}>
            <div>
              {truckNow.number}
            </div>
            <div style={{color: "#6C92D7", marginTop: "20px",fontSize: "1.5vmax",}}>
              {en ? 'Работает' : 'Не работает'}
            </div>
          </div>
        </div> 
      </div>
      { !deviceConnected ? 
      <div style={{ width: "100%", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div style={{height: "auto", display:"flex", flexDirection: "column", alignItems: "center"}} >
          <div  style={{fontSize: "6vmax", color: "rgba(0, 0, 0,0.2)"}} >Контроллер <br/>не привязан</div>
          <Button style={{backgroundColor: "#6C92D7", border: "none", fontSize: "0.9vmax"}} onClick={()=>setTruckVisible(true)}>Привязать контроллер</Button>
        </div>
      </div> :
      <div style ={{height: "auto", width: "100%", marginTop: "2.06vh", marginLeft: "1.04vw", fontSize: "1.2vmax"}}>
        <div style ={{height: "auto",}}>Температура</div>
        <div style={{ height: "39.21vh", width: "58.3vw", }} >
        <TemperatureGraph refresh={refresh}/>
        </div>
        <div style ={{height: "auto",}}>Влажность</div>
        <div style={{ height: "39.21vh", width: "58.3vw", }} >
        <HumidityGraph refresh={refresh}/>
        </div>
        <Button style={{position: "absolute", top: "0", right: "0", marginTop: "2.06vh", marginRight: "1.04vw", fontSize: "0.8vmax"}}
        onClick={() => {
          setRefresh(!refresh)
        }}
        >Обновить</Button>
      </div>
      
      
      }
      <UpdateKey setTruckNow={setTruckNow} show={truckVisible} onHide={()=> setTruckVisible(false)}/>
    </div>
  );
});

export default TruckPage;
