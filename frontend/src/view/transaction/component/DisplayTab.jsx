import PropTypes from 'prop-types';

import '../style/DisplayTab.css';

const DisplayTab = ({ isActive }) => {
   return (
      <div className={`transaction-display-tab ${isActive ? 'active' : ''}`}>
         Location
      </div>
   );
};

DisplayTab.propTypes = {
   isActive : PropTypes.bool
};

export default DisplayTab;