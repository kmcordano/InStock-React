import { useState } from 'react';

import Keypad from './Keypad';

import '../css/LoginPage.css';

const LoginPage = () => {
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
         .then(response => console.log(response))
         .catch(error => console.log(error));
   }
   
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

export default LoginPage;