

import DisplayTab from './DisplayTab';

import '../style/DisplayTabBar.css';

const DisplayTabBar = () => {
   return (
      <div className="transaction-display-tab-bar">
         <DisplayTab isActive={true} />
         <DisplayTab />
         <DisplayTab />
      </div>
   );
};

export default DisplayTabBar;