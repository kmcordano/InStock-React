import { useState } from 'react';
import PropTypes from 'prop-types';

import Keypad from './Keypad';

import '../style/LoginPage.css';

const LoginPage = ({ setUser }) => {
   const [employeeNumber, setEmployeeNumber] = useState('');
   
   const submitInput = async () => { 
      const options = {
         method  : 'POST',
         headers : new Headers({'content-type': 'application/json'}),
         body    : JSON.stringify({
            'employeeNumber': `${employeeNumber}`
         })
      };
      fetch('http://127.0.0.1:8080/login', options)
         .then(response => response.json())
         .then(response => validateResponse(response))
         .catch(error => console.log(error));
   }

   const validateResponse = (response) => {
      console.log(response);
      if(response.employeeNumber) {
         setUser(response);
      }
   };
   
   return (
      <div className="LoginPage">
         <div className="LoginPage-welcome">
            <p>Welcome to InStock!</p>
         </div>
         <Keypad 
            className="LoginPage-keypad" 
            submitInput={submitInput} 
            employeeNumber={employeeNumber} 
            setEmployeeNumber={setEmployeeNumber} 
         />
         <div className="LoginPage-instructions">
            <p>
               Swipe Employee Card
               <br />
               or
               <br />
               Enter Employee Number
            </p>
         </div>
      </div>
   );
};

LoginPage.propTypes = {
   setUser : PropTypes.func
};

export default LoginPage;