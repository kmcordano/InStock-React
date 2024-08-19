

import Sidebar from './Sidebar';
import DisplayProducts from './DisplayProducts';
import SummaryProducts from './SummaryProducts';

import '../style/TransactionView.css';

const TransactionView = () => {
   const sidebarActionButtons = [
      {
         text : 'Action 1',
         path : '/'
      },
      {
         text : 'Action 2',
         path : '/'
      },
      {
         text : 'Action 3',
         path : '/'
      }
   ];

   const displaySidebarButtons = [
      {
         text : 'Category 1',
         path : '/'
      },
      {
         text : 'Category 2',
         path : '/'
      },
      {
         text : 'Category 3',
         path : '/'
      }
   ]

   return (
      <div className="transaction-view">
         <div className="transaction-div transaction-sidebar">
            <Sidebar buttons={sidebarActionButtons} />
         </div>
         <div className="transaction-div transaction-display">
            <Sidebar buttons={displaySidebarButtons} />
            <DisplayProducts />
         </div>
         <div className="transaction-div transaction-summary">
            <div className="transaction-summary-header">
               <h2>Transaction Summary</h2>
               <div className="transaction-submit-button button">Submit</div>
            </div>
            <SummaryProducts />
         </div>
      </div>
   );
};

export default TransactionView;