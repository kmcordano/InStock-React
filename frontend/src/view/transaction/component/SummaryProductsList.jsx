

import SummaryProductsListItem from './SummaryProductsListItem';

import '../style/SummaryProductsList.css';

const SummaryProductsList = () => {
   return (
      <div className="transaction-summary-products-list">
         <SummaryProductsListItem />
         <SummaryProductsListItem />
         <SummaryProductsListItem />
      </div>
   );
};

export default SummaryProductsList;