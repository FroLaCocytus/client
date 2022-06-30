import React, { useContext, useEffect, useState } from "react";
import Shell from "../components/Shell/Shell";
import { Context } from "../index";
import { fetchCompanies,  fetchOneCompany} from "../http/companyAPI";
import { observer } from "mobx-react-lite";


const Home = observer(() => {
  const {truck} = useContext(Context)
  const {user} = useContext(Context)


  const [companyVisible, setCompanyVisible] = useState(false)
  const [name, setName] = useState('')


  useEffect(() => {

    fetchOneCompany(user.company).then(
      (data) => {
        setName(data.name)
      })
    }, [])

  return (
      <Shell>
          <div style={{
            height: "auto",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
            fontSize: "2.25vmax",
            marginLeft: "3.1vw",
            marginTop: "4.1vh"
          }}>Добро пожаловать <span style={{color: "#6C92D7"}}>{user.login}</span></div>

          <div style={{
            height: "auto",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
            fontSize: "1.5vmax",
            marginLeft: "3.1vw",
            marginTop: "3.1vh"
          }}>Вы представитель компании <span style={{color: "#6C92D7"}}>{name}</span></div>
      </Shell>
  );
});

export default Home;
