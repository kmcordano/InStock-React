import { useState } from 'react';

import Sidebar from './Sidebar';
import DisplayProducts from './DisplayProducts';
import SummaryProductsList from './SummaryProductsList';

import '../style/TransactionView.css';

const TransactionView = () => {
   const [summaryProductList, setSummaryProductList] = useState([]);

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
   ];

   const addProductToSummaryList = (product) => {
      if(summaryProductList.some(p => p.id === product.id )) {
         return;
      }

      setSummaryProductList([...summaryProductList, product]);
   };

   return (
      <div className="transaction-view">
         <div className="transaction-div transaction-sidebar">
            <Sidebar buttons={sidebarActionButtons} />
         </div>
         <div className="transaction-div transaction-display">
            <Sidebar buttons={displaySidebarButtons} />
            <DisplayProducts productOnClick={addProductToSummaryList} />
         </div>
         <div className="transaction-div transaction-summary">
            <div className="transaction-summary-header">
               <h2>Transaction Summary</h2>
               <div className="transaction-submit-button button">Submit</div>
            </div>
            <SummaryProductsList listItems={summaryProductList} />
         </div>
      </div>
   );
};

export default TransactionView;