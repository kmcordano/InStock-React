import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import '../style/Footer.css';

// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();

const Footer = ({ user }) => {
   const [currentDate, setCurrentDate] = useState(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentDate(new Date());
      }, 1000);
      
      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="Footer">
         <div className="Footer-user">
            { user ? <h2>{user.firstName} {user.lastName} - {user.employeeNumber}</h2> : <></> }
         </div>
         <div className="Footer-timestamp">
            <h2>{currentDate.toLocaleString()}</h2>
         </div>
      </div>
   )
};

Footer.propTypes = {
   user : PropTypes.object
};

export default Footer;