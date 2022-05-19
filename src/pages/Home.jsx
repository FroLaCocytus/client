import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from "../index";
import { fetchCompanies } from "../http/companyAPI";
import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";


const Home = observer(() => {
  const {truck} = useContext(Context)

  const [companyVisible, setCompanyVisible] = useState(false)

  useEffect(() => {
    fetchCompanies().then(data => truck.setCompanies(data))
  }, [])

  return (
    <Sidebar>

    </Sidebar>
  );
});

export default Home;
