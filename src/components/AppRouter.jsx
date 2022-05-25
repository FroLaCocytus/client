import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes, authAdminRoutes} from "../routes";
import { observer } from "mobx-react-lite";


const AppRouter = observer(() => { 
  const { user } = useContext(Context);
  return (
      <Routes>
        {user.isAuth && user.role == "ADMIN" && authAdminRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={Element} />
          ))}        
        {user.isAuth && user.role == "USER" && authRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={Element} />
          ))}
        {!user.isAuth && publicRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} />
        ))}
        {user.isAuth && user.role == "ADMIN" && <Route path="*" element={<Navigate to="/adduser" replace />} />}
        {user.isAuth && user.role == "USER" && <Route path="*" element={<Navigate to="/home" replace />} />}
        {!user.isAuth && <Route path="*" element={<Navigate to="/login" replace />} />}
      </Routes>
    
  );
});

export default AppRouter;
