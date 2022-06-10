import React, { useContext, useEffect, useState } from "react";
import Shell from "../components/Shell/Shell";
import { Context } from "../index";
import { fetchCompanies } from "../http/companyAPI";
import { observer } from "mobx-react-lite";


const Home = observer(() => {
  const {truck} = useContext(Context)



  const [companyVisible, setCompanyVisible] = useState(false)

  useEffect(() => {
    fetchCompanies().then(data => truck.setCompanies(data))
  }, [])

  return (
      <Shell>
          <div style={{
            height: "auto",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
            fontSize: "40px",
            marginLeft: "60px",
            marginTop: "30px"
          }}> Главная</div>
      </Shell>
  );
});

export default Home;
