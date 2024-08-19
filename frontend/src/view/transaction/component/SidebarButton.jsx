import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import '../style/SidebarButton.css';

const SidebarButton = ({ text, path }) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(path);
   }

   return (
      <div className="sidebar-button" onClick={handleClick}>{text}</div>
   );
};

SidebarButton.propTypes = {
   text : PropTypes.string,
   path : PropTypes.string
};

export default SidebarButton;