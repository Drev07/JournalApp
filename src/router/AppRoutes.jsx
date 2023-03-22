import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import JourRoutes from '../journal/routes/JourRoutes';


const  AppRoutes = () =>{
  
    return (
      <>
      <Routes>
        <Route path="/auth/*" element={ <AuthRoutes />} />
        <Route path="/*" element={ <JourRoutes />} />
        <Route />
      </Routes>
      </>
    )
  
}

export default AppRoutes;