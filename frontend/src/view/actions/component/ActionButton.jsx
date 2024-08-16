import PropTypes from 'prop-types';

import '../style/ActionButton.css';

const ActionButton = ({ text }) => {
   return(
      <div className="action-button">{text}</div>
   )
};

ActionButton.propTypes = {
   text : PropTypes.string
};

export default ActionButton;