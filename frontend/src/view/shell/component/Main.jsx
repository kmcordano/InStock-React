import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginPage from '../../login/component/LoginPage';

import '../style/Main.css';

const Main = ({ user, setUser }) => {
   return (
      <BrowserRouter>
         <div className="Main">
            <Routes>
               <Route 
                  path="/" 
                  element={user ? <Navigate to="/actions" /> : <Navigate to="/login" />} 
               />
               <Route 
                  path="/login" 
                  element={user ? <Navigate to="/actions"/> : <LoginPage setUser={setUser}/>} 
               />
               <Route
                  path="/actions"
                  element={user ? <h1>actions</h1> : <Navigate to="/login" />}
               />
            </Routes>
         </div>
      </BrowserRouter>
   );
};

Main.propTypes = {
   setUser : PropTypes.func,
   user    : PropTypes.object
}

export default Main;