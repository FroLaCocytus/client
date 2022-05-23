import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from "../index";
import { fetchCompanies } from "../http/companyAPI";
import { observer } from "mobx-react-lite";
import "./pages.css"
import RightColumn from "../components/RightColumn/RightColumn";


const Home = observer(() => {
  const {truck} = useContext(Context)



  const [companyVisible, setCompanyVisible] = useState(false)

  useEffect(() => {
    fetchCompanies().then(data => truck.setCompanies(data))
  }, [])

  return (
    <div style={{height:"auto"}}>
      <Sidebar>
        <RightColumn>
          <div className="black"></div>
        </RightColumn>
      </Sidebar>
    </div>
  );
});

export default Home;
