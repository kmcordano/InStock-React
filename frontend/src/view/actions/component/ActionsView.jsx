import '../style/ActionsView.css';

import ActionButton from './ActionButton';

const ActionsPage = () => {
   return(
      <div className="ActionPage">
         <div className="actions-button-container">
            <ActionButton text="Button1"/>
         </div>
      </div>
   );
};

export default ActionsPage;