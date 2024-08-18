import '../style/ActionsView.css';

import ActionButton from './ActionButton';

const ActionsView = () => {
   return(
      <div className="ActionsView">
         <div className="actions-button-container">
            <ActionButton text="" navigateTo="/"/>
            <ActionButton text="" />
            <ActionButton text="" />
            <ActionButton text="" />
            <ActionButton text="" />
            <ActionButton text="" />
         </div>
      </div>
   );
};

export default ActionsView;