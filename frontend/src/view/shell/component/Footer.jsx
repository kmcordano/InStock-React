import PropTypes from 'prop-types';

import '../style/Footer.css';

const Footer = ({ user }) => {
   return (
      <div className="Footer">
         <div className="Footer-user">
            { user ? <h2>{user.firstName} {user.lastName} - {user.employeeNumber}</h2> : <></> }
         </div>
         <div className="Footer-timestamp">
            <h2>Time - Date</h2>
         </div>
      </div>
   )
};

Footer.propTypes = {
   user : PropTypes.object
};

export default Footer;