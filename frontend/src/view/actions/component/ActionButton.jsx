import PropTypes from 'prop-types';

const ActionButton = ({ text }) => {
   return(
      <div className="action-button">{text}</div>
   )
};

ActionButton.propTypes = {
   text : PropTypes.string
};

export default ActionButton;