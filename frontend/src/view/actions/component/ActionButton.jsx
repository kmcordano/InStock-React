import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import '../style/ActionButton.css';

const ActionButton = ({ text, navigateTo }) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(navigateTo);
   }

   return(
      <div className="action-button" onClick={handleClick}>{text}</div>
   )
};

ActionButton.propTypes = {
   text : PropTypes.string,
   navigateTo : PropTypes.string
};

export default ActionButton;