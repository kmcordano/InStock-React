import '../style/ActionsView.css';

import ActionButton from './ActionButton';

const ActionsView = () => {
   return(
      <div className="ActionsView">
         <div className="actions-button-container">
            <ActionButton text="Button1"/>
         </div>
      </div>
   );
};

export default ActionsView;