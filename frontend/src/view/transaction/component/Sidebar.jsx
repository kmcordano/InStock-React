import PropTypes from 'prop-types';

import SidebarButton from './SidebarButton';

import '../style/Sidebar.css';

const Sidebar = ({ buttons }) => {
   return (
      <div className="sidebar">
         {buttons.map((button) => { return <SidebarButton key={button.text} text={button.text} path={button.path} />})}
      </div>
   );
};

Sidebar.propTypes = {
   buttons : PropTypes.array
};

export default Sidebar;