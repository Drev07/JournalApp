import React from 'react'
import { Route, Routes , Navigate} from 'react-router-dom';
import JourPage from '../pages/JourPage';

const JourRoutes = () =>  {
  
    return (
      <Routes>
        <Route path="/" element={ <JourPage />} />
        <Route path="/*" element={ <Navigate to="/" />} />
      </Routes>
    )

}

export default JourRoutes;

