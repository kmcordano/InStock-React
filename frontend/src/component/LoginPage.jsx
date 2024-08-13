import { useState } from 'react';

import Keypad from './Keypad';

import '../css/LoginPage.css';

const LoginPage = () => {
   const submitInput = () => { console.log(`submitting input ${employeeNumber}`); }
   const [employeeNumber, setEmployeeNumber] = useState('');
   
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