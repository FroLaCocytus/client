import React, { useContext, useEffect, useState } from "react";
import Shell from "../components/Shell/Shell";
import { Context } from "../index";
import { fetchCompanies } from "../http/companyAPI";
import { observer } from "mobx-react-lite";
import "./pages.css"


const Home = observer(() => {
  const {truck} = useContext(Context)



  const [companyVisible, setCompanyVisible] = useState(false)

  useEffect(() => {
    fetchCompanies().then(data => truck.setCompanies(data))
  }, [])

  return (
      <Shell>
          <div className="black"></div>
          <div className="black"></div>
      </Shell>
  );
});

export default Home;
