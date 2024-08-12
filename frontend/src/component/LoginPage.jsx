import Keypad from './Keypad';

import '../css/LoginPage.css';

const LoginPage = () => {
   return (
      <div className="LoginPage">
         <div className="LoginPage-welcome">
            <p>Welcome to InStock!</p>
         </div>
         <Keypad className="LoginPage-keypad"/>
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