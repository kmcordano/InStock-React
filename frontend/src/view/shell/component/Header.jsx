import PropTypes from 'prop-types';

import '../style/Header.css';

const Header = ({title}) => {
   return (
      <div className="Header">
         <div className="Header-logo">
            <h1>{title}</h1>
         </div>
         <div className="Header-actions">
            <a>Settings</a>
            |
            <a>About</a>
         </div>
      </div>
   );
};

Header.propTypes ={
   title: PropTypes.string
}

export default Header;
