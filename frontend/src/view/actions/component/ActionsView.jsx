import '../style/ActionsView.css';

import ActionButton from './ActionButton';

const ActionsView = () => {
   return(
      <div className="ActionsView">
         <div className="actions-button-container">
            <ActionButton text="New Transaction" navigateTo="/transaction"/>
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